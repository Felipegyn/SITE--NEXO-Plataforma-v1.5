/* ===== NEXO · TEMPLATE LOJA · CONFIGURAÇÃO =====
   Para um novo cliente, edite SOMENTE este arquivo e a pasta img/.
   Dados fictícios de demonstração. Preço: número (ex.: 129.9) ou null = "Sob consulta". */
const CONFIG = {
  loja: {
    nome: "Loja Exemplo",
    slogan: "Peças selecionadas para o seu dia a dia, com atendimento próximo.",
    sobre: "Somos uma loja de bairro que reúne roupas e acessórios escolhidos com cuidado. Atendemos na loja e pelo WhatsApp, e separamos o que você quiser para retirada.",
    diferenciais: [
      ["Atendimento pessoal","Ajudamos você a escolher, pessoalmente ou pelo WhatsApp."],
      ["Separamos para você","Escolha pelo site e combine a retirada ou a entrega."],
      ["Novidades toda semana","Acompanhe as peças novas no catálogo e no Instagram."]
    ],
    endereco: "Rua Exemplo, 456 — Centro", cidade: "Recife — PE",
    mapaBusca: "Loja Exemplo Centro Recife",
    horarios: [["Segunda a sexta","9h às 18h"],["Sábado","9h às 14h"],["Domingo","Fechado"]],
    whatsapp: "5581997488294",          // troque pelo WhatsApp da loja
    instagram: "",                        // ex.: "https://instagram.com/sualoja"
    avaliacaoUrl: "",                     // link oficial de avaliação do Perfil da Empresa no Google
    cor: "#8b4a2b", corSobre: "#ffffff",
    imagemTopo: "img/hero.webp"
  },
  // foto opcional por produto: foto:"img/produto1.webp"
  produtos: [
    {nome:"Casaco de lã",categoria:"Casacos",preco:289.9,descricao:"Casaco macio e quente, corte reto. Consulte tamanhos e cores.",novo:true,foto:"img/p1.webp"},
    {nome:"Cachecol de tricô",categoria:"Acessórios",preco:79.9,descricao:"Cachecol longo com franjas, ótimo para dias frios.",novo:true,foto:"img/p2.webp"},
    {nome:"Bolsa de couro",categoria:"Bolsas",preco:349.9,descricao:"Bolsa estruturada com alça de mão e alça transversal.",foto:"img/p3.webp"},
    {nome:"Blusa de tricô",categoria:"Blusas",preco:139.9,descricao:"Tricô fino, confortável e fácil de combinar.",foto:"img/p4.webp"},
    {nome:"Camisa de linho",categoria:"Blusas",preco:159.9,descricao:"Camisa leve de linho, modelagem solta.",foto:"img/p5.webp"},
    {nome:"Calça alfaiataria",categoria:"Calças",preco:219.9,descricao:"Calça de cintura alta, caimento reto.",foto:"img/p6.webp"},
    {nome:"Pulseira dourada",categoria:"Acessórios",preco:59.9,descricao:"Pulseira delicada, banho dourado.",foto:"img/p7.webp"},
    {nome:"Carteira pequena",categoria:"Bolsas",preco:null,descricao:"Carteira compacta com divisórias. Valor sob consulta.",foto:"img/p8.webp"}
  ]
};
