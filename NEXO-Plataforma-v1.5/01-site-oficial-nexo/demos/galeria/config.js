/* ===== NEXO · TEMPLATE GALERIA COMERCIAL · CONFIGURAÇÃO =====
   Para um novo cliente, edite SOMENTE este arquivo e a pasta img/.
   Os dados abaixo são fictícios (demonstração). */
const CONFIG = {
  galeria: {
    nome: "Galeria Exemplo",
    slogan: "Todas as lojas, serviços e novidades em um só lugar.",
    endereco: "Rua Exemplo, 123 — Centro",
    cidade: "Recife — PE",
    mapaBusca: "Galeria Exemplo Centro Recife",
    whatsapp: "5581997488294",      // troque pelo WhatsApp da administração
    instagram: "",                    // ex.: "https://instagram.com/suagaleria"
    cor: "#0f5c4d",                   // cor principal da marca da galeria
    corSobre: "#ffffff",              // cor do texto sobre a cor principal
    imagemTopo: "img/hero.webp",
    horarios: [["Segunda a sexta","9h às 19h"],["Sábado","9h às 17h"],["Domingo e feriados","Fechado"]],
    comoChegar: "Estacionamento conveniado ao lado e ponto de ônibus em frente. Acesso com rampa para cadeirantes."
  },
  // piso: "Térreo", "1º piso"... | categoria livre | whatsapp/instagram opcionais
  lojas: [
    {nome:"Moda Viva",categoria:"Moda",piso:"Térreo",loja:"01",descricao:"Roupas femininas e masculinas para o dia a dia e ocasiões especiais.",whatsapp:"",instagram:""},
    {nome:"Sapatos & Cia",categoria:"Moda",piso:"Térreo",loja:"02",descricao:"Calçados, bolsas e acessórios para toda a família.",whatsapp:"",instagram:""},
    {nome:"Casa do Café",categoria:"Alimentação",piso:"Térreo",loja:"03",descricao:"Cafés, lanches rápidos e doces artesanais.",whatsapp:"",instagram:""},
    {nome:"Lanches Express",categoria:"Alimentação",piso:"Térreo",loja:"04",descricao:"Salgados, sucos e refeições leves para o seu intervalo.",whatsapp:"",instagram:""},
    {nome:"Celular Fácil",categoria:"Eletrônicos",piso:"Térreo",loja:"05",descricao:"Acessórios, capas, películas e assistência rápida para celulares.",whatsapp:"",instagram:""},
    {nome:"Ótica Visão",categoria:"Saúde e beleza",piso:"1º piso",loja:"06",descricao:"Armações, lentes e atendimento para sua saúde visual.",whatsapp:"",instagram:""},
    {nome:"Studio Bela",categoria:"Saúde e beleza",piso:"1º piso",loja:"07",descricao:"Cabelo, unhas e estética com horário agendado.",whatsapp:"",instagram:""},
    {nome:"Barbearia do Zé",categoria:"Saúde e beleza",piso:"1º piso",loja:"08",descricao:"Corte, barba e cuidados masculinos.",whatsapp:"",instagram:""},
    {nome:"Papelaria Ponto",categoria:"Casa e papelaria",piso:"1º piso",loja:"09",descricao:"Material escolar, de escritório e presentes criativos.",whatsapp:"",instagram:""},
    {nome:"Presentes da Ana",categoria:"Casa e papelaria",piso:"1º piso",loja:"10",descricao:"Lembranças, decoração e embalagens para presente.",whatsapp:"",instagram:""},
    {nome:"Relojoaria Tempo",categoria:"Serviços",piso:"1º piso",loja:"11",descricao:"Troca de bateria, pulseiras e consertos de relógios.",whatsapp:"",instagram:""},
    {nome:"Costura Perfeita",categoria:"Serviços",piso:"Térreo",loja:"12",descricao:"Ajustes e reformas de roupas com prazo combinado.",whatsapp:"",instagram:""}
  ],
  promocoes: [
    {loja:"Moda Viva",titulo:"Liquidação de coleção anterior",detalhe:"Peças selecionadas com condições especiais.",validade:"Consulte a loja"},
    {loja:"Casa do Café",titulo:"Combo café + salgado",detalhe:"Disponível no horário da tarde.",validade:"Consulte a loja"},
    {loja:"Papelaria Ponto",titulo:"Kit volta às aulas",detalhe:"Material escolar com preço promocional.",validade:"Consulte a loja"}
  ],
  vagas: [
    {id:"V-13",piso:"Térreo",area:"18 m²",descricao:"Frente para o corredor principal, com ponto de água e energia.",status:"Disponível"},
    {id:"V-14",piso:"1º piso",area:"24 m²",descricao:"Ideal para serviços e consultórios, próximo à escada.",status:"Disponível"},
    {id:"V-15",piso:"1º piso",area:"12 m²",descricao:"Espaço compacto para quiosque ou loja pequena.",status:"Sob consulta"}
  ]
};
