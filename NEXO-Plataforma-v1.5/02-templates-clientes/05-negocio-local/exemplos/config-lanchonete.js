/* NEXO · Exemplo: Lanchonete — copie para config.js */
const CONFIG = {
  "negocio": {
    "nome": "Lanchonete Exemplo",
    "rotulo": "Lanchonete",
    "slogan": "Lanches feitos na hora, direto do balcão para a sua mesa.",
    "sobre": "Lanches, porções e bebidas com atendimento rápido, no local, para retirada ou entrega.",
    "endereco": "Rua Exemplo, 100 — Centro",
    "cidade": "Recife — PE",
    "mapaBusca": "Lanchonete Exemplo Recife",
    "horarios": [
      [
        "Terça a domingo",
        "17h às 23h"
      ],
      [
        "Segunda",
        "Fechado"
      ]
    ],
    "whatsapp": "5581997488294",
    "instagram": "",
    "cor": "#b3361b",
    "corSobre": "#ffffff",
    "imagemTopo": ""
  },
  "itensTitulo": "Cardápio",
  "itensSub": "Monte seu pedido e envie pelo WhatsApp. Valores sujeitos a alteração.",
  "itens": [
    {
      "nome": "X-Burger",
      "grupo": "Lanches",
      "preco": 22,
      "detalhe": "Pão, hambúrguer, queijo e salada",
      "de": false
    },
    {
      "nome": "X-Bacon",
      "grupo": "Lanches",
      "preco": 26,
      "detalhe": "Hambúrguer, queijo e bacon",
      "de": false
    },
    {
      "nome": "Misto quente",
      "grupo": "Lanches",
      "preco": 12,
      "detalhe": "Presunto e queijo",
      "de": false
    },
    {
      "nome": "Batata frita",
      "grupo": "Porções",
      "preco": 24,
      "detalhe": "Porção média",
      "de": false
    },
    {
      "nome": "Calabresa acebolada",
      "grupo": "Porções",
      "preco": 28,
      "detalhe": "Porção média",
      "de": false
    },
    {
      "nome": "Refrigerante lata",
      "grupo": "Bebidas",
      "preco": 6,
      "detalhe": "",
      "de": false
    },
    {
      "nome": "Suco natural",
      "grupo": "Bebidas",
      "preco": 9,
      "detalhe": "Sabores do dia",
      "de": false
    },
    {
      "nome": "Água",
      "grupo": "Bebidas",
      "preco": 4,
      "detalhe": "",
      "de": false
    }
  ],
  "pedido": {
    "rotulo": "Meu pedido",
    "verbo": "Gostaria de fazer um pedido",
    "acao": "Enviar pedido pelo WhatsApp"
  },
  "formulario": {
    "titulo": "Finalize o pedido",
    "sub": "Informe como prefere receber.",
    "botao": "Enviar pelo WhatsApp",
    "assunto": "Quero finalizar meu pedido.",
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
        "id": "obs",
        "rotulo": "Observações (opcional)",
        "tipo": "longo"
      }
    ]
  },
  "diferenciais": [
    [
      "Feito na hora",
      "Seu pedido é preparado depois da confirmação."
    ],
    [
      "Retirada ou entrega",
      "Combine a melhor opção pelo WhatsApp."
    ],
    [
      "Atendimento direto",
      "Tire dúvidas sobre o cardápio sem fila."
    ]
  ]
};
