export type Area = {
  slug: string;
  title: string;
  summary: string;
  intro: string;
  services: string[];
  approach: string;

  seo?: {
    title: string;
    description: string;
  };

  content?: {
    title: string;
    paragraphs: string[];
    topics?: {
      title: string;
      text: string;
    }[];
  };
};
export type Lawyer = { slug:string; name:string; role:string; oab:string; areas:string[]; education:string[]; bio:string; publications:string[]; image?:string;};
export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  authorSlugs: string[];
  readTime: string;
  body: string[];
  areaSlugs?: string[];
  image?: string;
  podcast?: {
    platform: string;
    url: string;
    embedUrl?: string;
  };
};

export const areas: Area[] = [
  {
    slug: 'direito-tributario',
  
    title: 'Direito Tributário',
  
    summary:
      'Assessoria jurídica em questões tributárias, planejamento, recuperação de créditos e contencioso administrativo e judicial.',
  
    intro:
      'Atuação jurídica em Direito Tributário voltada à análise de obrigações fiscais, planejamento, recuperação de créditos, prevenção de riscos e condução de questões administrativas e judiciais.',
  
    services: [
      'Planejamento tributário',
      'Análise de questões fiscais',
      'Consultoria tributária',
      'Recuperação de créditos tributários',
      'Processos administrativos tributários',
      'Processos judiciais tributários',
      'Análise de riscos tributários',
      'Acompanhamento de mudanças legislativas'
    ],
  
    approach:
      'Cada questão tributária é analisada considerando o contexto jurídico, econômico e operacional envolvido, com identificação de riscos, alternativas e caminhos juridicamente adequados.',
  
    seo: {
      title: 'Direito Tributário',
      description:
        'Atuação em Direito Tributário, planejamento tributário, recuperação de créditos, questões fiscais e processos administrativos e judiciais.'
    },
  
    content: {
      title: 'Direito Tributário e decisões empresariais',
  
      paragraphs: [
        'A tributação está presente em praticamente todas as atividades empresariais e pode produzir impactos relevantes sobre contratos, operações, investimentos e decisões estratégicas. A análise jurídica tributária busca compreender essas consequências e identificar o tratamento aplicável a cada situação.',
  
        'Mudanças legislativas, interpretações administrativas e decisões judiciais podem alterar o ambiente tributário ao longo do tempo. Por isso, empresas precisam avaliar não apenas as obrigações existentes, mas também os riscos e oportunidades relacionados à sua estrutura e às operações realizadas.',
  
        'A atuação tributária pode ocorrer de forma preventiva, por meio de consultoria e planejamento, ou diante de controvérsias já estabelecidas, inclusive em processos administrativos e judiciais.'
      ],
  
      topics: [
        {
          title: 'Planejamento tributário',
          text:
            'O planejamento tributário envolve a análise das operações e estruturas existentes para avaliar alternativas juridicamente admitidas, seus efeitos fiscais e os riscos associados a cada decisão.'
        },
        {
          title: 'Recuperação de créditos tributários',
          text:
            'A identificação de valores eventualmente recolhidos de forma indevida ou superior ao devido exige análise da legislação, documentação, períodos envolvidos e procedimentos adequados para eventual recuperação ou compensação.'
        },
        {
          title: 'Contencioso tributário',
          text:
            'Discussões relacionadas a cobranças, autuações e interpretações fiscais podem ocorrer tanto na esfera administrativa quanto judicial, exigindo análise dos fundamentos jurídicos, documentos e riscos envolvidos.'
        },
        {
          title: 'Reforma e mudanças tributárias',
          text:
            'Alterações no sistema tributário podem produzir efeitos sobre preços, contratos, sistemas internos e modelos de negócio. O acompanhamento jurídico contribui para identificar impactos e necessidades de adaptação.'
        },
        {
          title: 'Prevenção de riscos fiscais',
          text:
            'A revisão de procedimentos, documentos e operações pode contribuir para identificar pontos de atenção antes que se convertam em autuações, disputas ou custos inesperados.'
        }
      ]
    }
  },
  {
    slug: 'direito-empresarial',
  
    title: 'Direito Empresarial',
  
    summary:
      'Assessoria jurídica para empresas, decisões empresariais, estruturas societárias, governança e prevenção de conflitos.',
  
    intro:
      'Atuação em Direito Empresarial voltada ao suporte jurídico de empresas, sócios e gestores em decisões, estruturas societárias, negociações, governança e prevenção de conflitos.',
  
    services: [
      'Consultoria empresarial',
      'Questões societárias',
      'Governança',
      'Reorganizações',
      'Negociações empresariais',
      'Prevenção de conflitos',
      'Análise de riscos jurídicos',
      'Apoio jurídico a decisões empresariais'
    ],
  
    approach:
      'A atuação considera os objetivos do negócio, os riscos envolvidos e as alternativas juridicamente disponíveis para cada decisão.',
  
    seo: {
      title: 'Direito Empresarial',
      description:
        'Atuação em Direito Empresarial, consultoria para empresas, questões societárias, governança, negociações e prevenção de conflitos.'
    },
  
    content: {
      title: 'Direito Empresarial aplicado às decisões do negócio',
  
      paragraphs: [
        'Empresas tomam continuamente decisões que produzem consequências jurídicas. Contratações, reorganizações, negociações, relações entre sócios e definição de responsabilidades são exemplos de situações em que a análise jurídica pode integrar o processo decisório.',
  
        'A atuação em Direito Empresarial busca compreender não apenas a norma aplicável, mas também o contexto econômico e operacional em que a decisão será implementada. Essa integração permite identificar riscos e estruturar juridicamente as alternativas disponíveis.',
  
        'O acompanhamento preventivo também pode contribuir para reduzir ambiguidades em relações empresariais e identificar potenciais conflitos antes que evoluam para disputas mais complexas.'
      ],
  
      topics: [
        {
          title: 'Consultoria jurídica empresarial',
          text:
            'A consultoria pode apoiar decisões relacionadas à operação da empresa, estruturação de negócios, responsabilidades, documentos e avaliação preventiva de riscos jurídicos.'
        },
        {
          title: 'Sociedades e relações entre sócios',
          text:
            'A definição de direitos, deveres, formas de administração e mecanismos para tratamento de divergências pode ser relevante para a estabilidade das relações societárias.'
        },
        {
          title: 'Governança empresarial',
          text:
            'Estruturas de governança contribuem para organizar competências, processos decisórios, responsabilidades e mecanismos internos de controle.'
        },
        {
          title: 'Negociações empresariais',
          text:
            'Negociações podem envolver avaliação jurídica de obrigações, riscos, garantias, responsabilidades e consequências das condições discutidas entre as partes.'
        },
        {
          title: 'Prevenção de conflitos',
          text:
            'Documentação clara, definição de responsabilidades e análise antecipada de situações potencialmente controversas podem contribuir para relações empresariais mais previsíveis.'
        }
      ]
    }
  },
  {
    slug: 'contratos',
  
    title: 'Contratos',
  
    summary:
      'Elaboração, análise, revisão e negociação de contratos, com atenção às obrigações, responsabilidades e riscos das partes.',
  
    intro:
      'Atuação jurídica na elaboração, análise, revisão e negociação de contratos, considerando a operação envolvida, as responsabilidades das partes e os riscos decorrentes da relação contratual.',
  
    services: [
      'Elaboração de contratos',
      'Revisão contratual',
      'Negociação de contratos',
      'Contratos empresariais',
      'Instrumentos de garantia',
      'Gestão de riscos contratuais',
      'Análise de obrigações e responsabilidades',
      'Prevenção de conflitos contratuais'
    ],
  
    approach:
      'Os instrumentos são desenvolvidos a partir da realidade da operação, buscando clareza, coerência e previsibilidade jurídica.',
  
    seo: {
      title: 'Contratos e Direito Contratual',
      description:
        'Atuação em elaboração, análise, revisão e negociação de contratos empresariais, obrigações, garantias e prevenção de riscos contratuais.'
    },
  
    content: {
      title: 'Contratos, responsabilidades e prevenção de riscos',
  
      paragraphs: [
        'O contrato transforma uma negociação em direitos, obrigações e responsabilidades juridicamente definidas. Para cumprir adequadamente essa função, o documento precisa refletir a realidade da relação que pretende disciplinar.',
  
        'Uma análise contratual adequada considera objeto, prazos, pagamentos, responsabilidades, garantias, hipóteses de descumprimento, formas de encerramento da relação e mecanismos para tratamento de eventuais controvérsias.',
  
        'A atuação jurídica pode ocorrer desde a elaboração inicial até a revisão ou negociação de documentos apresentados por outras partes, considerando os interesses envolvidos e os riscos decorrentes das condições propostas.'
      ],
  
      topics: [
        {
          title: 'Elaboração de contratos',
          text:
            'A elaboração contratual parte da compreensão da operação para transformar as condições negociadas em disposições claras sobre direitos, deveres, prazos e responsabilidades.'
        },
        {
          title: 'Revisão contratual',
          text:
            'A revisão permite identificar obrigações, riscos, inconsistências, lacunas e disposições que merecem atenção antes da assinatura ou durante uma relação já existente.'
        },
        {
          title: 'Negociação',
          text:
            'A negociação jurídica de contratos pode auxiliar na avaliação das propostas apresentadas e na construção de alternativas compatíveis com os interesses e riscos das partes.'
        },
        {
          title: 'Garantias e inadimplemento',
          text:
            'Garantias, penalidades, consequências do descumprimento e mecanismos de cobrança precisam ser avaliados conforme a natureza e os riscos de cada contratação.'
        },
        {
          title: 'Prevenção de conflitos contratuais',
          text:
            'Clareza na distribuição de responsabilidades e na definição dos procedimentos aplicáveis a situações futuras pode reduzir ambiguidades e facilitar o tratamento de divergências.'
        }
      ]
    }
  },
  {
    slug: 'contencioso',
  
    title: 'Contencioso',
  
    summary:
      'Atuação na análise e condução de conflitos, processos judiciais e procedimentos administrativos.',
  
    intro:
      'Atuação jurídica na condução de conflitos judiciais e administrativos, com análise dos fatos, documentos, fundamentos jurídicos, riscos e alternativas aplicáveis a cada demanda.',
  
    services: [
      'Contencioso cível',
      'Contencioso empresarial',
      'Processos administrativos',
      'Estratégia processual',
      'Análise de provas e documentos',
      'Negociação e acordos',
      'Gestão de carteira',
      'Acompanhamento processual'
    ],
  
    approach:
      'Cada demanda é analisada de forma individualizada, considerando fundamentos jurídicos, evidências, riscos e possíveis desdobramentos.',
  
    seo: {
      title: 'Contencioso Judicial e Administrativo',
      description:
        'Atuação em contencioso judicial e administrativo, conflitos cíveis e empresariais, estratégia processual, negociação e análise de riscos.'
    },
  
    content: {
      title: 'Contencioso, estratégia e análise de riscos',
  
      paragraphs: [
        'Quando um conflito já está estabelecido, a atuação jurídica exige compreender os fatos, as provas disponíveis, os fundamentos apresentados pelas partes e os possíveis desdobramentos do processo.',
  
        'A estratégia processual não se resume à apresentação de manifestações perante o Judiciário ou órgãos administrativos. Também envolve avaliação de riscos, organização documental, definição de prioridades e análise das alternativas existentes ao longo da controvérsia.',
  
        'Dependendo das circunstâncias, a solução pode envolver continuidade do processo, negociação, acordo ou outras medidas juridicamente disponíveis. A escolha depende da análise individual de cada situação.'
      ],
  
      topics: [
        {
          title: 'Contencioso cível e empresarial',
          text:
            'Conflitos decorrentes de relações civis e empresariais podem envolver obrigações, contratos, responsabilidade, cobranças e outras controvérsias que demandem atuação judicial.'
        },
        {
          title: 'Estratégia processual',
          text:
            'A definição da estratégia considera os objetivos envolvidos, os fundamentos jurídicos, as provas existentes, os riscos e as possíveis consequências de cada alternativa.'
        },
        {
          title: 'Provas e documentação',
          text:
            'Documentos, comunicações, contratos, registros e outros elementos probatórios podem assumir papel relevante na reconstrução dos fatos e na sustentação das posições apresentadas.'
        },
        {
          title: 'Negociação e acordos',
          text:
            'A existência de um processo não impede a avaliação de soluções consensuais. Eventuais propostas devem ser analisadas considerando seus efeitos jurídicos e econômicos.'
        },
        {
          title: 'Processos administrativos',
          text:
            'Controvérsias também podem ocorrer perante órgãos e autoridades administrativas, exigindo análise das normas aplicáveis, procedimentos, prazos e documentos pertinentes.'
        }
      ]
    }
  },
  {
    slug: 'consultoria-juridica',
  
    title: 'Consultoria Jurídica',
  
    summary:
      'Assessoria jurídica preventiva para análise de riscos, decisões, documentos, procedimentos e questões empresariais.',
  
    intro:
      'Consultoria jurídica voltada à análise preventiva de questões, identificação de riscos e apoio a decisões que exigem interpretação jurídica, estruturação documental ou avaliação de alternativas.',
  
    services: [
      'Pareceres e análises jurídicas',
      'Consultas jurídicas',
      'Mapeamento de riscos',
      'Apoio a decisões',
      'Revisão de documentos e procedimentos',
      'Políticas internas',
      'Prevenção de litígios',
      'Acompanhamento jurídico preventivo'
    ],
  
    approach:
      'A consultoria transforma questões jurídicas em informações claras para apoiar decisões responsáveis e documentadas.',
  
    seo: {
      title: 'Consultoria Jurídica',
      description:
        'Consultoria jurídica preventiva para empresas e decisões, com análise de riscos, pareceres, documentos, políticas internas e prevenção de conflitos.'
    },
  
    content: {
      title: 'Consultoria jurídica e atuação preventiva',
  
      paragraphs: [
        'Muitas questões jurídicas podem ser analisadas antes de se transformarem em conflitos. A consultoria preventiva permite avaliar riscos, obrigações e alternativas durante o próprio processo de tomada de decisão.',
  
        'A atuação pode envolver desde uma dúvida jurídica específica até o acompanhamento de decisões empresariais, revisão de documentos, elaboração de pareceres ou estruturação de procedimentos internos.',
  
        'O objetivo é transformar a análise jurídica em informação compreensível e aplicável ao contexto, permitindo que os responsáveis pela decisão conheçam as consequências jurídicas relevantes antes de definir o caminho a seguir.'
      ],
  
      topics: [
        {
          title: 'Análise preventiva de riscos',
          text:
            'A identificação antecipada de riscos permite avaliar possíveis consequências jurídicas e considerar medidas de prevenção ou mitigação antes da implementação de uma decisão.'
        },
        {
          title: 'Pareceres e consultas',
          text:
            'Questões que exigem interpretação jurídica podem ser examinadas de forma estruturada, considerando legislação, documentos, circunstâncias e entendimentos aplicáveis.'
        },
        {
          title: 'Apoio a decisões empresariais',
          text:
            'Decisões comerciais e operacionais podem envolver consequências jurídicas relevantes. A consultoria permite integrar essa dimensão ao processo decisório.'
        },
        {
          title: 'Políticas e procedimentos internos',
          text:
            'A estruturação e revisão de políticas internas pode contribuir para definir responsabilidades, procedimentos e parâmetros de atuação dentro das organizações.'
        },
        {
          title: 'Prevenção de litígios',
          text:
            'A análise de documentos, relações e situações potencialmente controversas pode permitir ajustes antes que divergências evoluam para disputas administrativas ou judiciais.'
        }
      ]
    }
  },
  {
    slug: 'regulatorio',
  
    title: 'Regulatório',
  
    summary:
      'Assessoria jurídica em questões regulatórias, obrigações normativas e impactos da regulação sobre atividades empresariais.',
  
    intro:
      'Atuação jurídica em ambientes regulados, com análise de normas, obrigações, riscos e impactos regulatórios sobre operações, produtos, serviços e decisões empresariais.',
  
    services: [
      'Análise regulatória',
      'Acompanhamento normativo',
      'Consultas e pareceres',
      'Mapeamento de obrigações',
      'Análise de impactos regulatórios',
      'Revisão de procedimentos',
      'Apoio em questões perante órgãos reguladores',
      'Apoio institucional'
    ],
  
    approach:
      'O trabalho parte da leitura técnica da regulação e de seus impactos concretos sobre processos, produtos e decisões empresariais.',
  
    seo: {
      title: 'Direito Regulatório',
      description:
        'Atuação em Direito Regulatório, análise de normas, obrigações regulatórias, riscos, impactos sobre empresas e acompanhamento normativo.'
    },
  
    content: {
      title: 'Regulação, obrigações e atividade empresarial',
  
      paragraphs: [
        'Empresas que atuam em setores sujeitos a normas específicas precisam acompanhar não apenas a legislação geral, mas também regras, procedimentos e orientações produzidos por diferentes autoridades e órgãos reguladores.',
  
        'Alterações regulatórias podem afetar produtos, serviços, processos internos, contratos e modelos de operação. A análise jurídica permite compreender o alcance dessas mudanças e avaliar seus possíveis impactos sobre a atividade desenvolvida.',
  
        'A atuação regulatória também possui caráter preventivo, especialmente na identificação de obrigações e na revisão de procedimentos antes da ocorrência de questionamentos ou controvérsias.'
      ],
  
      topics: [
        {
          title: 'Análise de normas e regulação',
          text:
            'A interpretação das normas aplicáveis exige considerar seu conteúdo, alcance, contexto regulatório e possíveis efeitos sobre as atividades desenvolvidas.'
        },
        {
          title: 'Mapeamento de obrigações',
          text:
            'A identificação organizada das obrigações aplicáveis pode auxiliar empresas na definição de responsabilidades e procedimentos internos relacionados ao cumprimento regulatório.'
        },
        {
          title: 'Mudanças regulatórias',
          text:
            'Novas normas e alterações de entendimento podem exigir revisão de procedimentos, documentos, produtos ou estruturas utilizadas pelas organizações.'
        },
        {
          title: 'Riscos regulatórios',
          text:
            'A análise preventiva busca identificar situações que possam gerar questionamentos, restrições ou outras consequências decorrentes do ambiente regulatório.'
        },
        {
          title: 'Interação com órgãos reguladores',
          text:
            'Demandas envolvendo autoridades e órgãos reguladores podem exigir preparação documental, análise jurídica e acompanhamento dos procedimentos aplicáveis.'
        }
      ]
    }
  },
  {
    slug: 'direito-digital-lgpd',
  
    title: 'Direito Digital e LGPD',
  
    summary:
      'Assessoria jurídica em proteção de dados, privacidade, tecnologia e relações no ambiente digital.',
  
    intro:
      'Atuação jurídica em Direito Digital e proteção de dados pessoais, com análise de questões relacionadas à LGPD, privacidade, tecnologia, contratos e utilização de recursos digitais por empresas e pessoas.',
  
    services: [
      'Adequação e orientação sobre LGPD',
      'Privacidade e proteção de dados pessoais',
      'Políticas de privacidade e documentos relacionados',
      'Análise jurídica de tratamentos de dados pessoais',
      'Contratos e relações no ambiente digital',
      'Questões jurídicas envolvendo plataformas e serviços digitais',
      'Monitoramento e privacidade no ambiente de trabalho',
      'Análise de riscos jurídicos relacionados à tecnologia'
    ],
  
    approach:
      'A atuação combina análise jurídica e compreensão técnica do ambiente digital, buscando identificar riscos, responsabilidades e alternativas juridicamente adequadas para questões relacionadas à tecnologia, privacidade e proteção de dados.',
  
    seo: {
      title: 'Direito Digital e LGPD',
      description:
        'Atuação em Direito Digital e LGPD, proteção de dados pessoais, privacidade, contratos digitais e questões jurídicas relacionadas à tecnologia.'
    },
  
    content: {
      title: 'Direito Digital, privacidade e proteção de dados',
  
      paragraphs: [
        'A transformação digital ampliou a quantidade de dados tratados por empresas e tornou mais frequentes situações em que tecnologia, privacidade e responsabilidade jurídica precisam ser analisadas conjuntamente.',
  
        'A Lei Geral de Proteção de Dados Pessoais (LGPD) estabelece princípios, direitos e obrigações relacionados ao tratamento de dados pessoais. Sua aplicação pode alcançar diferentes atividades empresariais, incluindo relações com clientes, trabalhadores, fornecedores, parceiros comerciais e usuários de serviços digitais.',
  
        'A análise jurídica nesse campo não se limita à elaboração de documentos. É necessário compreender quais dados são tratados, para quais finalidades, quem participa das operações, quais riscos estão envolvidos e quais medidas jurídicas e organizacionais são adequadas ao contexto.'
      ],
  
      topics: [
        {
          title: 'LGPD e proteção de dados pessoais',
          text:
            'Questões relacionadas à LGPD podem envolver identificação das atividades de tratamento de dados, análise de bases legais, direitos dos titulares, compartilhamento de informações, retenção de dados, segurança e definição de responsabilidades.'
        },
        {
          title: 'Privacidade no ambiente digital',
          text:
            'O uso de plataformas, sistemas, aplicativos e ferramentas digitais pode produzir questões relacionadas à coleta de informações, transparência, monitoramento, rastreamento e utilização de dados pessoais.'
        },
        {
          title: 'Empresas e governança de dados',
          text:
            'A proteção de dados também integra processos de governança. Políticas internas, definição de responsabilidades, revisão de procedimentos e análise de fornecedores podem contribuir para uma utilização mais organizada e juridicamente fundamentada das informações.'
        },
        {
          title: 'Relações de trabalho e monitoramento',
          text:
            'Ferramentas de monitoramento, trabalho remoto, equipamentos corporativos e sistemas de controle podem envolver simultaneamente poder diretivo, privacidade e proteção de dados. A análise deve considerar finalidade, necessidade, transparência e proporcionalidade conforme as circunstâncias.'
        },
        {
          title: 'Contratos e tecnologia',
          text:
            'Contratos relacionados a tecnologia e tratamento de dados podem exigir definição de responsabilidades, regras sobre confidencialidade, segurança da informação, compartilhamento de dados e obrigações das partes.'
        }
      ]
    }
  },
  {
    slug: 'direito-imobiliario',
  
    title: 'Direito Imobiliário',
  
    summary:
      'Assessoria jurídica em contratos imobiliários, locações, inadimplência e questões relacionadas à utilização e proteção de imóveis.',
  
    intro:
      'Atuação em Direito Imobiliário envolvendo contratos, locações, análise documental, inadimplência e medidas extrajudiciais ou judiciais relacionadas a imóveis.',
  
    services: [
      'Contratos imobiliários',
      'Locação de imóveis',
      'Análise e revisão de contratos de locação',
      'Inadimplência locatícia',
      'Ações de despejo',
      'Cobrança de aluguéis e encargos',
      'Análise documental imobiliária',
      'Consultoria jurídica em questões imobiliárias'
    ],
  
    approach:
      'Cada questão imobiliária é analisada a partir da documentação, da relação jurídica existente e dos objetivos envolvidos, com avaliação dos riscos e das medidas extrajudiciais ou judiciais juridicamente disponíveis.',
  
    seo: {
      title: 'Direito Imobiliário',
      description:
        'Atuação em Direito Imobiliário, contratos e locações, inadimplência, despejo, cobrança de aluguéis e análise documental imobiliária.'
    },
  
    content: {
      title: 'Direito Imobiliário, contratos e relações locatícias',
  
      paragraphs: [
        'Relações imobiliárias envolvem patrimônio, contratos e obrigações que podem produzir efeitos por períodos prolongados. A análise jurídica busca identificar os direitos e responsabilidades envolvidos desde a formação da relação até seu eventual encerramento.',
  
        'Nas locações, questões relacionadas a garantias, pagamentos, encargos, conservação, inadimplência e devolução do imóvel podem exigir interpretação conjunta do contrato e da legislação aplicável.',
  
        'A atuação pode ser preventiva, mediante análise documental e contratual, ou ocorrer quando já existe uma controvérsia, inclusive em situações que demandem cobrança ou medidas destinadas à retomada do imóvel.'
      ],
  
      topics: [
        {
          title: 'Contratos imobiliários',
          text:
            'Contratos relacionados a imóveis devem definir adequadamente objeto, condições, obrigações, responsabilidades e consequências do eventual descumprimento.'
        },
        {
          title: 'Locação de imóveis',
          text:
            'Relações entre locador e locatário envolvem direitos e deveres previstos no contrato e na legislação, incluindo pagamento, encargos, garantias, conservação e devolução do imóvel.'
        },
        {
          title: 'Inadimplência locatícia',
          text:
            'O atraso de aluguéis ou encargos exige análise do contrato, da garantia existente, dos valores envolvidos e das alternativas extrajudiciais ou judiciais disponíveis.'
        },
        {
          title: 'Ação de despejo',
          text:
            'A retomada judicial do imóvel depende das hipóteses e procedimentos previstos na legislação. Em determinadas situações podem existir medidas específicas, sujeitas aos requisitos legais e à apreciação judicial.'
        },
        {
          title: 'Análise documental',
          text:
            'Documentos relacionados ao imóvel e à relação contratual podem revelar obrigações, restrições ou riscos que precisam ser considerados antes de determinadas decisões.'
        }
      ]
    }
  },
];

