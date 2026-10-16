/* NEXO · Exemplo: Chaveiro — copie para config.js */
const CONFIG = {
  "negocio": {
    "nome": "Chaveiro Exemplo",
    "rotulo": "Chaveiro",
    "slogan": "Cópias, aberturas e trocas de fechadura com rapidez.",
    "sobre": "Atendimento na loja e em domicílio na região, com orçamento informado antes do serviço.",
    "endereco": "Rua Exemplo, 100 — Centro",
    "cidade": "Recife — PE",
    "mapaBusca": "Chaveiro Exemplo Recife",
    "horarios": [
      [
        "Segunda a sábado",
        "8h às 18h"
      ],
      [
        "Emergências",
        "Consulte disponibilidade"
      ]
    ],
    "whatsapp": "5581997488294",
    "instagram": "",
    "cor": "#9a6508",
    "corSobre": "#ffffff",
    "imagemTopo": ""
  },
  "urgencia": {
    "texto": "Trancado para fora? Fale agora com o chaveiro.",
    "botao": "Chamar no WhatsApp",
    "mensagem": "Olá! Preciso de atendimento de emergência (abertura). Estou em: "
  },
  "itensTitulo": "Serviços",
  "itensSub": "Valores variam conforme o modelo e a urgência. Informamos o orçamento antes de começar.",
  "itens": [
    {
      "nome": "Cópia de chave simples",
      "grupo": "Cópias",
      "preco": 10,
      "detalhe": "",
      "de": true
    },
    {
      "nome": "Chave tetra",
      "grupo": "Cópias",
      "preco": 30,
      "detalhe": "",
      "de": true
    },
    {
      "nome": "Chave codificada de veículo",
      "grupo": "Cópias",
      "preco": null,
      "detalhe": "Sob consulta",
      "de": false
    },
    {
      "nome": "Abertura residencial",
      "grupo": "Aberturas e trocas",
      "preco": null,
      "detalhe": "Orçamento por WhatsApp",
      "de": false
    },
    {
      "nome": "Abertura de veículo",
      "grupo": "Aberturas e trocas",
      "preco": null,
      "detalhe": "Orçamento por WhatsApp",
      "de": false
    },
    {
      "nome": "Troca de fechadura",
      "grupo": "Aberturas e trocas",
      "preco": null,
      "detalhe": "Sob consulta",
      "de": false
    }
  ],
  "pedido": null,
  "formulario": {
    "titulo": "Peça atendimento",
    "sub": "Diga o que aconteceu e onde você está.",
    "botao": "Enviar pelo WhatsApp",
    "assunto": "Preciso de atendimento de chaveiro.",
    "campos": [
      {
        "id": "nome",
        "rotulo": "Seu nome",
        "tipo": "texto",
        "obrigatorio": true
      },
      {
        "id": "srv",
        "rotulo": "Serviço",
        "tipo": "select",
        "opcoes": [
          "Abertura residencial",
          "Abertura de veículo",
          "Cópia de chave",
          "Troca de fechadura",
          "Outro"
        ]
      },
      {
        "id": "loc",
        "rotulo": "Onde você está? (bairro/endereço)",
        "tipo": "texto",
        "obrigatorio": true
      },
      {
        "id": "obs",
        "rotulo": "Observações (opcional)",
        "tipo": "longo"
      }
    ]
  },
  "diferenciais": [
    [
      "Orçamento antes",
      "Você aprova o valor antes do serviço."
    ],
    [
      "Atendimento em domicílio",
      "Consulte a área atendida."
    ],
    [
      "Sem danos desnecessários",
      "Abertura com técnica adequada."
    ]
  ]
};
