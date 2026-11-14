/* =====================================================================
   O FECHAMENTO: o jogo das teorias do jornalismo
   Conteúdo do jogo. Teoria do Jornalismo, PUC-Campinas, 2026/2.
   Todas as situações marcadas como "Situação" são hipotéticas,
   criadas para o treino. Citações do Traquina seguem a edição
   portuguesa (Vega, 1999), com a ortografia da edição.
   ===================================================================== */

var TEORIAS = [
  {
    id: "espelho", n: 1, nome: "Teoria do Espelho", curto: "Espelho",
    cor: "#5b7c99", simbolo: "◐",
    frase: "A notícia reflete a realidade: o jornalista é um observador neutro que relata os fatos como aconteceram.",
    pergunta: "A notícia corresponde ao fato?",
    autores: "Ideologia profissional da objetividade; discutida por Lippmann, Schudson e Ward (objetividade pragmática).",
    conceitos: ["observador desinteressado", "fato separado da opinião", "objetividade como ideal profissional"],
    forca: "É a base do discurso profissional: verificar, ser preciso, separar fato de opinião.",
    limite: "Ignora que alguém seleciona, hierarquiza e escreve. Mesmo fato, jornais diferentes: o espelho não explica a diferença.",
    rival: "Newsmaking e Agendamento e enquadramento",
    armadilha: "Confundir o ideal de precisão (que continua valendo) com a tese de que a notícia é um reflexo sem escolha.",
    arquivo: { txt: "Enquanto o acontecimento cria a notícia, a notícia também cria o acontecimento", ref: "Traquina, 1999a, p. 168", nota: "Frase que as teorias construcionistas usam contra o espelho." }
  },
  {
    id: "gatekeeper", n: 2, nome: "Gatekeeper e valores-notícia", curto: "Gatekeeper",
    cor: "#b5523b", simbolo: "▥",
    frase: "Um selecionador (o porteiro) decide o que passa e o que fica de fora, por critérios em boa parte pessoais.",
    pergunta: "Quem decidiu o que entra, e por quê?",
    autores: "David Manning White (1950), a partir do termo de Kurt Lewin; valores-notícia de Galtung e Ruge (1965).",
    conceitos: ["seleção", "portão", "juízos de valor subjetivos", "valores-notícia (negatividade, elite, proximidade...)"],
    forca: "Mostra que a notícia passa por um funil e permite estudar o que ficou de fora.",
    limite: "Foco no indivíduo. As próprias razões de Mr. Gates (espaço, hora, repetição) já apontam para a organização.",
    rival: "Teoria Organizacional e Newsmaking",
    armadilha: "Toda notícia publicada é resultado de escolha. Para provar o portão, é preciso mostrar o que não passou.",
    arquivo: { txt: "a comunicação de «notícias» é extremamente subjectiva", ref: "White, 1999, p. 145", nota: "Conclusão de White depois de uma semana de anotações do editor." }
  },
  {
    id: "organizacional", n: 3, nome: "Teoria Organizacional", curto: "Organizacional",
    cor: "#6b8f4e", simbolo: "▦",
    frase: "A empresa jornalística molda a notícia: o jornalista aprende a linha editorial sem ordens explícitas, por socialização.",
    pergunta: "Como a organização faz o jornalista seguir a linha sem mandar?",
    autores: "Warren Breed (1955), controle social na redação; John Soloski, profissionalismo e política editorial.",
    conceitos: ["socialização", "aprender «por osmose»", "política editorial", "sanções e carreira"],
    forca: "Explica por que a linha da empresa aparece sem censura aberta.",
    limite: "Dá pouco espaço ao conflito e à iniciativa individual; vínculos precários mudam a socialização.",
    rival: "Gatekeeper e Instrumentalista",
    armadilha: "Organizacional explica o MECANISMO (como a regra se aprende). Dizer só 'o jornal tem viés' não prova organização.",
    arquivo: { txt: "Quando interrogados, respondem que a aprendem «por osmose»", ref: "Breed, 1999, p. 155", nota: "Como os repórteres de Breed diziam aprender a política editorial." }
  },
  {
    id: "newsmaking", n: 4, nome: "Newsmaking", curto: "Newsmaking",
    cor: "#c9922e", simbolo: "⚙",
    frase: "A notícia é construída por rotinas de produção: prazos, fontes regulares, critérios de noticiabilidade e o ritual da objetividade.",
    pergunta: "Que rotina de trabalho produziu esta notícia?",
    autores: "Gaye Tuchman (objetividade como ritual estratégico), Philip Schlesinger (o tempo), Molotch e Lester, Barbara Phillips.",
    conceitos: ["rotinas produtivas", "noticiabilidade", "rede de captação", "ritual estratégico", "deadline"],
    forca: "Explica por que jornais concorrentes publicam notícias tão parecidas.",
    limite: "Explica mal as diferenças entre jornais com a mesma rotina.",
    rival: "Gatekeeper e Instrumentalista",
    armadilha: "Usar 'linha ideológica do jornal' como resposta: isso é argumento de outra teoria. O Newsmaking responde com rotina.",
    arquivo: { txt: "a «objectividade» pode ser vista como um ritual estratégico", ref: "Tuchman, 1999a, p. 74", nota: "Ouvir dois lados e citar fontes também protege o jornalista de críticas e processos." }
  },
  {
    id: "agenda", n: 5, nome: "Agendamento e enquadramento", curto: "Agenda e enquadramento",
    cor: "#3f6fb5", simbolo: "▣",
    frase: "A imprensa não diz o que pensar, mas sobre o que pensar (agendamento); e, ao destacar aspectos, diz como pensar o tema (enquadramento).",
    pergunta: "O que ganhou destaque, e com que moldura?",
    autores: "McCombs e Shaw (1972); Bernard Cohen (1963); Goffman (1974) e Entman (1993) no enquadramento.",
    conceitos: ["saliência", "agenda da mídia x agenda do público", "moldura", "definição do problema, causa, juízo moral, solução"],
    forca: "Separa duas perguntas: o que vira tema público e como ele é interpretado.",
    limite: "Mostrar a agenda do jornal não prova o efeito no público: o agendamento é sobre a transferência.",
    rival: "Instrumentalista e Definidores primários",
    armadilha: "Confundir agendamento (visibilidade do tema) com enquadramento (interpretação do tema).",
    arquivo: { txt: "direito a existência pública", ref: "Traquina, 1999b, p. 11", nota: "Traquina distingue dar existência pública a um tema e oferecer uma interpretação dele." }
  },
  {
    id: "definidores", n: 6, nome: "Definidores primários e espiral do silêncio", curto: "Definidores e espiral",
    cor: "#7a4f9a", simbolo: "◎",
    frase: "Fontes institucionais com acesso privilegiado definem primeiro o problema (Hall); e quem se vê em minoria tende a se calar (Noelle-Neumann).",
    pergunta: "Quem definiu o problema primeiro, e quem se calou?",
    autores: "Stuart Hall e colegas, Policing the Crisis (1978); Elisabeth Noelle-Neumann, espiral do silêncio (1974).",
    conceitos: ["definidores primários", "definição inicial", "clima de opinião", "medo do isolamento", "núcleo duro"],
    forca: "Mostra o poder de quem nomeia o problema e de como a percepção de maioria silencia vozes.",
    limite: "Exige mostrar quem definiu primeiro e que alternativas ficaram de fora; a espiral exige evidência do silêncio, não só da cobertura.",
    rival: "Newsmaking e Agendamento e enquadramento",
    armadilha: "Dizer que a imprensa 'usou' a teoria não prova que o silêncio ocorreu.",
    arquivo: { txt: "definidores primários", ref: "Hall et al., 1999, p. 229", nota: "No estudo do «mugging», polícia, tribunais e autoridades fixam a definição inicial do crime." }
  },
  {
    id: "culturalista", n: 7, nome: "Teoria Culturalista", curto: "Culturalista",
    cor: "#a8456b", simbolo: "❋",
    frase: "A notícia é produto de uma cultura: valores, mapas de significado e narrativas que jornalistas e público compartilham.",
    pergunta: "Que valor ou narrativa cultural faz esta notícia parecer natural?",
    autores: "Stuart Hall (mapas de significado, consenso); Bird e Dardenne (notícia como narrativa mitológica); Schudson.",
    conceitos: ["mapas de significado", "consenso", "narrativa mítica", "códigos simbólicos"],
    forca: "Explica por que enredos (o herói, a vítima, a tragédia evitável) se repetem em fatos diferentes.",
    limite: "Narrativa no texto não prova como o público a recebeu.",
    rival: "Organizacional e Instrumentalista",
    armadilha: "Ler tudo como 'viés do jornal' é instrumentalismo. O culturalista procura o valor compartilhado, não o interesse do dono.",
    arquivo: { txt: "as notícias são um tipo particular de narrativa mitológica", ref: "Bird; Dardenne, 1999, p. 267", nota: "As notícias registram fatos e, ao mesmo tempo, contam histórias que o público reconhece." }
  },
  {
    id: "instrumentalista", n: 8, nome: "Teoria Instrumentalista", curto: "Instrumentalista",
    cor: "#3d3d3d", simbolo: "▲",
    frase: "A notícia serve a interesses: de donos, anunciantes, governos ou elites, que usam a imprensa como instrumento.",
    pergunta: "A quem esta notícia serve, e onde o interesse aparece?",
    autores: "Herman e Chomsky (1988), modelo de propaganda e seus cinco filtros; Herman, «diversidade marginalizada». Contraponto: Adelmo Genro Filho.",
    conceitos: ["propriedade", "publicidade", "fontes oficiais", "flak (ataques)", "ideologia dominante", "vítimas dignas e indignas"],
    forca: "Liga a notícia à economia política da empresa e testa a coerência dos critérios em casos comparáveis.",
    limite: "Exige identificar o dono, o interesse e onde ele aparece no texto. Sem isso, é suspeita, não análise.",
    rival: "Organizacional, Newsmaking e Culturalista",
    armadilha: "Chamar qualquer escolha de 'viés' e parar aí. Viés de quem? Provado como?",
    arquivo: { txt: "diversidade sem sentido ou «marginalizada»", ref: "Herman, 1999, p. 214", nota: "Herman compara casos parecidos tratados de modo diferente pela imprensa dos EUA." }
  }
];

