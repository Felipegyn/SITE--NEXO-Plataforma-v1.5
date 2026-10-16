/* NEXO · Exemplo: Minimercado — copie para config.js */
const CONFIG = {
  "negocio": {
    "nome": "Minimercado Exemplo",
    "rotulo": "Minimercado de bairro",
    "slogan": "Tudo o que falta em casa, aqui pertinho.",
    "sobre": "Conveniência para o dia a dia: pães, bebidas, itens básicos e limpeza, com entrega rápida na vizinhança.",
    "endereco": "Rua Exemplo, 100 — Centro",
    "cidade": "Recife — PE",
    "mapaBusca": "Minimercado Exemplo Recife",
    "horarios": [
      [
        "Todos os dias",
        "6h às 22h"
      ]
    ],
    "whatsapp": "5581997488294",
    "instagram": "",
    "cor": "#0e5a68",
    "corSobre": "#ffffff",
    "imagemTopo": ""
  },
  "itensTitulo": "Mais pedidos",
  "itensSub": "Faltou algo? Peça pelo WhatsApp e avisamos a disponibilidade.",
  "itens": [
    {
      "nome": "Pão francês",
      "grupo": "Básicos",
      "preco": 0.8,
      "detalhe": "unidade",
      "de": false
    },
    {
      "nome": "Leite 1 L",
      "grupo": "Básicos",
      "preco": 5.5,
      "detalhe": "",
      "de": false
    },
    {
      "nome": "Ovos (dúzia)",
      "grupo": "Básicos",
      "preco": 12,
      "detalhe": "",
      "de": false
    },
    {
      "nome": "Água mineral 1,5 L",
      "grupo": "Básicos",
      "preco": 3.5,
      "detalhe": "",
      "de": false
    },
    {
      "nome": "Detergente",
      "grupo": "Limpeza",
      "preco": 2.8,
      "detalhe": "",
      "de": false
    },
    {
      "nome": "Papel higiênico (4 un.)",
      "grupo": "Limpeza",
      "preco": 8.9,
      "detalhe": "",
      "de": false
    },
    {
      "nome": "Refrigerante 2 L",
      "grupo": "Bebidas",
      "preco": 9.5,
      "detalhe": "",
      "de": false
    },
    {
      "nome": "Cerveja lata",
      "grupo": "Bebidas",
      "preco": 4.5,
      "detalhe": "Venda para maiores de 18 anos",
      "de": false
    }
  ],
  "pedido": {
    "rotulo": "Meu pedido",
    "verbo": "Gostaria de pedir",
    "acao": "Enviar pedido pelo WhatsApp"
  },
  "formulario": {
    "titulo": "Peça pelo WhatsApp",
    "sub": "Informe seu endereço e o que precisa.",
    "botao": "Enviar pelo WhatsApp",
    "assunto": "Quero fazer um pedido.",
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
      "Aberto até tarde",
      "Atendimento no horário em que você precisa."
    ],
    [
      "Entrega rápida",
      "Pedidos pequenos para quem mora perto."
    ],
    [
      "Preço de bairro",
      "Atendimento próximo e sem complicação."
    ]
  ],
  "aviso": "Venda de bebidas alcoólicas apenas para maiores de 18 anos."
};
