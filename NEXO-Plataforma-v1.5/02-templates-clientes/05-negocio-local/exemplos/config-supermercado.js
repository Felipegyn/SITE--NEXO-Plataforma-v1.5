/* NEXO · Exemplo: Supermercado — copie para config.js */
const CONFIG = {
  "negocio": {
    "nome": "Supermercado Exemplo",
    "rotulo": "Supermercado",
    "slogan": "Ofertas da semana e compras com entrega no bairro.",
    "sobre": "Variedade de produtos, ofertas semanais e a opção de enviar sua lista de compras pelo WhatsApp.",
    "endereco": "Rua Exemplo, 100 — Centro",
    "cidade": "Recife — PE",
    "mapaBusca": "Supermercado Exemplo Recife",
    "horarios": [
      [
        "Segunda a sábado",
        "7h às 21h"
      ],
      [
        "Domingo",
        "8h às 13h"
      ]
    ],
    "whatsapp": "5581997488294",
    "instagram": "",
    "cor": "#0b6b3a",
    "corSobre": "#ffffff",
    "imagemTopo": ""
  },
  "itensTitulo": "Ofertas da semana",
  "itensSub": "Preços válidos enquanto durarem os estoques. Confirme no atendimento.",
  "itens": [
    {
      "nome": "Banana prata",
      "grupo": "Hortifruti",
      "preco": 5.99,
      "detalhe": "por kg",
      "de": false
    },
    {
      "nome": "Tomate",
      "grupo": "Hortifruti",
      "preco": 6.49,
      "detalhe": "por kg",
      "de": false
    },
    {
      "nome": "Batata inglesa",
      "grupo": "Hortifruti",
      "preco": 4.99,
      "detalhe": "por kg",
      "de": false
    },
    {
      "nome": "Arroz branco 5 kg",
      "grupo": "Mercearia",
      "preco": 26.9,
      "detalhe": "",
      "de": false
    },
    {
      "nome": "Feijão carioca 1 kg",
      "grupo": "Mercearia",
      "preco": 7.9,
      "detalhe": "",
      "de": false
    },
    {
      "nome": "Café torrado 500 g",
      "grupo": "Mercearia",
      "preco": 19.9,
      "detalhe": "",
      "de": false
    },
    {
      "nome": "Frango inteiro",
      "grupo": "Açougue",
      "preco": 11.9,
      "detalhe": "por kg",
      "de": false
    },
    {
      "nome": "Carne moída",
      "grupo": "Açougue",
      "preco": 32.9,
      "detalhe": "por kg",
      "de": false
    }
  ],
  "pedido": {
    "rotulo": "Minha lista",
    "verbo": "Gostaria de comprar",
    "acao": "Enviar lista pelo WhatsApp"
  },
  "formulario": {
    "titulo": "Entrega ou retirada",
    "sub": "Envie sua lista e combine como receber.",
    "botao": "Enviar pelo WhatsApp",
    "assunto": "Quero fazer minhas compras.",
    "campos": [
      {
        "id": "nome",
        "rotulo": "Seu nome",
        "tipo": "texto",
        "obrigatorio": true
      },
      {
        "id": "ent",
        "rotulo": "Entrega ou retirada?",
        "tipo": "select",
        "opcoes": [
          "Retirada no local",
          "Entrega"
        ]
      },
      {
        "id": "end",
        "rotulo": "Endereço para entrega (se for o caso)",
        "tipo": "texto"
      },
      {
        "id": "lista",
        "rotulo": "Outros itens da sua lista",
        "tipo": "longo"
      }
    ]
  },
  "diferenciais": [
    [
      "Ofertas toda semana",
      "Confira os destaques e peça pelo WhatsApp."
    ],
    [
      "Entrega no bairro",
      "Consulte área e taxa com a loja."
    ],
    [
      "Produtos frescos",
      "Hortifruti e açougue renovados diariamente."
    ]
  ]
};