/* ---------------------------------------------------------------------
   Objetivas por teoria. c = índice da alternativa correta (antes do
   embaralhamento). Cada rodada sorteia algumas delas.
   --------------------------------------------------------------------- */
var OBJETIVAS = {
  espelho: [
    { q: "Qual frase resume melhor a Teoria do Espelho?",
      ops: ["A notícia reflete a realidade, e o jornalista é um mediador neutro dos fatos.", "A notícia é construída por rotinas de produção.", "A notícia serve aos interesses do dono do jornal.", "A notícia define sobre o que o público vai pensar."],
      c: 0, exp: "O Espelho supõe um canal transparente entre o fato e o leitor. As outras alternativas são Newsmaking, Instrumentalista e Agendamento." },
    { q: "Dois jornais publicam, no mesmo dia, a mesma pesquisa com títulos diferentes. Por que esse caso é um problema para a Teoria do Espelho?",
      ops: ["Porque mostra que houve escolha de apresentação: dois 'reflexos' diferentes do mesmo fato.", "Porque prova que um dos jornais mentiu.", "Porque pesquisas não são fatos jornalísticos.", "Porque o Espelho só vale para televisão."],
      c: 0, exp: "Se a notícia fosse reflexo, o mesmo fato daria o mesmo texto. Diferença sem mentira é sinal de seleção e hierarquia." },
    { q: "O que a crítica ao Espelho NÃO pede que o jornalista abandone?",
      ops: ["A verificação e a precisão dos dados.", "A ideia de que nada pode ser checado.", "A distinção entre fato e boato.", "A apuração com documentos."],
      c: 0, exp: "Criticar o Espelho não é abandonar a precisão. Ward, por exemplo, propõe uma objetividade pragmática: um método de teste, não um reflexo perfeito. (A segunda alternativa é absurda: as demais também são práticas a manter.)" },
    { q: "Uma editora diz: 'Nosso trabalho é mostrar o que aconteceu, sem interpretação'. A frase expressa:",
      ops: ["A ideologia profissional que a Teoria do Espelho descreve.", "O conceito de definidores primários.", "O segundo nível do agendamento.", "A espiral do silêncio."],
      c: 0, exp: "É o discurso profissional da objetividade, base do Espelho. As teorias construcionistas mostram que mesmo 'mostrar o que aconteceu' envolve escolher." },
    { q: "Para Traquina, 'enquanto o acontecimento cria a notícia, a notícia também cria o acontecimento'. Essa frase contraria o Espelho porque:",
      ops: ["Diz que a notícia participa da construção da realidade, não apenas a reflete.", "Diz que os fatos não existem.", "Defende que o jornalista invente os fatos.", "Afirma que só a televisão cria acontecimentos."],
      c: 0, exp: "Construção não é invenção: Traquina mantém a fronteira factual (cita o caso Janet Cooke como fraude). O ponto é que o jornalismo atribui sentido e efeito ao fato." },
    { q: "Situação: a súmula de um jogo registra a expulsão de um jogador. O site A titula 'Expulsão polêmica decide clássico'; o site B, 'Time vence com um a mais'. Para quem defende o Espelho, o mais difícil de explicar é:",
      ops: ["Por que o mesmo fato registrado gerou destaques diferentes.", "Por que houve expulsão.", "Por que o jogo foi transmitido.", "Por que os sites publicaram no mesmo dia."],
      c: 0, exp: "O fato (a expulsão) é o mesmo e verificável. O destaque é escolha, e é isso que o Espelho não consegue explicar." }
  ],
  gatekeeper: [
    { q: "O estudo de David Manning White (1950) observou:",
      ops: ["Um editor de despachos de agência e as razões que ele anotava para recusar textos.", "Os leitores de um jornal numa pesquisa de opinião.", "Repórteres de uma emissora pública britânica.", "A cobertura de crimes de rua na imprensa inglesa."],
      c: 0, exp: "White acompanhou 'Mr. Gates' durante uma semana. As outras alternativas são McCombs e Shaw, Schlesinger e Hall." },
    { q: "Por que estudar o material RECUSADO é a grande vantagem do método de White?",
      ops: ["Porque mostra a seleção, que a análise só do publicado não enxerga.", "Porque o material recusado é sempre mais importante.", "Porque prova que o editor tinha interesses econômicos.", "Porque dispensa saber o que foi publicado."],
      c: 0, exp: "Só comparando o que entrou com o que ficou de fora se vê o portão funcionando." },
    { q: "Entre as razões anotadas por Mr. Gates estavam espaço disponível, hora de chegada e textos repetidos. Isso indica que:",
      ops: ["Parte da seleção era operacional, o que aponta para a organização e suas rotinas.", "A seleção era totalmente aleatória.", "O editor seguia ordens escritas do dono.", "O editor aplicava a espiral do silêncio."],
      c: 0, exp: "Junto dos juízos subjetivos, aparecem razões da organização do trabalho. É por isso que a pesquisa avançou do indivíduo para a redação." },
    { q: "Qual destes NÃO é um dos valores-notícia de Galtung e Ruge?",
      ops: ["Patrocínio do anunciante", "Negatividade", "Referência a pessoas de elite", "Personificação"],
      c: 0, exp: "Galtung e Ruge listam doze fatores, como frequência, limiar, consonância, inesperado, elite, personificação e negatividade. Interesse de anunciante é tema instrumentalista." },
    { q: "Situação: uma agência envia 300 notas em uma noite e o editor de plantão do site escolhe 12. Ele descarta uma nota sobre um festival de cultura indígena: 'ninguém lê isso'. A teoria que melhor descreve a decisão é:",
      ops: ["Gatekeeper", "Espiral do silêncio", "Agendamento", "Espelho"],
      c: 0, exp: "Seleção individual com juízo de valor declarado: é o porteiro em ação. O agendamento trataria do efeito no público, não da escolha." },
    { q: "Galtung e Ruge dizem que os fatores de noticiabilidade podem ser aditivos. Isso significa que:",
      ops: ["Quanto mais fatores um fato reúne, maior a chance de virar notícia.", "Um fato precisa ter os doze fatores para ser notícia.", "Os fatores só valem para o noticiário estrangeiro de TV.", "Cada jornal escolhe apenas um fator."],
      c: 0, exp: "Hipótese de aditividade: os fatores se somam; e um fator fraco pode ser compensado por outro forte." },
    { q: "Situação: no mesmo dia, um acidente leve com um ator famoso e um deslizamento que desalojou vinte famílias num bairro afastado. O site dá a manchete ao ator. Que valores-notícia explicam a escolha?",
      ops: ["Referência a pessoas de elite e personificação.", "Continuidade e composição.", "Limiar e frequência apenas.", "Nenhum: foi interesse do dono."],
      c: 0, exp: "Celebridade (elite) e um rosto conhecido (personificação) pesam mais do que vinte famílias anônimas. Para acusar o dono, seria preciso outra evidência." }
  ],
  organizacional: [
    { q: "Segundo Breed, como os jornalistas aprendem a política editorial?",
      ops: ["Por osmose: observando o que é publicado, cortado e elogiado.", "Por um manual escrito entregue no primeiro dia.", "Por ordens diretas do dono em cada matéria.", "Pelas cartas dos leitores."],
      c: 0, exp: "Os repórteres de Breed diziam aprender a linha 'por osmose'. Não há ordem explícita: há socialização." },
    { q: "Qual destes NÃO é um dos motivos de conformidade apontados por Breed?",
      ops: ["Ganhar comissão sobre os anúncios vendidos.", "Respeito e estima pelos superiores.", "Aspiração de subir na carreira.", "Gosto pelo próprio trabalho e pela notícia."],
      c: 0, exp: "Breed fala em sanções, deferência aos superiores, carreira, laços de grupo e prazer da atividade. Comissão de anúncio não aparece." },
    { q: "Em que situação, segundo Breed, o repórter consegue contornar a linha editorial?",
      ops: ["Quando a orientação é ambígua, quando ele domina a área ou quando tem prestígio.", "Nunca: a linha é sempre obedecida.", "Só quando o dono está viajando.", "Quando o leitor pede."],
      c: 0, exp: "A política editorial tem brechas: ambiguidade, especialização e prestígio dão margem de autonomia." },
    { q: "Situação: um repórter recém-contratado nunca recebeu ordem nenhuma, mas percebe que as pautas críticas a uma grande rede de supermercados 'dormem' na mesa do editor. Em seis meses, para de propô-las. A teoria que explica o MECANISMO dessa mudança é:",
      ops: ["Organizacional", "Espelho", "Espiral do silêncio", "Agendamento"],
      c: 0, exp: "O mecanismo é a socialização na redação (Breed). Se você quiser dizer que a rede é anunciante e o jornal a protege, isso é argumento instrumentalista: precisa provar o vínculo." },
    { q: "Para Soloski, o comportamento do jornalista é delimitado por dois controles. Quais?",
      ops: ["O profissionalismo (normas da profissão) e a política editorial da empresa.", "A lei de imprensa e o código penal.", "O público e os anunciantes.", "O governo e os sindicatos."],
      c: 0, exp: "As normas profissionais circulam entre empresas; a política editorial é de cada uma. As duas juntas formam as 'fronteiras' do comportamento." },
    { q: "No Tribunal, um grupo disse: 'não é a cultura do jornalista que vai para a matéria, e sim a cultura da empresa'. Essa frase é típica de qual teoria?",
      ops: ["Organizacional", "Culturalista", "Espelho", "Espiral do silêncio"],
      c: 0, exp: "Desloca o foco da pessoa para a organização. O culturalista responderia que a cultura é compartilhada com a sociedade, não só com a empresa." }
  ],
  newsmaking: [
    { q: "Para Tuchman, a objetividade funciona como 'ritual estratégico' porque:",
      ops: ["Procedimentos como ouvir dois lados e citar fontes protegem o jornalista de críticas, prazos e processos.", "Os jornalistas não acreditam em fatos.", "A objetividade é uma cerimônia religiosa da redação.", "Ela garante que a notícia seja verdadeira."],
      c: 0, exp: "O ritual mostra que se seguiu o procedimento, o que não garante que a verificação foi feita." },
    { q: "Situação: uma reportagem sobre vacinação ouve um infectologista e um influenciador antivacina, com o mesmo espaço. O jornal diz: 'fomos objetivos, ouvimos os dois lados'. A leitura do Newsmaking é:",
      ops: ["O procedimento de ouvir dois lados protegeu o jornal, mas igualou evidências de peso desigual.", "O jornal foi um espelho perfeito da controvérsia.", "O influenciador foi o definidor primário.", "O jornal aplicou a espiral do silêncio."],
      c: 0, exp: "É o ritual estratégico em ação: o formato de equilíbrio substitui o exame da qualidade das evidências." },
    { q: "O que Schlesinger chamou de 'máquina do tempo' dos jornalistas?",
      ops: ["A organização do trabalho pelo ciclo de prazos (deadlines) e boletins.", "O arquivo de jornais antigos.", "A cobertura de aniversários de fatos históricos.", "A previsão do futuro em editoriais."],
      c: 0, exp: "Na BBC, Schlesinger mostrou que o tempo organiza o trabalho e define o que cabe fazer e contar." },
    { q: "Molotch e Lester classificam os acontecimentos em quatro tipos. Qual é o tipo em que a ocorrência é planejada por quem a promove?",
      ops: ["Acontecimento de rotina", "Acidente", "Escândalo", "Acaso (serendipity)"],
      c: 0, exp: "Rotina: promovida intencionalmente por quem a anuncia (coletiva, inauguração). Acidente não é intencional; escândalo é revelado por terceiros." },
    { q: "Barbara Phillips diz que as notícias dão a sensação de 'novidade sem mudança'. O que isso significa?",
      ops: ["As rotinas privilegiam o fato singular e escondem continuidades e causas estruturais.", "As notícias repetem sempre os mesmos fatos.", "Nada muda na sociedade.", "Os jornais são proibidos de cobrir mudanças."],
      c: 0, exp: "O concreto, o individual e o atual vencem o estrutural: cada episódio é novo, mas a relação entre eles some." },
    { q: "Situação: domingo, redação com três pessoas. Quase tudo que entra vem de releases e boletins oficiais. Um incêndio num bairro afastado, sem nota oficial, só aparece na segunda-feira. A teoria que melhor explica o atraso é:",
      ops: ["Newsmaking", "Instrumentalista", "Espelho", "Culturalista"],
      c: 0, exp: "Equipe reduzida, dependência de fontes regulares e rede de captação com furos: são rotinas de produção, não intenção de esconder." },
    { q: "Qual pergunta é típica do Newsmaking diante de dois jornais concorrentes muito parecidos?",
      ops: ["Que rotinas comuns (fontes, prazos, agências) fazem os dois produzirem o mesmo?", "Qual dono é mais poderoso?", "Qual jornal refletiu melhor a realidade?", "Qual jornal silenciou a minoria?"],
      c: 0, exp: "O Newsmaking explica bem a semelhança. As diferenças entre jornais pedem outras teorias." }
  ],
  agenda: [
    { q: "A frase 'a imprensa pode não ter sucesso em dizer às pessoas o que pensar, mas tem sucesso em dizer sobre o que pensar' é de:",
      ops: ["Bernard Cohen (1963), base do agendamento", "Noelle-Neumann", "David Manning White", "Herman e Chomsky"],
      c: 0, exp: "A formulação é de Cohen; McCombs e Shaw a testaram empiricamente em 1972." },
    { q: "O que McCombs e Shaw compararam no estudo de Chapel Hill?",
      ops: ["Os temas mais destacados pela mídia e os temas que o público achava mais importantes.", "O que o editor recusou e o que publicou.", "As opiniões que as pessoas escondiam do pesquisador.", "Os donos dos jornais e as manchetes."],
      c: 0, exp: "A correlação entre agenda da mídia e agenda do público é o coração do agendamento." },
    { q: "Qual a diferença entre agendamento e enquadramento?",
      ops: ["Agendamento: que temas ganham saliência. Enquadramento: como o tema é apresentado e interpretado.", "São sinônimos.", "Agendamento é da TV; enquadramento é do jornal.", "Enquadramento é a escolha das fotos; agendamento, do texto."],
      c: 0, exp: "Visibilidade (sobre o que pensar) e interpretação (como pensar). Por isso o enquadramento é chamado de segundo nível do agendamento." },
    { q: "Segundo Entman, enquadrar é selecionar aspectos da realidade para promover quatro coisas. Qual NÃO está entre elas?",
      ops: ["O lucro do anunciante", "Uma definição do problema", "Uma interpretação causal e um juízo moral", "Uma recomendação de solução"],
      c: 0, exp: "Definição do problema, causa, avaliação moral e tratamento. Lucro do anunciante é pergunta instrumentalista." },
    { q: "Situação: o mesmo boletim de dengue sai em dois sites. A: 'Explosão de casos: cidade vive epidemia'. B: 'Mutirão da prefeitura visita 40 mil casas'. Os dois deram destaque ao tema; a diferença está:",
      ops: ["No enquadramento: um define o problema como crise, o outro como resposta do poder público.", "No agendamento: só um falou de dengue.", "No gatekeeping: um recusou o boletim.", "No espelho: um mentiu."],
      c: 0, exp: "O tema entrou nos dois (mesma agenda); a moldura mudou. Para dizer que é interesse do dono, seria preciso provar o vínculo." },
    { q: "Situação: depois de três semanas de reportagens sobre golpes por aplicativo contra idosos, uma pesquisa mostra que o tema virou o segundo problema mais citado pelos moradores, sem que o número de golpes tenha mudado. Isso é evidência de:",
      ops: ["Agendamento: a saliência na mídia passou para a agenda do público.", "Espiral do silêncio.", "Teoria do Espelho.", "Gatekeeper."],
      c: 0, exp: "É exatamente a transferência de saliência que o agendamento descreve. Repare que, aqui, há dado sobre o público, e não só sobre o jornal." },
    { q: "No Tribunal, um grupo mostrou bem a agenda dos jornais, mas não tratou do público. Qual cuidado faltou?",
      ops: ["O agendamento afirma uma transferência para o público; mostrar só a agenda do jornal é metade da prova.", "Faltou citar o dono.", "Faltou mostrar que o jornal mentiu.", "Nenhum: agenda do jornal já é a teoria inteira."],
      c: 0, exp: "Declarar o limite ('mostramos a agenda do jornal, não o efeito') é sinal de precisão conceitual." }
  ],
  definidores: [
    { q: "Para Hall e colegas, quem são os definidores primários?",
      ops: ["Fontes institucionais com acesso regular e credibilidade, como polícia, tribunais e governo, que fixam a definição inicial do problema.", "Os leitores que escrevem cartas.", "Os donos dos jornais.", "Os primeiros jornalistas a chegar ao local."],
      c: 0, exp: "Eles nomeiam primeiro o problema; o debate posterior tende a acontecer nos termos dessa definição." },
    { q: "Qual o papel da imprensa no modelo de Hall?",
      ops: ["Traduzir a definição das fontes institucionais para a linguagem do seu público, podendo reforçá-la.", "Inventar os problemas sociais.", "Opor-se sempre às autoridades.", "Refletir neutramente o que a polícia diz."],
      c: 0, exp: "A imprensa age como definidora secundária: traduz e pode ampliar ou tensionar a definição primária." },
    { q: "Situação: depois de uma série de furtos de celular no centro, a Secretaria de Segurança dá entrevista coletiva e usa a palavra 'arrastão'. Todos os jornais abrem com a fala do secretário e adotam o termo; comerciantes e moradores aparecem só no fim. A teoria mais adequada é:",
      ops: ["Definidores primários", "Espelho", "Gatekeeper", "Culturalista"],
      c: 0, exp: "A fonte institucional nomeou o problema primeiro ('arrastão') e o resto da cobertura seguiu nos termos dela." },
    { q: "Na espiral do silêncio, por que as pessoas se calam?",
      ops: ["Por medo do isolamento, quando percebem que sua opinião é minoritária.", "Por falta de tempo.", "Porque a lei proíbe certas opiniões.", "Porque os jornais não publicam cartas."],
      c: 0, exp: "Noelle-Neumann supõe que percebemos o 'clima de opinião' e evitamos expor posições que parecem isoladas." },
    { q: "Qual o papel da mídia na espiral do silêncio?",
      ops: ["Ajudar a formar a percepção de qual opinião é majoritária (o clima de opinião).", "Censurar diretamente as minorias.", "Medir a opinião com pesquisas exatas.", "Nenhum: a espiral não envolve a mídia."],
      c: 0, exp: "A mídia é uma das principais fontes para perceber o clima de opinião; daí seu peso na espiral." },
    { q: "Situação: a cobertura sobre a proibição de patinetes elétricos mostra quase só depoimentos a favor da proibição. Em grupos de mensagem do bairro, quem usa patinete para de defender o veículo. Qual evidência ainda falta para sustentar a espiral do silêncio?",
      ops: ["Mostrar que as pessoas se calaram por perceberem-se minoria, e não por outro motivo.", "Mostrar quem é o dono do jornal.", "Mostrar o horário de fechamento da edição.", "Nenhuma: a cobertura já prova a espiral."],
      c: 0, exp: "Cobertura desequilibrada não prova silêncio. A espiral pede evidência sobre o comportamento das pessoas e a razão dele." },
    { q: "Caso real (Estado de Minas, 13/11/2026, capa). Depois de surtos de sarna que suspenderam aulas em duas cidades vizinhas, a prefeitura de Belo Horizonte informa 11 surtos no ano e orienta os moradores a procurar centros de saúde. O jornal acrescenta: 'Porém, a prefeitura não menciona medidas específicas'. O que esse 'porém' mostra sobre a teoria dos definidores primários?",
      ops: ["Que a imprensa pode tensionar a definição oficial, e não apenas reproduzi-la.", "Que a prefeitura deixou de ser fonte institucional.", "Que a teoria dos definidores primários está errada.", "Que o jornal aplicou a espiral do silêncio."],
      c: 0, exp: "Hall e colegas dizem que a imprensa traduz a definição primária e pode reforçá-la, ampliá-la ou tensioná-la. Aqui o jornal registra a orientação oficial e aponta o que falta nela." },
    { q: "O que é o 'núcleo duro' na espiral do silêncio?",
      ops: ["Quem continua manifestando a opinião mesmo se sentindo minoria.", "O grupo dos donos de jornal.", "As fontes oficiais.", "Os leitores mais assíduos."],
      c: 0, exp: "O núcleo duro não se cala, o que mostra que o medo do isolamento não atinge todos igualmente." }
  ],
  culturalista: [
    { q: "Qual frase resume a Teoria Culturalista?",
      ops: ["A notícia expressa valores e mapas de significado compartilhados por jornalistas e público.", "A notícia é um instrumento do dono.", "A notícia é um reflexo neutro dos fatos.", "A notícia é decidida pelo editor de plantão."],
      c: 0, exp: "Valores compartilhados, consenso e narrativas reconhecíveis: o foco está na cultura." },
    { q: "Bird e Dardenne dizem que as notícias são um tipo de narrativa mitológica. O que isso quer dizer?",
      ops: ["Que as notícias contam histórias com códigos simbólicos que o público reconhece, além de registrar fatos.", "Que as notícias são mentiras.", "Que só a cobertura religiosa é cultural.", "Que os jornalistas copiam mitos gregos."],
      c: 0, exp: "Registro e narrativa coexistem. A notícia documenta e, ao mesmo tempo, organiza o fato em enredos conhecidos." },
    { q: "Situação: toda cobertura de enchente na cidade tem a mesma estrutura: a tragédia, o vizinho herói que salvou uma família, a corrente de doações. A teoria que melhor explica a repetição do enredo é:",
      ops: ["Culturalista", "Instrumentalista", "Gatekeeper", "Espiral do silêncio"],
      c: 0, exp: "É uma narrativa cultural de solidariedade que faz o fato 'fazer sentido'. Não há sinal de interesse do dono nem de seleção individual." },
    { q: "Situação: todo ano, a festa junina tradicional da cidade é noticiada como 'tradição que resiste ao tempo'. Quem quer explicar isso pela Culturalista deve procurar:",
      ops: ["O valor compartilhado (tradição, identidade local) que faz essa moldura parecer natural.", "O lucro do anunciante da festa.", "O horário de fechamento.", "A fonte oficial que definiu o problema."],
      c: 0, exp: "O culturalista pergunta que valor torna aquela leitura óbvia para quem escreve e para quem lê." },
    { q: "No Tribunal, o grupo Culturalista explicou a diferença entre dois jornais como 'direcionamento que cada jornal quer para o seu viés'. Qual foi o problema?",
      ops: ["É uma explicação instrumentalista; a culturalista procuraria valores compartilhados com a sociedade.", "Nenhum, é a explicação culturalista correta.", "Faltou dizer o horário de publicação.", "Faltou citar a espiral do silêncio."],
      c: 0, exp: "Viés de jornal é argumento de outra teoria. Atribuir a evidência à teoria certa é o que a prova vai pedir." },
    { q: "Qual é o limite mais comum de uma análise culturalista de textos jornalísticos?",
      ops: ["Mostrar a narrativa no texto não prova como o público a interpretou.", "Ela não serve para fatos reais.", "Ela só vale para jornais do Reino Unido.", "Ela ignora completamente os valores."],
      c: 0, exp: "Como dizem Bird e Dardenne, o padrão narrativo sustenta uma hipótese de interpretação; a recepção pede pesquisa própria." }
  ],
  instrumentalista: [
    { q: "Qual destes NÃO é um dos cinco filtros do modelo de propaganda de Herman e Chomsky?",
      ops: ["O deadline de fechamento da edição", "Propriedade e busca de lucro", "Dependência da publicidade", "Dependência de fontes oficiais"],
      c: 0, exp: "Os filtros são propriedade, publicidade, fontes, flak (ataques organizados) e a ideologia dominante (na versão original, o anticomunismo). Deadline é Newsmaking." },
    { q: "O que é o 'flak' no modelo de Herman e Chomsky?",
      ops: ["Reações negativas organizadas contra a mídia (campanhas, processos, pressões) que disciplinam a cobertura.", "Uma técnica de diagramação.", "O valor-notícia da negatividade.", "O silêncio de quem se sente minoria."],
      c: 0, exp: "O flak encarece certas coberturas e ensina a evitá-las." },
    { q: "Herman compara casos parecidos (por exemplo, Camboja e Timor Leste) tratados de forma diferente. Para que serve esse método?",
      ops: ["Testar se os critérios editoriais são coerentes ou mudam conforme o interesse.", "Provar que todos os jornais mentem.", "Medir a audiência dos jornais.", "Mostrar o horário de cada notícia."],
      c: 0, exp: "Pares comparáveis tornam visível a diferença de tratamento. É o teste mais forte que o instrumentalismo oferece." },
    { q: "Situação: um grupo de mídia cujo controlador também é dono de uma incorporadora cobre a nova lei de zoneamento só com fontes favoráveis e destaca 'mais empregos'. Para uma análise instrumentalista sólida, o que é indispensável?",
      ops: ["Mostrar o vínculo do dono com a lei e onde esse interesse aparece no texto.", "Basta dizer que o jornal tem viés.", "Mostrar que o repórter aprendeu por osmose.", "Mostrar que o tema ganhou saliência."],
      c: 0, exp: "Sem dono, interesse e marca no texto, a acusação é suspeita, não análise." },
    { q: "Situação: o mesmo jornal dá capa a uma fraude numa ONG ligada a um rival do seu controlador e uma nota pequena a uma fraude parecida numa fundação parceira. Qual teoria esse contraste testa melhor?",
      ops: ["Instrumentalista", "Espelho", "Espiral do silêncio", "Newsmaking"],
      c: 0, exp: "É o método de Herman: casos comparáveis, tratamento desigual, interesse identificável." },
    { q: "Qual é o contraponto de Adelmo Genro Filho ao instrumentalismo?",
      ops: ["O jornalismo é uma forma social de conhecimento, centrada no singular, e não apenas um instrumento de dominação.", "O jornalismo é um reflexo neutro da realidade.", "O jornalismo é decidido pelo editor de plantão.", "O jornalismo não tem relação com a economia."],
      c: 0, exp: "Genro Filho reconhece o capitalismo na imprensa, mas vê no jornalismo um potencial de conhecimento que não se reduz à manipulação." },
    { q: "Por que dizer 'o jornal tem viés' não basta como análise instrumentalista?",
      ops: ["Porque a teoria exige identificar a quem serve, como, e onde isso aparece no texto.", "Porque viés não existe.", "Porque a teoria só vale para os EUA.", "Porque basta citar Chomsky."],
      c: 0, exp: "Viés de quem? Provado como? Essas duas perguntas separam análise de impressão." }
  ]
};

