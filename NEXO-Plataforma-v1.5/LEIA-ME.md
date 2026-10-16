# NEXO · Plataforma digital · Pacote v1.5 (revisado e consolidado).3

*Ideias conectadas. Soluções em movimento.*

Cada pasta é um protótipo independente. Para ver qualquer um, abra o arquivo `visualizacao-*.html` (ou o `index.html` do protótipo) direto no navegador.

| Pasta | O que é | Estado |
|---|---|---|
| `01-site-oficial-nexo/` | Site comercial da NEXO. A seção Modelos mostra as páginas reais de cada modelo (pasta `demos/`), com rolagem ao passar o mouse e demonstração completa em computador ou celular. Cabeçalho com logo itálico brilhante, barra de progresso e menu que acompanha a seção | Consolidado |
| `02-templates-clientes/01-lojas/` | Modelo 01: catálogo, lista de pedido pelo WhatsApp | Protótipo funcional |
| `02-templates-clientes/02-galerias-comerciais/` | Modelo 02: diretório de lojas, promoções, vagas para locação | Protótipo funcional |
| `02-templates-clientes/03-espacos-de-lazer/` | Modelo 03: fotos, estrutura, consulta de data pelo WhatsApp | Protótipo funcional |
| `02-templates-clientes/04-empresas-e-prestadores/` | Modelo 04: serviços, processo, casos, orçamento | Protótipo funcional |
| `02-templates-clientes/05-negocio-local/` | Modelo 05: 13 segmentos (oficinas, lanchonete, mercados, salões, lavanderia, lava-jato, farmácia, chaveiro, manicure, coco) | Protótipo funcional |
| `03-portal-gestao-nexo/prototipo-painel/` | Painel de gestão clicável (clientes, CRM, propostas, contratos, projetos, financeiro, serviços, indicadores) | Protótipo conceitual |
| `03-portal-gestao-nexo/banco-de-dados/` | Rascunho do esquema SQL com permissões | Rascunho, não executado |
| `03-portal-gestao-nexo/estrutura-aplicacao/` | Arquitetura e fases do portal real | Documento |
| `04-documentacao/` | Guia de uso dos templates e checklist de publicação | Documento |

## Publicar o site oficial

Envie a pasta `01-site-oficial-nexo/` inteira, **incluindo `demos/`**: é dela que vêm as prévias dos cartões. Se preferir um único arquivo, use `visualizacao-arquivo-unico.html`, que já leva tudo embutido (cerca de 0,9 MB).

## Como criar o site de um cliente

1. Copie a pasta do modelo (ex.: `02-templates-clientes/01-lojas/`) para uma pasta nova do cliente.
2. Edite **só** o `config.js` (nome, cores, WhatsApp, produtos, horários) e troque as imagens em `img/`.
3. Teste no celular e no computador, e envie o WhatsApp de teste.
4. Publique (hospedagem e domínio do cliente).

No Modelo 05, copie para `config.js` o arquivo do segmento desejado, em `exemplos/`.

## O que ainda é demonstração

- Todos os nomes, preços e lojas são fictícios. O WhatsApp de demonstração é o da NEXO.
- O painel de gestão não salva dados e não tem login.
- O catálogo do modelo Lojas usa recortes das fotos geradas por IA. Os modelos 04 e 05 (segmentos) usam capa genérica até você informar fotos.
- As imagens geradas por IA do site oficial são ilustrativas e estão identificadas como tal.

## Novidades da v1.5

- Logo do cabeçalho: o mesmo logo do rodapé, sem brilho, acompanhando o tema claro/escuro.

- Tipografia única e sóbria: **IBM Plex Sans** (carregada pelo Google Fonts). Sem itálico, sem brilho nos títulos. O cabeçalho aprovado (logo em itálico com brilho) foi mantido.
- Todo comando interativo agora "junta" os dados com efeito visual: Coerência (canais se encaixam e um sinal percorre o caminho), Ligação (anel de impacto ao encostar), Causa e efeito (ponto percorre a seta e o efeito chega), rede do início (sinal vai até o negócio) e abas (conteúdo entra de lados opostos).
- Respeita "reduzir movimento" do sistema.
- Para funcionar offline ou sem depender do Google, hospede a fonte junto do site.
- Abertura: as palavras do título "Seu negócio online, conectado e funcionando." entram de lados alternados e se juntam ao abrir a página.
- O título do início continua com uma onda suave e discreta enquanto a página está aberta (desligada com "reduzir movimento").

## Revisão final (14/10/2026)

Verificado em 18 páginas HTML, em tela larga (1280 px) e celular (390 px): sem erros de script, sem imagens quebradas, sem rolagem lateral, sem links internos sem destino, âncoras do menu e janela de prévia dos modelos funcionando. O número de WhatsApp de demonstração é o mesmo em todo o pacote.

Correção desta revisão: o painel do portal (`03-portal-gestao-nexo/prototipo-painel/`) passou a usar o mesmo logo oficial do site, sem brilho.

Limites conhecidos: as fontes (IBM Plex Sans) dependem de internet via Google Fonts; o painel não tem login nem salva dados; o banco (`schema.sql`) é rascunho não executado; nomes, preços e lojas dos modelos são fictícios.
