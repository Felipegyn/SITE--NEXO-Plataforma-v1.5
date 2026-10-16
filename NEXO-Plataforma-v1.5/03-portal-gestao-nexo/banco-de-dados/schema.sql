-- ============================================================
-- NEXO · Portal de Gestão · Esquema inicial (PostgreSQL / Supabase)
-- Rascunho para revisão: ainda NÃO foi executado em nenhum banco.
-- Revise nomes, tipos e políticas antes de aplicar.
-- ============================================================

create extension if not exists pgcrypto;

-- ---------- Perfis e papéis ----------
create type papel as enum ('admin', 'equipe', 'cliente');

create table perfis (
  id          uuid primary key references auth.users(id) on delete cascade,
  nome        text not null,
  papel       papel not null default 'equipe',
  cliente_id  uuid,                         -- preenchido apenas para papel = 'cliente' (Fase 3)
  criado_em   timestamptz not null default now()
);

-- ---------- Clientes ----------
create table clientes (
  id          uuid primary key default gen_random_uuid(),
  nome        text not null,
  tipo        text not null check (tipo in ('loja','galeria','lazer','empresa','negocio_local','outro')),
  documento   text,                          -- CNPJ/CPF (dado pessoal: acesso restrito)
  email       text,
  telefone    text,
  endereco    text,
  origem      text,                          -- como chegou: placa Google, indicação, site...
  status      text not null default 'prospeccao' check (status in ('prospeccao','ativo','pausado','encerrado')),
  observacoes text,
  criado_em   timestamptz not null default now()
);
alter table perfis add constraint perfis_cliente_fk foreign key (cliente_id) references clientes(id);

create table contatos (
  id          uuid primary key default gen_random_uuid(),
  cliente_id  uuid not null references clientes(id) on delete cascade,
  nome        text not null,
  cargo       text,
  email       text,
  telefone    text,
  principal   boolean not null default false
);

-- ---------- CRM ----------
create table oportunidades (
  id          uuid primary key default gen_random_uuid(),
  cliente_id  uuid not null references clientes(id) on delete cascade,
  servico     text not null,
  valor       numeric(12,2) not null default 0,
  etapa       text not null default 'lead' check (etapa in ('lead','proposta','contrato','producao','entregue','perdida')),
  origem      text,
  proxima_acao text,
  proxima_acao_em date,
  criado_em   timestamptz not null default now()
);

-- ---------- Propostas e contratos ----------
create table propostas (
  id             uuid primary key default gen_random_uuid(),
  numero         text unique not null,         -- ex.: P-001
  oportunidade_id uuid references oportunidades(id) on delete set null,
  cliente_id     uuid not null references clientes(id) on delete cascade,
  versao         int not null default 1,
  escopo         text not null,
  valor          numeric(12,2) not null,
  prazo_dias     int,
  condicoes      text,
  status         text not null default 'rascunho' check (status in ('rascunho','enviada','aprovada','recusada','expirada')),
  enviada_em     timestamptz,
  respondida_em  timestamptz
);

create table contratos (
  id             uuid primary key default gen_random_uuid(),
  numero         text unique not null,         -- ex.: C-001
  cliente_id     uuid not null references clientes(id) on delete cascade,
  proposta_id    uuid references propostas(id) on delete set null,
  inicio         date,
  fim            date,
  mensalidade    numeric(12,2) not null default 0,
  status         text not null default 'rascunho' check (status in ('rascunho','aguardando_assinatura','vigente','encerrado','cancelado')),
  documento_path text                          -- arquivo no Storage (PDF assinado)
);

-- ---------- Projetos ----------
create table projetos (
  id          uuid primary key default gen_random_uuid(),
  cliente_id  uuid not null references clientes(id) on delete cascade,
  contrato_id uuid references contratos(id) on delete set null,
  nome        text not null,
  modelo      text,                              -- loja, galeria, lazer, empresa, negocio_local
  etapa       text not null default 'briefing' check (etapa in ('briefing','proposta','design','desenvolvimento','testes','publicacao','suporte')),
  progresso   int not null default 0 check (progresso between 0 and 100),
  prazo       date,
  dominio     text,
  repositorio text
);

create table tarefas (
  id          uuid primary key default gen_random_uuid(),
  projeto_id  uuid not null references projetos(id) on delete cascade,
  titulo      text not null,
  responsavel uuid references perfis(id),
  prazo       date,
  concluida   boolean not null default false,
  visivel_cliente boolean not null default false
);

-- ---------- Financeiro ----------
create table lancamentos (
  id          uuid primary key default gen_random_uuid(),
  cliente_id  uuid not null references clientes(id) on delete cascade,
  contrato_id uuid references contratos(id) on delete set null,
  descricao   text not null,
  valor       numeric(12,2) not null,
  vencimento  date not null,
  pago_em     date,
  -- 'atrasado' é calculado na consulta (vencimento < hoje e pago_em nulo)
  forma       text
);