/* ---------------------------------------------------------------------
   Plantão: casos para identificar a teoria. t = teoria correta,
   alt = rival plausível (entra sempre entre as alternativas).
   --------------------------------------------------------------------- */
var CASOS = [
  { t: "definidores", alt: "agenda", fonte: "O Globo, 09/11/2026, capa", txt: "Manchete: 'Abstenção no Enem chega a 32% no 1º dia e é a maior desde a pandemia'. Linha fina: 'MEC atribui número à inscrição automática da rede pública'. Quase um terço dos 5 milhões de inscritos não compareceu ao primeiro dia de prova.", pergunta: "A explicação para a abstenção chega pronta na linha fina. Que teoria descreve QUEM deu essa explicação e o peso dela?", exp: "A fonte institucional (o Ministério) oferece a causa, e ela vai para a linha fina: definidores primários. Outras explicações possíveis (custo de transporte, trabalho, desistência, falta de preparo) teriam de disputar espaço com a primeira definição." },
  { t: "gatekeeper", alt: "culturalista", fonte: "O Globo, 09/11/2026, capa", txt: "'O amor que chegou aos 14 anos': depois de cinco anos nas ruas, Robson encontrou na atriz Zezé Motta a mãe com quem sempre sonhou. A chamada informa que, no Rio, 216 crianças e adolescentes com mais de 10 anos esperam adoção, e só 72 pretendentes aceitam adolescentes.", pergunta: "O dado (216 à espera, 72 pretendentes) chega à capa por meio de uma atriz famosa. Que teoria, com seus valores-notícia, explica essa escolha?", exp: "Referência a pessoas de elite (a atriz) e personificação (um rosto, uma história) ajudam o tema da adoção tardia a passar pelo portão: Gatekeeper e valores-notícia de Galtung e Ruge. A Culturalista explicaria outra coisa, o enredo do amor que chega." },
  { t: "agenda", alt: "culturalista", fonte: "O Globo, 09/11/2026, capa", txt: "'Risco da pimenta: produtos extremamente picantes atraem um público jovem e preocupam médicos.'", pergunta: "Uma moda entre jovens chega à capa com a palavra 'risco' e com médicos preocupados. Que teoria descreve melhor essa moldura?", exp: "O jornal enquadra a moda como problema de saúde (definição do problema e juízo de risco, nos termos de Entman): enquadramento. A Culturalista entraria se você mostrasse o valor compartilhado por trás, como a desconfiança diante de modas juvenis." },
  { t: "newsmaking", alt: "culturalista", fonte: "O Globo, 09/11/2026; Estadão, 10/11 e 13/11/2026", txt: "O Globo, 09/11: 'Nvidia investiga CEO após caso com executiva'. Estadão, 10/11: 'Nvidia se desvaloriza em US$ 230 bi após caso de fundador com suposta espiã'. Estadão, 13/11: 'CEO da Nvidia renuncia após escândalo por casos extraconjugais'.", pergunta: "Na tipologia de Molotch e Lester, um caso revelado contra a vontade do protagonista é um 'escândalo'. Que teoria explica por que o assunto rendeu notícia dia após dia?", exp: "Molotch e Lester tratam o escândalo como um tipo de acontecimento; e cada desdobramento (investigação, queda das ações, renúncia) vira notícia nova pela rotina de cobertura: Newsmaking. A Culturalista explicaria a moral da história, não a sequência de notícias." },
  { t: "definidores", alt: "instrumentalista", fonte: "Estadão, 10/11/2026, capa", txt: "'País perdeu R$ 52 bi no 1º semestre com eventos climáticos, dizem seguradoras.' A chamada explica que o número foi apresentado pela Confederação Nacional das Seguradoras e supera todas as perdas de 2025.", pergunta: "O tamanho do problema vem de uma entidade do setor de seguros. Que teoria pergunta quem define primeiro a dimensão do problema?", exp: "Uma fonte institucional, com credibilidade e acesso, fixa o número que vira manchete: definidores primários. O título atribui o dado ('dizem seguradoras'), o que é um cuidado. A Instrumentalista trata do interesse do dono do jornal; o interesse da fonte é outra pergunta, que vale fazer." },
  { t: "culturalista", alt: "gatekeeper", fonte: "Estado de Minas, 13/11/2026, capa", txt: "'Uma oficina de sapataria que recupera vidas': com cerca de 1.500 pares recuperados em pouco mais de um ano, o projeto Doe um Passo, do Sistema Divina Providência, acolhe pessoas em situação de rua e oferece a detentos e a jovens em conflito com a lei atividades de reparação de calçados.", pergunta: "Consertar sapatos vira 'recuperar vidas'. Que teoria explica esse enredo?", exp: "É a narrativa da redenção pelo trabalho, um código simbólico que jornalistas e leitores reconhecem: Culturalista (Bird e Dardenne)." },
  { t: "newsmaking", alt: "definidores", fonte: "Correio da Manhã Campinas, 06/11/2026, capa", txt: "'Campinas leva plano nacional de combate à dengue à FNP.' Durante um webinário da Frente Nacional de Prefeitos, o município destacou a expansão do Método Wolbachia, coordenado pelo Ministério da Saúde em parceria com a Fiocruz.", pergunta: "A notícia nasce de uma apresentação que o próprio município fez num evento. Que teoria explica a existência desta notícia?", exp: "É um acontecimento de rotina no sentido de Molotch e Lester: promovido por quem quer publicidade e absorvido pela rotina da redação: Newsmaking. Os definidores primários disputariam se a pergunta fosse sobre quem definiu o problema da dengue." },
  { t: "definidores", alt: "agenda", fonte: "Correio Popular, 12/11/2026, p. A7", txt: "Campinas registrou, de janeiro a setembro, 121 batidas de veículos contra postes, com seis mortes (três no ano anterior). Os dados são da Emdec. O intertítulo da página é 'Imprudência', e o coordenador da Emdec explica que esses choques 'geralmente' envolvem velocidade, álcool ou distração. A página termina com orientações aos motoristas.", pergunta: "Qual teoria explica melhor QUEM fixou a causa do problema?", exp: "A fonte institucional (Emdec) define a causa, a imprudência do condutor, e o jornal adota essa definição no intertítulo. Outras definições possíveis, como posição dos postes, iluminação ou desenho das vias, não aparecem. O enquadramento descreve a moldura (culpa individual); os definidores primários explicam de onde ela veio." },
  { t: "newsmaking", alt: "definidores", fonte: "Correio Popular, 12/11/2026, p. A18", txt: "'Polícia Civil prende 40 pessoas ligadas à base do comércio de drogas.' Os números (40 presos em 15 dias, 120 policiais, 13 distritos, cerca de 4,7 kg de cocaína) foram divulgados pelo diretor do departamento regional da Polícia Civil, no balanço da operação.", pergunta: "O balanço da operação é um 'acontecimento de rotina' no sentido de Molotch e Lester. Que teoria explica a existência desta matéria?", exp: "Um acontecimento promovido por quem tem interesse em publicizá-lo, absorvido pela rotina de uma editoria que depende do balanço oficial: é Newsmaking. Os definidores primários são o rival forte, porque as palavras do texto ('biqueiras', 'lojinhas') também são da polícia." },
  { t: "agenda", alt: "newsmaking", fonte: "Correio Popular, 12/11/2026, capa e p. A3", txt: "A capa informa que as denúncias de racismo, injúria racial e discriminação religiosa em Campinas chegaram ao maior número da série histórica do Centro de Referência municipal: 107 até 11 de novembro, contra 49 em todo o ano de 2025. No mesmo dia, o editorial pede 'ações necessárias para conter a injúria racial', lembrando a proximidade do Dia da Consciência Negra.", pergunta: "Capa e editorial no mesmo dia, sobre o mesmo tema. Que teoria descreve o esforço do jornal para pôr o tema na pauta pública?", exp: "Destaque na capa somado ao editorial é aumento de saliência: agendamento. O Newsmaking explica o gancho (a data do calendário). Atenção ao rigor: o número mede denúncias, não casos. A advogada ouvida no editorial diz que muitas ofensas não eram reconhecidas como violação; mais denúncias podem indicar mais reconhecimento." },
  { t: "agenda", alt: "definidores", fonte: "Correio Popular, 14/11/2026, capa e p. A4", txt: "Na capa: 'Explosões em obra de piscinão assustam e preocupam moradores'. Na página, sob o chapéu 'Descaso': 'Detonações nas obras do piscinão do Jardim Proença apavoram moradores'. A obra, de cerca de R$ 220 milhões, deve reduzir em até 90% as cheias de dois córregos. Uma moradora diz: 'Nós não somos contra a obra'.", pergunta: "A obra é a mesma, mas a moldura muda entre a capa e a página. Que teoria descreve essa diferença?", exp: "O chapéu 'Descaso' e a troca de 'assustam' por 'apavoram' enquadram a obra como negligência do poder público com os vizinhos. É enquadramento. E repare: aqui os moradores falam primeiro, o contrário do que os definidores primários preveem." },
  { t: "culturalista", alt: "newsmaking", fonte: "Correio Popular, 14/11/2026, capa e p. A3", txt: "Manchete: 'Após 30 anos, Projeto Rótula ainda oferece soluções ao trânsito'. O texto diz que o projeto gerou polêmica na época, 'mas depois foi bem aceito pela população'. O ex-secretário de Transportes lembra: 'Fizemos o que parecia impossível'. O editorial do dia faz o 'balanço dos 30 anos'.", pergunta: "Que teoria explica melhor o ENREDO da matéria: polêmica no começo, aceitação depois, obra que resistiu ao tempo?", exp: "É uma narrativa reconhecível de superação e acerto, que jornalistas e leitores compartilham: Culturalista. O Newsmaking explica outra coisa, o gancho (a data redonda de 30 anos)." },
  { t: "definidores", alt: "newsmaking", fonte: "Correio Popular, 11/11/2026", txt: "'Campinas autoriza uso de veículos do sistema alternativo para cobrir falhas no transporte coletivo.' A linha fina afirma: 'Operação não acarreta custo extra aos cofres do município'. No corpo do texto, essa garantia é dada pela Emdec e pela Secretaria de Transportes; a medida foi oficializada por resolução da Prefeitura.", pergunta: "A linha fina apresenta como fato uma garantia da fonte oficial. Que teoria descreve esse movimento?", exp: "A definição do poder público ('sem custo extra') vira a moldura da notícia, sem atribuição: definidores primários. O Newsmaking explica a rotina (a resolução publicada como fonte). Quem poderia contestar? Passageiros, cooperativas, concessionárias." },
  { t: "culturalista", alt: "gatekeeper", fonte: "Correio Popular, 14/11/2026, capa", txt: "'Entidade transforma lixo eletrônico em recursos para obras sociais.' Um programa do Fórum das Entidades Assistenciais de Valinhos coleta celulares, computadores e eletrodomésticos para reciclagem, e o dinheiro obtido vai para 13 instituições.", pergunta: "Que teoria explica por que esse tipo de 'boa notícia' tem lugar garantido no jornal, com o mesmo enredo de sempre?", exp: "Solidariedade, comunidade e reaproveitamento são valores compartilhados que tornam a história reconhecível e bem-vinda: Culturalista. O Gatekeeper explicaria a escolha daquela notícia naquele dia, não o enredo." },
  { t: "gatekeeper", alt: "organizacional", txt: "O editor de esportes de um portal recebe vinte resultados da rodada do futebol amador. Publica três, todos de times do bairro onde cresceu. Questionado, diz: 'são os que eu acho que interessam'.", exp: "Seleção individual e juízo declarado: Gatekeeper. Seria Organizacional se a regra viesse da empresa, e não do gosto dele." },
  { t: "organizacional", alt: "instrumentalista", txt: "Numa rádio, nenhum chefe proíbe nada, mas os repórteres sabem que matéria sobre a prefeitura 'precisa ouvir o secretário primeiro', porque viram colegas serem chamados à sala quando não ouviram. Ninguém escreveu essa regra.", exp: "Regra aprendida por observação e sanção: socialização (Breed). O instrumentalista precisaria mostrar o interesse do dono por trás da regra." },
  { t: "newsmaking", alt: "gatekeeper", txt: "Três sites concorrentes publicam, na mesma hora, matérias quase idênticas sobre o reajuste da passagem de ônibus. Todas saíram do mesmo release da empresa de transporte, recebido às 6h, uma hora antes do fechamento da edição da manhã.", exp: "Fonte regular, horário e prazo produzem notícias iguais: rotina de produção. Não há um porteiro decidindo de forma pessoal." },
  { t: "agenda", alt: "espelho", txt: "Uma pesquisa de opinião mostra que, depois de um mês de reportagens diárias sobre calçadas quebradas, a acessibilidade passou a ser citada pelos moradores como um dos três maiores problemas da cidade. Antes, quase ninguém a mencionava.", exp: "A saliência na mídia passou para a agenda do público: agendamento, com dado sobre o público." },
  { t: "agenda", alt: "instrumentalista", txt: "Calor recorde. O jornal A titula: 'Moradores desperdiçam água e reservatórios baixam'. O jornal B: 'Rede perde um terço da água tratada em vazamentos'. Mesmo tema, mesma semana.", exp: "Enquadramento: A põe a causa no morador; B, na rede de distribuição. Para virar Instrumentalista, seria preciso mostrar o interesse do dono de A ou de B." },
  { t: "definidores", alt: "newsmaking", txt: "Depois de duas brigas em estádios, a Polícia Militar classifica o problema como 'crime organizado de torcidas'. A expressão vira título em todos os jornais. Torcedores, sociólogos e clubes aparecem depois, comentando a 'ação contra o crime organizado'.", exp: "A fonte institucional definiu primeiro, e o debate seguiu nos termos dela: definidores primários. O Newsmaking explicaria a dependência de fontes, mas não o poder de nomear." },
  { t: "definidores", alt: "agenda", txt: "Em uma escola, durante a polêmica sobre o uso de celular em sala, a TV local mostra só professores e pais a favor da proibição. Alunos que discordavam e falavam nos corredores passam a evitar o assunto, dizendo que 'todo mundo pensa o contrário'.", exp: "Percepção de minoria e silêncio por medo do isolamento: espiral do silêncio (Noelle-Neumann), que no curso está junto dos definidores primários." },
  { t: "culturalista", alt: "instrumentalista", txt: "Na morte de um músico popular, todos os veículos usam o mesmo enredo: origem humilde, talento, sucesso, 'deixa um legado'. A família, a gravadora e os fãs repetem essa história nas entrevistas.", exp: "Narrativa compartilhada, reconhecível pelo público: Culturalista (Bird e Dardenne). Não há indício de interesse de dono." },
  { t: "instrumentalista", alt: "culturalista", txt: "Um canal de TV pertencente a um grupo que tem concessão de pedágios faz uma série elogiosa às 'estradas modernas do estado' e não menciona o aumento da tarifa aprovado na mesma semana. Outros canais deram o aumento como manchete.", exp: "Dono identificado, interesse concreto e omissão comparável aos concorrentes: é o que a análise instrumentalista precisa." },
  { t: "espelho", alt: "newsmaking", txt: "O manual de um jornal diz: 'o repórter não interpreta; o repórter registra. O leitor deve ver o fato como se estivesse lá'.", exp: "É o ideal profissional que a Teoria do Espelho descreve: o jornalista como observador neutro." },
  { t: "newsmaking", alt: "espelho", txt: "Para não ser processado, um repórter que cobre um caso de suposta fraude numa clínica escreve 'segundo a polícia', 'de acordo com o boletim' e 'a clínica nega' em quase toda frase. A matéria fica correta e pouco esclarecedora.", exp: "Uso estratégico de aspas e versões para se proteger: objetividade como ritual estratégico (Tuchman)." },
  { t: "gatekeeper", alt: "agenda", txt: "Pesquisadores comparam todos os textos que chegaram à mesa do editor de um jornal regional numa semana com os que foram publicados. Descobrem que notícias de cidades vizinhas foram descartadas em massa.", exp: "Comparar o recebido com o publicado é o método de White. O foco é a seleção, não o efeito no público." },
  { t: "culturalista", alt: "definidores", txt: "Toda reportagem de fim de ano sobre a cidade traz 'o morador que venceu na vida apesar das dificuldades'. Ninguém na redação lembra de quando isso virou costume, e os leitores elogiam.", exp: "Enredo de superação que jornalistas e público compartilham: Culturalista. Não há fonte institucional definindo o problema." },
  { t: "instrumentalista", alt: "organizacional", txt: "Uma rede de farmácias é a maior anunciante de um portal. Quando uma investigação da vigilância sanitária interdita duas lojas da rede, o portal publica a nota oficial da empresa, sem ouvir os consumidores, e tira a matéria da capa em uma hora.", exp: "Dependência da publicidade (segundo filtro) com marca no texto e na hierarquia. Seria Organizacional se o foco fosse como os repórteres aprenderam a evitar o tema." },
  { t: "newsmaking", alt: "culturalista", txt: "A cobertura de uma onda de calor mostra, dia após dia, um caso individual: um idoso que passou mal, um ônibus sem ar-condicionado, uma escola que dispensou alunos. Nenhuma matéria mostra a série histórica de temperaturas da cidade.", exp: "Novidade sem mudança (Phillips): as rotinas privilegiam o episódio e o concreto, e o estrutural some." },
  { t: "agenda", alt: "gatekeeper", txt: "Em dez dias, a imprensa local publica 40 matérias sobre buracos nas ruas. Associações de bairro e a associação comercial passam a cobrar o tema em todas as reuniões.", exp: "A saliência na mídia passa para a agenda de quem cobra soluções na cidade: agendamento (no curso, junto do enquadramento)." },
  { t: "definidores", alt: "instrumentalista", txt: "Um hospital público diz em nota que a fila de cirurgias se deve à 'alta demanda sazonal'. A expressão aparece em todas as matérias. Nenhuma ouve o sindicato dos médicos, que fala em falta de anestesistas.", exp: "A instituição definiu o problema (demanda sazonal) e a alternativa (falta de pessoal) ficou fora: definidores primários." },
  { t: "organizacional", alt: "gatekeeper", txt: "Uma estagiária repara que suas matérias com palavrões em citações voltam sempre reescritas, sem comentário. Depois de um mês, ela mesma passa a suavizar as falas antes de entregar.", exp: "Aprendizagem da norma da casa por observação, sem ordem explícita: socialização organizacional." },
  { t: "espelho", alt: "agenda", txt: "Num debate, um jornalista veterano diz: 'se o leitor discorda da manchete, discorda do fato, porque a manchete é o fato'.", exp: "A identidade entre manchete e fato é a tese do Espelho. As teorias construcionistas lembram que a manchete é uma escolha sobre o fato." },
  { t: "culturalista", alt: "espelho", txt: "Na cobertura de um campeonato de futebol feminino, os textos falam o tempo todo em 'superação' e 'luta por espaço', e quase nada de tática. Na cobertura do masculino do mesmo dia, o foco é tática e mercado.", exp: "Valores culturais sobre gênero moldam o enredo: Culturalista. O enquadramento também ajuda a descrever, mas a pergunta aqui é sobre o valor compartilhado." }
];