export const lawyers: Lawyer[] = [
  { slug:'adilson-furlani', name:'FURLANI, Adilson', image:'/equipe/adilson-furlani.jpg', role:'Sócio-Advogado', oab:'OAB/SP 538.189', areas:['Direito Civil','Digital', 'Consumidor'], education:['Advogado, Bacharel em Direito — Universidade Paulista','Especialista em Sistemas de Informação, Segurança da Informação e Análises de Sistemas Informáticos'], bio:'Advogado com expertise única na intersecção entre Direito e Tecnologia. Minha formação multidisciplinar em Direito, Sistemas, Segurança da Informação e Geoprocessamento permite oferecer soluções jurídicas inovadoras e precisas. Atuo com Direito Civil, Digital e LGPD, compreendendo a tecnologia por trás da lei, e com Direito Imobiliário e Ambiental, utilizando análises de dados geoespaciais. Meu compromisso é traduzir a complexidade técnica e jurídica em estratégias claras e seguras para os meus clientes.', publications:['Reforma Tributária: principais pontos para empresas','Planejamento e segurança jurídica nas decisões empresariais'] },
  { slug:'daniela-pinheiros', name:'PINHEIROS, Daniela', image:'/equipe/daniela-pinheiros.jpg', role:'Consultora Jurídica', oab:'', areas:['Direito Empresarial','Contratos'], education:['Bacharel em Direito — Universidade Paulista, Psicanalista Clínica','Pós-graduação em Direito Civil, Processo Civil e Previdenciário'], bio:'Com formação em Direito pela Universidade Paulista (UNIP) e em Psicanálise, ofereço uma abordagem integrada que visa promover tanto a justiça quanto a saúde mental. Meu trabalho consiste em orientar para a proteção e defesa de direitos, contribuindo para uma sociedade mais justa, além de auxiliar no processo de autoconhecimento e na construção de relações mais saudáveis. A união dessas duas áreas me permite analisar cada caso a partir sob uma perspectiva completa, que considera tanto os aspectos legais quanto as dimensões subjetivas de cada cliente.', publications:[
  'O Contrato Estratégico: Como Cláusulas Bem Desenhadas Protegem Negócios, Patrimônios e Famílias',
  'Governança e prevenção de conflitos societários'
] },
  { slug:'pedro-almeida', name:'ALMEIDA, Pedro', image:'/equipe/pedro-almeida.jpg', role:'Analista Jurídico', oab:'', areas:['Contencioso','Consultoria Jurídica'], education:['Bacharel em Direito'], bio:'Atua na condução de demandas judiciais e administrativas, com foco em análise processual, organização de evidências e acompanhamento estratégico.', publications:['Decisões empresariais e análise jurídica preventiva'] },
];

