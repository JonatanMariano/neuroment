export default function Quest1() {
  return (
    <div>
      <h1>Quest1</h1>
    </div>
  );
}
// src/pages/Quest1.jsx
// import React, { useState } from "react";
// import Background from "../components/globals/Background.jsx";
// import Footer from "../components/globals/Footer.jsx";
// import styled from "styled-components";
// import colors from "../styles/colors.js";
// import { useNavigate } from "react-router-dom";
// import Button from "../components/ui/Button.jsx";
// import RadioGroup from "../components/ui/RadioGroup.jsx";
// import CheckBoxGroup from "../components/ui/CheckBoxGroup.jsx";
// import InputHours from "../components/ui/InputHours.jsx";
// import questions from "../data/questions.js"; 

// // ===== Estilos =====
// const PageWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 30px;
//   min-height: 100vh;
// `;

// const Container = styled.div`
//   background-color: rgba(255, 255, 255, 0.95);
//   padding: 40px;
//   border-radius: 8px;
//   box-shadow: 0 4px 12px rgba(0,0,0,0.3);
//   width: 100%;
//   max-width: 1000px;
//   margin-bottom: 40px;
// `;

// const Title = styled.h2`
//   font-size: 1.8rem;
//   color: ${colors.tealMedium};
//   margin-bottom: 16px;
// `;

// const Message = styled.p`
//   font-size: 1rem;
//   color: ${colors.grayDark};
//   margin-bottom: 24px;
// `;

// const SessionTitle = styled.h3`
//   font-size: 1.2rem;
//   color: ${colors.orangeVibrant};
//   border-bottom: 2px solid ${colors.orangeVibrant};
//   padding-bottom: 6px;
//   margin-bottom: 20px;
// `;

// const QuestionsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 20px;
// `;

// const QuestionWrapper = styled.div`
//   background: linear-gradient(135deg, ${colors.white}, ${colors.grayLight});
//   padding: 16px;
//   border-radius: 6px;
//   position: relative;
//   box-shadow: inset 0 2px 6px rgba(0,0,0,0.2),
//               0 2px 6px rgba(0,0,0,0.1);
// `;

// const QuestionText = styled.p`
//   font-size: 1rem;
//   font-weight: 500;
//   margin-bottom: 8px;
//   color: ${colors.grayDark};
// `;

// const Quest1 = () => {
//   const navigate = useNavigate();
//   const [answers, setAnswers] = useState({});

//   const handleAnswer = (id, value) => {
//     setAnswers((prev) => ({ ...prev, [id]: value }));
//   };

//   const baseQuestions = questions.filter((q) => q.categoria === "Bases neurocientíficas");

//   return (
//     <Background theme="light">
//       <PageWrapper>
//         <Container>
//           <Title>Questionário 1/5</Title>
//           <Message>
//             <strong>Parabéns por começar o questionário!</strong> Este bloco ajuda a entendermos seus padrões de estudo e foco ao longo do dia, para personalizar seu aprendizado.  
//             As perguntas se inspiram em pesquisas de neurociência aplicadas à educação.  
//             <br />
//             Quer responder de forma mais detalhada? <a href="#">Clique aqui</a>.
//           </Message>

//           <SessionTitle>Bases Neurocientíficas</SessionTitle>

//           <QuestionsGrid>
//             {baseQuestions.map((q, index) => (
//               <QuestionWrapper key={q.id}>
//                 <QuestionText>   
//                   <p><strong>{index + 1}.</strong> {q.texto}</p>
//                 </QuestionText> 

//                 {q.tipo === "RadioGroup" && (
//                   <RadioGroup
//                     options={q.opcoes}
//                     value={answers[q.id] || ""}
//                     onChange={(val) => handleAnswer(q.id, val)}
//                   />
//                 )}

//                 {q.tipo === "CheckBoxGroup" && ( 
//                   <CheckBoxGroup 
//                    options={q.opcoes} 
//                    values={answers[q.id] || []} 
//                    onChange={(val) => handleAnswer(q.id, val)} 
//                    multiple={true} 
//                   /> 
//                 )}

//                 {q.tipo === "inputHours" && (
//                   <>
//                   <InputHours
//                     value={answers[q.id] || ""}
//                     onChange={(val) => handleAnswer(q.id, val)}
//                   />  
//                   <img
//                     src = "/images/estudanteIA-2.png"
//                     alt = "Estudante lendo livro seguinda as estratégias do NeuroMent"
//                     style = {{ 
//                       position: "absolute",
//                       bottom: "8px",
//                       right: "8px",
//                       width: "350px",  // tamanho pequeno
//                       height: "auto",
//                       opacity: 0.9,
//                       pointerEvents: "none" }}                    
//                   />  
//                   </>              
//                 )}
//               </QuestionWrapper>
//             ))}
//           </QuestionsGrid>

//           <Button onClick={() => navigate("/questionario-2")} style={{ marginTop: "24px" }}>
//             Prosseguir
//           </Button>
//         </Container>        
//       </PageWrapper>
//       <Footer />
//     </Background>
//   );
// };

// export default Quest1;