/* ---------------------------------------------------------------------
   Dissertativas por teoria (uma é sorteada por rodada).
   g = o que uma boa resposta contém (aparece depois de enviar).
   --------------------------------------------------------------------- */
var DISSERTATIVAS = {
  espelho: [
    { q: "Um repórter diz: 'nós só mostramos o que aconteceu'. Avalie a frase pela Teoria do Espelho e por uma teoria rival. Use um exemplo fora da política.",
      g: ["Define o Espelho (canal transparente, observador neutro).", "Escolhe uma rival (Newsmaking ou Enquadramento) e mostra onde a frase falha: seleção, hierarquia, palavras.", "Usa um exemplo concreto, como dois títulos diferentes para o mesmo fato.", "Reconhece o que o Espelho acerta (precisão, verificação)."] },
    { q: "Por que a Teoria do Espelho é a mais criticada pela pesquisa e, ao mesmo tempo, a mais presente no discurso dos jornalistas?",
      g: ["Identifica o Espelho como ideologia profissional que legitima o trabalho.", "Aponta a crítica: notícia é construção (Traquina, p. 168).", "Separa o ideal de precisão (que continua valendo) da tese do reflexo.", "Dá um exemplo."] }
  ],
  gatekeeper: [
    { q: "White encontrou razões subjetivas e razões operacionais nas decisões de Mr. Gates. Explique a diferença e por que as razões operacionais abriram caminho para a Teoria Organizacional.",
      g: ["Subjetivas: gosto, juízo pessoal ('não gosto disso').", "Operacionais: espaço, hora de chegada, texto repetido.", "As operacionais dependem da organização do trabalho, não da pessoa.", "Conclui que o portão é também da redação."] },
    { q: "Situação: no mesmo dia, um ator famoso sofre um acidente leve e um deslizamento desaloja vinte famílias num bairro afastado. O site dá a manchete ao ator. Explique a escolha com os valores-notícia de Galtung e Ruge e diga o que um defensor do Gatekeeper precisaria mostrar para provar a seleção.",
      g: ["Cita valores-notícia: elite, personificação, proximidade, negatividade.", "Explica a aditividade ou a compensação.", "Diz que provar o portão exige mostrar o que ficou de fora e quem decidiu.", "Não salta para 'interesse do dono' sem evidência."] }
  ],
  organizacional: [
    { q: "Situação: um repórter novo nunca recebeu ordem, mas percebe que pautas críticas a um grande anunciante 'dormem' na mesa do editor, e para de propô-las. Explique o caso pela Teoria Organizacional e pela Instrumentalista. Que evidência diferencia uma da outra?",
      g: ["Organizacional: socialização, osmose, sanções e carreira (Breed).", "Instrumentalista: interesse do anunciante como filtro (Herman e Chomsky).", "Diferença: a primeira explica o mecanismo de aprendizagem; a segunda exige provar o interesse e a sua origem.", "Indica a evidência que decidiria: uma ordem, um vínculo comercial, comparação com outros anunciantes."] },
    { q: "Explique por que Breed diz que a linha editorial é aprendida 'por osmose' e em que situações o repórter consegue contorná-la.",
      g: ["Socialização sem ordens escritas.", "Pelo menos três motivos de conformidade.", "Brechas: ambiguidade, domínio da área, prestígio.", "Exemplo concreto."] }
  ],
  newsmaking: [
    { q: "Situação: uma reportagem sobre vacinação dá o mesmo espaço a um infectologista e a um influenciador antivacina. O jornal diz que foi 'objetivo'. Analise com o conceito de ritual estratégico de Tuchman.",
      g: ["Define ritual estratégico: procedimentos que protegem o jornalista.", "Mostra que ouvir os dois lados documentou a controvérsia, mas igualou evidências desiguais.", "Separa proteção profissional de verificação efetiva.", "Diz o que uma cobertura mais rigorosa faria."] },
    { q: "Situação: num domingo, com redação reduzida, um incêndio num bairro afastado só é noticiado na segunda-feira. Explique pelo Newsmaking, citando rotinas, tempo (Schlesinger) e rede de captação, e diga por que não é preciso supor má intenção.",
      g: ["Rotinas e dependência de fontes regulares.", "O tempo como organizador do trabalho.", "A rede de captação com furos onde não há fonte oficial.", "Contraste com uma explicação intencional (instrumentalista), que exigiria outra prova."] }
  ],
  agenda: [
    { q: "Situação: o mesmo boletim de dengue gera os títulos 'Explosão de casos: cidade vive epidemia' e 'Mutirão da prefeitura visita 40 mil casas'. Diferencie agendamento e enquadramento usando esses dois títulos.",
      g: ["Agendamento: os dois puseram a dengue na pauta (mesma saliência).", "Enquadramento: crise x resposta do poder público.", "Usa pelo menos duas das funções de Entman (problema, causa, juízo, solução).", "Não conclui por interesse do dono sem evidência."] },
    { q: "Explique por que mostrar a agenda de um jornal não basta para provar o agendamento. Que dado seria necessário?",
      g: ["O agendamento afirma transferência da agenda da mídia para a do público.", "Cita o desenho de McCombs e Shaw (comparação mídia x público).", "Indica o dado: pesquisa de opinião, série no tempo.", "Exemplo fora da política."] }
  ],
  definidores: [
    { q: "Situação: depois de furtos de celular no centro, a Secretaria de Segurança fala em 'arrastão' e todos os jornais adotam o termo; comerciantes e moradores aparecem só no fim. Quem são os definidores primários? Que definições alternativas ficaram de fora?",
      g: ["Identifica a Secretaria como definidora primária (acesso, credibilidade, primeira palavra).", "Mostra a imprensa traduzindo e reforçando o termo.", "Propõe alternativas (iluminação, emprego, policiamento preventivo) que não apareceram.", "Diz o que a cobertura poderia ter feito diferente."] },
    { q: "Explique a espiral do silêncio e diga por que uma cobertura desequilibrada, sozinha, não prova que a espiral aconteceu.",
      g: ["Medo do isolamento e percepção do clima de opinião.", "Papel da mídia na percepção da maioria.", "Diferença entre mostrar a cobertura e mostrar o silêncio.", "Menciona o núcleo duro ou outro limite."] }
  ],
  culturalista: [
    { q: "Situação: toda cobertura de enchente traz a tragédia, o vizinho herói e a corrente de doações. Explique pela Teoria Culturalista e diga por que essa não é uma explicação instrumentalista.",
      g: ["Narrativa cultural reconhecível (Bird e Dardenne).", "Valores compartilhados: solidariedade, heroísmo.", "Não há interesse de dono a provar: o enredo agrada a jornalistas e leitores.", "Aponta um custo: o que essa narrativa deixa de fora (prevenção, obras)."] },
    { q: "No Tribunal, a Culturalista respondeu à Organizacional dizendo que 'a empresa também tem seus costumes, seus hábitos'. Explique o que essa resposta acerta e onde estaria a diferença entre as duas teorias.",
      g: ["Acerta: a empresa como portadora de cultura.", "Diferença: Organizacional olha a regra da casa; Culturalista, o valor compartilhado com a sociedade.", "Exemplo de cada uma.", "Juízo sobre qual explica melhor um caso dado."] }
  ],
  instrumentalista: [
    { q: "Situação: um grupo de mídia cujo controlador é dono de uma incorporadora cobre a nova lei de zoneamento só com fontes favoráveis. Aplique pelo menos dois filtros de Herman e Chomsky e diga que evidências você precisaria para sustentar a análise.",
      g: ["Cita filtros: propriedade, fontes, publicidade, flak.", "Indica dono, interesse e marca no texto (fontes, títulos, omissões).", "Propõe comparação com outros veículos ou outros casos (método de Herman).", "Reconhece o que a análise ainda não prova."] },
    { q: "O instrumentalismo explica tudo? Responda com o contraponto de Adelmo Genro Filho e com um exemplo em que outra teoria explica melhor do que o interesse do dono.",
      g: ["Resume o instrumentalismo e sua força.", "Apresenta Genro Filho: jornalismo como forma de conhecimento.", "Exemplo em que rotina, cultura ou fonte explica melhor.", "Juízo comparativo claro."] }
  ]
};