export const articles: Article[] = [
  { slug:'reforma-tributaria-principais-pontos-empresas', category:'Tributário', title:'Reforma Tributária: principais pontos para empresas', excerpt:'Uma visão objetiva sobre temas que merecem acompanhamento na adaptação ao novo ambiente tributário.', date:'12 set. 2026', authorSlugs: ['pedro-almeida'],  readTime:'6 min', areaSlugs:['direito-tributario'], body:['A Reforma Tributária altera de forma relevante a lógica de tributação sobre o consumo e exige atenção das empresas durante o período de transição.','Mais do que acompanhar mudanças legislativas, é importante mapear os impactos sobre contratos, precificação, sistemas, processos internos e relacionamento com fornecedores e clientes.','A avaliação jurídica deve ser integrada às áreas financeira, fiscal e operacional, de modo que as decisões sejam tomadas com base em informações consistentes e atualizadas.','Este conteúdo possui caráter exclusivamente informativo e não constitui aconselhamento jurídico individualizado.'] },
  { slug:'analise-juridica-preventiva-decisoes-empresariais', category:'Empresarial', title:'Decisões empresariais e a importância da análise jurídica preventiva', excerpt:'Como a leitura antecipada de riscos pode apoiar decisões mais estruturadas.', date:'05 set. 2026', authorSlugs: ['pedro-almeida'],  readTime:'5 min', areaSlugs:['direito-empresarial', 'consultoria-juridica'], body:['A análise jurídica preventiva busca identificar riscos antes que eles se convertam em conflitos ou custos inesperados.','Em decisões empresariais relevantes, a participação jurídica desde as etapas iniciais pode contribuir para estruturar documentos, responsabilidades e mecanismos de prevenção de controvérsias.','A prevenção não elimina incertezas, mas permite que elas sejam identificadas e tratadas de maneira organizada.','Este conteúdo possui caráter exclusivamente informativo e não constitui aconselhamento jurídico individualizado.'] },
  {
    slug: 'clausulas-contratuais-atencao-especial',
    category: 'Contratos',
    title:
      'O Contrato Estratégico: Como Cláusulas Bem Desenhadas Protegem Negócios, Patrimônios e Famílias',
    excerpt:
      'Como objeto, preço, alocação de riscos, responsabilidade, rescisão, confidencialidade, proteção de dados e solução de conflitos transformam contratos em instrumentos de prevenção e governança.',
    date: '18 ago. 2026',
    authorSlugs: ['daniela-pinheiros','adilson-furlani'],
    readTime: '18 min',
    areaSlugs: [
      'contratos',
      'direito-empresarial',
      'consultoria-juridica',
      'direito-digital-lgpd'
    ],
    body: [
      '    Todo contrato nasce, em alguma medida, em ambiente de confiança. Seja no fechamento de uma rodada de investimentos, na contratação de uma plataforma em nuvem, na compra de um imóvel, na formalização de um acordo entre sócios ou no planejamento patrimonial de uma família empresária, a assinatura representa uma convergência de expectativas.',
      '    A ilusão perigosa é acreditar que o documento serve apenas para registrar as intenções existentes quando tudo está funcionando bem.',
      '    Na prática, contratos revelam grande parte de seu valor justamente no momento da divergência. É diante do inadimplemento, de uma indisponibilidade de sistemas, de uma mudança tributária relevante, de um incidente envolvendo dados ou da ruptura de uma parceria que minutas superficiais e modelos genéricos demonstram suas limitações.',
      '    A qualidade de um instrumento jurídico não depende da quantidade de páginas ou do emprego de linguagem rebuscada. Depende, sobretudo, da capacidade de definir obrigações com clareza, antecipar cenários críticos, estabelecer mecanismos de decisão e distribuir riscos de maneira juridicamente adequada.',
      '    A Lei da Liberdade Econômica (Lei nº 13.874/2019) reforçou no Código Civil princípios como intervenção mínima, excepcionalidade da revisão contratual e respeito à alocação de riscos definida pelas partes nos contratos civis e empresariais presumidamente paritários e simétricos. Mais recentemente, a Lei nº 14.905/2024 modificou a disciplina legal de atualização monetária e juros nas obrigações civis.',
      '    Nesse ambiente, proteger uma operação contemporânea frequentemente exige uma visão que conecte Direito Civil e Empresarial aos aspectos tributários, consumeristas, digitais, patrimoniais e, em determinadas estruturas, familiares e sucessórios.',
      '    O contrato deixa, assim, de ser apenas um documento formal e passa a funcionar como instrumento de gestão de riscos, patrimônio e operação.',
      '1. Linguagem clara e Legal Design na gestão de riscos',
      '    Durante muito tempo prevaleceu a ideia de que um contrato tecnicamente sofisticado deveria ser extenso, repleto de expressões arcaicas e construções pouco acessíveis.',
      '    Complexidade jurídica, porém, não exige necessariamente complexidade linguística.',
      '    A Recomendação nº 144/2023 do Conselho Nacional de Justiça, dirigida aos Tribunais e Conselhos, recomenda o uso de linguagem simples, clara e acessível e, sempre que possível, de elementos visuais que facilitem a compreensão. Embora o ato tenha como destinatário o Poder Judiciário, ele representa uma manifestação institucional relevante em favor da comunicação jurídica compreensível.',
      '    No ambiente contratual, técnicas de linguagem clara e Legal Design podem auxiliar na organização de direitos, obrigações, fluxos de aprovação, prazos e consequências.',
      '    O desafio técnico não consiste em eliminar conceitos jurídicos necessários, mas em formular regras complexas com precisão suficiente para que administradores, equipes operacionais, fornecedores, consumidores e, eventualmente, julgadores ou árbitros compreendam o funcionamento previsto para a relação.',
      '    Clareza contratual também facilita negociação, execução e fiscalização do próprio contrato.',
      '2. Objeto e escopo: transformar expectativas em obrigações verificáveis',
      '    Um dos pontos mais importantes de qualquer relação contratual é a definição do objeto.',
      '    Muitas controvérsias não decorrem necessariamente de comportamento deliberadamente desleal, mas de expectativas diferentes sobre aquilo que efetivamente estava incluído na contratação.',
      '    Isso é especialmente evidente em contratos de serviços e tecnologia, nos quais escopos excessivamente genéricos podem favorecer o chamado scope creep: a incorporação progressiva de atividades que não estavam claramente previstas na proposta econômica original.',
      '    Uma estrutura contratual mais precisa pode definir entregáveis (deliverables), marcos de execução (milestones), critérios de aceite, responsabilidades de cada parte, dependências operacionais e itens expressamente excluídos do escopo (out of scope).',
      '    Imagine uma empresa contratada para implantar um sistema de gestão por R$ 200 mil. O contrato descreve o objeto apenas como “implementação de software de gestão empresarial”. Durante o projeto, o cliente solicita relatórios fiscais personalizados e integração com três sistemas legados.',
      '    Sem definição adequada de escopo, surge a discussão: essas atividades estavam incluídas no preço original?',
      '    Se o instrumento tivesse identificado entregáveis, integrações incluídas e excluídas e procedimento formal para solicitações adicionais, as novas demandas poderiam ser avaliadas e, quando pertinente, incorporadas por aditivo.',
      '    O mesmo cuidado pode ser importante sob perspectivas tributária e consumerista. A descrição contratual contribui para documentar a natureza econômica da operação e, nas relações de consumo, o Código de Defesa do Consumidor assegura informação adequada e clara sobre produtos e serviços.',
      '    O contrato também pode disciplinar dependências: se determinada etapa depende do fornecimento de documentos, credenciais, dados ou aprovações pela contratante, deve-se estabelecer o efeito desses atrasos sobre o cronograma.',
      '3. Preço, reajuste e encargos: o impacto da Lei nº 14.905/2024',
      '    A previsibilidade financeira de contratos de duração continuada depende de regras claras sobre preço, reajuste e consequências do atraso.',
      '    Expressões genéricas como “juros legais e correção monetária cabível” podem produzir resultados diferentes daqueles imaginados pelas partes.',
      '    A Lei nº 14.905/2024 modificou os arts. 389 e 406 do Código Civil. Entre as alterações que passaram a produzir efeitos em 30 de agosto de 2024, estabeleceu-se que, quando o índice de atualização monetária não tiver sido convencionado e não houver índice previsto em lei específica, aplica-se a variação do IPCA. Para as hipóteses alcançadas pelo art. 406, a lei passou a disciplinar a chamada Taxa Legal.',
      '    A metodologia da Taxa Legal foi regulamentada pela Resolução CMN nº 5.171/2024. O Banco Central divulga mensalmente a taxa, calculada segundo a metodologia estabelecida pelo Conselho Monetário Nacional, que considera Selic e IPCA-15. Se o cálculo resultar negativo, a Taxa Legal do mês é zero.',
      '    Há ainda uma importante questão temporal. No Tema Repetitivo nº 1.368, já transitado em julgado, a Corte Especial do Superior Tribunal de Justiça estabeleceu que, antes da entrada em vigor da Lei nº 14.905/2024, o art. 406 do Código Civil deve ser interpretado no sentido de que a Selic é a taxa aplicável às dívidas civis abrangidas pela tese.',
      '    Isso reforça a importância de contratos definirem, quando juridicamente cabível, critérios claros de atualização, juros, periodicidade e consequências do inadimplemento.',
      '    Também podem existir repercussões tributárias relevantes. Cláusulas de alteração legislativa, recomposição econômica e distribuição de custos tributários devem ser estruturadas conforme a natureza da operação e os limites legais aplicáveis, evitando a premissa equivocada de que o contrato, isoladamente, seja capaz de determinar o tratamento tributário de determinada receita.',
      '4. Alocação de riscos e limitação de responsabilidade',
      '    Um dos papéis do contrato empresarial é estabelecer quem assume determinados riscos e em que extensão.',
      '    O art. 421-A do Código Civil estabelece que contratos civis e empresariais são presumidos paritários e simétricos até que elementos concretos justifiquem o afastamento dessa presunção, ressalvados regimes jurídicos especiais. O dispositivo também determina que a alocação de riscos definida pelas partes seja respeitada e observada e que a revisão contratual ocorra de maneira excepcional e limitada.',
      '    Nesse contexto, contratos empresariais podem empregar mecanismos como teto de responsabilidade (liability cap) e disciplina específica sobre categorias de danos indenizáveis.',
      '    Essas cláusulas, contudo, não devem ser tratadas como fórmulas universais.',
      '    Em precedente envolvendo relação empresarial, a Terceira Turma do STJ reconheceu, nas circunstâncias específicas do REsp 1.989.291/SP, a validade de cláusula limitativa de responsabilidade negociada entre empresas, considerando, entre outros elementos, as características da relação e do instrumento contratual. O precedente demonstra a relevância do contexto negocial, e não a existência de uma imunidade contratual genérica.',
      '    Além disso, regimes especiais podem alterar substancialmente a análise.',
      '    Nas relações de consumo, por exemplo, incidem as normas protetivas do Código de Defesa do Consumidor. Em matéria de dados pessoais, a LGPD estabelece deveres próprios dos agentes de tratamento, inclusive quanto à adoção de medidas técnicas e administrativas de segurança e à comunicação de determinados incidentes pelo controlador.',
      '    Por isso, a alocação contratual de riscos deve considerar quem são as partes, a natureza da relação, a legislação aplicável e as obrigações que não podem ser afastadas pela simples vontade contratual.',
      '5. Resolução, resilição e investimentos relevantes',
      '    Planejar o encerramento de uma relação é tão importante quanto planejar seu início.',
      '    O art. 474 do Código Civil estabelece que a cláusula resolutiva expressa opera de pleno direito. Isso permite que as partes definam previamente hipóteses objetivas de inadimplemento capazes de autorizar a resolução.',
      '    A aplicação prática, entretanto, exige atenção ao conteúdo do contrato, à constituição em mora quando necessária e às normas especiais incidentes.',
      '    Em precedente envolvendo compromisso de compra e venda de imóvel, por exemplo, a Quarta Turma do STJ reconheceu a possibilidade de resolução extrajudicial fundada em cláusula resolutiva expressa, observada a notificação do inadimplente e os requisitos aplicáveis ao caso.',
      '    Outra questão relevante aparece nos contratos por prazo indeterminado.',
      '    O art. 473 do Código Civil prevê a resilição unilateral mediante denúncia notificada quando admitida pela lei. Seu parágrafo único estabelece, porém, que, se uma das partes tiver realizado investimentos consideráveis para executar o contrato, a denúncia somente produzirá efeito depois de transcorrido prazo compatível com a natureza e o vulto desses investimentos.',
      '    Isso recomenda atenção especial a relações que demandem investimentos dedicados: aquisição de equipamentos, contratação de equipes, construção de infraestrutura, customização tecnológica ou outras despesas realizadas em confiança na continuidade contratual.',
      '    As partes podem estruturar previamente períodos de aviso, transição, critérios de desmobilização e tratamento de investimentos ainda não amortizados.',
      '6. Contratos societários, patrimônio familiar e sucessão',
      '    A lógica preventiva também aparece nas estruturas empresariais familiares.',
      '    Contratos e instrumentos societários podem disciplinar situações como falecimento, divórcio, incapacidade, retirada de sócio, ingresso de sucessores, apuração de haveres e formas de pagamento.',
      '    Aqui é importante evitar soluções padronizadas.',
      '    A relação entre regime de bens, sucessão, direitos dos herdeiros, estrutura societária e regras de apuração de haveres depende do caso concreto e das normas cogentes aplicáveis.',
      '    O objetivo de uma boa estrutura não é simplesmente “impedir a entrada de terceiros”, mas coordenar os diversos instrumentos jurídicos para reduzir a possibilidade de que um evento pessoal produza uma crise de liquidez ou governança na empresa familiar.',
      '7. Confidencialidade, propriedade intelectual e governança de dados',
      '    Na economia digital, ativos intangíveis podem representar parcela relevante do valor de uma organização: código-fonte, algoritmos, bases de dados, métodos, estratégias comerciais, listas de clientes e informações financeiras.',
      '    Uma cláusula de confidencialidade eficiente precisa definir o que é informação protegida, quem pode acessá-la, para quais finalidades, quais são as exceções, como deve ocorrer a devolução ou eliminação das informações e por quanto tempo determinadas obrigações permanecem após o término da relação.',
      '    Também é necessário distinguir confidencialidade contratual de outros regimes jurídicos de proteção, como propriedade intelectual, segredo de negócio e proteção de dados pessoais.',
      '    Quando há tratamento de dados pessoais, o contrato pode ser importante instrumento de governança, estabelecendo responsabilidades operacionais entre os agentes, medidas de segurança, procedimentos de cooperação e tratamento de incidentes.',
      '    A LGPD determina que os agentes de tratamento adotem medidas técnicas e administrativas aptas a proteger os dados pessoais e prevê dever de comunicação, pelo controlador, de incidentes de segurança que possam acarretar risco ou dano relevante aos titulares.',
      '    Por isso, uma cláusula contratual de proteção de dados deve refletir a operação real e não apenas reproduzir genericamente dispositivos da LGPD.',
      '8. Solução estratégica de conflitos: negociação, mediação, arbitragem e foro',
      '    A cláusula de resolução de disputas merece ser desenhada de acordo com o valor, complexidade e natureza da operação.',
      '    Uma possibilidade é utilizar mecanismos escalonados: negociação entre representantes das partes, seguida de mediação e, se não houver acordo, arbitragem ou processo judicial.',
      '    Mas a redação precisa ser precisa.',
      '    O art. 23 da Lei nº 13.140/2015 dispõe que, quando uma cláusula de mediação estabelece compromisso de não iniciar arbitragem ou processo judicial durante determinado prazo ou até determinada condição, o árbitro ou juiz deve suspender o procedimento pelo período convencionado. A própria lei preserva medidas urgentes necessárias para evitar o perecimento de direito.',
      '    Quando há convenção de arbitragem, também é necessário coordená-la adequadamente com a jurisdição estatal.',
      '    A jurisprudência do STJ reconhece que, antes da constituição do tribunal arbitral, medidas urgentes podem ser buscadas perante o Judiciário. Constituída a arbitragem, compete ao juízo arbitral reexaminar a tutela e assumir a competência sobre a controvérsia submetida à convenção arbitral.',
      '    Portanto, não basta inserir genericamente que as partes “buscarão uma solução amigável”. A cláusula deve estabelecer etapas, prazos, instituições competentes e consequências procedimentais compatíveis entre si.',
      '9. Da vulnerabilidade contratual à estruturação preventiva',
      '    Uma revisão contratual estratégica pode ser organizada em torno de alguns eixos.',
      '    Objeto e escopo. Definir entregas, critérios de aceite, dependências, prazos e atividades excluídas reduz divergências sobre aquilo que efetivamente foi contratado.',
      '    Preço, reajuste e mora. Estabelecer regras objetivas sobre atualização, reajuste e consequências do atraso reduz incertezas financeiras e contábeis.',
      '    Alocação de riscos e responsabilidade. Identificar riscos previsíveis, distribuí-los entre as partes e estabelecer limites juridicamente adequados permite relacionar remuneração e exposição econômica.',
      '    Extinção e transição. Definir hipóteses de resolução, aviso prévio, tratamento de investimentos e deveres pós-contratuais ajuda a impedir que o fim da relação paralise a operação.',
      '    Confidencialidade, propriedade intelectual e dados. Classificar ativos protegidos, titularidade, permissões de uso, segurança e tratamento pós-contrato reduz riscos sobre patrimônio intangível.',
      '    Resolução de conflitos. Escolher conscientemente negociação, mediação, arbitragem ou jurisdição estatal permite que o mecanismo de solução seja proporcional à operação.',
      'Conclusão',
      '    A segurança jurídica de um contrato não resulta da reprodução de uma minuta padronizada.',
      '    Cada operação econômica, relacionamento societário ou estrutura patrimonial apresenta riscos, investimentos, dependências e fluxos financeiros próprios. A redação contratual eficiente procura identificá-los antes que se transformem em litígio.',
      '    A Lei da Liberdade Econômica reforçou a autonomia privada e o respeito à alocação de riscos em relações civis e empresariais, dentro dos limites do ordenamento. A Lei nº 14.905/2024, por sua vez, modificou regras relevantes sobre atualização monetária e juros.',
      '    Nesse cenário, a assessoria contratual pode funcionar não apenas como mecanismo de reação a conflitos, mas como instrumento de governança.',
      '    Um contrato bem estruturado procura responder antecipadamente às perguntas difíceis: o que exatamente deve ser entregue? Quem assume determinado risco? O que acontece se houver atraso? Como são tratados investimentos ainda não amortizados? Quem responde por dados e ativos intelectuais? Como a relação termina? E onde uma eventual disputa será resolvida?',
      '    É quando essas respostas são construídas antes da crise que o contrato cumpre uma de suas funções mais importantes: transformar incertezas previsíveis em regras previamente compreendidas pelas partes.',
      'Referências e fontes',
      '    BRASIL. Lei nº 10.406, de 10 de janeiro de 2002 — Código Civil.',
      '    BRASIL. Lei nº 13.874, de 20 de setembro de 2019 — Lei da Liberdade Econômica.',
      '    BRASIL. Lei nº 14.905, de 28 de junho de 2024 — alterações relativas à atualização monetária e juros.',
      '    CONSELHO MONETÁRIO NACIONAL. Resolução CMN nº 5.171, de 29 de agosto de 2024 — metodologia da Taxa Legal.',
      '    BANCO CENTRAL DO BRASIL. Taxa Legal — metodologia e divulgação dos valores mensais.',
      '    CONSELHO NACIONAL DE JUSTIÇA. Recomendação nº 144, de 25 de agosto de 2023 — linguagem simples, clara e acessível.',
      '    BRASIL. Lei nº 13.140, de 26 de junho de 2015 — Lei de Mediação.',
      '    BRASIL. Lei nº 13.709, de 14 de agosto de 2018 — Lei Geral de Proteção de Dados Pessoais (LGPD).',
      '    SUPERIOR TRIBUNAL DE JUSTIÇA. Tema Repetitivo nº 1.368 — aplicação da taxa Selic às dívidas civis no período anterior à Lei nº 14.905/2024.',
      '    SUPERIOR TRIBUNAL DE JUSTIÇA. REsp 1.989.291/SP — cláusula de limitação de responsabilidade em relação empresarial.',
      '    SUPERIOR TRIBUNAL DE JUSTIÇA. Jurisprudência sobre cláusula resolutiva expressa e resolução extrajudicial.',
      '    Este conteúdo possui caráter exclusivamente informativo e não constitui aconselhamento jurídico individualizado.'
    ]
  }, {
  slug: 'feminicidio-o-que-a-lei-precisa-ver',
  category: 'Direito Penal',
  title: 'Feminicídio: o que a lei precisa ver',
  excerpt: 'Uma análise sobre a distinção entre lesão corporal e tentativa de feminicídio, examinando a intenção do agressor, o contexto da violência de gênero e os elementos utilizados pelo Direito para identificar a vontade de matar.',
  date: '12 ago. 2025',
  authorSlugs: ['pedro-almeida'], ['daniela-pinheiros'],
  readTime: '15 min',
  body: [
    'Introdução: O Espelho da Violência em Espaços Confinados',
    '    Casos recentes de violência contra mulheres em espaços confinados colocam em evidência uma questão jurídica particularmente relevante: quando uma agressão de extrema brutalidade não resulta na morte da vítima, a análise jurídica deve se limitar às lesões efetivamente produzidas ou também investigar se a conduta revela intenção de matar?',
    '    A distinção é fundamental. A sobrevivência da vítima não significa, necessariamente, que o propósito do agressor tenha sido apenas lesioná-la. Para o Direito Penal, é necessário examinar não somente o resultado físico da agressão, mas também as circunstâncias capazes de revelar a intenção presente na conduta.',
    '1. Decodificando o Código Penal: ferramentas jurídicas para a análise',
    '    A compreensão do problema exige distinguir três institutos jurídicos: a lesão corporal, a tentativa e o feminicídio. Cada um deles dirige a análise para elementos diferentes da conduta e de seu resultado.',
    '1.1. Lesão corporal: a importância do resultado',
    '    O crime de lesão corporal está previsto no artigo 129 do Código Penal e protege a integridade corporal e a saúde da pessoa. Sua classificação considera, entre outros elementos, a natureza e a gravidade das consequências produzidas pela agressão.',
    '    A legislação diferencia hipóteses de lesão conforme os resultados provocados, incluindo situações de maior gravidade quando existem consequências relevantes ou permanentes para a vítima.',
    '    Enquanto a análise da lesão corporal observa de maneira significativa o resultado produzido, a tentativa de crime contra a vida exige investigação especialmente cuidadosa sobre a intenção do agente.',
    '1.2. Feminicídio e violência contra a mulher',
    '    O feminicídio representa uma resposta específica do ordenamento jurídico à violência letal praticada contra mulheres em razão de sua condição de sexo feminino, especialmente em contextos de violência doméstica e familiar, menosprezo ou discriminação.',
    '    A identificação desse contexto exige análise das circunstâncias que cercam o fato, da relação entre agressor e vítima e de eventuais elementos anteriores ou concomitantes à violência.',
    '1.3. Tentativa criminal e intenção do agente',
    '    O artigo 14, inciso II, do Código Penal estabelece a figura da tentativa quando a execução de determinado crime é iniciada, mas sua consumação não ocorre por circunstâncias alheias à vontade do agente.',
    '    Essa estrutura é especialmente importante nos crimes contra a vida. A ausência do resultado morte não exclui automaticamente a possibilidade de tentativa de homicídio ou feminicídio. É necessário investigar qual resultado o agente pretendia produzir e até que ponto avançou na execução da conduta.',
    '2. A intenção de ferir e a intenção de matar',
    '    Uma das questões centrais na diferenciação entre lesão corporal e tentativa de crime contra a vida está no elemento subjetivo da conduta. Tradicionalmente, utiliza-se a distinção entre animus laedendi, entendido como intenção de ferir, e animus necandi, relacionado à intenção de matar.',
    '    Como a intenção não pode ser observada diretamente, ela precisa ser inferida a partir das circunstâncias concretas do fato.',
    '    Entre os elementos que podem contribuir para essa análise estão o meio empregado, a quantidade e intensidade dos golpes, as regiões do corpo atingidas, a persistência da agressão, o comportamento do agressor durante e depois do fato, eventuais ameaças e o histórico da relação entre agressor e vítima.',
    '    Nenhum desses elementos deve necessariamente ser considerado de maneira isolada. A avaliação jurídica resulta do conjunto das circunstâncias demonstradas pelas provas.',
    '3. Violência extrema como elemento de análise',
    '    A repetição de golpes, especialmente quando direcionados a regiões vitais do corpo ou quando prosseguem mesmo depois de a vítima perder sua capacidade de defesa, pode assumir especial relevância na investigação da intenção do agente.',
    '    Nessas situações, a análise não deve ficar restrita à espécie de instrumento utilizado. Punhos, pés ou objetos que ordinariamente não seriam classificados como armas letais podem, dependendo da maneira como são empregados, representar significativo risco à vida.',
    '    A intensidade da violência, sua duração e a vulnerabilidade da vítima são circunstâncias que devem ser consideradas conjuntamente.',
    '4. O contexto da violência doméstica',
    '    Quando a agressão ocorre no contexto de relacionamento íntimo ou familiar, a análise também deve considerar o histórico da relação.',
    '    Ameaças anteriores, agressões precedentes, comportamentos de controle, possessividade e outras manifestações de violência podem contribuir para compreender a dinâmica na qual ocorreu o episódio investigado.',
    '    Isso não significa antecipar uma conclusão sobre responsabilidade criminal, mas reconhecer que a correta qualificação jurídica de uma conduta depende da avaliação integral das circunstâncias e das provas disponíveis.',
    '5. O espaço confinado e a vulnerabilidade da vítima',
    '    A prática de violência em ambiente confinado apresenta características particulares. Um elevador, por exemplo, reduz drasticamente as possibilidades de fuga, aumenta a proximidade entre agressor e vítima e pode limitar mecanismos de defesa.',
    '    Por essa razão, a escolha ou utilização consciente de um espaço dessa natureza pode constituir elemento relevante na reconstrução das circunstâncias da agressão.',
    '    A existência de câmeras de segurança também possui papel probatório importante. Além de registrar objetivamente parte dos acontecimentos, as imagens podem permitir a análise da duração, intensidade e dinâmica da violência.',
    '6. O resultado não conta toda a história',
    '    Uma das reflexões mais importantes nesses casos é que a qualificação jurídica não pode depender exclusivamente da sorte da vítima em sobreviver.',
    '    Duas condutas semelhantes podem produzir resultados físicos diferentes em razão de fatores completamente alheios à vontade do agressor, como resistência física da vítima, intervenção de terceiros ou rapidez do atendimento médico.',
    '    É justamente por isso que o Direito Penal contempla a figura da tentativa: determinadas condutas podem revelar intenção dirigida à produção de um resultado mais grave, ainda que esse resultado não venha efetivamente a ocorrer.',
    '7. O papel das provas',
    '    A definição jurídica depende das provas produzidas em cada caso. Imagens, depoimentos, perícias, mensagens, ameaças anteriores, histórico de violência e comportamento posterior ao fato podem contribuir para a reconstrução da dinâmica da agressão.',
    '    Nos crimes dolosos contra a vida, a Constituição Federal atribui ao Tribunal do Júri competência para julgamento, observadas as etapas e requisitos previstos na legislação processual penal.',
    '    Por isso, a discussão sobre existência de intenção de matar possui consequências não apenas na definição do crime, mas também no procedimento judicial aplicável.',
    'Conclusão',
    '    A sobrevivência da vítima não deve ser utilizada isoladamente para definir a natureza jurídica de uma agressão. A distinção entre lesão corporal e tentativa de feminicídio exige investigação cuidadosa da intenção revelada pela conduta e pelo conjunto das circunstâncias.',
    '    Quantidade e intensidade dos golpes, regiões atingidas, vulnerabilidade da vítima, contexto de violência doméstica, ameaças anteriores e comportamento do agressor são elementos que podem contribuir para essa avaliação.',
    '    O Direito precisa analisar aquilo que o agente efetivamente buscou realizar, e não apenas o resultado que circunstâncias externas permitiram que acontecesse. Em crimes dessa natureza, compreender a intenção pode ser essencial para que a resposta jurídica corresponda à gravidade real da conduta.',
    '- o -',
    'PINHEIROS, Daniela. Feminicídio: o que a lei precisa ver.: Um crime de intenção, não de sorte. Revista Jus Navigandi, ISSN 1518-4862, Teresina, ano 30, n. 8077, 12 ago. 2025. Disponível em: https://jus.com.br/artigos/115180.'
  ]
},{
      slug: 'produtividade-vs-privacidade-a-guerra-silenciosa-do-home-office',
      category: 'Direito Digital e Trabalhista',
      title: 'Produtividade vs. Privacidade - A Guerra Silenciosa do Home Office',
      excerpt: 'O caso do Itaú revela um conflito entre monitoramento digital e privacidade no home office. A legislação permite a fiscalização do trabalho remoto, mas impõe limites relacionados à transparência, finalidade, proporcionalidade e proteção de dados.',
      date: '10 set. 2025',
      authorSlugs: ['pedro-almeida'], ['adilson-furlani'],image: '/conteudo/produtividade-vs-privacidade-home-office.jpg',
      readTime: '14 min',areaSlugs: ['direito-digital-lgpd'],
      podcast: {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7374885820425666562',
        embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7374885412881731584?compact=1'
      },
      body: [
        'Introdução: Itaú/2025 - O E-mail que Chocou o Home Office',
        '    Em setembro de 2025, cerca de mil funcionários do Itaú Unibanco foram desligados após uma revisão de condutas relacionadas ao trabalho remoto e ao registro de jornada, segundo informações divulgadas à época. O episódio foi associado ao uso de mecanismos de monitoramento digital e reacendeu o debate sobre os limites da fiscalização no home office.',
        '    A situação colocou em evidência uma questão cada vez mais relevante: se o computador é uma ferramenta da empresa, mas o trabalho é realizado dentro da residência do empregado, onde está a fronteira entre fiscalização legítima e vigilância excessiva?',
        '    A expansão do home office criou novas formas de organização do trabalho e também novas possibilidades tecnológicas de supervisão. Softwares podem registrar períodos de atividade, utilização de sistemas corporativos, acessos, logins e outros indicadores digitais.',
        '    Entretanto, a possibilidade técnica de monitorar não significa que qualquer forma de monitoramento seja juridicamente admissível. A relação envolve simultaneamente o poder diretivo do empregador, os direitos fundamentais do trabalhador e as regras relacionadas à proteção de dados pessoais.',
        '1. O poder de fiscalização do empregador',
        '    Para compreender a posição da empresa, é necessário considerar o chamado poder diretivo do empregador. A empresa possui prerrogativas de organização, controle e disciplina relacionadas à execução do trabalho.',
        '    Esse poder não desaparece quando a atividade é realizada remotamente. O artigo 6º da Consolidação das Leis do Trabalho equipara os meios telemáticos e informatizados de comando, controle e supervisão, para fins de subordinação jurídica, aos meios pessoais e diretos.',
        '    A regulamentação do teletrabalho, a partir do artigo 75-A da CLT, também confirma que o trabalho remoto continua inserido em uma relação jurídica de emprego quando presentes seus requisitos. Assim, a distância física não elimina a possibilidade de supervisão.',
        '    A questão mais difícil está na intensidade e na forma dessa supervisão. Um software capaz de registrar continuamente a atividade digital pode produzir um nível de observação muito superior ao existente no ambiente presencial. É nesse ponto que o poder diretivo encontra seus limites.',
        '2. A muralha da privacidade do trabalhador',
        '    Os direitos fundamentais à intimidade, à vida privada e à imagem não são suspensos pela celebração do contrato de trabalho. No home office, essa proteção ganha importância adicional porque a atividade profissional ocorre dentro de um espaço privado.',
        '    A fiscalização legítima deve, portanto, ser compatibilizada com os direitos do trabalhador. Três critérios são especialmente relevantes: transparência, finalidade e proporcionalidade.',
        '    Transparência significa que o trabalhador deve conhecer previamente as regras de monitoramento aplicáveis ao ambiente profissional, inclusive quais dados são coletados e para quais objetivos.',
        '    Finalidade significa que o monitoramento precisa estar associado a uma razão legítima e determinada, como segurança da informação, controle de jornada ou verificação do uso de recursos corporativos.',
        '    Proporcionalidade exige avaliar se o mecanismo utilizado é adequado e se existe forma menos invasiva de alcançar o mesmo objetivo. A existência de uma finalidade legítima não torna automaticamente legítimo qualquer meio empregado para alcançá-la.',
        '3. LGPD: atividade digital também produz dados',
        '    A Lei Geral de Proteção de Dados também alcança o tratamento de dados pessoais realizado no contexto das relações de trabalho. Registros de acesso, identificadores, informações de utilização de sistemas e outros elementos vinculados a uma pessoa identificada ou identificável podem estar sujeitos às regras da LGPD.',
        '    A empresa que determina as finalidades e os meios do tratamento assume responsabilidades previstas na legislação. Isso inclui observar princípios como finalidade, adequação, necessidade, transparência, segurança e responsabilização.',
        '    É importante fazer uma precisão: os dados pessoais não são juridicamente uma propriedade do trabalhador no sentido patrimonial comum. A LGPD atribui à pessoa natural a condição de titular dos dados e assegura direitos relacionados ao tratamento dessas informações.',
        '    Também não se deve presumir que o legítimo interesse seja sempre a base legal adequada para o monitoramento. A base jurídica deve ser definida conforme a finalidade e as circunstâncias concretas do tratamento. Em determinadas situações, outras hipóteses legais podem ser aplicáveis.',
        '    O consentimento, por sua vez, merece cautela nas relações de emprego em razão da assimetria existente entre empregado e empregador. A simples inclusão de uma autorização em documento interno não resolve, por si só, todos os requisitos de proteção de dados.',
        '    O monitoramento digital deve ser analisado, portanto, não apenas sob a ótica trabalhista, mas também como atividade de tratamento de dados pessoais.',
        '4. O que a jurisprudência ensina sobre vigilância no trabalho',
        '    A jurisprudência trabalhista admite, em determinadas circunstâncias, a fiscalização de ferramentas corporativas. O e-mail profissional e equipamentos fornecidos para a execução do trabalho, por exemplo, não recebem necessariamente o mesmo grau de expectativa de privacidade atribuído às comunicações estritamente pessoais.',
        '    Isso não significa autorização irrestrita. O contexto, a política interna, a informação fornecida ao empregado, a finalidade e o grau de invasividade continuam relevantes.',
        '    No trabalho remoto, a exigência de permanência contínua diante de uma câmera apresenta problema particularmente sensível. Decisões da Justiça do Trabalho já reconheceram que a vigilância audiovisual permanente dentro da residência pode ultrapassar os limites do poder fiscalizatório e atingir a intimidade do trabalhador e de sua família.',
        '    Surge, assim, uma distinção importante: a empresa pode possuir interesses legítimos relacionados ao uso de sua ferramenta de trabalho, mas isso não significa que possa transformar a residência do empregado em extensão integralmente monitorada do escritório.',
        '    A tecnologia empregada para fiscalizar também pode produzir elementos relevantes para o próprio trabalhador. Registros digitais, por exemplo, podem contribuir para a análise da jornada efetivamente realizada, conforme as circunstâncias do caso.',
        '5. O caso Itaú sob a perspectiva jurídica',
        '    Ao aplicar esses critérios ao episódio envolvendo o Itaú, aparecem questões que somente podem ser respondidas a partir dos fatos, documentos, políticas internas e provas de cada situação concreta.',
        '    O Sindicato dos Bancários questionou publicamente aspectos como transparência, ausência de advertência prévia e os critérios utilizados para avaliar a atividade dos trabalhadores. Esses argumentos não representam, por si mesmos, uma conclusão judicial sobre a legalidade das demissões, mas identificam pontos juridicamente relevantes para eventual controvérsia.',
        '    Um indicador como quantidade de cliques ou tempo de utilização de determinado sistema pode não representar, isoladamente, toda a produtividade de uma atividade intelectual. Reuniões, leitura, planejamento, telefonemas e outras tarefas podem produzir rastros digitais distintos.',
        '    Por outro lado, o empregador pode sustentar seu poder de fiscalizar equipamentos e sistemas corporativos, verificar o cumprimento da jornada e apurar possíveis divergências entre registros e atividade efetivamente realizada.',
        '    A controvérsia demonstra que o problema jurídico não se resume à existência de monitoramento. Importa saber quais dados foram utilizados, como foram obtidos, quais informações os trabalhadores receberam, qual era a finalidade declarada, quais critérios orientaram as decisões e se o método empregado foi proporcional.',
        '6. Direitos e deveres no trabalho remoto',
        '    O monitoramento de e-mail corporativo pode ser admitido quando vinculado ao ambiente profissional, observadas as políticas aplicáveis, a finalidade legítima e a informação adequada ao trabalhador.',
        '    A exigência de câmera permanentemente ligada durante toda a jornada apresenta elevado risco de violação da intimidade, especialmente porque permite observação contínua do interior da residência.',
        '    Softwares que registram atividade, acessos ou tempo de utilização de programas exigem análise de finalidade, necessidade, transparência e proporcionalidade. A existência do software não transforma automaticamente seus indicadores em medida perfeita de produtividade.',
        '    Capturas periódicas de tela também exigem cautela, pois podem registrar informações que extrapolam a finalidade profissional. Quanto mais abrangente a coleta, maior a necessidade de justificar sua necessidade e estabelecer controles de acesso, retenção e segurança.',
        '    O monitoramento de equipamento pessoal utilizado pelo empregado apresenta riscos ainda maiores de mistura entre informações profissionais e privadas. Políticas de BYOD devem estabelecer separação clara entre os ambientes e limitar a coleta ao necessário.',
        '    A geolocalização pode possuir finalidade legítima em determinadas atividades externas, mas sua utilização deve estar relacionada à função e aos períodos em que o acompanhamento seja efetivamente necessário.',
        '    Finalmente, decisões disciplinares baseadas em dados de monitoramento devem considerar a qualidade e o contexto desses dados. Um indicador tecnológico isolado pode não retratar adequadamente todas as formas de execução de determinada atividade profissional.',
        'Conclusão: o futuro do trabalho e o novo contrato de confiança',
        '    O episódio envolvendo o Itaú evidencia o amadurecimento de uma discussão que acompanhará a consolidação do trabalho remoto. A legislação não elimina o poder de fiscalização do empregador, mas também não transforma a residência e a vida privada do trabalhador em espaços disponíveis à vigilância irrestrita.',
        '    CLT, direitos fundamentais e LGPD precisam ser interpretados conjuntamente. Transparência, finalidade, necessidade e proporcionalidade constituem parâmetros relevantes para a construção de políticas de monitoramento juridicamente mais seguras.',
        '    Para as empresas, a questão ultrapassa a escolha de uma ferramenta tecnológica. Políticas internas claras, governança de dados, critérios de avaliação coerentes e comunicação adequada podem reduzir conflitos e tornar a supervisão mais previsível.',
        '    Para os trabalhadores, compreender quais mecanismos são utilizados e quais dados são tratados permite exercer de maneira mais informada os direitos relacionados ao ambiente profissional e à proteção de dados.',
        '    O futuro do trabalho provavelmente dependerá menos da quantidade de sinais digitais que uma empresa consegue capturar e mais da capacidade de construir modelos de gestão que conciliem produtividade, responsabilidade, privacidade e confiança.',
        'Referências e fontes do artigo original',
        '    Consolidação das Leis do Trabalho — artigos 6º e 75-A e seguintes.',
        '    Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais (LGPD).',
        '    Tribunal Superior do Trabalho — materiais e jurisprudência sobre teletrabalho e fiscalização no ambiente de trabalho.',
        '    Tribunal Regional do Trabalho da 9ª Região — decisão divulgada sobre câmera ligada ininterruptamente no home office.',
        '    Sindicato dos Bancários e Financiários de São Paulo, Osasco e Região — manifestação pública sobre os desligamentos realizados pelo Itaú em setembro de 2025.',
        '    Outras fontes jornalísticas, acadêmicas e jurídicas constam da publicação original na Revista Jus Navigandi.',
        '- o -',
        'FURLANI, Adilson. Produtividade vs. Privacidade - A Guerra Silenciosa do Home Office. Revista Jus Navigandi, 10 set. 2025. Disponível em: https://jus.com.br/artigos/115558/.'
      ]
    },
  {
  slug: 'inadimplencia-no-contrato-de-aluguel-como-reaver-o-imovel-de-forma-rapida',
  category: 'Direito Imobiliário',
  title: 'Inadimplência no contrato de aluguel - Como reaver o imóvel de forma rápida',
  excerpt: 'Uma análise sobre a inadimplência na locação de imóveis, a ação de despejo e os instrumentos jurídicos disponíveis ao locador para a retomada do imóvel.',
  date: '23 abr. 2023',
  authorSlugs: ['adilson-furlani'],
  readTime: '18 min', areaSlugs: ['direito-imobiliario', 'contratos'],
  body: [
    'Introdução',
    '    A inadimplência em contratos de locação pode gerar dificuldades relevantes para o proprietário do imóvel, especialmente quando os aluguéis e outros encargos permanecem em atraso e o locatário continua ocupando o bem. Nessas situações, é importante compreender quais medidas podem ser adotadas para cobrança dos valores e eventual retomada do imóvel.',
    '    O problema envolve não apenas o pagamento do aluguel, mas também obrigações previstas no contrato, como encargos da locação, conservação do imóvel e, conforme o caso, regularização de contas vinculadas à utilização da propriedade.',
    '1. Do Imóvel',
    '    Antes da locação, o imóvel deve apresentar condições adequadas de utilização e habitabilidade. Aspectos relacionados à segurança, instalações elétricas e hidráulicas, higiene, conservação e acessibilidade devem ser considerados pelas partes.',
    '    A vistoria inicial é particularmente relevante, pois documenta as condições em que o imóvel foi entregue e pode servir posteriormente como elemento de comparação no momento da devolução.',
    '2. Do locador',
    '    O locador possui obrigações relacionadas à disponibilização do imóvel em condições adequadas de uso e ao cumprimento das disposições legais e contratuais aplicáveis à relação locatícia.',
    '    Também é importante que a documentação relacionada ao imóvel e à própria contratação seja analisada adequadamente, bem como que sejam avaliadas as condições da pessoa que ocupará o bem.',
    '3. Do locatário',
    '    O locatário assume obrigações decorrentes do contrato, entre elas o pagamento pontual do aluguel e dos encargos que lhe sejam atribuídos, além da utilização e conservação do imóvel de acordo com o que foi convencionado.',
    '    Antes da contratação, é comum que sejam avaliadas capacidade financeira e garantias destinadas a reduzir os riscos decorrentes de eventual inadimplemento.',
    '4. Do contrato',
    '    O contrato de locação formaliza direitos e obrigações de locador e locatário e deve identificar adequadamente as partes, o imóvel, o valor do aluguel, os encargos, o prazo da locação e as demais condições estabelecidas entre os contratantes.',
    '    Nas locações urbanas, deve-se observar especialmente a Lei nº 8.245/1991, conhecida como Lei do Inquilinato.',
    '5. Da garantia',
    '    As garantias locatícias constituem importante mecanismo de proteção diante do risco de inadimplemento. A legislação prevê modalidades específicas, cuja utilização e efeitos devem ser avaliados conforme o contrato celebrado.',
    '    As condições da garantia devem ser claramente estabelecidas, inclusive quanto à sua vigência e às hipóteses em que poderá ser utilizada.',
    '6. Da inadimplência - riscos e prejuízos do locador',
    '    A falta de pagamento pode interromper uma fonte de receita do proprietário e ainda produzir despesas adicionais relacionadas à cobrança, manutenção do imóvel e eventual processo judicial.',
    '    O prolongamento da ocupação por locatário inadimplente também pode retardar uma nova locação e aumentar os prejuízos decorrentes da indisponibilidade do bem.',
    '7. Da inadimplência - riscos e prejuízos do locatário',
    '    Para o locatário, o inadimplemento pode resultar em cobrança do débito, incidência dos encargos contratualmente previstos e, presentes os requisitos legais, ação destinada à retomada do imóvel.',
    '    A negociação entre as partes pode ser considerada diante de dificuldades financeiras, sem prejuízo dos direitos e obrigações estabelecidos no contrato e na legislação.',
    '8. Quem sofre maior prejuízo imediato?',
    '    A inadimplência produz consequências para ambas as partes. Para o locador, entretanto, a interrupção do recebimento dos aluguéis pode produzir impacto financeiro imediato enquanto o imóvel continua indisponível para uma nova locação.',
    '    Para o locatário, podem surgir consequências patrimoniais, contratuais e processuais relacionadas à dívida e à permanência no imóvel.',
    '9. Como o locador pode mitigar seus prejuízos?',
    '    Entre as alternativas que podem ser avaliadas estão a negociação e cobrança extrajudicial, a utilização das garantias existentes e, quando necessária, a adoção das medidas judiciais previstas na legislação.',
    '    A medida adequada dependerá das circunstâncias concretas, da modalidade de garantia existente e das disposições do contrato.',
    '10. Ação de despejo: uma solução, ou um problema para o locador?',
    '    A ação de despejo constitui instrumento jurídico destinado à retomada do imóvel nas hipóteses previstas em lei. Apesar de possibilitar a recuperação da posse, o processo também pode envolver custos, prazos e discussão judicial.',
    '    Por isso, a escolha da estratégia deve considerar tanto o objetivo de recuperar o imóvel quanto os aspectos econômicos e processuais envolvidos.',
    '11. Ação de despejo: etapas legais',
    '    Conforme as circunstâncias, podem existir medidas extrajudiciais anteriores ou paralelas ao processo, incluindo comunicação formal ao locatário e tentativa de regularização da situação.',
    '    Persistindo o inadimplemento, a legislação prevê a possibilidade de ação de despejo por falta de pagamento, podendo haver também discussão sobre aluguéis e encargos devidos.',
    '    O procedimento judicial envolve a citação da parte contrária, oportunidade de defesa, apreciação judicial dos pedidos e posterior cumprimento da decisão.',
    '12. Uma "possível" solução "rápida": Liminar de Despejo',
    '    Em determinadas hipóteses previstas na Lei do Inquilinato, pode ser requerida medida liminar para desocupação do imóvel antes do julgamento definitivo da ação.',
    '    A concessão não é automática. Depende da hipótese legal invocada, dos elementos apresentados no processo e do preenchimento dos requisitos previstos em lei, cabendo ao juiz apreciar o pedido.',
    '13. Requisitos "mínimos" para a Liminar de Despejo',
    '    Os requisitos para uma medida liminar dependem do fundamento utilizado e das características da relação locatícia, inclusive da existência ou não das garantias previstas na legislação.',
    '    O artigo 59 da Lei nº 8.245/1991 disciplina hipóteses em que pode haver desocupação liminar, observados os requisitos legais correspondentes.',
    '14. E se o locatário se recusar a deixar o imóvel?',
    '    Uma ordem judicial de desocupação deve ser cumprida pelos meios processuais adequados. Havendo resistência, cabe ao Poder Judiciário determinar as providências necessárias para efetivação da decisão.',
    '    O proprietário não deve promover a retirada do ocupante por iniciativa própria à margem do procedimento legal.',
    '15. Ocorreu o despejo. O que o locador deve fazer?',
    '    Após a retomada do imóvel, é recomendável verificar seu estado de conservação e comparar as condições encontradas com aquelas documentadas anteriormente, especialmente por meio das vistorias realizadas.',
    '    Eventuais valores pendentes, danos ou encargos devem ser avaliados conforme o contrato, as garantias existentes e os instrumentos de cobrança juridicamente disponíveis.',
    'Conclusão',
    '    A inadimplência locatícia exige análise cuidadosa do contrato, das garantias e das circunstâncias concretas. A negociação pode solucionar determinadas situações, enquanto outras podem exigir medidas judiciais para cobrança dos débitos e retomada do imóvel.',
    '    A Lei do Inquilinato estabelece instrumentos específicos para a ação de despejo e, em determinadas hipóteses, admite pedido de desocupação liminar. A aplicação desses mecanismos depende do preenchimento dos requisitos legais de cada caso.',
    '    Por essa razão, medidas destinadas à retomada do imóvel devem observar o procedimento legal e as particularidades da relação contratual.',
    'Referências Bibliográficas',
    '    BRASIL. Lei nº 8.245, de 18 de outubro de 1991. Dispõe sobre as locações dos imóveis urbanos e os procedimentos a elas pertinentes.',
    '    BRASIL. Lei nº 10.406, de 10 de janeiro de 2002. Institui o Código Civil.',
    '    CARVALHO, Fabrício Bolzan de. Curso de Direito Imobiliário. 2. ed. São Paulo: Atlas, 2018.',
    '    COSTA, Karoline Lopes. Ação de despejo: vantagens e desvantagens para o locador. Revista Zênite, São Paulo, v. 244, p. 40-44, mar. 2014.',
    '    GUIMARÃES, M. C. A.; BANDEIRA, R. C. L. Locação de imóveis urbanos: aspectos legais e práticos. São Paulo: Editora Atlas, 2017.',
    '    GONÇALVES, Carlos Roberto. Direito civil brasileiro. São Paulo: Saraiva Educação, 2021. Vol. III.',
    '    NOGUEIRA, Guilherme Magalhães. Curso de Direito Imobiliário. 11. ed. São Paulo: Saraiva Educação, 2020.',
    '- o -',
    'FURLANI, Adilson. Inadimplência no contrato de aluguel - Como reaver o imóvel de forma rápida. Revista Jus Navigandi, ISSN 1518-4862, Teresina, ano 28, n. 7235, 23 abr. 2023. Disponível em: https://jus.com.br/artigos/103542.'
  ]
},
  {
  slug: 'educar-os-filhos-fora-da-escola',
  category: 'Direito à Educação',
  title: 'Educar os filhos fora da escola: é crime ou não?',
  excerpt: 'Análise sobre educação domiciliar, direito à educação e situações excepcionais envolvendo crianças com transtornos psicológicos que dificultam ou impedem a frequência escolar.',
  date: '11 abr. 2023',
  authorSlugs: ['adilson-furlani'],
  readTime: '10 min',
  body: [
    'Introdução',
    '    O direito à educação é um direito fundamental garantido pela Constituição Federal de 1988 e é considerado um instrumento essencial para o desenvolvimento individual e social. No entanto, a questão sobre a legalidade da educação domiciliar, também conhecida como homeschooling, tem gerado debates e controvérsias no Brasil. Além disso, a inclusão de crianças com transtornos psicológicos nas escolas públicas tem sido um desafio para o sistema educacional brasileiro.',
    '    A educação domiciliar consiste na modalidade de ensino em que os pais ou responsáveis assumem a responsabilidade pela educação dos filhos em casa, sem a necessidade de frequentar uma escola regular. Essa prática não é reconhecida pelo Estado brasileiro, pois a Constituição Federal e a Lei de Diretrizes e Bases da Educação (LDB) preveem a obrigatoriedade da educação escolar.',
    '    No entanto, há casos em que as crianças têm transtornos psicológicos que impedem sua participação na escola formal. Nesses casos, é preciso garantir o direito à educação por meio de medidas que atendam às necessidades específicas de cada criança.',
    '    A inclusão de crianças com transtornos psicológicos na escola pública é uma obrigação do Estado, que deve fornecer atendimento educacional especializado. O objetivo é garantir a inclusão social e a igualdade de oportunidades para essas crianças.',
    '    Para analisar a legalidade da educação domiciliar e o direito das crianças com transtornos psicológicos à educação pública, serão utilizadas referências bibliográficas atualizadas, como livros, artigos científicos e legislação pertinente.',
    '    Dentre as principais referências bibliográficas utilizadas estão a Constituição Federal de 1988, a LDB (Lei nº 9.394/96), o Estatuto da Criança e do Adolescente (Lei nº 8.069/90), a Convenção sobre os Direitos da Criança, a jurisprudência dos tribunais e a doutrina especializada.',
    '    Este artigo busca contribuir para o debate sobre a educação domiciliar e a inclusão de crianças com transtornos psicológicos na escola pública, a fim de garantir o pleno exercício do direito à educação para todas as crianças brasileiras.',
    '1. Legislação brasileira sobre a educação',
    '    É composta por diversas normas e leis que garantem o direito à educação e estabelecem as bases para a organização do sistema educacional brasileiro. A Constituição Federal de 1988, em seu artigo 6º, estabelece a educação como um direito social e dever do Estado, e a Lei de Diretrizes e Bases da Educação (LDB), Lei nº 9.394/96, regulamenta o sistema educacional brasileiro.',
    '    De acordo com a LDB, a educação escolar é obrigatória dos 4 aos 17 anos de idade e deve ser oferecida pela rede pública de ensino. A lei também estabelece que a educação é um direito de todos e dever do Estado, garantindo o acesso e permanência na escola. Além disso, a LDB prevê a oferta de atendimento educacional especializado para crianças com necessidades educacionais especiais, garantindo a inclusão dessas crianças na rede regular de ensino.',
    '    O Estatuto da Criança e do Adolescente (ECA), Lei nº 8.069/90, também garante o direito à educação e proteção integral à criança e ao adolescente. O ECA estabelece a obrigação do Estado de assegurar o acesso à educação pública e de qualidade, além de garantir a proteção contra todas as formas de discriminação.',
    '    A legislação brasileira garante o direito à educação como um direito fundamental, estabelecendo a obrigatoriedade da educação escolar e a oferta de atendimento educacional especializado para crianças com necessidades educacionais especiais. As famílias também têm direito a escolher a melhor forma de educação para seus filhos, desde que essa escolha esteja de acordo com a legislação educacional brasileira.',
    '2. Educação domiciliar',
    '    Também conhecida como homeschooling, é uma prática educativa em que os pais ou responsáveis se responsabilizam pela educação dos filhos em casa, sem a necessidade de frequentar uma escola regular. No Brasil, essa prática não é regulamentada por lei e, portanto, não é considerada legal.',
    '    O Supremo Tribunal Federal (STF) já se posicionou sobre o assunto em 2018, no julgamento da ADPF 461 e do RE 888.815, e decidiu que a educação domiciliar não é permitida no Brasil. Isso porque a Constituição Federal estabelece que a educação é um direito social e um dever do Estado, e a LDB prevê a obrigatoriedade da frequência à escola. Além disso, a educação domiciliar não permite a convivência com outras crianças e professores, o que é fundamental para a socialização e formação integral dos alunos.',
    '    No entanto, há casos em que a educação domiciliar pode ser autorizada pela Justiça, como em situações em que a criança possui alguma doença que impossibilita a frequência à escola ou quando a escola não consegue oferecer um ambiente adequado para a criança, especialmente aquelas com necessidades educacionais especiais.',
    '    Portanto, a educação domiciliar não é uma opção legal para as famílias brasileiras, mas pode ser autorizada em casos excepcionais, desde que comprovada a impossibilidade de frequência à escola e mediante autorização judicial.',
    '3. Exceções para a educação domiciliar',
    '    Ainda que a educação domiciliar não seja legal no Brasil, há exceções que permitem que as crianças recebam educação em casa. Uma dessas exceções é quando a criança possui transtornos psicológicos que impedem sua participação na escola formal.',
    '    Nesses casos, é preciso comprovar, por meio de laudos médicos e avaliações multidisciplinares, que a criança não tem condições de frequentar a escola regular. A autorização para a educação domiciliar deve ser concedida pela Justiça, que avaliará cada caso individualmente.',
    '    É importante ressaltar que a educação domiciliar não é a solução ideal para as crianças com transtornos psicológicos, pois a convivência com outros alunos e a presença de profissionais qualificados são fundamentais para o desenvolvimento social e emocional dessas crianças. Além disso, o acompanhamento da educação domiciliar pode ser um desafio para os pais, que muitas vezes não possuem a formação adequada para atuar como educadores em tempo integral.',
    '    Embora haja exceções que permitem a educação domiciliar para crianças com transtornos psicológicos, essa prática deve ser vista como uma solução temporária e sempre acompanhada de medidas para garantir a socialização e a integração dessas crianças na sociedade.',
    '4. A dificuldade das instituições públicas de ensino quanto a crianças com transtornos psicológicos',
    '    A inclusão de crianças com transtornos psicológicos no ambiente escolar pode representar um desafio para as instituições de ensino público. Segundo o Ministério da Educação (2018), as escolas devem estar preparadas para atender a diversidade dos alunos, inclusive aqueles com necessidades educacionais especiais. No entanto, muitas vezes a realidade é diferente, e as escolas encontram dificuldades para oferecer um ensino adequado a esses alunos.',
    '    Uma pesquisa realizada por Aquino e Zago (2018) com 13 escolas públicas de São Paulo que atendiam crianças com transtornos psicológicos identificou que as principais dificuldades encontradas foram a falta de capacitação dos professores para lidar com esses alunos, a falta de recursos materiais e financeiros para atender às necessidades especiais e a falta de apoio da família.',
    '    Além disso, as escolas muitas vezes não estão preparadas para lidar com a complexidade dos transtornos psicológicos, o que pode levar a situações de discriminação e exclusão social.',
    '    É importante ressaltar que a inclusão escolar não se resume apenas à matrícula do aluno em uma escola regular, mas sim à garantia de um ambiente educacional adequado e inclusivo, que atenda às suas necessidades individuais.',
    '    Nesse sentido, é papel das escolas públicas e do Estado como um todo oferecer condições para que as crianças com transtornos psicológicos tenham acesso à educação, com estrutura e recursos adequados, além de oferecer formação e capacitação aos professores para lidar com esses alunos de forma efetiva.',
    '5. Direitos das crianças com transtornos psicológicos',
    '    As crianças com transtornos psicológicos possuem o direito à educação pública garantido pela Constituição Federal e pela Lei de Diretrizes e Bases da Educação Nacional. O artigo 208 da Constituição Federal estabelece que o Estado deve garantir o atendimento educacional especializado aos portadores de deficiência, preferencialmente na rede regular de ensino. Já a Lei nº 9.394/96 prevê que a educação especial é uma modalidade de educação escolar, oferecida preferencialmente na rede regular de ensino.',
    '    Além disso, as escolas devem adotar medidas para garantir a inclusão dessas crianças, como a adaptação do ambiente escolar, o acompanhamento por profissionais especializados e o fornecimento de recursos pedagógicos adequados. As escolas também devem promover a sensibilização da comunidade escolar sobre as necessidades dessas crianças e garantir que elas sejam tratadas com respeito e dignidade.',
    '    É importante ressaltar que o cumprimento dessas medidas é fundamental para que as crianças com transtornos psicológicos possam ter acesso à educação de qualidade e desenvolver todo o seu potencial. Além disso, a inclusão dessas crianças na sociedade é um direito humano básico e um princípio fundamental da democracia.',
    '6. Responsabilidade dos pais',
    '    Os pais são responsáveis por garantir a educação de seus filhos, seja por meio da matrícula em escolas regulares, por meio da educação domiciliar ou por meio de outras modalidades de ensino. No caso das crianças com transtornos psicológicos, essa responsabilidade se torna ainda mais importante, já que elas podem enfrentar maiores dificuldades para acessar a educação formal.',
    '    Cabe aos pais buscar alternativas e recursos que possam contribuir para a inclusão e o desenvolvimento educacional de seus filhos, como o acompanhamento de profissionais especializados, a adaptação do ambiente domiciliar para o aprendizado e o uso de materiais e recursos pedagógicos adequados.',
    '    No entanto, é importante ressaltar que a responsabilidade dos pais não se sobrepõe ao direito à educação garantido às crianças pela Constituição Federal e pelas leis brasileiras. Os pais não podem impedir o acesso de seus filhos à educação formal por razões de crença religiosa ou por preferência pessoal.',
    '7. Jurisprudência sobre a educação domiciliar',
    '    A jurisprudência brasileira em relação à educação domiciliar é um tema em constante evolução, uma vez que a prática ainda é relativamente nova no país e vem sendo alvo de discussões e questionamentos. Atualmente, a educação domiciliar é considerada ilegal no Brasil, uma vez que não é reconhecida pela legislação nacional.',
    '    No entanto, há casos em que as famílias recorrem à justiça para garantir o direito de educar seus filhos em casa, especialmente em situações em que a criança apresenta transtornos psicológicos que impedem sua participação na escola formal. A jurisprudência em relação a esses casos tem sido variável, com algumas decisões favoráveis à educação domiciliar e outras que negam o pedido das famílias.',
    '    É importante ressaltar que, até o momento, a jurisprudência em relação à educação domiciliar no Brasil ainda é pouco consolidada e está em constante mudança. Cabe às famílias interessadas na prática buscar orientação jurídica e avaliar os riscos e benefícios envolvidos antes de tomar qualquer decisão.',
    '8. O papel do Estado',
    '    O Estado brasileiro tem a obrigação de garantir o direito à educação para todas as crianças, incluindo aquelas com transtornos psicológicos que precisam de atendimento educacional especializado. A Constituição Federal de 1988, em seu artigo 208, estabelece que o dever do Estado com a educação será efetivado mediante a garantia de atendimento educacional especializado aos portadores de deficiência, preferencialmente na rede regular de ensino.',
    '    Além disso, a Lei de Diretrizes e Bases da Educação Nacional (Lei nº 9.394/96) define que é dever do Estado garantir educação especial para pessoas com deficiência, preferencialmente na rede regular de ensino. Para isso, as escolas devem oferecer recursos e serviços de apoio pedagógico adequados às necessidades dos estudantes com deficiência, incluindo recursos de acessibilidade e atendimento educacional especializado.',
    '    O Estado também deve garantir o acesso das crianças com transtornos psicológicos aos serviços de saúde mental, que muitas vezes são essenciais para o sucesso educacional dessas crianças. Além disso, o Estado deve fornecer treinamento adequado aos professores e profissionais da educação para que eles possam atender adequadamente as necessidades educacionais dessas crianças.',
    'Conclusão',
    '    A educação é um direito fundamental garantido pela Constituição brasileira e todas as crianças têm o direito de receber educação de qualidade. No entanto, para crianças com transtornos psicológicos, pode ser um desafio garantir que elas recebam educação inclusiva e adequada.',
    '    A legislação brasileira estabelece a educação domiciliar como uma exceção à educação formal, mas com limitações e regras específicas. É necessário um esforço conjunto do Estado, das escolas e das famílias para garantir que as crianças com transtornos psicológicos recebam educação adequada. As famílias devem ter o direito de escolher a melhor opção de educação para seus filhos, desde que sejam respeitados os direitos e as obrigações legais.',
    '    É importante que as escolas tenham recursos adequados para receber crianças com transtornos psicológicos e oferecer educação inclusiva, como salas de aula adaptadas, professores qualificados e suporte emocional e psicológico. As políticas públicas devem ser desenvolvidas para garantir que todas as crianças tenham acesso à educação de qualidade, independentemente de suas condições de saúde.',
    '    A jurisprudência brasileira sobre a educação domiciliar ainda é incipiente, mas tem sido discutida com mais frequência nos tribunais. É fundamental que a legislação sobre o tema seja atualizada para garantir que as famílias e as crianças tenham seus direitos e deveres claramente definidos.',
    '    Por fim, a educação é um direito fundamental e deve ser garantida para todas as crianças, inclusive aquelas com transtornos psicológicos. As famílias devem ter o direito de escolher a melhor opção de educação para seus filhos, mas sempre seguindo as regras estabelecidas pela legislação brasileira.',
    '    As escolas e o Estado devem trabalhar juntos para garantir que as crianças recebam educação inclusiva e adequada, proporcionando as condições necessárias para que elas possam se desenvolver plenamente e realizar seu potencial.',
    'Referências Bibliográficas',
    '    AQUINO, J. L. G.; ZAGO, N. Estudo sobre escolas públicas que atendem alunos com transtornos psicológicos. Psicologia Escolar e Educacional, v. 22, n. 3, p. 433-441, 2018.',
    '    BRASIL. Constituição Federal, 1988. Acesso em 10 abr. 2023.',
    '    BRASIL. Estatuto da Criança e do Adolescente, Lei nº 8.069, de 13 de julho de 1990. Acesso em 07 abr. 2023.',
    '    BRASIL. Lei de Diretrizes e Bases da Educação Nacional, Lei nº 9.394, de 20 de dezembro de 1996. Acesso em 07 abr. 2023.',
    '    BRASIL. Lei nº 13.005, de 25 de junho de 2014. Aprova o Plano Nacional de Educação — PNE e dá outras providências.',
    '    BRASIL. Ministério da Educação. Secretaria de Educação Especial. Política Nacional de Educação Especial na Perspectiva da Educação Inclusiva. Brasília, DF: MEC/SEESP, 2008.',
    '    BRASIL. Superior Tribunal de Justiça. REsp 1.395.702 - RS (2013/0098567-6). Acesso em 08 abr. 2023.',
    '    BRASIL. Supremo Tribunal Federal. Ação Direta de Inconstitucionalidade nº 5.357. Brasília, DF, 8 de setembro de 2016.',
    '    BRASIL. Tribunal de Justiça do Estado de São Paulo. Apelação nº 1000316-45.2019.8.26.0566. São Paulo, 28 de janeiro de 2020.',
    '    FERREIRA, Naura Syria Carapeto; AGUIAR, Márcia Ângela da S. Amaral; GARCIA, Regina Leite (Orgs.). Gestão da educação: impasses, perspectivas e compromissos. São Paulo: Cortez, 2000.',
    '    FREIRE, Marcelo. Educação domiciliar: perspectivas e desafios no Brasil. Rio de Janeiro: WAK, 2018.',
    '    SANTOS, Maria Lúcia de A. Educação Inclusiva: concepções e práticas. São Paulo: Cortez, 2004.',
    '    GADOTTI, Moacir. História das ideias pedagógicas. São Paulo: Ática, 1998.',
    '    SUPREMO TRIBUNAL FEDERAL. ADPF 461. Acesso em 09 abr. 2023.',
    '    SUPREMO TRIBUNAL FEDERAL. RE 888.815. Acesso em 09 abr. 2023.',
    '- o -',
    'FURLANI, Adilson. Educar os filhos fora da escola: é crime ou não?. Revista Jus Navigandi, ISSN 1518-4862, Teresina, ano 28, n. 7223, 11 abr. 2023. Disponível em: https://jus.com.br/artigos/103491.'
  ]
},
];

export const reviews = [
  { author:'Cliente Google 01', text:'Excelente atendimento. Equipe muito preparada e sempre disponível para esclarecer nossas dúvidas.', source:'Google', url:process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL || '#' },
  { author:'Cliente Google 02', text:'Profissionais atenciosos, técnicos e claros na condução das questões.', source:'Google', url:process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL || '#' },
];
