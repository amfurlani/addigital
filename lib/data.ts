export type Area = { slug:string; title:string; summary:string; intro:string; services:string[]; approach:string };
export type Lawyer = { slug:string; name:string; role:string; oab:string; areas:string[]; education:string[]; bio:string; publications:string[] };
export type Article = { slug:string; category:string; title:string; excerpt:string; date:string; authorSlug:string; readTime:string; body:string[] };

export const areas: Area[] = [
  { slug:'direito-tributario', title:'Direito Tributário', summary:'Assessoria e atuação em questões tributárias administrativas e judiciais.', intro:'Atuação jurídica em questões tributárias que exigem análise técnica, visão estratégica e compreensão do ambiente empresarial.', services:['Planejamento tributário','Análise de questões fiscais','Consultoria tributária','Recuperação de créditos','Processos administrativos','Processos judiciais','Análise de riscos tributários','Acompanhamento de mudanças legislativas'], approach:'Cada questão tributária é analisada considerando o contexto jurídico, econômico e operacional envolvido, com identificação de riscos, alternativas e caminhos juridicamente adequados.' },
  { slug:'direito-empresarial', title:'Direito Empresarial', summary:'Estratégias jurídicas alinhadas às necessidades e ao contexto de cada negócio.', intro:'Assessoria jurídica para decisões empresariais, estruturas societárias e situações que exigem integração entre direito e negócio.', services:['Consultoria empresarial','Questões societárias','Governança','Reorganizações','Negociações','Prevenção de conflitos'], approach:'A atuação considera os objetivos do negócio, os riscos envolvidos e as alternativas juridicamente disponíveis para cada decisão.' },
  { slug:'contratos', title:'Contratos', summary:'Análise, elaboração, negociação e revisão de instrumentos contratuais.', intro:'Estruturação contratual com atenção à clareza, alocação de riscos e aderência à operação das partes.', services:['Elaboração de contratos','Revisão contratual','Negociação','Contratos empresariais','Instrumentos de garantia','Gestão de riscos contratuais'], approach:'Os instrumentos são desenvolvidos a partir da realidade da operação, buscando clareza, coerência e previsibilidade jurídica.' },
  { slug:'contencioso', title:'Contencioso', summary:'Atuação técnica na condução de demandas judiciais e administrativas.', intro:'Condução estratégica de conflitos com análise de risco, definição de teses e acompanhamento próximo da evolução de cada demanda.', services:['Contencioso cível','Contencioso empresarial','Processos administrativos','Estratégia processual','Negociação e acordos','Gestão de carteira'], approach:'Cada demanda é analisada de forma individualizada, considerando fundamentos jurídicos, evidências, riscos e possíveis desdobramentos.' },
  { slug:'consultoria-juridica', title:'Consultoria Jurídica', summary:'Análise preventiva de questões jurídicas e identificação de alternativas.', intro:'Apoio jurídico contínuo para decisões que demandam prevenção, estruturação e avaliação de riscos.', services:['Pareceres','Consultas jurídicas','Mapeamento de riscos','Apoio a decisões','Políticas internas','Prevenção de litígios'], approach:'A consultoria transforma questões jurídicas em informações claras para apoiar decisões responsáveis e documentadas.' },
  { slug:'regulatorio', title:'Regulatório', summary:'Apoio jurídico em temas regulatórios e ambientes normativos complexos.', intro:'Assessoria em ambientes regulados, com acompanhamento de normas, riscos e obrigações aplicáveis às operações.', services:['Análise regulatória','Acompanhamento normativo','Consultas e pareceres','Mapeamento de obrigações','Apoio institucional'], approach:'O trabalho parte da leitura técnica da regulação e de seus impactos concretos sobre processos, produtos e decisões empresariais.' },
];

