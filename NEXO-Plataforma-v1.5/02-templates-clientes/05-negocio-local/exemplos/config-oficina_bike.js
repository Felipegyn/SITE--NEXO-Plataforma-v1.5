/* NEXO · Exemplo: Oficina de bicicletas — copie para config.js */
const CONFIG = {
  "negocio": {
    "nome": "Bike Oficina Exemplo",
    "rotulo": "Oficina de bicicletas",
    "slogan": "Sua bike pronta para pedalar com segurança.",
    "sobre": "Revisão, ajustes e peças para bicicletas urbanas, de estrada, MTB e infantis.",
    "endereco": "Rua Exemplo, 100 — Centro",
    "cidade": "Recife — PE",
    "mapaBusca": "Bike Oficina Exemplo Recife",
    "horarios": [
      [
        "Segunda a sexta",
        "8h às 18h"
      ],
      [
        "Sábado",
        "8h às 13h"
      ],
      [
        "Domingo",
        "Fechado"
      ]
    ],
    "whatsapp": "5581997488294",
    "instagram": "",
    "cor": "#2f6b3a",
    "corSobre": "#ffffff",
    "imagemTopo": ""
  },
  "itensTitulo": "Serviços",
  "itensSub": "Valores de referência. Peças são cobradas à parte, com aprovação prévia.",
  "itens": [
    {
      "nome": "Revisão básica",
      "grupo": "Revisões",
      "preco": 60,
      "detalhe": "Freios, câmbio, pneus e lubrificação",
      "de": true
    },
    {
      "nome": "Revisão completa",
      "grupo": "Revisões",
      "preco": 140,
      "detalhe": "Inclui limpeza e regulagens finas",
      "de": true
    },
    {
      "nome": "Troca de câmara",
      "grupo": "Reparos",
      "preco": 25,
      "detalhe": "Mão de obra",
      "de": true
    },
    {
      "nome": "Regulagem de câmbio",
      "grupo": "Reparos",
      "preco": 30,
      "detalhe": "Ajuste de marchas",
      "de": true
    },
    {
      "nome": "Regulagem de freios",
      "grupo": "Reparos",
      "preco": 30,
      "detalhe": "Freio a disco ou V-brake",
      "de": true
    },
    {
      "nome": "Alinhamento de roda",
      "grupo": "Reparos",
      "preco": 35,
      "detalhe": "Centragem de aro",
      "de": true
    },
    {
      "nome": "Montagem de bike nova",
      "grupo": "Montagem",
      "preco": 70,
      "detalhe": "Montagem e ajustes",
      "de": true
    }
  ],
  "pedido": {
    "rotulo": "Meus serviços",
    "verbo": "Gostaria de agendar estes serviços",
    "acao": "Enviar pelo WhatsApp"
  },
  "formulario": {
    "titulo": "Agende uma revisão",
    "sub": "Escolha o dia e conte o que a bike precisa.",
    "botao": "Agendar pelo WhatsApp",
    "assunto": "Gostaria de agendar um serviço na minha bicicleta.",
    "campos": [
      {
        "id": "nome",
        "rotulo": "Seu nome",
        "tipo": "texto",
        "obrigatorio": true
      },
      {
        "id": "tipo",
        "rotulo": "Tipo de bicicleta",
        "tipo": "select",
        "opcoes": [
          "Urbana",
          "MTB",
          "Estrada/Speed",
          "Elétrica",
          "Infantil",
          "Outra"
        ]
      },
      {
        "id": "data",
        "rotulo": "Data desejada",
        "tipo": "data",
        "obrigatorio": true
      },
      {
        "id": "prob",
        "rotulo": "O que precisa ser feito?",
        "tipo": "longo"
      }
    ]
  },
  "diferenciais": [
    [
      "Revisão por etapas",
      "Você sabe o que foi checado em cada parte."
    ],
    [
      "Peças aprovadas antes",
      "Nada é trocado sem a sua autorização."
    ],
    [
      "Prazo curto",
      "Serviços simples costumam ficar prontos rápido."
    ]
  ]
};
