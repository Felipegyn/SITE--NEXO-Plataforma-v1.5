/* NEXO · Exemplo: Manicure e pedicure — copie para config.js */
const CONFIG = {
  "negocio": {
    "nome": "Studio de Unhas Exemplo",
    "rotulo": "Manicure e pedicure",
    "slogan": "Unhas cuidadas, com hora marcada e materiais esterilizados.",
    "sobre": "Atendimento individual, com agendamento e materiais higienizados a cada cliente.",
    "endereco": "Rua Exemplo, 100 — Centro",
    "cidade": "Recife — PE",
    "mapaBusca": "Studio de Unhas Exemplo Recife",
    "horarios": [
      [
        "Segunda a sábado",
        "9h às 18h"
      ]
    ],
    "whatsapp": "5581997488294",
    "instagram": "",
    "cor": "#b04a7a",
    "corSobre": "#ffffff",
    "imagemTopo": ""
  },
  "itensTitulo": "Serviços e valores",
  "itensSub": "Valores de referência. Confirmamos ao agendar.",
  "itens": [
    {
      "nome": "Manicure",
      "grupo": "Serviços",
      "preco": 30,
      "detalhe": "",
      "de": false
    },
    {
      "nome": "Pedicure",
      "grupo": "Serviços",
      "preco": 35,
      "detalhe": "",
      "de": false
    },
    {
      "nome": "Mão e pé",
      "grupo": "Serviços",
      "preco": 60,
      "detalhe": "",
      "de": false
    },
    {
      "nome": "Esmaltação em gel",
      "grupo": "Serviços",
      "preco": null,
      "detalhe": "Sob consulta",
      "de": false
    },
    {
      "nome": "Alongamento",
      "grupo": "Serviços",
      "preco": null,
      "detalhe": "Sob avaliação",
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
        "id": "loc",
        "rotulo": "Atendimento",
        "tipo": "select",
        "opcoes": [
          "No studio",
          "Em domicílio (consulte a área)"
        ]
      }
    ]
  },
  "diferenciais": [
    [
      "Materiais esterilizados",
      "Higiene a cada atendimento."
    ],
    [
      "Hora marcada",
      "Atendimento sem pressa."
    ],
    [
      "Seu estilo",
      "Cores e acabamento do seu jeito."
    ]
  ]
};