/* ---------------------------------------------------------------------
   Fechamento: parecer simulado no formato da prova.
   --------------------------------------------------------------------- */
var PARECERES = [
  { titulo: "Batidas em postes", fonte: "Correio Popular, 12/11/2026, p. A7",
    caso: "Caso real. Campinas registrou, de janeiro a setembro, 121 batidas de veículos contra postes, com seis mortes; no ano anterior, as mortes nesse tipo de ocorrência tinham sido três. Os dados são da Emdec. O intertítulo da página é 'Imprudência'. O coordenador de fiscalização da Emdec explica que esses choques 'geralmente' envolvem abuso de velocidade, álcool ou distração. A página se fecha com orientações aos motoristas: manter distância, respeitar a velocidade, não beber e dirigir.",
    pede: "Explique a cobertura por duas teorias concorrentes (sugestão: Definidores primários e Agendamento e enquadramento). Use a evidência do caso e diga qual explica melhor. Que outras definições do problema poderiam ter aparecido?" },
  { titulo: "O piscinão na capa e na página", fonte: "Correio Popular, 14/11/2026, capa e p. A4",
    caso: "Caso real. Na capa: 'Explosões em obra de piscinão assustam e preocupam moradores'. Na página interna, sob o chapéu 'Descaso': 'Detonações nas obras do piscinão do Jardim Proença apavoram moradores'. O texto informa que a obra, de cerca de R$ 220 milhões e com 60% de execução, deve reduzir em até 90% as cheias de dois córregos da região. A reportagem acompanhou uma reunião de dez moradores, que cobram mais informação das autoridades. Uma moradora diz: 'Nós não somos contra a obra, sabemos de sua importância'.",
    pede: "Escolha duas teorias concorrentes (por exemplo, Agendamento e enquadramento e Definidores primários) e explique a cobertura por cada uma, com evidência. Que papel têm os moradores aqui? Qual teoria explica melhor?" },
  { titulo: "O escândalo que virou série", fonte: "O Globo, 09/11/2026; Estadão, 10/11 e 13/11/2026",
    caso: "Caso real. Em cinco dias, o caso do presidente-executivo da Nvidia rendeu pelo menos três capas. O Globo, 09/11: 'Nvidia investiga CEO após caso com executiva'; a empresa vai apurar se Jensen Huang foi alvo de espionagem chinesa depois de admitir o caso. Estadão, 10/11: 'Nvidia se desvaloriza em US$ 230 bi após caso de fundador com suposta espiã'; as ações caíram 4,27%. Estadão, 13/11: 'CEO da Nvidia renuncia após escândalo por casos extraconjugais'; ele foi substituído interinamente pela diretora financeira.",
    pede: "Compare duas teorias para explicar por que o caso virou notícia e continuou sendo notícia (sugestão: Newsmaking, com Molotch e Lester, e Gatekeeper, com os valores-notícia de Galtung e Ruge). Use a evidência e diga qual explica melhor." },
  { titulo: "A abstenção no Enem", fonte: "O Globo, 09/11/2026, capa",
    caso: "Caso real. Manchete: 'Abstenção no Enem chega a 32% no 1º dia e é a maior desde a pandemia'. Linha fina: 'MEC atribui número à inscrição automática da rede pública'. O texto de capa informa que quase um terço dos 5 milhões de inscritos não compareceu ao primeiro dia e que a valorização do SUS foi o tema da redação.",
    pede: "Explique a capa por duas teorias concorrentes (sugestão: Definidores primários e Agendamento e enquadramento). Que explicações alternativas para a abstenção um repórter poderia procurar? Qual teoria explica melhor a capa?" },
  { titulo: "Racismo: a capa e o editorial", fonte: "Correio Popular, 12/11/2026, capa e p. A3",
    caso: "Caso real. A capa informa que as denúncias de racismo, injúria racial e discriminação religiosa em Campinas chegaram ao maior número da série histórica do Centro de Referência municipal, iniciada em 2016: 107 até 11 de novembro, contra 49 em todo o ano de 2025. No mesmo dia, o editorial 'Ações necessárias para conter a injúria racial' cita a proximidade do Dia da Consciência Negra e dados de uma plataforma de dados jurídicos (11 processos por injúria racial abertos por dia no país). Uma advogada ouvida afirma que muitas ofensas 'ainda são naturalizadas ou não são reconhecidas pelas próprias vítimas'.",
    pede: "Explique o caso por duas teorias (sugestão: Agendamento e enquadramento e Newsmaking). Use a evidência e faça o juízo comparativo. Bônus de rigor: o número mede casos de racismo ou denúncias? Que diferença isso faz para a análise?" },
  { titulo: "O balanço da operação", fonte: "Correio Popular, 12/11/2026, p. A18",
    caso: "Caso real. 'Polícia Civil prende 40 pessoas ligadas à base do comércio de drogas'. A operação durou 15 dias, com 120 policiais de 13 distritos. Os resultados foram divulgados pelo diretor do departamento regional da Polícia Civil: 40 presos, cerca de 4,7 kg de cocaína apreendidos, além de outras drogas e dinheiro. O texto usa os termos da polícia para os pontos de venda: 'biqueiras' e 'lojinhas'.",
    pede: "Compare Newsmaking e Definidores primários para explicar a matéria. Quem promoveu o acontecimento? De quem são os números e as palavras? Qual teoria explica melhor, e por quê?" },
  { titulo: "O herói do resgate", fonte: "",
    caso: "Situação hipotética. Depois de um temporal, um rapaz de 19 anos tira três crianças de um carro ilhado. Todos os veículos contam a história: 'o jovem entregador que virou herói'. Ele ganha entrevista na TV, homenagem da escola onde estudou e uma moto nova de uma marca que patrocina o programa que o entrevistou. Nenhuma matéria trata da galeria pluvial entupida que causou o alagamento, apontada pela Defesa Civil num relatório de março.",
    pede: "Explique a cobertura por duas teorias concorrentes (por exemplo, Culturalista e Instrumentalista), com evidência do caso, e decida qual explica melhor." },
  { titulo: "A clínica e o anunciante", fonte: "",
    caso: "Situação hipotética. A Vigilância Sanitária interdita uma clínica estética por uso de produto vencido. A clínica pertence a uma rede que é a segunda maior anunciante de uma rádio local. A rádio dá a notícia às 7h com a nota da empresa ('caso isolado, já resolvido') e não volta ao assunto. Outra rádio, sem esse anunciante, faz três reportagens com pacientes. Os repórteres da primeira rádio dizem que ninguém pediu nada a eles.",
    pede: "Compare a Teoria Instrumentalista e a Organizacional para explicar a cobertura da primeira rádio. Que evidência do caso favorece cada uma? Qual explica melhor?" }
];

var NIVEIS = [
  { xp: 0, nome: "Foca" },
  { xp: 150, nome: "Repórter" },
  { xp: 400, nome: "Repórter especial" },
  { xp: 750, nome: "Editor de área" },
  { xp: 1200, nome: "Editor-chefe" }
];
