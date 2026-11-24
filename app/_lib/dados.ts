/* Dados ilustrativos do protótipo — sem precisão geográfica ou factual real. */

export type Categoria = {
  id: string;
  nome: string;
};

export type Espaco = {
  id: string;
  nome: string;
  descricao: string;
  categoria: string;
  municipio: string;
  tipo: string;
  horario: string;
  publico: string;
  x: number;
  y: number;
};

export type Thread = {
  id: string;
  titulo: string;
  autor: string;
  data: string;
  respostas: number;
  categoria: string;
  resumo: string;
};

export const DADOS = {
  categorias: [
    { id: "acolhimento", nome: "Acolhimento" },
    { id: "saude", nome: "Saúde" },
    { id: "assistencia", nome: "Assistência" },
    { id: "cultura", nome: "Cultura" },
    { id: "eventos", nome: "Eventos" },
    { id: "organizacoes", nome: "Organizações" },
    { id: "servicos", nome: "Serviços públicos" },
    { id: "direitos", nome: "Informações e Direitos" },
  ] as Categoria[],

  municipios: ["Iguatu", "Icó", "Quixelô", "Orós", "Jucás", "Acopiara", "Cedro"],

  espacos: [
    {
      id: "e1",
      nome: "Centro de Acolhimento Arco-Íris",
      descricao:
        "Espaço de escuta e acolhimento para pessoas LGBTQIA+ em situação de vulnerabilidade, com atendimento psicossocial.",
      categoria: "acolhimento",
      municipio: "Iguatu",
      tipo: "Centro de referência",
      horario: "Seg. a sex., 8h às 17h",
      publico: "Pessoas LGBTQIA+",
      x: 32,
      y: 40,
    },
    {
      id: "e2",
      nome: "UBS Vila Esperança",
      descricao:
        "Unidade de saúde com atendimento ambulatorial de rotina e orientação sobre prevenção de ISTs.",
      categoria: "saude",
      municipio: "Iguatu",
      tipo: "Unidade de saúde",
      horario: "Seg. a sex., 7h às 18h",
      publico: "População geral",
      x: 58,
      y: 28,
    },
    {
      id: "e3",
      nome: "CRAS Novo Horizonte",
      descricao:
        "Centro de referência de assistência social com acompanhamento de famílias e encaminhamento a benefícios.",
      categoria: "assistencia",
      municipio: "Icó",
      tipo: "Assistência social",
      horario: "Seg. a sex., 8h às 16h",
      publico: "Famílias em vulnerabilidade",
      x: 74,
      y: 62,
    },
    {
      id: "e4",
      nome: "Casa Cultural Flor de Mandacaru",
      descricao:
        "Espaço cultural com rodas de conversa, exposições e atividades artísticas voltadas à diversidade.",
      categoria: "cultura",
      municipio: "Quixelô",
      tipo: "Espaço cultural",
      horario: "Ter. a sáb., 13h às 20h",
      publico: "Comunidade em geral",
      x: 20,
      y: 68,
    },
    {
      id: "e5",
      nome: "Coletivo Vozes Diversas",
      descricao:
        "Organização não governamental que atua em defesa de direitos humanos e promoção da cidadania LGBTQIA+.",
      categoria: "organizacoes",
      municipio: "Iguatu",
      tipo: "ONG",
      horario: "Seg. a sex., 9h às 17h",
      publico: "Pessoas LGBTQIA+ e familiares",
      x: 45,
      y: 50,
    },
    {
      id: "e6",
      nome: "Núcleo de Defesa de Direitos de Orós",
      descricao:
        "Atendimento jurídico gratuito e orientação sobre direitos de mulheres e da população LGBTQIA+.",
      categoria: "direitos",
      municipio: "Orós",
      tipo: "Órgão público",
      horario: "Qua. e qui., 8h às 12h",
      publico: "Mulheres e pessoas LGBTQIA+",
      x: 65,
      y: 78,
    },
    {
      id: "e7",
      nome: "Grupo de Apoio Respira",
      descricao:
        "Grupo de apoio mútuo com encontros quinzenais para troca de experiências e acolhimento emocional.",
      categoria: "acolhimento",
      municipio: "Jucás",
      tipo: "Grupo de apoio",
      horario: "A cada 15 dias, sábados às 15h",
      publico: "Pessoas LGBTQIA+",
      x: 15,
      y: 30,
    },
    {
      id: "e8",
      nome: "CAPS Acopiara",
      descricao:
        "Centro de atenção psicossocial com suporte em saúde mental e encaminhamento para tratamento especializado.",
      categoria: "saude",
      municipio: "Acopiara",
      tipo: "Unidade de saúde",
      horario: "Seg. a sex., 7h30 às 17h",
      publico: "População geral",
      x: 82,
      y: 42,
    },
  ] as Espaco[],

  threads: [
    {
      id: "t1",
      titulo: "Como foi a experiência de vocês buscando acolhimento na região?",
      autor: "luan.m",
      data: "2026-09-02",
      respostas: 6,
      categoria: "acolhimento",
      resumo:
        "Estou chegando em Iguatu e gostaria de saber de espaços e pessoas que recebem bem a comunidade por aqui…",
    },
    {
      id: "t2",
      titulo: "Dicas de atendimento de saúde com equipe preparada",
      autor: "bia.costa",
      data: "2026-08-21",
      respostas: 3,
      categoria: "saude",
      resumo:
        "Alguém pode indicar unidades de saúde da região que tenham profissionais mais preparados para atendimento humanizado?",
    },
    {
      id: "t3",
      titulo: "Grupo de apoio para famílias",
      autor: "rafa.santos",
      data: "2026-08-10",
      respostas: 2,
      categoria: "assistencia",
      resumo:
        "Minha família está em processo de entender e acolher, buscamos algum grupo de apoio voltado a familiares.",
    },
    {
      id: "t4",
      titulo: "Atividades culturais no próximo mês",
      autor: "duda.art",
      data: "2026-07-28",
      respostas: 4,
      categoria: "cultura",
      resumo:
        "Vi que tem uma programação cultural chegando, alguém sabe se vai ter alguma atividade voltada à diversidade?",
    },
  ] as Thread[],
};
