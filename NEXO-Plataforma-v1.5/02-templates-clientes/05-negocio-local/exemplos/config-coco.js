/* NEXO · Exemplo: Vendedor de coco — copie para config.js */
const CONFIG = {
  "negocio": {
    "nome": "Coco Gelado Exemplo",
    "rotulo": "Coco gelado",
    "slogan": "Água de coco geladinha, direto do coco.",
    "sobre": "Coco fresco e gelado, vendido na praça e com opção de reserva para retirada.",
    "endereco": "Rua Exemplo, 100 — Centro",
    "cidade": "Recife — PE",
    "mapaBusca": "Coco Gelado Exemplo Recife",
    "horarios": [
      [
        "Todos os dias",
        "9h às 17h (conforme o clima)"
      ]
    ],
    "whatsapp": "5581997488294",
    "instagram": "",
    "cor": "#3d7a2a",
    "corSobre": "#ffffff",
    "imagemTopo": "",
    "pontoHoje": "Hoje estou na Praça Exemplo, perto do coreto, das 9h às 17h."
  },
  "itensTitulo": "O que vendo",
  "itensSub": "Valores de referência. Reserve pelo WhatsApp e retire no meu ponto.",
  "itens": [
    {
      "nome": "Coco gelado",
      "grupo": "Cocos",
      "preco": 8,
      "detalhe": "Para tomar na hora",
      "de": false
    },
    {
      "nome": "Água de coco no copo",
      "grupo": "Cocos",
      "preco": 6,
      "detalhe": "",
      "de": false
    },
    {
      "nome": "Coco para levar (dúzia)",
      "grupo": "Cocos",
      "preco": 85,
      "detalhe": "Reserve com antecedência",
      "de": false
    }
  ],
  "pedido": {
    "rotulo": "Minha reserva",
    "verbo": "Gostaria de reservar",
    "acao": "Reservar pelo WhatsApp"
  },
  "formulario": {
    "titulo": "Reserve para retirada",
    "sub": "Diga a quantidade e o horário.",
    "botao": "Reservar pelo WhatsApp",
    "assunto": "Quero reservar cocos para retirada.",
    "campos": [
      {
        "id": "nome",
        "rotulo": "Seu nome",
        "tipo": "texto",
        "obrigatorio": true
      },
      {
        "id": "qtd",
        "rotulo": "Quantidade",
        "tipo": "numero"
      },
      {
        "id": "hor",
        "rotulo": "Horário de retirada",
        "tipo": "texto"
      }
    ]
  },
  "diferenciais": [
    [
      "Sempre gelado",
      "Coco refrigerado para o dia quente."
    ],
    [
      "Reserva fácil",
      "Garanta o seu pelo WhatsApp."
    ],
    [
      "Ponto do dia",
      "Veja aqui onde estou hoje."
    ]
  ]
};
