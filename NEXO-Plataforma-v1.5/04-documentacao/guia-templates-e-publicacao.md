# Guia dos templates e checklist de publicação

## Estrutura de cada template

```
modelo/
├── index.html     Página (não precisa editar)
├── config.js      TODO o conteúdo do cliente
└── img/           Fotos (hero.webp etc.)
```

## O que editar no config.js

- **Identidade:** nome, slogan, cor principal (`cor`) e cor do texto sobre ela (`corSobre`).
- **Contato:** `whatsapp` (formato 55 + DDD + número, sem símbolos), `instagram`, endereço e horários.
- **Conteúdo:** produtos, lojas, vagas, serviços, pacotes ou itens do cardápio, conforme o modelo.
- **Imagem:** `imagemTopo` (ex.: `"img/hero.webp"`). Em branco, os modelos 04 e 05 mostram um bloco colorido.

## Checklist antes de publicar

- [ ] Trocar todos os dados fictícios e o WhatsApp de demonstração.
- [ ] Conferir preços, horários e endereço com o cliente.
- [ ] Testar o botão de WhatsApp e cada formulário, no celular.
- [ ] Revisar textos legais do segmento (ex.: farmácia, bebidas alcoólicas).
- [ ] Usar apenas imagens próprias ou com licença comercial.
- [ ] Ajustar título e descrição (SEO) e o texto do rodapé.
- [ ] Testar em desktop e celular.
- [ ] Publicar com HTTPS e domínio próprio, e confirmar o Perfil da Empresa no Google.
- [ ] Registrar o projeto no Portal NEXO (briefing, contrato, domínio, manutenção).

## Hospedagem

O plano prevê o GitHub como repositório e a Cloudflare Pages como hospedagem de sites estáticos. Confira limites e custos vigentes antes de contratar.

## Limites atuais dos templates

- Os formulários abrem o WhatsApp com a mensagem pronta; não guardam dados nem enviam e-mail.
- Não há agenda real: reservas e horários são sempre confirmados pelo estabelecimento.
- Preços do catálogo são informativos; não há pagamento online.
