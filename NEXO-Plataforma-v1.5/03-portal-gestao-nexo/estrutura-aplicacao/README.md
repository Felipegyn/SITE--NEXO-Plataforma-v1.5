# Estrutura da aplicação — Portal de Gestão NEXO

Este documento descreve como o portal real deve ser organizado. **Ainda não há código de aplicação**: o que existe é o protótipo clicável em `../prototipo-painel/` e o rascunho do banco em `../banco-de-dados/schema.sql`.

## Tecnologia recomendada (conforme o plano)

| Camada | Escolha |
|---|---|
| Interface e aplicação | Next.js + TypeScript |
| Login, banco e arquivos | Supabase (Auth, PostgreSQL, Storage) |
| Código | GitHub |
| Hospedagem | A definir (verificar termos de uso comercial e custos) |

## Pastas sugeridas do projeto

```
portal-nexo/
├── app/
│   ├── (publico)/login/            Tela de login
│   ├── (admin)/
│   │   ├── painel/                 Visão geral
│   │   ├── clientes/
│   │   ├── crm/
│   │   ├── propostas/
│   │   ├── contratos/
│   │   ├── projetos/
│   │   ├── financeiro/             Somente papel "admin"
│   │   ├── servicos/
│   │   └── indicadores/
│   └── (cliente)/                  Portal do cliente (Fase 3)
│       ├── meus-projetos/
│       └── meus-documentos/
├── components/                     Tabela, kanban, formulários, cartões
├── lib/
│   ├── supabase/                   Clientes de servidor e navegador
│   └── permissoes.ts               Regras por papel
├── supabase/
│   └── migrations/                 Derivadas de schema.sql
└── .env.example                    Chaves (nunca versionar as reais)
```

## Papéis e permissões

- **admin**: tudo, inclusive financeiro.
- **equipe**: clientes, CRM, propostas, contratos, projetos e serviços. Sem financeiro.
- **cliente** (Fase 3): somente leitura dos próprios contratos, projetos e tarefas marcadas como visíveis.

As regras ficam no banco (Row Level Security), não só na interface, para que um cliente nunca consiga consultar dados de outro.

## Fases

1. **Fase 1 (atual):** site público e templates. Concluída em protótipo.
2. **Fase 2:** login, clientes, CRM, propostas, contratos, projetos e financeiro básico, com backups.
3. **Fase 3:** portal do cliente, aprovação de entregas, suporte e integrações (pagamentos, assinatura eletrônica).

## Cuidados antes de colocar dados reais

- Dados de clientes (CNPJ/CPF, contatos) são dados pessoais: aplicar a LGPD, com acesso mínimo e backup.
- Não guardar senhas nem chaves no código.
- Definir quem tem acesso ao financeiro.
- Auditar o "Portal Privado de Projetos NEXO" já desenvolvido antes de reaproveitá-lo, como previsto no plano. Ele não estava entre os arquivos desta conversa, então não foi incluído.