export const lawyers: Lawyer[] = [
  { slug:'adilson-furlani', name:'FURLANI, Adilson', role:'Sócio-Advogado', oab:'OAB/SP 53.8189', areas:['Direito Civil','Digital', 'Consumidor'], education:['Advogado, Bacharel em Direito — Universidade Paulista','Especialista em Sistemas de Informação, Segurança da Informação e Análises de Sistemas Informáticos'], bio:'Atua em questões consultivas e contenciosas relacionadas ao ambiente empresarial, com experiência na análise de temas tributários e estratégicos.', publications:['Reforma Tributária: principais pontos para empresas','Planejamento e segurança jurídica nas decisões empresariais'] },
  { slug:'daniela-pinheiros', name:'PINHEIROS, Daniela', role:'Consultora Jurídica', oab:'', areas:['Direito Empresarial','Contratos'], education:['Bacharel em Direito — Universidade Paulista','Pós-graduação em Direito Civil, Processo Civil e Previdenciário'], bio:'Atua na estruturação de relações empresariais, negociação e revisão de contratos e apoio jurídico a decisões de negócio.', publications:['Cláusulas contratuais que merecem atenção','Governança e prevenção de conflitos societários'] },
  { slug:'pedro-almeida', name:'ALMEIDA, Pedro', role:'Analista Jurídico', oab:'', areas:['Contencioso','Consultoria Jurídica'], education:['Bacharel em Direito — Universidade X'], bio:'Atua na condução de demandas judiciais e administrativas, com foco em análise processual, organização de evidências e acompanhamento estratégico.', publications:['Decisões empresariais e análise jurídica preventiva'] },
];

