// Gera as páginas de serviço da NEXO a partir da home (index.html).
// Uso (na raiz do repositório):  node _ferramentas/gerar-paginas-servico.mjs
// A pasta _ferramentas não é publicada pelo GitHub Pages (Jekyll ignora pastas com "_").
// CSS, logo, cabeçalho e tema são extraídos da home para manter a identidade idêntica.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const SITE = 'https://www.nexobytech.com.br';
const WA = '5581997488294';
const HOJE = new Date().toISOString().slice(0, 10);
const home = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

// ---------- Extração da home ----------
const css = home.match(/<style>([\s\S]*?)<\/style>/)[1];
const bodyStart = home.indexOf('<body');
const svgDefs = home.slice(home.indexOf('>', bodyStart) + 1, home.indexOf('<a class="skip"', bodyStart)).trim();
const fontes = home.match(/<link rel="preconnect"[^\n]*/)[0];
const scripts = [...home.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
const scriptCabecalho = scripts.find(s => s.includes('nxShine') && s.includes('scrolled'));
if (!css || !svgDefs.includes('id="logo"') || !scriptCabecalho) throw new Error('Estrutura da home mudou; revise o gerador.');

const cssExtra = `
/* ---- Páginas de serviço (acréscimos; o restante vem da home) ---- */
.bc{font-size:14px;color:var(--mut)}.bc ol{list-style:none;display:flex;flex-wrap:wrap;gap:6px;margin:0;padding:0}
.bc li+li:before{content:"›";margin-right:6px;color:var(--line)}.bc a{color:var(--mut);text-decoration:none}.bc a:hover{color:var(--fg);text-decoration:underline}
.hero.one{grid-template-columns:1fr;padding:40px 0 64px}.hero.one h1{font-size:clamp(36px,5.2vw,66px);max-width:20ch}
.hero.one p.lead{max-width:60ch}
.chk{display:grid;grid-template-columns:repeat(2,1fr);gap:14px 28px;margin:0;padding:0;list-style:none}
.chk li{border-left:2px solid var(--amber);padding:2px 0 2px 16px;color:var(--mut)}.chk li b{color:var(--fg);font-weight:600}
.ex{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.ex a{display:block;border:1px solid var(--line);background:var(--surface);border-radius:16px;padding:22px;text-decoration:none;transition:border-color .2s,transform .2s}
.ex a:hover{border-color:var(--amber);transform:translateY(-2px)}.ex b{display:block;font-size:19px;margin-bottom:6px}.ex span{color:var(--mut);font-size:15px}.ex small{display:block;margin-top:12px;color:var(--amber);font-weight:700}
@media(min-width:901px){.ex.tipos{grid-template-columns:repeat(2,1fr)}}
.outros{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px}
.outros a{border:1px solid var(--line);border-radius:16px;padding:20px;text-decoration:none;background:var(--surface);transition:border-color .2s}
.outros a:hover{border-color:var(--amber)}.outros b{display:block;font-size:18px;margin-bottom:6px}.outros span{color:var(--mut);font-size:15px}
.aviso{font-size:15px;color:var(--mut);border:1px dashed var(--line);border-radius:14px;padding:16px 18px;margin-top:28px;max-width:70ch}
.fl{display:flex;flex-wrap:wrap;gap:8px 18px;font-size:14px}.fl a{color:var(--mut);text-decoration:none}.fl a:hover{color:var(--fg);text-decoration:underline}
/* A correção de nav.bc/nav.fl vem do CSS da home. */
/* Menu das páginas de serviço tem mais itens que o da home: evita quebra entre 1180 e 1279 px. */
@media(min-width:1180px){#nav a{white-space:nowrap}}@media(min-width:1180px) and (max-width:1279px){#nav{gap:18px}}
@media(max-width:900px){.chk,.ex,.outros{grid-template-columns:1fr}.hero.one{padding-top:28px}}
`;
fs.mkdirSync(path.join(ROOT, 'assets'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'assets', 'nexo.css'), '/* Gerado por _ferramentas/gerar-paginas-servico.mjs a partir de index.html. Não editar à mão. */\n' + css.trim() + '\n' + cssExtra);

// ---------- Conteúdo (somente informações do site e do material oficial) ----------
const PAGINAS = [
  {
    slug: 'criacao-de-sites', menu: 'Criação de sites', curto: 'Sites profissionais, responsivos e ligados ao WhatsApp.',
    title: 'Criação de sites e landing pages em Recife | NEXO By Tech',
    desc: 'Sites para empresas, landing pages e catálogos para pequenos negócios em Recife e Jaboatão: responsivos, ligados ao WhatsApp e ao Google, com proposta por escrito.',
    servico: 'Site profissional', serviceType: 'Criação de sites',
    h1: 'Criação de sites para pequenos negócios em Recife e região',
    lead: 'Sites institucionais, páginas comerciais (landing pages), catálogos e portfólios com a identidade da sua marca, navegação clara no celular e um caminho direto para o WhatsApp.',
    wa: 'Olá! Vi a página de criação de sites da NEXO e gostaria de uma proposta.',
    tiposTitulo: 'Qual tipo de site o seu negócio precisa',
    tiposIntro: 'Cada formato resolve uma necessidade diferente. No briefing ajudamos a escolher; se fizer sentido, eles podem ser combinados.',
    tipos: [
      ['Site institucional para empresa', 'Apresenta a empresa, os serviços, os diferenciais e as formas de contato em várias páginas. Para quem quer ser encontrado e transmitir confiança.', '/demos/empresa/', 'Ver exemplo ▸', 'Site profissional'],
      ['Landing page', 'Uma página só, focada em um serviço, oferta ou campanha, com um objetivo claro: levar o visitante ao contato pelo WhatsApp ou formulário. Combina com anúncios no Google.', '#contato', 'Pedir proposta de landing page ▸', 'Landing page'],
      ['Site para loja e catálogo', 'Vitrine com produtos, categorias, localização e pedido pelo WhatsApp. Para lojas de roupas, acessórios e comércio local.', '/demos/loja/', 'Ver exemplo ▸', 'Loja ou catálogo'],
      ['Site para prestador de serviços', 'Serviços, valores ou orçamento, agendamento e avaliações. Para oficinas, salões, barbearias, lava-jatos e outros negócios locais.', '/demos/negocio-local/', 'Ver exemplo ▸', 'Site profissional'],
    ],
    problemasTitulo: 'Quando um site faz falta',
    problemas: [
      ['Informação espalhada', 'o cliente não acha horário, endereço, serviços ou formas de contato em um só lugar.'],
      ['Só redes sociais', 'o perfil ajuda, mas não organiza catálogo, serviços e dúvidas frequentes como uma página própria.'],
      ['Site antigo', 'páginas difíceis de ler no celular afastam quem chegou pelo Google.'],
      ['Contato sem contexto', 'a conversa começa sem saber o que a pessoa quer, e o atendimento demora mais.'],
    ],
    entregasTitulo: 'O que entra em um site NEXO',
    entregas: [
      ['Site responsivo', 'Páginas pensadas para celular e computador, com identidade visual e navegação simples.'],
      ['WhatsApp e Google Maps', 'Botões de contato e localização ligados ao seu atendimento.'],
      ['SEO inicial', 'Títulos, descrições, sitemap e estrutura para o Google entender cada página.'],
      ['Formulário com mensagem pronta', 'O visitante descreve o pedido e o WhatsApp abre com o texto preenchido.'],
      ['Publicação completa', 'Cuidamos do domínio, da hospedagem e da publicação.'],
      ['Manutenção opcional', 'Planos mensais de atualização e suporte, se você quiser.'],
    ],
    exemplos: [
      ['/demos/loja/', 'Lojas e comércio', 'Catálogo, localização, avaliações e WhatsApp.'],
      ['/demos/empresa/', 'Empresas e prestadores', 'Serviços, diferenciais, portfólio e orçamento.'],
      ['/demos/negocio-local/', 'Negócios locais', 'Treze segmentos com agendamento, pedido ou reserva.'],
    ],
    faq: [
      ['Quanto custa um site?', 'Depende do escopo. Depois do briefing, enviamos proposta com valores, prazos e condições por escrito, sem taxas escondidas.'],
      ['Em quanto tempo fica pronto?', 'O prazo varia com o escopo e com a entrega dos materiais (textos, fotos, logo). Ele é combinado na proposta.'],
      ['Vocês fazem landing page?', 'Sim. Uma landing page é uma página comercial focada em um serviço ou campanha, com o contato direto pelo WhatsApp. Ela pode ser feita sozinha ou como parte de um site maior.'],
      ['Meu site vai aparecer no Google?', 'Fazemos a configuração técnica inicial (títulos, descrições, sitemap) e ligamos o site ao seu Perfil da Empresa. A posição nos resultados depende do Google e da concorrência, por isso não prometemos posição.'],
      ['Preciso entender de tecnologia?', 'Não. Cuidamos do domínio, da hospedagem e da publicação, e mostramos como atualizar o que for necessário.'],
    ],
  },
  {
    slug: 'google-perfil-da-empresa', menu: 'Google Perfil', curto: 'Perfil no Google organizado e ligado ao site.',
    title: 'Google Meu Negócio e Perfil da Empresa em Recife | NEXO',
    desc: 'Perfil da Empresa no Google (antigo Google Meu Negócio) para negócios de Recife e Jaboatão: sua empresa no Google Maps, ligada ao site e ao WhatsApp.',
    servico: 'Presença no Google', serviceType: 'Gestão do Perfil da Empresa no Google',
    h1: 'Google Perfil da Empresa organizado e ligado ao seu site',
    lead: 'Configuramos o Perfil da Empresa no Google (o antigo Google Meu Negócio) com informações comerciais corretas e o conectamos ao seu site, ao WhatsApp e às redes sociais, para quem procura por perto chegar até você.',
    wa: 'Olá! Vi a página de Google Perfil da Empresa da NEXO e gostaria de uma proposta.',
    problemasTitulo: 'Sinais de que o perfil precisa de atenção',
    problemas: [
      ['Dados desatualizados', 'horário, telefone ou serviços diferentes do que o negócio pratica hoje.'],
      ['Perfil sem ligação', 'o perfil não leva ao site nem ao WhatsApp, e o interessado desiste no caminho.'],
      ['Poucas avaliações', 'clientes satisfeitos não avaliam porque o caminho até a avaliação é difícil.'],
      ['Perfil inexistente', 'o negócio não aparece no Google Maps para quem pesquisa na região.'],
    ],
    entregasTitulo: 'O que fazemos no seu perfil',
    entregas: [
      ['Configuração ou revisão', 'Criação ou ajuste do perfil, conforme a elegibilidade e a verificação feitas pelo Google.'],
      ['Informações comerciais', 'Categoria, horários, serviços, contatos e área de atendimento organizados.'],
      ['Ligação com os canais', 'Site, WhatsApp e redes sociais trabalhando juntos a partir do perfil.'],
      ['Placa de avaliação QR Code/NFC', 'Entregue configurada e testada, com orientação à equipe.'],
      ['Acompanhamento', 'Revisões periódicas nos planos de manutenção.'],
    ],
    exemplos: [
      ['/demos/galeria/', 'Galerias comerciais', 'Placa de avaliação, perfil no Google, site e manutenção.'],
      ['/demos/negocio-local/', 'Negócios locais', 'Perfil, site e pedido pelo WhatsApp.'],
      ['/demos/lazer/', 'Espaços de lazer', 'Localização, fotos e reserva pelo WhatsApp.'],
    ],
    aviso: 'Não prometemos avaliações positivas nem oferecemos incentivos condicionados à nota. A verificação e a posição no Google dependem das regras e dos sistemas do próprio Google, sem garantia de posição ou de volume de contatos.',
    faq: [
      ['Como colocar minha empresa no Google Maps?', 'O Google Maps usa o Perfil da Empresa no Google. Criamos ou reivindicamos o perfil, preenchemos as informações e acompanhamos a verificação pedida pelo Google. Criar o perfil não tem custo no Google; o nosso trabalho é a configuração e a ligação com o site e o WhatsApp.'],
      ['Meu negócio não recebe clientes no local. Posso ter perfil?', 'Em muitos casos, sim: o Google permite perfis de prestadores que atendem no endereço do cliente sem exibir o próprio endereço. A elegibilidade é definida pelas regras do Google, e verificamos isso antes de começar.'],
      ['Quanto tempo leva a verificação?', 'Depende do método de verificação que o Google solicitar para o seu perfil. Acompanhamos o processo com você.'],
      ['Como funciona a placa de avaliação?', 'O cliente aproxima o celular (NFC) ou lê o QR Code e cai direto na página de avaliação do seu perfil. Entregamos a placa configurada e testada.'],
      ['Vocês garantem a primeira posição?', 'Não. Organizamos o perfil e as ligações com o site, mas a ordem dos resultados é decidida pelo Google.'],
    ],
  },
  {
    slug: 'sistemas-sob-medida', menu: 'Sistemas', curto: 'Cadastros, controles e painéis do seu jeito.',
    title: 'Sistemas e software sob medida em Recife | NEXO By Tech',
    desc: 'Desenvolvimento de software e sistemas sob medida em Recife e Jaboatão: cadastros, controles, painéis e fluxos do jeito que o seu negócio funciona.',
    servico: 'Sistema ou automação', serviceType: 'Desenvolvimento de sistemas sob medida',
    h1: 'Sistemas sob medida para organizar o seu negócio',
    lead: 'Desenvolvimento de software sob medida: ferramentas para organizar informações, estruturar fluxos de trabalho e acompanhar indicadores, construídas a partir de como o seu negócio já funciona.',
    wa: 'Olá! Vi a página de sistemas sob medida da NEXO e gostaria de conversar sobre um projeto.',
    problemasTitulo: 'Quando vale pensar em um sistema',
    problemas: [
      ['Planilhas demais', 'a mesma informação está em várias planilhas, e ninguém sabe qual é a versão certa.'],
      ['Controle no caderno ou no WhatsApp', 'pedidos, agendamentos e cadastros se perdem entre conversas.'],
      ['Retrabalho', 'dados digitados mais de uma vez geram erro e tomam tempo da equipe.'],
      ['Sem visão dos números', 'fica difícil saber o que entrou, o que está pendente e o que precisa de atenção.'],
    ],
    entregasTitulo: 'Como construímos um sistema',
    entregas: [
      ['Levantamento do processo', 'Briefing para entender o fluxo atual, quem usa e o que precisa ser controlado.'],
      ['Cadastros e controles', 'Telas para registrar e consultar o que importa no seu negócio.'],
      ['Painéis e indicadores', 'Visão organizada do que acontece, para decidir com informação.'],
      ['Perfis de acesso', 'Cada pessoa vê e altera apenas o que precisa.'],
      ['Código documentado', 'Organizado e documentado, pronto para evoluir por etapas.'],
    ],
    exemplos: [
      ['/automacao-de-processos/', 'Automação de processos', 'Quando o problema é tarefa repetitiva entre ferramentas.'],
      ['/criacao-de-sites/', 'Site integrado', 'Quando o sistema precisa conversar com o site e o WhatsApp.'],
      ['/#sobre', 'Como a NEXO trabalha', 'Linguagem simples, código documentado e LGPD.'],
    ],
    exemplosTitulo: 'Caminhos relacionados',
    faq: [
      ['Preciso mesmo de um sistema?', 'Nem sempre. No briefing avaliamos se uma organização das ferramentas que você já usa resolve. O sistema faz sentido quando o processo cresceu além das planilhas.'],
      ['Quanto custa?', 'Sistemas são orçados por escopo. Depois do levantamento, enviamos proposta por escrito com entregas, prazos e valores.'],
      ['Funciona no celular?', 'As telas são planejadas para os dispositivos combinados no briefing, como computador, celular ou ambos.'],
      ['E os dados do meu negócio?', 'Seguimos a LGPD e usamos só o necessário. Titularidade e acessos ficam definidos por escrito antes do início.'],
    ],
  },
  {
    slug: 'automacao-de-processos', menu: 'Automação', curto: 'Menos tarefa repetitiva entre ferramentas.',
    title: 'Automação de processos e integrações | NEXO By Tech',
    desc: 'Automação de tarefas repetitivas e integração entre site, formulários, WhatsApp e planilhas para pequenos negócios de Recife e Jaboatão dos Guararapes.',
    servico: 'Sistema ou automação', serviceType: 'Automação de processos',
    h1: 'Automação de processos: menos tarefa repetitiva, menos erro',
    lead: 'Identificamos as tarefas que se repetem no seu dia a dia e ligamos as ferramentas que você usa, para a informação andar sozinha de um ponto ao outro.',
    wa: 'Olá! Vi a página de automação de processos da NEXO e gostaria de conversar.',
    problemasTitulo: 'Tarefas que costumam ser automatizadas',
    problemas: [
      ['Copiar e colar', 'dados que saem de um formulário ou conversa e precisam ser digitados em outro lugar.'],
      ['Mensagens repetidas', 'as mesmas respostas e confirmações enviadas manualmente várias vezes por dia.'],
      ['Pedidos soltos', 'solicitações que chegam por canais diferentes e não viram uma lista única.'],
      ['Relatórios manuais', 'números montados à mão toda semana a partir de várias fontes.'],
    ],
    entregasTitulo: 'Como trabalhamos a automação',
    entregas: [
      ['Mapeamento', 'Levantamos o fluxo atual e escolhemos as tarefas com mais retorno para automatizar.'],
      ['Integrações', 'Ligação entre site, formulários, WhatsApp, planilhas e sistemas, conforme o escopo.'],
      ['Fluxos estruturados', 'Etapas claras para que nada dependa da memória de alguém.'],
      ['Documentação', 'Cada automação registrada, para a equipe entender o que acontece e por quê.'],
    ],
    exemplos: [
      ['/#contato', 'Formulário com mensagem pronta', 'Neste site, o formulário monta o texto e abre o WhatsApp já preenchido.'],
      ['/sistemas-sob-medida/', 'Sistemas sob medida', 'Quando a automação precisa de um sistema próprio por trás.'],
      ['/criacao-de-sites/', 'Sites integrados', 'Páginas que já nascem ligadas ao seu atendimento.'],
    ],
    exemplosTitulo: 'Exemplos e caminhos relacionados',
    faq: [
      ['O que dá para automatizar?', 'Tarefas com regra clara e repetição: transferir dados, montar mensagens, organizar pedidos e consolidar números. No briefing apontamos onde há ganho real.'],
      ['Vocês fazem automação de WhatsApp?', 'Fazemos integrações com o WhatsApp conforme o escopo: desde mensagens prontas a partir do site e de formulários até fluxos com a plataforma oficial do WhatsApp para empresas, que exige conta aprovada pela Meta e tem custos próprios. Avaliamos os requisitos no briefing, antes de propor.'],
      ['Vou precisar trocar meus programas?', 'Avaliamos primeiro as ferramentas que você já usa. A troca só é proposta quando a ferramenta atual impede a integração.'],
      ['Quanto custa?', 'Automação é orçada por escopo, com proposta por escrito antes do início.'],
      ['E se algo mudar no processo?', 'Como tudo fica documentado, os ajustes são feitos com segurança. Oferecemos planos mensais de suporte, se você quiser.'],
    ],
  },
  {
    slug: 'google-ads', menu: 'Google Ads', curto: 'Campanhas ligadas ao site e ao WhatsApp.',
    title: 'Gestão de Google Ads e tráfego pago em Recife | NEXO',
    desc: 'Gestão de Google Ads e tráfego pago para negócios de Recife e Jaboatão: planejamento, público-alvo, integração com site e WhatsApp e indicadores.',
    servico: 'Google Ads', serviceType: 'Gestão de campanhas no Google Ads',
    h1: 'Google Ads ligado ao seu site e ao seu WhatsApp',
    lead: 'Gestão de tráfego pago no Google: planejamos e gerenciamos campanhas no Google Ads para levar quem já está procurando o seu serviço até uma página clara e a um contato direto, acompanhando o que cada campanha gera.',
    wa: 'Olá! Vi a página de Google Ads da NEXO e gostaria de uma proposta.',
    problemasTitulo: 'Quando os anúncios não trazem resultado',
    problemas: [
      ['Anúncio sem destino certo', 'o clique cai numa página genérica e o visitante não encontra o que procurou.'],
      ['Objetivo indefinido', 'a campanha está no ar sem saber se o foco é ligação, mensagem ou visita.'],
      ['Público amplo demais', 'o orçamento vai para pesquisas que não têm relação com o negócio.'],
      ['Sem acompanhamento', 'não se sabe quais campanhas geram conversas e quais geram só cliques.'],
    ],
    entregasTitulo: 'O que a gestão inclui',
    entregas: [
      ['Planejamento de campanhas', 'Estrutura de campanhas e anúncios a partir dos serviços que você quer vender.'],
      ['Objetivos e público-alvo', 'Definição do que medir e de quem alcançar: região, termos de pesquisa e horários.'],
      ['Integração com site e WhatsApp', 'Anúncios que levam a páginas comerciais coerentes e a um contato direto.'],
      ['Gestão de campanhas', 'Configuração, publicação e ajustes das campanhas no Google Ads.'],
      ['Acompanhamento de indicadores', 'Relatórios com cliques, custos e contatos gerados, em linguagem simples.'],
      ['Otimização contínua', 'Revisão de termos, anúncios e distribuição do orçamento com base nos dados.'],
      ['Consultoria de presença digital', 'Orientação para anúncios, Perfil da Empresa e site trabalharem juntos.'],
    ],
    aviso: 'O investimento em mídia (o valor pago ao Google pelos anúncios) é contratado e pago separadamente da prestação de serviços da NEXO. Não prometemos primeira posição, quantidade de clientes nem retorno financeiro específico: os resultados dependem do mercado, da concorrência, do orçamento e das regras do Google.',
    exemplosTitulo: 'Caminhos relacionados',
    exemplos: [
      ['/criacao-de-sites/#tipos', 'Landing page para anúncios', 'Anúncio bom precisa de uma página clara para virar contato.'],
      ['/google-perfil-da-empresa/', 'Google Perfil da Empresa', 'Presença no Google Maps junto com os anúncios.'],
      ['/automacao-de-processos/', 'Atendimento organizado', 'Contatos que chegam pelos anúncios sem se perder.'],
    ],
    faq: [
      ['Quanto preciso investir em anúncios?', 'O valor de mídia é definido com você no planejamento, conforme objetivo e região, e pago diretamente ao Google. A gestão da NEXO é orçada à parte, com proposta por escrito.'],
      ['Em quanto tempo vejo resultado?', 'Os anúncios começam a rodar depois da revisão do Google, e os ajustes que melhoram o desempenho dependem dos dados das primeiras semanas. Não prometemos prazo para retorno.'],
      ['Vocês garantem a primeira posição?', 'Não. A posição dos anúncios é definida pelo leilão do Google, que considera o lance, a qualidade e a relevância do anúncio e da página.'],
      ['Preciso ter um site?', 'Recomendamos uma página clara para cada serviço anunciado. Se você ainda não tiver, podemos criar a página junto com a campanha.'],
    ],
  },
];

// ---------- Montagem ----------
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const waLink = t => `https://wa.me/${WA}?text=${encodeURIComponent(t)}`;

function pagina(p) {
  const url = `${SITE}/${p.slug}/`;
  const nav = PAGINAS.map(o => `<a href="/${o.slug}/"${o.slug === p.slug ? ' aria-current="page" class="on"' : ''}>${o.menu}</a>`).join('');
  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Service', '@id': url + '#servico', name: p.h1, serviceType: p.serviceType, description: p.desc, url,
        provider: { '@type': 'Organization', '@id': SITE + '/#org', name: 'NEXO By Tech', url: SITE + '/' },
        areaServed: [{ '@type': 'City', name: 'Recife' }, { '@type': 'City', name: 'Jaboatão dos Guararapes' }] },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: SITE + '/' },
        { '@type': 'ListItem', position: 2, name: p.menu === 'Google Perfil' ? 'Google Perfil da Empresa' : p.menu, item: url }] },
    ],
  };
  const opts = ['Site profissional', 'Landing page', 'Presença no Google', 'Google Ads', 'Loja ou catálogo', 'Sistema ou automação', 'Portfólio digital', 'Galeria comercial', 'Placa de avaliação Google', 'Manutenção e suporte', 'Ainda não sei']
    .map(o => `<option${o === p.servico ? ' selected' : ''}>${o}</option>`).join('');
  const outros = PAGINAS.filter(o => o.slug !== p.slug).map(o => `<a href="/${o.slug}/"><b>${o.menu === 'Google Perfil' ? 'Google Perfil da Empresa' : o.menu === 'Sistemas' ? 'Sistemas sob medida' : o.menu === 'Automação' ? 'Automação de processos' : o.menu}</b><span>${o.curto}</span></a>`).join('')
    + `<a href="/#modelos"><b>Modelos prontos</b><span>Veja as demonstrações por segmento.</span></a>`;
  const ex = p.exemplos.map(([h, t, d]) => `<a href="${h}"><b>${t}</b><span>${d}</span><small>${h.startsWith('/demos/') ? 'Abrir demonstração ▸' : 'Ver ▸'}</small></a>`).join('');
  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.desc)}">
