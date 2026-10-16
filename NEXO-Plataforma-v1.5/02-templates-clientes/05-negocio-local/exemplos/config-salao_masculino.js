/* NEXO · Exemplo: Barbearia / salão masculino — copie para config.js */
const CONFIG = {
  "negocio": {
    "nome": "Barbearia Exemplo",
    "rotulo": "Barbearia",
    "slogan": "Corte, barba e cuidado com hora marcada.",
    "sobre": "Atendimento com horário agendado, ambiente tranquilo e profissionais atentos ao seu estilo.",
    "endereco": "Rua Exemplo, 100 — Centro",
    "cidade": "Recife — PE",
    "mapaBusca": "Barbearia Exemplo Recife",
    "horarios": [
      [
        "Terça a sábado",
        "9h às 20h"
      ],
      [
        "Domingo e segunda",
        "Fechado"
      ]
    ],
    "whatsapp": "5581997488294",
    "instagram": "",
    "cor": "#2a2a30",
    "corSobre": "#ffffff",
    "imagemTopo": ""
  },
  "itensTitulo": "Serviços e valores",
  "itensSub": "Valores de referência. Escolha e agende pelo WhatsApp.",
  "itens": [
    {
      "nome": "Corte masculino",
      "grupo": "Serviços",
      "preco": 40,
      "detalhe": "Máquina e tesoura",
      "de": false
    },
    {
      "nome": "Barba",
      "grupo": "Serviços",
      "preco": 30,
      "detalhe": "Toalha quente e finalização",
      "de": false
    },
    {
      "nome": "Corte + barba",
      "grupo": "Serviços",
      "preco": 65,
      "detalhe": "Combo",
      "de": false
    },
    {
      "nome": "Sobrancelha",
      "grupo": "Serviços",
      "preco": 15,
      "detalhe": "",
      "de": false
    },
    {
      "nome": "Pigmentação",
      "grupo": "Serviços",
      "preco": null,
      "detalhe": "Sob consulta",
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
    "sub": "Escolha dia e período. Confirmamos o horário exato pelo WhatsApp.",
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
        "id": "prof",
        "rotulo": "Profissional",
        "tipo": "select",
        "opcoes": [
          "Sem preferência",
          "Profissional 1",
          "Profissional 2"
        ]
      }
    ]
  },
  "diferenciais": [
    [
      "Hora marcada",
      "Menos espera, mais pontualidade."
    ],
    [
      "Higiene",
      "Materiais higienizados a cada atendimento."
    ],
    [
      "Seu estilo",
      "Conversamos antes de começar o corte."
    ]
  ]
};