export const articles: Article[] = [
  { slug:'reforma-tributaria-principais-pontos-empresas', category:'Tributário', title:'Reforma Tributária: principais pontos para empresas', excerpt:'Uma visão objetiva sobre temas que merecem acompanhamento na adaptação ao novo ambiente tributário.', date:'12 set. 2026', authorSlug:'joao-da-silva', readTime:'6 min', body:['A Reforma Tributária altera de forma relevante a lógica de tributação sobre o consumo e exige atenção das empresas durante o período de transição.','Mais do que acompanhar mudanças legislativas, é importante mapear os impactos sobre contratos, precificação, sistemas, processos internos e relacionamento com fornecedores e clientes.','A avaliação jurídica deve ser integrada às áreas financeira, fiscal e operacional, de modo que as decisões sejam tomadas com base em informações consistentes e atualizadas.','Este conteúdo possui caráter exclusivamente informativo e não constitui aconselhamento jurídico individualizado.'] },
  { slug:'analise-juridica-preventiva-decisoes-empresariais', category:'Empresarial', title:'Decisões empresariais e a importância da análise jurídica preventiva', excerpt:'Como a leitura antecipada de riscos pode apoiar decisões mais estruturadas.', date:'05 set. 2026', authorSlug:'pedro-almeida', readTime:'5 min', body:['A análise jurídica preventiva busca identificar riscos antes que eles se convertam em conflitos ou custos inesperados.','Em decisões empresariais relevantes, a participação jurídica desde as etapas iniciais pode contribuir para estruturar documentos, responsabilidades e mecanismos de prevenção de controvérsias.','A prevenção não elimina incertezas, mas permite que elas sejam identificadas e tratadas de maneira organizada.','Este conteúdo possui caráter exclusivamente informativo e não constitui aconselhamento jurídico individualizado.'] },
  { slug:'clausulas-contratuais-atencao-especial', category:'Contratos', title:'Cláusulas contratuais que merecem atenção especial', excerpt:'Pontos que ajudam a tornar a relação contratual mais clara e previsível.', date:'28 ago. 2026', authorSlug:'mariana-souza', readTime:'7 min', body:['Contratos eficientes devem refletir a operação real das partes e distribuir responsabilidades de forma compreensível.','Cláusulas sobre objeto, pagamento, responsabilidade, rescisão, confidencialidade e solução de conflitos costumam merecer atenção especial.','A qualidade de um contrato não depende apenas de sua extensão, mas da clareza com que antecipa situações relevantes para aquela relação.','Este conteúdo possui caráter exclusivamente informativo e não constitui aconselhamento jurídico individualizado.'] },
  {
  slug: 'educar-os-filhos-fora-da-escola',
  category: 'Direito à Educação',
  title: 'Educar os filhos fora da escola: é crime ou não?',
  excerpt: 'Análise sobre educação domiciliar, direito à educação e situações excepcionais envolvendo crianças com transtornos psicológicos que dificultam ou impedem a frequência escolar.',
  date: '11 abr. 2023',
  authorSlug: 'adilson-furlani',
  readTime: '10 min',
  body: [
    'Introdução',

    'O direito à educação é um direito fundamental garantido pela Constituição Federal de 1988 e é considerado um instrumento essencial para o desenvolvimento individual e social. No entanto, a questão sobre a legalidade da educação domiciliar, também conhecida como homeschooling, tem gerado debates e controvérsias no Brasil. Além disso, a inclusão de crianças com transtornos psicológicos nas escolas públicas tem sido um desafio para o sistema educacional brasileiro.',

    'A educação domiciliar consiste na modalidade de ensino em que os pais ou responsáveis assumem a responsabilidade pela educação dos filhos em casa, sem a necessidade de frequentar uma escola regular. Essa prática não é reconhecida pelo Estado brasileiro, pois a Constituição Federal e a Lei de Diretrizes e Bases da Educação (LDB) preveem a obrigatoriedade da educação escolar.',

    'No entanto, há casos em que as crianças têm transtornos psicológicos que impedem sua participação na escola formal. Nesses casos, é preciso garantir o direito à educação por meio de medidas que atendam às necessidades específicas de cada criança.',

    'A inclusão de crianças com transtornos psicológicos na escola pública é uma obrigação do Estado, que deve fornecer atendimento educacional especializado. O objetivo é garantir a inclusão social e a igualdade de oportunidades para essas crianças.',

    'Para analisar a legalidade da educação domiciliar e o direito das crianças com transtornos psicológicos à educação pública, serão utilizadas referências bibliográficas atualizadas, como livros, artigos científicos e legislação pertinente.',

    'Dentre as principais referências bibliográficas utilizadas estão a Constituição Federal de 1988, a LDB (Lei nº 9.394/96), o Estatuto da Criança e do Adolescente (Lei nº 8.069/90), a Convenção sobre os Direitos da Criança, a jurisprudência dos tribunais e a doutrina especializada.',

    'Este artigo busca contribuir para o debate sobre a educação domiciliar e a inclusão de crianças com transtornos psicológicos na escola pública, a fim de garantir o pleno exercício do direito à educação para todas as crianças brasileiras.',

    '1. Legislação brasileira sobre a educação',

    'É composta por diversas normas e leis que garantem o direito à educação e estabelecem as bases para a organização do sistema educacional brasileiro. A Constituição Federal de 1988, em seu artigo 6º, estabelece a educação como um direito social e dever do Estado, e a Lei de Diretrizes e Bases da Educação (LDB), Lei nº 9.394/96, regulamenta o sistema educacional brasileiro.',

    'De acordo com a LDB, a educação escolar é obrigatória dos 4 aos 17 anos de idade e deve ser oferecida pela rede pública de ensino. A lei também estabelece que a educação é um direito de todos e dever do Estado, garantindo o acesso e permanência na escola. Além disso, a LDB prevê a oferta de atendimento educacional especializado para crianças com necessidades educacionais especiais, garantindo a inclusão dessas crianças na rede regular de ensino.',

    'O Estatuto da Criança e do Adolescente (ECA), Lei nº 8.069/90, também garante o direito à educação e proteção integral à criança e ao adolescente. O ECA estabelece a obrigação do Estado de assegurar o acesso à educação pública e de qualidade, além de garantir a proteção contra todas as formas de discriminação.',

    'A legislação brasileira garante o direito à educação como um direito fundamental, estabelecendo a obrigatoriedade da educação escolar e a oferta de atendimento educacional especializado para crianças com necessidades educacionais especiais. As famílias também têm direito a escolher a melhor forma de educação para seus filhos, desde que essa escolha esteja de acordo com a legislação educacional brasileira.',

    '2. Educação domiciliar',

    'Também conhecida como homeschooling, é uma prática educativa em que os pais ou responsáveis se responsabilizam pela educação dos filhos em casa, sem a necessidade de frequentar uma escola regular. No Brasil, essa prática não é regulamentada por lei e, portanto, não é considerada legal.',

    'O Supremo Tribunal Federal (STF) já se posicionou sobre o assunto em 2018, no julgamento da ADPF 461 e do RE 888.815, e decidiu que a educação domiciliar não é permitida no Brasil. Isso porque a Constituição Federal estabelece que a educação é um direito social e um dever do Estado, e a LDB prevê a obrigatoriedade da frequência à escola. Além disso, a educação domiciliar não permite a convivência com outras crianças e professores, o que é fundamental para a socialização e formação integral dos alunos.',

    'No entanto, há casos em que a educação domiciliar pode ser autorizada pela Justiça, como em situações em que a criança possui alguma doença que impossibilita a frequência à escola ou quando a escola não consegue oferecer um ambiente adequado para a criança, especialmente aquelas com necessidades educacionais especiais.',

    'Portanto, a educação domiciliar não é uma opção legal para as famílias brasileiras, mas pode ser autorizada em casos excepcionais, desde que comprovada a impossibilidade de frequência à escola e mediante autorização judicial.',

    '3. Exceções para a educação domiciliar',

    'Ainda que a educação domiciliar não seja legal no Brasil, há exceções que permitem que as crianças recebam educação em casa. Uma dessas exceções é quando a criança possui transtornos psicológicos que impedem sua participação na escola formal.',

    'Nesses casos, é preciso comprovar, por meio de laudos médicos e avaliações multidisciplinares, que a criança não tem condições de frequentar a escola regular. A autorização para a educação domiciliar deve ser concedida pela Justiça, que avaliará cada caso individualmente.',

    'É importante ressaltar que a educação domiciliar não é a solução ideal para as crianças com transtornos psicológicos, pois a convivência com outros alunos e a presença de profissionais qualificados são fundamentais para o desenvolvimento social e emocional dessas crianças. Além disso, o acompanhamento da educação domiciliar pode ser um desafio para os pais, que muitas vezes não possuem a formação adequada para atuar como educadores em tempo integral.',

    'Embora haja exceções que permitem a educação domiciliar para crianças com transtornos psicológicos, essa prática deve ser vista como uma solução temporária e sempre acompanhada de medidas para garantir a socialização e a integração dessas crianças na sociedade.',

    '4. A dificuldade das instituições públicas de ensino quanto a crianças com transtornos psicológicos',

    'A inclusão de crianças com transtornos psicológicos no ambiente escolar pode representar um desafio para as instituições de ensino público. Segundo o Ministério da Educação (2018), as escolas devem estar preparadas para atender a diversidade dos alunos, inclusive aqueles com necessidades educacionais especiais. No entanto, muitas vezes a realidade é diferente, e as escolas encontram dificuldades para oferecer um ensino adequado a esses alunos.',

    'Uma pesquisa realizada por Aquino e Zago (2018) com 13 escolas públicas de São Paulo que atendiam crianças com transtornos psicológicos identificou que as principais dificuldades encontradas foram a falta de capacitação dos professores para lidar com esses alunos, a falta de recursos materiais e financeiros para atender às necessidades especiais e a falta de apoio da família.',

    'Além disso, as escolas muitas vezes não estão preparadas para lidar com a complexidade dos transtornos psicológicos, o que pode levar a situações de discriminação e exclusão social.',

    'É importante ressaltar que a inclusão escolar não se resume apenas à matrícula do aluno em uma escola regular, mas sim à garantia de um ambiente educacional adequado e inclusivo, que atenda às suas necessidades individuais.',

    'Nesse sentido, é papel das escolas públicas e do Estado como um todo oferecer condições para que as crianças com transtornos psicológicos tenham acesso à educação, com estrutura e recursos adequados, além de oferecer formação e capacitação aos professores para lidar com esses alunos de forma efetiva.',

    '5. Direitos das crianças com transtornos psicológicos',

    'As crianças com transtornos psicológicos possuem o direito à educação pública garantido pela Constituição Federal e pela Lei de Diretrizes e Bases da Educação Nacional. O artigo 208 da Constituição Federal estabelece que o Estado deve garantir o atendimento educacional especializado aos portadores de deficiência, preferencialmente na rede regular de ensino. Já a Lei nº 9.394/96 prevê que a educação especial é uma modalidade de educação escolar, oferecida preferencialmente na rede regular de ensino.',

    'Além disso, as escolas devem adotar medidas para garantir a inclusão dessas crianças, como a adaptação do ambiente escolar, o acompanhamento por profissionais especializados e o fornecimento de recursos pedagógicos adequados. As escolas também devem promover a sensibilização da comunidade escolar sobre as necessidades dessas crianças e garantir que elas sejam tratadas com respeito e dignidade.',

    'É importante ressaltar que o cumprimento dessas medidas é fundamental para que as crianças com transtornos psicológicos possam ter acesso à educação de qualidade e desenvolver todo o seu potencial. Além disso, a inclusão dessas crianças na sociedade é um direito humano básico e um princípio fundamental da democracia.',

    '6. Responsabilidade dos pais',

    'Os pais são responsáveis por garantir a educação de seus filhos, seja por meio da matrícula em escolas regulares, por meio da educação domiciliar ou por meio de outras modalidades de ensino. No caso das crianças com transtornos psicológicos, essa responsabilidade se torna ainda mais importante, já que elas podem enfrentar maiores dificuldades para acessar a educação formal.',

    'Cabe aos pais buscar alternativas e recursos que possam contribuir para a inclusão e o desenvolvimento educacional de seus filhos, como o acompanhamento de profissionais especializados, a adaptação do ambiente domiciliar para o aprendizado e o uso de materiais e recursos pedagógicos adequados.',

    'No entanto, é importante ressaltar que a responsabilidade dos pais não se sobrepõe ao direito à educação garantido às crianças pela Constituição Federal e pelas leis brasileiras. Os pais não podem impedir o acesso de seus filhos à educação formal por razões de crença religiosa ou por preferência pessoal.',

    '7. Jurisprudência sobre a educação domiciliar',

    'A jurisprudência brasileira em relação à educação domiciliar é um tema em constante evolução, uma vez que a prática ainda é relativamente nova no país e vem sendo alvo de discussões e questionamentos. Atualmente, a educação domiciliar é considerada ilegal no Brasil, uma vez que não é reconhecida pela legislação nacional.',

    'No entanto, há casos em que as famílias recorrem à justiça para garantir o direito de educar seus filhos em casa, especialmente em situações em que a criança apresenta transtornos psicológicos que impedem sua participação na escola formal. A jurisprudência em relação a esses casos tem sido variável, com algumas decisões favoráveis à educação domiciliar e outras que negam o pedido das famílias.',

    'É importante ressaltar que, até o momento, a jurisprudência em relação à educação domiciliar no Brasil ainda é pouco consolidada e está em constante mudança. Cabe às famílias interessadas na prática buscar orientação jurídica e avaliar os riscos e benefícios envolvidos antes de tomar qualquer decisão.',

    '8. O papel do Estado',

    'O Estado brasileiro tem a obrigação de garantir o direito à educação para todas as crianças, incluindo aquelas com transtornos psicológicos que precisam de atendimento educacional especializado. A Constituição Federal de 1988, em seu artigo 208, estabelece que o dever do Estado com a educação será efetivado mediante a garantia de atendimento educacional especializado aos portadores de deficiência, preferencialmente na rede regular de ensino.',

    'Além disso, a Lei de Diretrizes e Bases da Educação Nacional (Lei nº 9.394/96) define que é dever do Estado garantir educação especial para pessoas com deficiência, preferencialmente na rede regular de ensino. Para isso, as escolas devem oferecer recursos e serviços de apoio pedagógico adequados às necessidades dos estudantes com deficiência, incluindo recursos de acessibilidade e atendimento educacional especializado.',

    'O Estado também deve garantir o acesso das crianças com transtornos psicológicos aos serviços de saúde mental, que muitas vezes são essenciais para o sucesso educacional dessas crianças. Além disso, o Estado deve fornecer treinamento adequado aos professores e profissionais da educação para que eles possam atender adequadamente as necessidades educacionais dessas crianças.',

    'Conclusão',

    'A educação é um direito fundamental garantido pela Constituição brasileira e todas as crianças têm o direito de receber educação de qualidade. No entanto, para crianças com transtornos psicológicos, pode ser um desafio garantir que elas recebam educação inclusiva e adequada.',

    'A legislação brasileira estabelece a educação domiciliar como uma exceção à educação formal, mas com limitações e regras específicas. É necessário um esforço conjunto do Estado, das escolas e das famílias para garantir que as crianças com transtornos psicológicos recebam educação adequada. As famílias devem ter o direito de escolher a melhor opção de educação para seus filhos, desde que sejam respeitados os direitos e as obrigações legais.',

    'É importante que as escolas tenham recursos adequados para receber crianças com transtornos psicológicos e oferecer educação inclusiva, como salas de aula adaptadas, professores qualificados e suporte emocional e psicológico. As políticas públicas devem ser desenvolvidas para garantir que todas as crianças tenham acesso à educação de qualidade, independentemente de suas condições de saúde.',

    'A jurisprudência brasileira sobre a educação domiciliar ainda é incipiente, mas tem sido discutida com mais frequência nos tribunais. É fundamental que a legislação sobre o tema seja atualizada para garantir que as famílias e as crianças tenham seus direitos e deveres claramente definidos.',

    'Por fim, a educação é um direito fundamental e deve ser garantida para todas as crianças, inclusive aquelas com transtornos psicológicos. As famílias devem ter o direito de escolher a melhor opção de educação para seus filhos, mas sempre seguindo as regras estabelecidas pela legislação brasileira.',

    'As escolas e o Estado devem trabalhar juntos para garantir que as crianças recebam educação inclusiva e adequada, proporcionando as condições necessárias para que elas possam se desenvolver plenamente e realizar seu potencial.',

    'Referências Bibliográficas',

    'AQUINO, J. L. G.; ZAGO, N. Estudo sobre escolas públicas que atendem alunos com transtornos psicológicos. Psicologia Escolar e Educacional, v. 22, n. 3, p. 433-441, 2018.',

    'BRASIL. Constituição Federal, 1988. Acesso em 10 abr. 2023.',

    'BRASIL. Estatuto da Criança e do Adolescente, Lei nº 8.069, de 13 de julho de 1990. Acesso em 07 abr. 2023.',

    'BRASIL. Lei de Diretrizes e Bases da Educação Nacional, Lei nº 9.394, de 20 de dezembro de 1996. Acesso em 07 abr. 2023.',

    'BRASIL. Lei nº 13.005, de 25 de junho de 2014. Aprova o Plano Nacional de Educação — PNE e dá outras providências.',

    'BRASIL. Ministério da Educação. Secretaria de Educação Especial. Política Nacional de Educação Especial na Perspectiva da Educação Inclusiva. Brasília, DF: MEC/SEESP, 2008.',

    'BRASIL. Superior Tribunal de Justiça. REsp 1.395.702 - RS (2013/0098567-6). Acesso em 08 abr. 2023.',

    'BRASIL. Supremo Tribunal Federal. Ação Direta de Inconstitucionalidade nº 5.357. Brasília, DF, 8 de setembro de 2016.',

    'BRASIL. Tribunal de Justiça do Estado de São Paulo. Apelação nº 1000316-45.2019.8.26.0566. São Paulo, 28 de janeiro de 2020.',

    'FERREIRA, Naura Syria Carapeto; AGUIAR, Márcia Ângela da S. Amaral; GARCIA, Regina Leite (Orgs.). Gestão da educação: impasses, perspectivas e compromissos. São Paulo: Cortez, 2000.',

    'FREIRE, Marcelo. Educação domiciliar: perspectivas e desafios no Brasil. Rio de Janeiro: WAK, 2018.',

    'SANTOS, Maria Lúcia de A. Educação Inclusiva: concepções e práticas. São Paulo: Cortez, 2004.',

    'GADOTTI, Moacir. História das ideias pedagógicas. São Paulo: Ática, 1998.',

    'SUPREMO TRIBUNAL FEDERAL. ADPF 461. Acesso em 09 abr. 2023.',

    'SUPREMO TRIBUNAL FEDERAL. RE 888.815. Acesso em 09 abr. 2023.',

    'Publicado originalmente na Revista Jus Navigandi, ano 28, n. 7223, em 11 de abril de 2023.'
  ]
},
];

export const reviews = [
  { author:'Cliente Google 01', text:'Excelente atendimento. Equipe muito preparada e sempre disponível para esclarecer nossas dúvidas.', source:'Google', url:process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL || '#' },
  { author:'Cliente Google 02', text:'Profissionais atenciosos, técnicos e claros na condução das questões.', source:'Google', url:process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL || '#' },
];