<meta name="robots" content="index,follow">
<link rel="canonical" href="${url}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon-48.png" type="image/png" sizes="48x48">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta name="theme-color" content="#9a6508">
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="NEXO By Tech">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(p.title)}">
<meta property="og:description" content="${esc(p.desc)}">
<meta property="og:image" content="${SITE}/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="NEXO By Tech: seu negócio online, conectado e funcionando.">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(p.title)}">
<meta name="twitter:description" content="${esc(p.desc)}">
<meta name="twitter:image" content="${SITE}/og-image.png">
<script type="application/ld+json">${JSON.stringify(ld)}</script>
${fontes}
<link rel="stylesheet" href="/assets/nexo.css">
<script>try{var t=localStorage.getItem('nexo-tema');if(t)document.documentElement.dataset.theme=t}catch(e){}</script>
</head>
<body>
${svgDefs}
<a class="skip" href="#main">Ir para o conteúdo</a>
<header><div class="wrap">
<a class="brand" href="/" aria-label="NEXO, página inicial"><svg class="logo" role="img" aria-label="NEXO"><use href="#logo"/></svg></a>
<button id="mb" aria-label="Abrir menu" aria-expanded="false" aria-controls="nav">☰</button>
<nav id="nav" aria-label="Principal"><a href="/">Início</a>${nav}<a href="/#modelos">Modelos</a><a class="btn" href="#contato">Pedir proposta</a><button id="th" class="tg" type="button" aria-label="Alternar entre tema claro e escuro" title="Tema claro/escuro">◐</button></nav>
</div></header>
<main id="main">
<div class="wrap">
<nav class="bc" aria-label="Você está em"><ol><li><a href="/">Início</a></li><li><a href="/#servicos">Serviços</a></li><li aria-current="page">${p.menu === 'Google Perfil' ? 'Google Perfil da Empresa' : p.menu}</li></ol></nav>
<div class="hero one">
<div><h1>${p.h1}</h1>
<p class="lead">${p.lead}</p>
<div class="acts"><a class="btn" href="#contato">Pedir proposta grátis</a><a class="btn ghost" href="${waLink(p.wa)}" target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a></div>
<div class="proof"><span><b>Atendemos</b> Recife, Jaboatão dos Guararapes e região</span><span><b>Escopo e preço</b> combinados antes</span><span><b>Suporte</b> contínuo após a entrega</span></div></div>
</div></div>
${p.tipos ? `<section id="tipos"><div class="wrap"><div class="head"><h2>${p.tiposTitulo}</h2><p>${p.tiposIntro}</p></div><div class="ex tipos">${p.tipos.map(([t, d, h, cta, s]) => `<a href="${h}"${h === '#contato' ? ` data-s="${s}"` : ''}><b>${t}</b><span>${d}</span><small>${cta}</small></a>`).join('')}</div></div></section>
` : ''}<section id="problemas"><div class="wrap"><div class="head"><h2>${p.problemasTitulo}</h2></div>
<ul class="chk">${p.problemas.map(([b, t]) => `<li><b>${b}:</b> ${t}</li>`).join('')}</ul></div></section>
<section id="entregas"><div class="wrap"><div class="head"><h2>${p.entregasTitulo}</h2><p>Cada serviço tem escopo, prazo e preço combinados por escrito antes do primeiro dia de trabalho.</p></div>
<div class="svc">${p.entregas.map(([h, t]) => `<div class="row"><h3>${h}</h3><p>${t}</p><span></span></div>`).join('')}</div>
${p.aviso ? `<p class="aviso">${p.aviso}</p>` : ''}</div></section>
<section id="exemplos"><div class="wrap"><div class="head"><h2>${p.exemplosTitulo || 'Exemplos de aplicação'}</h2>${p.exemplos[0][0].startsWith('/demos/') ? '<p>Demonstrações com dados fictícios: os nomes, preços e fotos são de exemplo, não são clientes reais.</p>' : ''}</div>
<div class="ex">${ex}</div></div></section>
<section id="diferenciais"><div class="wrap two"><div class="head" style="margin:0"><h2>Por que a NEXO</h2><p>Mais do que entregar uma página, a NEXO conecta os recursos digitais do seu negócio para que funcionem juntos.</p></div>
<div class="pts"><div><b>Escopo por escrito</b><span>Entregas, prazos e valores definidos antes de começar.</span></div><div><b>Você fala com quem constrói</b><span>Sem intermediários e sem jargão: explicamos cada decisão e cada custo.</span></div><div><b>Feito para durar</b><span>Código organizado e documentado, pronto para crescer com você.</span></div><div><b>Seus dados protegidos</b><span>Seguimos a LGPD e usamos só o necessário para atender você.</span></div></div></div></section>
<section id="faq"><div class="wrap"><div class="head"><h2>Dúvidas comuns</h2></div>
${p.faq.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('\n')}</div></section>
<section id="contato"><div class="wrap cta">
<div class="head" style="margin:0"><h2>Vamos conversar sobre o seu projeto?</h2><p>Preencha o formulário e abriremos o WhatsApp com a sua mensagem pronta. É rápido, sem compromisso e sem cadastro.</p>
<p class="note" style="margin-top:20px">Prefere falar direto? <a href="${waLink(p.wa)}" target="_blank" rel="noopener noreferrer" style="color:var(--amber)">Chamar no WhatsApp</a></p></div>
<form id="f" novalidate>
<label>Seu nome<input id="n" required autocomplete="name"></label>
<label>O que você precisa?<select id="s">${opts}</select></label>
<label>Conte um pouco sobre o projeto<textarea id="d" rows="4" required></textarea></label>
<button class="btn" type="submit">Enviar pelo WhatsApp</button>
<p class="note" id="st" role="status" aria-live="polite">Ao enviar, você abre uma conversa no seu WhatsApp. Nenhum dado fica guardado neste site.</p>
</form></div></section>
<section id="outros"><div class="wrap"><div class="head"><h2>Outros serviços da NEXO</h2></div><div class="outros">${outros}</div></div></section>
</main>
<footer><div class="wrap"><svg class="logo" role="img" aria-label="NEXO"><use href="#logo"/></svg><nav class="fl" aria-label="Serviços"><a href="/criacao-de-sites/">Criação de sites</a><a href="/google-perfil-da-empresa/">Google Perfil da Empresa</a><a href="/sistemas-sob-medida/">Sistemas sob medida</a><a href="/automacao-de-processos/">Automação de processos</a><a href="/google-ads/">Google Ads</a></nav><span>Ideias conectadas. Soluções em movimento.</span><span>© <span id="y"></span> NEXO</span></div></footer>
<a class="wa" href="${waLink(p.wa)}" target="_blank" rel="noopener noreferrer">WhatsApp</a>
<script>
const W='https://wa.me/${WA}?text=',msg=t=>W+encodeURIComponent(t);
document.getElementById('y').textContent=new Date().getFullYear();
document.getElementById('th').onclick=()=>{const d=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=d;try{localStorage.setItem('nexo-tema',d)}catch(e){}};
const mb=document.getElementById('mb'),nv=document.getElementById('nav');
mb.onclick=()=>{const o=nv.classList.toggle('open');mb.setAttribute('aria-expanded',o)};
nv.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nv.classList.remove('open');mb.setAttribute('aria-expanded',false)}));
document.querySelectorAll('[data-s]').forEach(a=>a.addEventListener('click',()=>{document.getElementById('s').value=a.dataset.s}));
document.getElementById('f').addEventListener('submit',e=>{e.preventDefault();
const n=document.getElementById('n').value.trim(),d=document.getElementById('d').value.trim(),s=document.getElementById('s').value,st=document.getElementById('st');
if(!n||d.length<10){st.textContent='Preencha seu nome e descreva o projeto com pelo menos 10 letras.';return}
st.textContent='Abrindo o WhatsApp...';const u=msg('Olá, sou '+n+'. Quero: '+s+'.\\n\\n'+d);
const w=window.open(u,'_blank','noopener');if(!w)st.innerHTML='Seu navegador bloqueou a janela. <a href="'+u+'" style="color:var(--amber)">Toque aqui para abrir o WhatsApp</a>.';});
(function(){var b=document.querySelector("a.wa"),c=document.getElementById("contato");if(!b||!c||!("IntersectionObserver" in window))return;new IntersectionObserver(function(e){b.classList.toggle("off",e[0].isIntersecting)},{threshold:0.15}).observe(c)})();
</script>
<script>${scriptCabecalho}</script>
<script src="/assets/analytics.js" defer></script>
</body>
</html>
`;
}

for (const p of PAGINAS) {
  fs.mkdirSync(path.join(ROOT, p.slug), { recursive: true });
  fs.writeFileSync(path.join(ROOT, p.slug, 'index.html'), pagina(p));
}

// ---------- Sitemap (somente páginas públicas e indexáveis) ----------
const urls = ['/', ...PAGINAS.map(p => `/${p.slug}/`)];
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map(u => `  <url>\n    <loc>${SITE}${u}</loc>\n    <lastmod>${HOJE}</lastmod>\n  </url>`).join('\n') + `\n</urlset>\n`);
console.log('Gerado:', PAGINAS.map(p => p.slug).join(', '), '| assets/nexo.css | sitemap.xml com', urls.length, 'URLs');
