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
  contato?: string;
  fonte?: string;
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

export type Evento = {
  id: string;
  nome: string;
  descricao: string;
  data: string;
  horario: string;
  local: string;
  municipio: string;
  publico: string;
  contato?: string;
  fonte?: string;
  mapaEspacoId?: string;
  mapX?: number;
  mapY?: number;
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
      fonte: "https://www.gov.br/saude/pt-br/composicao/saps/atencao-primaria",
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
      fonte:
        "https://www.gov.br/pt-br/servicos/acessar-o-cras-centro-de-referencia-da-assistencia-social",
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
      fonte: "https://www.gov.br/saude/pt-br/composicao/saes/desmad/raps/caps",
    },
    {
      id: "e9",
      nome: "Centro de Orientação Cidadã (demonstrativo)",
      descricao:
        "Serviço público fictício para orientação sobre documentação, acesso a benefícios e encaminhamento para a rede municipal de apoio.",
      categoria: "servicos",
      municipio: "Iguatu",
      tipo: "Serviço público demonstrativo",
      horario: "Seg. a sex., 8h às 16h",
      publico: "População geral",
      x: 39,
      y: 22,
    },
    {
      id: "e10",
      nome: "Ponto de Apoio à Mulher (demonstrativo)",
      descricao:
        "Exemplo fictício de atendimento para escuta, orientação sobre direitos e encaminhamento para serviços de proteção.",
      categoria: "servicos",
      municipio: "Icó",
      tipo: "Atendimento público demonstrativo",
      horario: "Seg. a sex., 8h às 16h",
      publico: "Mulheres",
      x: 85,
      y: 24,
    },
    {
      id: "e11",
      nome: "Balcão de Direitos e Cidadania (demonstrativo)",
      descricao:
        "Exemplo fictício de serviço municipal com informações sobre documentação, direitos sociais e encaminhamentos.",
      categoria: "servicos",
      municipio: "Jucás",
      tipo: "Serviço público demonstrativo",
      horario: "Ter. e qui., 9h às 15h",
      publico: "População geral",
      x: 28,
      y: 84,
    },
    {
      id: "e12",
      nome: "Núcleo de Atendimento Social (demonstrativo)",
      descricao:
        "Exemplo fictício de orientação para acesso a serviços socioassistenciais e encaminhamento para a rede local.",
      categoria: "servicos",
      municipio: "Cedro",
      tipo: "Atendimento público demonstrativo",
      horario: "Seg. a sex., 8h às 16h",
      publico: "Famílias e pessoas em busca de orientação",
      x: 91,
      y: 83,
    },
  ] as Espaco[],

  eventos: [
    {
      id: "ev1",
      nome: "Roda de conversa: redes de apoio e acolhimento",
      descricao:
        "Encontro comunitário demonstrativo para conversar sobre escuta, convivência e formas de fortalecer redes de apoio.",
      data: "2026-11-21",
      horario: "14h às 16h",
      local: "Casa Cultural Flor de Mandacaru",
      municipio: "Quixelô",
      publico: "Comunidade em geral",
      mapaEspacoId: "e4",
    },
    {
      id: "ev2",
      nome: "Oficina de autocuidado e bem-estar",
      descricao:
        "Atividade fictícia com práticas simples de autocuidado e conversa sobre saúde emocional.",
      data: "2026-11-28",
      horario: "9h às 11h30",
      local: "Centro de Acolhimento Arco-Íris",
      municipio: "Iguatu",
      publico: "Pessoas LGBTQIA+ e aliadas",
      mapaEspacoId: "e1",
    },
    {
      id: "ev3",
      nome: "Encontro informativo: direitos e cidadania",
      descricao:
        "Encontro demonstrativo para compartilhar informações gerais sobre direitos e serviços de orientação.",
      data: "2026-12-05",
      horario: "9h às 12h",
      local: "Balcão de Direitos e Cidadania (demonstrativo)",
      municipio: "Jucás",
      publico: "Mulheres e pessoas LGBTQIA+",
      mapaEspacoId: "e11",
    },
    {
      id: "ev4",
      nome: "Feira comunitária de cultura e diversidade",
      descricao:
        "Programação cultural fictícia com apresentações, atividades artísticas e espaço para iniciativas locais.",
      data: "2026-12-12",
      horario: "16h às 20h",
      local: "Praça da comunidade (local ilustrativo)",
      municipio: "Icó",
      publico: "Comunidade em geral",
      mapX: 50,
      mapY: 50,
    },
    {
      id: "ev5",
      nome: "Oficina de acesso a serviços e benefícios",
      descricao:
        "Atividade demonstrativa para apresentar caminhos de busca por serviços públicos e orientação social.",
      data: "2026-12-19",
      horario: "14h às 16h",
      local: "Núcleo de Atendimento Social (demonstrativo)",
      municipio: "Cedro",
      publico: "População geral",
      mapaEspacoId: "e12",
    },
  ] as Evento[],

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
