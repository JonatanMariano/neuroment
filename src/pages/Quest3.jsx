// src/pages/Quest3.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../components/globals/Background.jsx";
import Footer from "../components/globals/Footer.jsx";
import Button from "../components/ui/Button.jsx";
import LikertScale from "../components/ui/LikertScale.jsx";
import styled from "styled-components";
import colors from "../styles/colors.js";
import questions from "../data/questions.js";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
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
  margin-bottom: 8px;
`;

const SessionTitle = styled.h3`
  font-size: 1.2rem;
  color: ${colors.orangeVibrant};
  margin: 16px 0 24px;
  border-bottom: 1px solid ${colors.orangeVibrant};
  padding-bottom: 4px;
`;

const Grid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, 1fr);
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

const Quest3 = () => {
  const navigate = useNavigate();

  const inteligenciaQuestoes = questions.filter(q => q.categoria === "Inteligências múltiplas");

  return (
    <Background theme="light">
      <PageWrapper>
        <Container>
          <Title>Questionário</Title>
          <SessionTitle>3. Inteligências múltiplas</SessionTitle>

          <Grid>
            {inteligenciaQuestoes.map((q, index) => {
              const Component = q.tipo;
              return (
                <QuestionWrapper key={q.id}>
                 <QuestionText>   
                  <p><strong>{index + 1}.</strong> {q.texto}</p>
                 </QuestionText> 
                  {Component === "LikertScale" && <LikertScale name={q.id} />}
                </QuestionWrapper>
              );
            })}
          </Grid>

          <Button 
            onClick={() => navigate("/questionario-4")}
            style={{ marginTop: "24px", alignSelf: "center"}}
          >
            Prosseguir
          </Button>
        </Container>
      </PageWrapper>
      <Footer />
    </Background>
  );
};

export default Quest3;
