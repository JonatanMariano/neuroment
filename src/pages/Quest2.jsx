// src/pages/Quest2.jsx
import React, { useState } from "react";
import Background from "../components/globals/Background.jsx";
import Footer from "../components/globals/Footer.jsx";
import styled from "styled-components";
import colors from "../styles/colors.js";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button.jsx";
import RadioGroup from "../components/ui/RadioGroup.jsx";
import questions from "../data/questions.js"; 


// ===== Estilos =====
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  min-height: 100vh;
`;

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.95);
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  width: 100%;
  max-width: 900px;
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: ${colors.tealMedium};
  margin-bottom: 16px;
  text-align: center;
`;

const SessionTitle = styled.h3`
  font-size: 1.2rem;
  color: ${colors.orangeVibrant};
  border-bottom: 2px solid ${colors.orangeVibrant};
  padding-bottom: 6px;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

const QuestionWrapper = styled.div`
  margin-bottom: 20px;
  background: linear-gradient(135deg, ${colors.white}, ${colors.grayLight});
  padding: 16px;
  border-radius: 6px;
  box-shadow: inset 0 2px 6px rgba(0,0,0,0.2),
              0 2px 6px rgba(0,0,0,0.1);
`;

const QuestionText = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 8px;
  color: ${colors.grayDark};
`;

const Quest2 = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});

  const handleAnswer = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const personalityQuestions = questions.filter((q) => q.categoria === "Personalidade");

  return (
    <Background theme="light">
      <PageWrapper>
        <Container>
          <Title>Questionário</Title>
          <SessionTitle>Personalidade</SessionTitle>

          <Grid>
            {personalityQuestions.map((q, index) => (
              <QuestionWrapper key={q.id}>
                <QuestionText>   
                  <p><strong>{index + 1}.</strong> {q.texto}</p>
                 </QuestionText> 

                {q.tipo === "RadioGroup" && (
                  <RadioGroup
                    options={q.opcoes}
                    value={answers[q.id] || ""}
                    onChange={(val) => handleAnswer(q.id, val)}
                  />
                )}
              </QuestionWrapper>
            ))}
          </Grid>

          <Button onClick={() => navigate("/questionario-3")}>Prosseguir</Button>
        </Container>        
      </PageWrapper>
      <Footer />
    </Background>
  );
};

export default Quest2;