-- ---------- Serviços recorrentes ----------
create table servicos_recorrentes (
  id          uuid primary key default gen_random_uuid(),
  cliente_id  uuid not null references clientes(id) on delete cascade,
  projeto_id  uuid references projetos(id) on delete set null,
  servico     text not null,                     -- hospedagem, manutenção, suporte, gestão do Google
  mensalidade numeric(12,2) not null default 0,
  proximo_vencimento date,
  status      text not null default 'ativo' check (status in ('ativo','pausado','cancelado'))
);

-- ---------- Histórico e arquivos ----------
create table interacoes (
  id          uuid primary key default gen_random_uuid(),
  cliente_id  uuid not null references clientes(id) on delete cascade,
  autor       uuid references perfis(id),
  canal       text,                              -- whatsapp, e-mail, reunião, visita
  resumo      text not null,
  criado_em   timestamptz not null default now()
);

-- ---------- Piloto de prospecção (galerias) ----------
create table estabelecimentos_mapeados (
  id          uuid primary key default gen_random_uuid(),
  nome        text not null,
  galeria     text,
  segmento    text,
  endereco    text,
  perfil_google text,                            -- tem perfil? atualizado?
  possui_site boolean,
  oportunidades text,
  abordado_em date,
  resultado   text
);

-- ---------- Visões úteis ----------
create view v_lancamentos as
select *, case when pago_em is not null then 'recebido'
               when vencimento < current_date then 'atrasado'
               else 'a_receber' end as situacao
from lancamentos;

-- ============================================================
-- SEGURANÇA: Row Level Security
-- Regra: equipe e admin veem tudo; cliente vê só o que é dele.
-- ============================================================
create or replace function papel_atual() returns papel
language sql stable security definer as $$ select papel from perfis where id = auth.uid() $$;

create or replace function cliente_atual() returns uuid
language sql stable security definer as $$ select cliente_id from perfis where id = auth.uid() $$;

do $$
declare t text;
begin
  foreach t in array array['perfis','clientes','contatos','oportunidades','propostas','contratos','projetos','tarefas','lancamentos','servicos_recorrentes','interacoes','estabelecimentos_mapeados']
  loop
    execute format('alter table %I enable row level security', t);
  end loop;
end $$;

-- Equipe/admin: acesso total (ajuste fino por tabela na Fase 2)
create policy equipe_clientes   on clientes   for all using (papel_atual() in ('admin','equipe')) with check (papel_atual() in ('admin','equipe'));
create policy equipe_contatos   on contatos   for all using (papel_atual() in ('admin','equipe')) with check (papel_atual() in ('admin','equipe'));
create policy equipe_oport      on oportunidades for all using (papel_atual() in ('admin','equipe')) with check (papel_atual() in ('admin','equipe'));
create policy equipe_propostas  on propostas  for all using (papel_atual() in ('admin','equipe')) with check (papel_atual() in ('admin','equipe'));
create policy equipe_contratos  on contratos  for all using (papel_atual() in ('admin','equipe')) with check (papel_atual() in ('admin','equipe'));
create policy equipe_projetos   on projetos   for all using (papel_atual() in ('admin','equipe')) with check (papel_atual() in ('admin','equipe'));
create policy equipe_tarefas    on tarefas    for all using (papel_atual() in ('admin','equipe')) with check (papel_atual() in ('admin','equipe'));
create policy equipe_lanc       on lancamentos for all using (papel_atual() = 'admin') with check (papel_atual() = 'admin');  -- financeiro: só admin
create policy equipe_serv       on servicos_recorrentes for all using (papel_atual() in ('admin','equipe')) with check (papel_atual() in ('admin','equipe'));
create policy equipe_inter      on interacoes for all using (papel_atual() in ('admin','equipe')) with check (papel_atual() in ('admin','equipe'));
create policy equipe_mapeados   on estabelecimentos_mapeados for all using (papel_atual() in ('admin','equipe')) with check (papel_atual() in ('admin','equipe'));
create policy perfis_proprio    on perfis for select using (id = auth.uid() or papel_atual() = 'admin');

-- Cliente (Fase 3): somente leitura dos próprios dados
create policy cliente_ve_cliente   on clientes   for select using (id = cliente_atual());
create policy cliente_ve_contratos on contratos  for select using (cliente_id = cliente_atual());
create policy cliente_ve_projetos  on projetos   for select using (cliente_id = cliente_atual());
create policy cliente_ve_tarefas   on tarefas    for select using (visivel_cliente and projeto_id in (select id from projetos where cliente_id = cliente_atual()));
