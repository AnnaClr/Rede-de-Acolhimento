export type GrupoDireitos = "lgbtqia" | "mulheres";

export type FonteDireito = {
  id: string;
  grupo: GrupoDireitos;
  referencia: string;
  titulo: string;
  resumo: string;
  rotuloFonte: string;
  url: string;
  rotuloFonteComplementar?: string;
  urlFonteComplementar?: string;
};

export type CanalApoio = {
  id: string;
  nome: string;
  numero: string;
  descricao: string;
  url: string;
  whatsapp?: string;
};

export const CANAIS_APOIO: CanalApoio[] = [
  {
    id: "ligue-180",
    nome: "Central de Atendimento à Mulher",
    numero: "180",
    descricao:
      "Informações sobre direitos e serviços, registro e encaminhamento de denúncias de violência contra mulheres. Atendimento nacional e gratuito, 24 horas.",
    url: "https://www.gov.br/mulheres/pt-br/ligue180",
    whatsapp: "556196100180",
  },
  {
    id: "disque-100",
    nome: "Disque Direitos Humanos",
    numero: "100",
    descricao:
      "Recebe e encaminha denúncias de violações de direitos humanos, incluindo as que atingem pessoas LGBTQIA+. Atendimento nacional e gratuito, 24 horas.",
    url: "https://www.gov.br/mdh/pt-br/ondh",
    whatsapp: "5561996110100",
  },
];

export const FONTES_DIREITOS: FonteDireito[] = [
  {
    id: "resolucao-cnj-175",
    grupo: "lgbtqia",
    referencia: "Resolução CNJ nº 175/2013",
    titulo: "Casamento civil entre pessoas do mesmo sexo",
    resumo:
      "Veda aos cartórios recusar a celebração do casamento civil entre pessoas do mesmo sexo ou a conversão de união estável em casamento.",
    rotuloFonte: "Ler a resolução vigente no CNJ",
    url: "https://atos.cnj.jus.br/atos/detalhar/1754",
  },
  {
    id: "adi-4275-provimento-149",
    grupo: "lgbtqia",
    referencia: "STF, ADI 4.275/2018 · CNJ, Provimento nº 149/2023",
    titulo: "Retificação de nome e gênero no registro civil",
    resumo:
      "Reconhece a possibilidade de adequar prenome e gênero no registro civil conforme a identidade de gênero, sem exigir cirurgia ou tratamento hormonal. As regras registrais atuais estão consolidadas no Código Nacional de Normas do CNJ.",
    rotuloFonte: "Consultar decisão do STF",
    url: "https://portal.stf.jus.br/processos/detalhe.asp?incidente=2691371",
    rotuloFonteComplementar: "Consultar norma atual do CNJ",
    urlFonteComplementar: "https://atos.cnj.jus.br/atos/detalhar/5243",
  },
  {
    id: "ado-26-mi-4733",
    grupo: "lgbtqia",
    referencia: "STF, ADO 26 e MI 4.733/2019",
    titulo: "Proteção contra homotransfobia",
    resumo:
      "Enquanto não houver lei específica do Congresso, o STF determinou o enquadramento de condutas homofóbicas e transfóbicas no marco legal aplicável ao racismo.",
    rotuloFonte: "Consultar decisão do STF",
    url: "https://portal.stf.jus.br/processos/detalhe.asp?incidente=4515053",
    rotuloFonteComplementar: "Ler resumo do julgamento",
    urlFonteComplementar:
      "https://portal.stf.jus.br/noticias/verNoticiaDetalhe.asp?idConteudo=414010",
  },
  {
    id: "lei-maria-da-penha",
    grupo: "mulheres",
    referencia: "Lei nº 11.340/2006",
    titulo: "Lei Maria da Penha",
    resumo:
      "Estabelece mecanismos de prevenção e enfrentamento da violência doméstica e familiar contra a mulher, incluindo medidas protetivas e atuação integrada da rede de atendimento.",
    rotuloFonte: "Ler o texto da lei no Planalto",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11340.htm",
  },
  {
    id: "lei-feminicidio",
    grupo: "mulheres",
    referencia: "Lei nº 14.994/2024",
    titulo: "Crime autônomo de feminicídio",
    resumo:
      "Tornou o feminicídio crime autônomo e elevou penas para esse crime e determinadas infrações relacionadas.",
    rotuloFonte: "Ler o texto da lei no Planalto",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/l14994.htm",
  },
  {
    id: "lei-igualdade-salarial",
    grupo: "mulheres",
    referencia: "Lei nº 14.611/2023",
    titulo: "Igualdade salarial entre mulheres e homens",
    resumo:
      "Prevê igualdade salarial e de critérios remuneratórios para trabalho de igual valor ou exercício da mesma função, com medidas de transparência e fiscalização.",
    rotuloFonte: "Ler o texto da lei no Planalto",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14611.htm",
  },
];
