/* NEXO · Exemplo: Lava-jato automotivo — copie para config.js */
const CONFIG = {
  "negocio": {
    "nome": "Lava Jato Exemplo",
    "rotulo": "Lava-jato",
    "slogan": "Seu veículo limpo por dentro e por fora.",
    "sobre": "Lavagem, higienização e acabamento, com horário agendado para evitar espera.",
    "endereco": "Rua Exemplo, 100 — Centro",
    "cidade": "Recife — PE",
    "mapaBusca": "Lava Jato Exemplo Recife",
    "horarios": [
      [
        "Segunda a sábado",
        "8h às 17h"
      ],
      [
        "Domingo",
        "Fechado"
      ]
    ],
    "whatsapp": "5581997488294",
    "instagram": "",
    "cor": "#0a5f8a",
    "corSobre": "#ffffff",
    "imagemTopo": ""
  },
  "itensTitulo": "Serviços e valores",
  "itensSub": "Valores de referência por porte do veículo. Confirmamos ao agendar.",
  "itens": [
    {
      "nome": "Lavagem simples",
      "grupo": "Serviços",
      "preco": 35,
      "detalhe": "Externa",
      "de": true
    },
    {
      "nome": "Lavagem completa",
      "grupo": "Serviços",
      "preco": 60,
      "detalhe": "Externa e interna",
      "de": true
    },
    {
      "nome": "Higienização interna",
      "grupo": "Serviços",
      "preco": 150,
      "detalhe": "Bancos e carpetes",
      "de": true
    },
    {
      "nome": "Polimento",
      "grupo": "Serviços",
      "preco": null,
      "detalhe": "Sob avaliação",
      "de": false
    },
    {
      "nome": "Lavagem de motor",
      "grupo": "Serviços",
      "preco": 50,
      "detalhe": "",
      "de": true
    }
  ],
  "pedido": {
    "rotulo": "Meus serviços",
    "verbo": "Gostaria de agendar",
    "acao": "Enviar pelo WhatsApp"
  },
  "formulario": {
    "titulo": "Agende sua lavagem",
    "sub": "Escolha o dia e o porte do veículo.",
    "botao": "Agendar pelo WhatsApp",
    "assunto": "Gostaria de agendar uma lavagem.",
    "campos": [
      {
        "id": "nome",
        "rotulo": "Seu nome",
        "tipo": "texto",
        "obrigatorio": true
      },
      {
        "id": "vei",
        "rotulo": "Veículo",
        "tipo": "select",
        "opcoes": [
          "Moto",
          "Carro pequeno",
          "SUV/Sedã grande",
          "Caminhonete"
        ]
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
      }
    ]
  },
  "diferenciais": [
    [
      "Hora marcada",
      "Evite filas escolhendo o seu horário."
    ],
    [
      "Acabamento cuidadoso",
      "Produtos adequados para cada superfície."
    ],
    [
      "Preço combinado",
      "Valor informado antes do serviço."
    ]
  ]
};
