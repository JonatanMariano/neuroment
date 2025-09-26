// questions.js

const questions = [
  // =====================
  // 1. Bases neurocientíficas
  // =====================
  {
    id: "bases_1",
    categoria: "Bases neurocientíficas",
    texto: "Você costuma estudar melhor em qual período do dia?",
    tipo: "RadioGroup",
    opcoes: ["Manhã", "Tarde", "Noite", "Madrugada"],
  },
  {
    id: "bases_2",
    categoria: "Bases neurocientíficas",
    texto: "Quanto tempo, em média, você consegue manter o foco sem pausa?",
    tipo: "inputHours",
  },
  {
    id: "bases_3",
    categoria: "Bases neurocientíficas",
    texto: "Como você percebe seu ritmo de energia ao longo do dia?",
    tipo: "RadioGroup",
    opcoes: ["Constante", "Oscilante", "Mais à tarde", "Mais pela manhã"],
  },
  {
    id: "bases_4",
    categoria: "Bases neurocientíficas",
    texto: "Qual técnica de estudo você já usou?",
    tipo: "CheckBoxGroup",
    opcoes: ["Pomodoro", "Mapas mentais", "Resumo escrito", "Flashcards", "Outra"],
  },
  {
    id: "bases_5",
    categoria: "Bases neurocientíficas",
    texto: "Qual delas funcionou melhor para você?",
    tipo: "RadioGroup",
    opcoes: ["Pomodoro", "Mapas mentais", "Resumo escrito", "Flashcards", "Outra"],
  },
  {
    id: "bases_6",
    categoria: "Bases neurocientíficas",
    texto: "O que mais atrapalha sua concentração?",
    tipo: "CheckBoxGroup",
    opcoes: ["Celular", "Ambiente barulhento", "Cansaço", "Falta de motivação", "Outra"],
  },

  // =====================
  // 2. Personalidade (MBTI adaptado)
  // =====================
  {
    id: "mbti_1",
    categoria: "Personalidade",
    texto: "Você prefere estudar sozinho ou em grupo?",
    tipo: "RadioGroup",
    opcoes: ["Sozinho", "Em grupo"],
  },
  {
    id: "mbti_2",
    categoria: "Personalidade",
    texto: "Você se sente mais motivado por prazos rígidos ou por liberdade de organizar seu tempo?",
    tipo: "RadioGroup",
    opcoes: ["Prazos rígidos", "Liberdade"],
  },
  {
    id: "mbti_3",
    categoria: "Personalidade",
    texto: "Você aprende melhor ao lidar com conceitos abstratos ou exemplos práticos?",
    tipo: "RadioGroup",
    opcoes: ["Conceitos abstratos", "Exemplos práticos"],
  },
  {
    id: "mbti_4",
    categoria: "Personalidade",
    texto: "Quando tem uma tarefa difícil, você prefere seguir um passo a passo claro ou experimentar livremente até entender?",
    tipo: "RadioGroup",
    opcoes: ["Passo a passo", "Experimentar livremente"],
  },
  {
    id: "mbti_5",
    categoria: "Personalidade",
    texto: "Você costuma decidir rápido ou precisa refletir bastante antes de agir?",
    tipo: "RadioGroup",
    opcoes: ["Decido rápido", "Refletir bastante"],
  },

  // =====================
  // 3. Inteligências múltiplas (escala 1–5)
  // =====================
  {
    id: "int_musical",
    categoria: "Inteligências múltiplas",
    texto: "Tenho facilidade em aprender ou reconhecer músicas, ritmos e melodias.",
    tipo: "LikertScale",
  },
  {
    id: "int_logico",
    categoria: "Inteligências múltiplas",
    texto: "Tenho facilidade em resolver problemas lógicos, cálculos ou quebra-cabeças.",
    tipo: "LikertScale",
  },
  {
    id: "int_espacial",
    categoria: "Inteligências múltiplas",
    texto: "Tenho facilidade em compreender mapas, diagramas ou imaginar objetos em diferentes posições.",
    tipo: "LikertScale",
  },
  {
    id: "int_corporal",
    categoria: "Inteligências múltiplas",
    texto: "Tenho facilidade em aprender por meio de movimento, prática física ou esportes.",
    tipo: "LikertScale",
  },
  {
    id: "int_linguistica",
    categoria: "Inteligências múltiplas",
    texto: "Tenho facilidade em me expressar bem por escrito ou oralmente.",
    tipo: "LikertScale",
  },
  {
    id: "int_interpessoal",
    categoria: "Inteligências múltiplas",
    texto: "Tenho facilidade em compreender e interagir bem com outras pessoas.",
    tipo: "LikertScale",
  },
  {
    id: "int_intrapessoal",
    categoria: "Inteligências múltiplas",
    texto: "Tenho facilidade em compreender meus próprios sentimentos, emoções e motivações.",
    tipo: "LikertScale",
  },
  {
    id: "int_naturalista",
    categoria: "Inteligências múltiplas",
    texto: "Tenho facilidade em observar, entender ou se interessar por fenômenos da natureza.",
    tipo: "LikertScale",
  },
  {
    id: "int_existencial",
    categoria: "Inteligências múltiplas",
    texto: "Tenho interesse em refletir sobre questões filosóficas ou existenciais (sentido da vida, espiritualidade etc.).",
    tipo: "LikertScale",
  },

  // =====================
  // 4. Estilos de aprendizagem
  // =====================
  {
    id: "estilo_1",
    categoria: "Estilos de aprendizagem",
    texto: "Você prefere aprender lendo textos, ouvindo explicações, vendo imagens ou praticando na prática?",
    tipo: "RadioGroup",
    opcoes: ["Textos", "Explicações", "Imagens", "Prática"],
  },
  {
    id: "estilo_2",
    categoria: "Estilos de aprendizagem",
    texto: "Em uma aula, o que mais ajuda você a fixar o conteúdo?",
    tipo: "RadioGroup",
    opcoes: ["Escrever", "Ouvir", "Ver", "Fazer"],
  },
  {
    id: "estilo_3",
    categoria: "Estilos de aprendizagem",
    texto: "O que você faz primeiro quando precisa aprender algo novo?",
    tipo: "RadioGroup",
    opcoes: ["Ler", "Ouvir", "Assistir", "Praticar"],
  },

  // =====================
  // 5. Dificuldades e condições
  // =====================
  {
    id: "dif_1",
    categoria: "Dificuldades",
    texto: "Você sente dificuldade em manter o foco em tarefas longas?",
    tipo: "LikertScale",
  },
  {
    id: "dif_2",
    categoria: "Dificuldades",
    texto: "Você tem dificuldades de memorização?",
    tipo: "LikertScale",
  },
  {
    id: "dif_3",
    categoria: "Dificuldades",
    texto: "Você costuma procrastinar mesmo sabendo o que precisa ser feito?",
    tipo: "LikertScale",
  },
  {
    id: "dif_4",
    categoria: "Dificuldades",
    texto: "Você tem diagnóstico ou suspeita de TDAH, dislexia, ansiedade, depressão ou outra condição que afeta seus estudos?",
    tipo: "CheckBoxGroup+InputField",
    opcoes: ["TDAH", "Dislexia", "Ansiedade", "Depressão", "Outro (especificar)"],
  },
  {
    id: "dif_5",
    categoria: "Dificuldades",
    texto: "Qual é o maior obstáculo que você enfrenta atualmente para aprender?",
    tipo: "inputField",
  },
  {
    id: "dif_6",
    categoria: "Dificuldades",
    texto: "O que mais te motiva a estudar?",
    tipo: "RadioGroup",
    opcoes: ["Conquistar objetivos", "Aprender algo novo", "Reconhecimento", "Melhorar de vida"],
  },
];

export default questions;
