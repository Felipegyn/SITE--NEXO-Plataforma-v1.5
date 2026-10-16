/* NEXO · Exemplo: Farmácia — copie para config.js */
const CONFIG = {
  "negocio": {
    "nome": "Farmácia Exemplo",
    "rotulo": "Farmácia",
    "slogan": "Atendimento próximo e entrega no bairro.",
    "sobre": "Itens de higiene e cuidado pessoal, serviços de saúde e atendimento por WhatsApp.",
    "endereco": "Rua Exemplo, 100 — Centro",
    "cidade": "Recife — PE",
    "mapaBusca": "Farmácia Exemplo Recife",
    "horarios": [
      [
        "Segunda a sábado",
        "7h às 22h"
      ],
      [
        "Domingo",
        "8h às 20h"
      ]
    ],
    "whatsapp": "5581997488294",
    "instagram": "",
    "cor": "#0b7a5f",
    "corSobre": "#ffffff",
    "imagemTopo": "",
    "aviso": "Medicamentos sujeitos a receita só são vendidos mediante apresentação, conforme a legislação. Disponibilidade e preços confirmados no atendimento. Em caso de emergência, procure um serviço de saúde."
  },
  "itensTitulo": "Produtos e serviços",
  "itensSub": "Consulte disponibilidade pelo WhatsApp. Não fazemos orientação médica por mensagem.",
  "itens": [
    {
      "nome": "Protetor solar",
      "grupo": "Higiene e cuidado",
      "preco": null,
      "detalhe": "Consulte opções",
      "de": false
    },
    {
      "nome": "Sabonete e higiene",
      "grupo": "Higiene e cuidado",
      "preco": null,
      "detalhe": "Consulte opções",
      "de": false
    },
    {
      "nome": "Fraldas e cuidados infantis",
      "grupo": "Higiene e cuidado",
      "preco": null,
      "detalhe": "Consulte opções",
      "de": false
    },
    {
      "nome": "Aferição de pressão arterial",
      "grupo": "Serviços",
      "preco": null,
      "detalhe": "Atendimento no balcão",
      "de": false
    },
    {
      "nome": "Entrega no bairro",
      "grupo": "Serviços",
      "preco": null,
      "detalhe": "Consulte área e taxa",
      "de": false
    }
  ],
  "pedido": {
    "rotulo": "Minha consulta",
    "verbo": "Gostaria de consultar a disponibilidade de",
    "acao": "Enviar pelo WhatsApp"
  },
  "formulario": {
    "titulo": "Consulte disponibilidade",
    "sub": "Informe o produto. Não envie dados de saúde sensíveis; para receitas, vá à farmácia.",
    "botao": "Enviar pelo WhatsApp",
    "assunto": "Gostaria de consultar um produto.",
    "campos": [
      {
        "id": "nome",
        "rotulo": "Seu nome",
        "tipo": "texto",
        "obrigatorio": true
      },
      {
        "id": "prod",
        "rotulo": "Produto desejado",
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
      }
    ]
  },
  "diferenciais": [
    [
      "Atendimento próximo",
      "Tire dúvidas sobre produtos e horários."
    ],
    [
      "Entrega no bairro",
      "Consulte área e taxa."
    ],
    [
      "Aberto até tarde",
      "Horário estendido durante a semana."
    ]
  ]
};
