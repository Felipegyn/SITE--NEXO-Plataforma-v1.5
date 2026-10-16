/* NEXO · Exemplo: Lavanderia (roupas e calçados) — copie para config.js */
const CONFIG = {
  "negocio": {
    "nome": "Lavanderia Exemplo",
    "rotulo": "Lavanderia",
    "slogan": "Roupas e calçados limpos, com coleta e entrega.",
    "sobre": "Lavagem e passadoria de roupas e higienização de calçados, com prazo combinado.",
    "endereco": "Rua Exemplo, 100 — Centro",
    "cidade": "Recife — PE",
    "mapaBusca": "Lavanderia Exemplo Recife",
    "horarios": [
      [
        "Segunda a sexta",
        "8h às 18h"
      ],
      [
        "Sábado",
        "8h às 13h"
      ]
    ],
    "whatsapp": "5581997488294",
    "instagram": "",
    "cor": "#1a6ea8",
    "corSobre": "#ffffff",
    "imagemTopo": ""
  },
  "itensTitulo": "Serviços e valores",
  "itensSub": "Valores de referência. Peças delicadas dependem de avaliação.",
  "itens": [
    {
      "nome": "Lavagem por kg",
      "grupo": "Roupas",
      "preco": 14,
      "detalhe": "Lavar e secar",
      "de": true
    },
    {
      "nome": "Passadoria (peça)",
      "grupo": "Roupas",
      "preco": 6,
      "detalhe": "",
      "de": true
    },
    {
      "nome": "Edredom casal",
      "grupo": "Roupas",
      "preco": 55,
      "detalhe": "",
      "de": true
    },
    {
      "nome": "Terno ou vestido",
      "grupo": "Roupas",
      "preco": null,
      "detalhe": "Sob avaliação",
      "de": false
    },
    {
      "nome": "Tênis",
      "grupo": "Calçados",
      "preco": 45,
      "detalhe": "Higienização completa",
      "de": true
    },
    {
      "nome": "Sapato social",
      "grupo": "Calçados",
      "preco": 40,
      "detalhe": "Limpeza e hidratação",
      "de": true
    },
    {
      "nome": "Bolsa",
      "grupo": "Calçados",
      "preco": null,
      "detalhe": "Sob avaliação",
      "de": false
    }
  ],
  "pedido": {
    "rotulo": "Meu pedido",
    "verbo": "Gostaria de solicitar",
    "acao": "Enviar pelo WhatsApp"
  },
  "formulario": {
    "titulo": "Solicite coleta ou entrega",
    "sub": "Informe como prefere entregar e receber suas peças.",
    "botao": "Enviar pelo WhatsApp",
    "assunto": "Quero solicitar um serviço.",
    "campos": [
      {
        "id": "nome",
        "rotulo": "Seu nome",
        "tipo": "texto",
        "obrigatorio": true
      },
      {
        "id": "mod",
        "rotulo": "Como prefere?",
        "tipo": "select",
        "opcoes": [
          "Levo na lavanderia",
          "Quero coleta e entrega"
        ]
      },
      {
        "id": "end",
        "rotulo": "Endereço para entrega (se for o caso)",
        "tipo": "texto"
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
      "Prazo combinado",
      "Informamos a data de entrega no recebimento."
    ],
    [
      "Peças identificadas",
      "Cada peça é conferida na entrada."
    ],
    [
      "Coleta e entrega",
      "Consulte a área atendida."
    ]
  ]
};
