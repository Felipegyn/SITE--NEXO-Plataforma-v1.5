/* ===== NEXO · TEMPLATE ESPAÇO DE LAZER · CONFIGURAÇÃO =====
   Para um novo cliente, edite SOMENTE este arquivo e a pasta img/.
   Dados fictícios de demonstração. */
const CONFIG = {
  espaco: {
    nome: "Espaço Exemplo",
    slogan: "Festas e eventos com piscina, área gourmet e muito conforto.",
    descricao: "Um espaço pensado para aniversários, confraternizações e encontros em família. Consulte datas e condições pelo WhatsApp.",
    endereco: "Estrada Exemplo, km 5", cidade: "Recife — PE",
    mapaBusca: "Espaço Exemplo Recife",
    horarios: [["Visitas","Com agendamento"],["Atendimento","Seg a sáb, 9h às 18h"],["Reservas","Sob consulta"]],
    whatsapp: "5581997488294",           // troque pelo WhatsApp do espaço
    instagram: "",
    capacidade: 80,                        // usado para avisar o visitante sobre nº de convidados
    destaques: [["80","convidados"],["600 m²","de área"],["20","vagas de estacionamento"]],
    cor: "#0e5a68", corSobre: "#ffffff",
    imagemTopo: "img/hero.webp"
  },
  // cada item usa a imagem do topo se não tiver src. Em produção, use fotos reais: src:"img/foto1.webp"
  fotos: [
    {legenda:"Piscina e área externa",pos:"70% 60%",zoom:1},
    {legenda:"Mesas para convidados",pos:"10% 90%",zoom:1.5},
    {legenda:"Espreguiçadeiras e pergolado",pos:"85% 40%",zoom:1.5}
  ],
  estrutura: ["Piscina","Área gourmet","Mesas e cadeiras","Iluminação decorativa","Estacionamento","Banheiros","Cozinha de apoio","Acesso para cadeirantes"],
  pacotes: [
    {nome:"Festa de dia",descricao:"Aniversários e encontros do dia, com uso da piscina e da área externa.",inclui:["Mesas e cadeiras","Piscina","Banheiros"]},
    {nome:"Festa à noite",descricao:"Eventos noturnos com iluminação decorativa e área gourmet.",inclui:["Iluminação","Área gourmet","Estacionamento"]},
    {nome:"Dia inteiro",descricao:"Reserva completa para confraternizações e eventos maiores.",inclui:["Todo o espaço","Cozinha de apoio","Estacionamento"]}
  ],
  tiposEvento: ["Aniversário","Confraternização","Casamento ou noivado","Evento de empresa","Outro"],
  periodos: ["Manhã","Tarde","Noite","Dia inteiro"],
  regras: [
    ["Como funciona a reserva?","Você envia a data e o período pelo WhatsApp e confirmamos a disponibilidade. A data só é reservada após a confirmação da administração."],
    ["Há limite de convidados?","Sim. O limite é informado neste site e pode variar conforme o tipo de evento."],
    ["Posso levar buffet e decoração?","Combine com a administração antes do evento. As regras são enviadas na confirmação."],
    ["Quais são as regras de som e horário?","Seguem a legislação local e as regras do espaço, informadas na reserva."]
  ]
};
