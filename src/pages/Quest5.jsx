// src/pages/Quest5.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../components/globals/Background.jsx";
import Footer from "../components/globals/Footer.jsx";
import Button from "../components/ui/Button.jsx";
import RadioGroup from "../components/ui/RadioGroup.jsx";
import LikertScale from "../components/ui/LikertScale.jsx";
import CheckBoxGroup from "../components/ui/CheckBoxGroup.jsx";
import InputField from "../components/ui/InputField.jsx";
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
  max-width: 700px;
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

const Quest5 = () => {
  const navigate = useNavigate();

  const dificuldadeQuestoes = questions.filter(q => q.categoria === "Dificuldades");

  return (
    <Background theme="light">
      <PageWrapper>
        <Container>
          <Title>Questionário</Title>
          <SessionTitle>5. Dificuldades e condições</SessionTitle>

          {dificuldadeQuestoes.map((q, index) => (
            <QuestionWrapper key={q.id}>
              <QuestionText>
                <p><strong>{index + 1}.</strong> {q.texto}</p>
              </QuestionText>

              {q.tipo === "LikertScale" && (
                <LikertScale name={q.id} />
              )}

              {q.tipo === "RadioGroup" && (
                <RadioGroup name={q.id} options={q.opcoes} />
              )}

              {q.tipo === "inputField" && (
                <InputField name={q.id} placeholder="Digite sua resposta..." />
              )}

              {q.tipo === "CheckBoxGroup+InputField" && (
                <div>
                  <CheckBoxGroup name={q.id} options={q.opcoes} />
                  <InputField name={`${q.id}_outro`} placeholder="Especifique, se necessário..." />
                </div>
              )}
            </QuestionWrapper>
          ))}

          <Button 
            onClick={() => navigate("/home")}
            style={{ marginTop: "24px", alignSelf: "center"}}
          >
            Finalizar
          </Button>
        </Container>
      </PageWrapper>
      <Footer />
    </Background>
  );
};

export default Quest5;
