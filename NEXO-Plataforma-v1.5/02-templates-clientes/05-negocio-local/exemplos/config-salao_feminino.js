/* NEXO · Exemplo: Salão feminino — copie para config.js */
const CONFIG = {
  "negocio": {
    "nome": "Salão Exemplo",
    "rotulo": "Salão de beleza",
    "slogan": "Cabelo, unhas e estética com atendimento personalizado.",
    "sobre": "Procedimentos com avaliação prévia, produtos de qualidade e agendamento facilitado.",
    "endereco": "Rua Exemplo, 100 — Centro",
    "cidade": "Recife — PE",
    "mapaBusca": "Salão Exemplo Recife",
    "horarios": [
      [
        "Terça a sábado",
        "9h às 19h"
      ],
      [
        "Domingo e segunda",
        "Fechado"
      ]
    ],
    "whatsapp": "5581997488294",
    "instagram": "",
    "cor": "#a63d6e",
    "corSobre": "#ffffff",
    "imagemTopo": ""
  },
  "itensTitulo": "Serviços e valores",
  "itensSub": "Valores de referência. Procedimentos como coloração dependem de avaliação.",
  "itens": [
    {
      "nome": "Corte feminino",
      "grupo": "Cabelo",
      "preco": 70,
      "detalhe": "",
      "de": false
    },
    {
      "nome": "Escova",
      "grupo": "Cabelo",
      "preco": 50,
      "detalhe": "Conforme o comprimento",
      "de": true
    },
    {
      "nome": "Hidratação",
      "grupo": "Cabelo",
      "preco": 80,
      "detalhe": "",
      "de": true
    },
    {
      "nome": "Coloração",
      "grupo": "Cabelo",
      "preco": null,
      "detalhe": "Sob avaliação",
      "de": false
    },
    {
      "nome": "Maquiagem",
      "grupo": "Estética",
      "preco": 120,
      "detalhe": "Social",
      "de": false
    },
    {
      "nome": "Design de sobrancelha",
      "grupo": "Estética",
      "preco": 35,
      "detalhe": "",
      "de": false
    },
    {
      "nome": "Depilação facial",
      "grupo": "Estética",
      "preco": 25,
      "detalhe": "",
      "de": false
    }
  ],
  "pedido": {
    "rotulo": "Meus serviços",
    "verbo": "Gostaria de agendar",
    "acao": "Enviar pelo WhatsApp"
  },
  "formulario": {
    "titulo": "Agende seu horário",
    "sub": "Escolha dia e período. Confirmamos o horário pelo WhatsApp.",
    "botao": "Agendar pelo WhatsApp",
    "assunto": "Gostaria de agendar um horário.",
    "campos": [
      {
        "id": "nome",
        "rotulo": "Seu nome",
        "tipo": "texto",
        "obrigatorio": true
      },
      {
        "id": "data",
        "rotulo": "Data desejada",
        "tipo": "data",
        "obrigatorio": true
      },
      {
        "id": "per",
        "rotulo": "Período",
        "tipo": "select",
        "opcoes": [
          "Manhã",
          "Tarde",
          "Noite"
        ]
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
      "Avaliação prévia",
      "Entendemos o que você quer antes de começar."
    ],
    [
      "Hora marcada",
      "Atendimento com agenda organizada."
    ],
    [
      "Cuidado com o cabelo",
      "Produtos escolhidos conforme o seu tipo de fio."
    ]
  ]
};
