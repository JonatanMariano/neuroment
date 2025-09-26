// src/data/questionnaireData.js
const questionnaireData = [
  {
    id: 1,
    category: "Teste InputField",
    text: "Digite seu nome:",
    type: "InputField",
    options: [],
  },
  {
    id: 2,
    category: "Teste TagInputField",
    text: "Escolha suas matérias favoritas:",
    type: "TagInputField",
    options: ["Matemática", "Física", "Química", "Biologia", "História"],
  },
  {
    id: 3,
    category: "Teste DateInput",
    text: "Selecione sua data de nascimento:",
    type: "DateInput",
    options: [],
  },
  {
    id: 4,
    category: "Teste SelectionField",
    text: "Escolha sua cidade:",
    type: "SelectField",
    options: ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Porto Alegre"],
  },
  {
    id: 5,
    category: "Teste LikertScale",
    text: "Qual seu nível de motivação para estudar hoje?",
    type: "LikertScale",
    options: [],
  },
  {
    id: 6,
    category: "Teste RadioGroup",
    text: "Você prefere estudar de manhã ou à noite?",
    type: "RadioGroup",
    options: ["Manhã", "Tarde", "Noite"],
  },
  {
    id: 7,
    category: "Teste InputHours",
    text: "Quantas horas você consegue estudar sem pausa?",
    type: "InputHours",
    options: [],
  },
  {
    id: 8,
    category: "Teste CheckBoxGroup",
    text: "Selecione suas dificuldades de estudo:",
    type: "CheckBoxGroup",
    options: ["Foco", "Memorização", "Procrastinação", "Organização"],
  },
  {
    id: 9,
    category: "Teste Mista",
    text: "Marque suas habilidades e descreva detalhes:",
    type: "CheckBoxInput",
    options: ["Matemática", "Linguística", "Esportes", "Música"],
  },
];

export default questionnaireData;
