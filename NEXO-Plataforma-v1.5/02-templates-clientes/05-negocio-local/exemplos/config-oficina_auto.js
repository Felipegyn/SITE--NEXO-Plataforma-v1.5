/* NEXO · Exemplo: Oficina automotiva — copie para config.js */
const CONFIG = {
  "negocio": {
    "nome": "Auto Center Exemplo",
    "rotulo": "Oficina mecânica",
    "slogan": "Diagnóstico claro e serviço combinado antes de começar.",
    "sobre": "Cuidamos do seu carro com orçamento transparente, peças informadas e prazo combinado.",
    "endereco": "Rua Exemplo, 100 — Centro",
    "cidade": "Recife — PE",
    "mapaBusca": "Auto Center Exemplo Recife",
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
    "cor": "#1f4e79",
    "corSobre": "#ffffff",
    "imagemTopo": ""
  },
  "itensTitulo": "Serviços",
  "itensSub": "Valores iniciais de referência. O orçamento final depende do veículo e do diagnóstico.",
  "itens": [
    {
      "nome": "Revisão preventiva",
      "grupo": "Manutenção",
      "preco": null,
      "detalhe": "Checagem completa de itens de segurança",
      "de": false
    },
    {
      "nome": "Troca de óleo e filtros",
      "grupo": "Manutenção",
      "preco": null,
      "detalhe": "Conforme o manual do veículo",
      "de": false
    },
    {
      "nome": "Freios",
      "grupo": "Freios e suspensão",
      "preco": null,
      "detalhe": "Pastilhas, discos e fluido",
      "de": false
    },
    {
      "nome": "Suspensão e direção",
      "grupo": "Freios e suspensão",
      "preco": null,
      "detalhe": "Amortecedores, buchas e terminais",
      "de": false
    },
    {
      "nome": "Alinhamento e balanceamento",
      "grupo": "Freios e suspensão",
      "preco": null,
      "detalhe": "Mais estabilidade e menor desgaste",
      "de": false
    },
    {
      "nome": "Diagnóstico eletrônico",
      "grupo": "Elétrica",
      "preco": null,
      "detalhe": "Leitura de falhas e testes",
      "de": false
    },
    {
      "nome": "Bateria e alternador",
      "grupo": "Elétrica",
      "preco": null,
      "detalhe": "Teste e troca",
      "de": false
    }
  ],
  "pedido": null,
  "formulario": {
    "titulo": "Peça seu orçamento",
    "sub": "Conte o problema. Respondemos pelo WhatsApp para combinar o diagnóstico.",
    "botao": "Pedir orçamento pelo WhatsApp",
    "assunto": "Gostaria de um orçamento para o meu veículo.",
    "campos": [
      {
        "id": "nome",
        "rotulo": "Seu nome",
        "tipo": "texto",
        "obrigatorio": true
      },
      {
        "id": "vei",
        "rotulo": "Veículo (marca, modelo e ano)",
        "tipo": "texto",
        "obrigatorio": true
      },
      {
        "id": "srv",
        "rotulo": "Serviço",
        "tipo": "select",
        "opcoes": [
          "Revisão",
          "Troca de óleo",
          "Freios",
          "Suspensão",
          "Elétrica",
          "Não sei, preciso de diagnóstico"
        ]
      },
      {
        "id": "prob",
        "rotulo": "Descreva o problema",
        "tipo": "longo",
        "obrigatorio": true
      }
    ]
  },
  "diferenciais": [
    [
      "Orçamento antes",
      "Você aprova o valor antes do serviço começar."
    ],
    [
      "Peças informadas",
      "Explicamos o que será trocado e por quê."
    ],
    [
      "Prazo combinado",
      "Avisamos se algo mudar durante o serviço."
    ]
  ]
};
