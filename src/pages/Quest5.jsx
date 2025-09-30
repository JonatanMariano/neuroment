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
  max-width: 1000px;
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: ${colors.tealMedium};
  margin-bottom: 8px;
`;

const Message = styled.p`
  font-size: 1rem;
  color: ${colors.grayDark};
  margin-bottom: 24px;
`;

const SessionTitle = styled.h3`
  font-size: 1.2rem;
  color: ${colors.orangeVibrant};
  margin: 16px 0 24px;
  border-bottom: 1px solid ${colors.orangeVibrant};
  padding-bottom: 4px;
`;

const QuestionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const QuestionWrapper = styled.div`
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
  const [answers, setAnswers] = useState({});

  const handleAnswer = (id, value) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const dificuldadeQuestoes = questions.filter(q => q.categoria === "Dificuldades");

  return (
    <Background theme="light">
      <PageWrapper>
        <Container>
          <Title>Questionário 5/5</Title>
          <Message>
            Uau, você chegou à última etapa! 🎯  
            Aqui queremos conhecer suas dificuldades, obstáculos e motivações para estudar.  
            Com isso, podemos oferecer recomendações ainda mais personalizadas e eficientes.  
            <br />
            Quer responder a versão detalhada? <a href="#">Clique aqui</a>.
          </Message>

          <SessionTitle>5. Dificuldades e condições</SessionTitle>

          <QuestionsGrid>
            {dificuldadeQuestoes.map((q, index) => (
              <QuestionWrapper key={q.id}>
                <QuestionText>
                  <p><strong>{index + 1}.</strong> {q.texto}</p>
                </QuestionText>

                {q.tipo === "LikertScale" && (
                  <LikertScale
                    value={answers[q.id] || ""}
                    onChange={(val) => handleAnswer(q.id, val)}
                  />
                )}

                {q.tipo === "RadioGroup" && (
                  <RadioGroup
                    options={q.opcoes}
                    value={answers[q.id] || ""}
                    onChange={(val) => handleAnswer(q.id, val)}
                  />
                )}

                {q.tipo === "inputField" && (
                  <InputField
                    style={{ paddingBottom: "300px" }}
                    placeholder="Digite sua resposta..."
                    value={answers[q.id] || ""}
                    onChange={(e) => handleAnswer(q.id, e.target.value)}
                  />
                )}

                {q.tipo === "CheckBoxGroup+InputField" && (
                  <div>
                    <CheckBoxGroup
                      options={q.opcoes}
                      values={answers[q.id] || []}
                      onChange={(val) => handleAnswer(q.id, val)}
                    />
                    <InputField                      
                      placeholder="Especifique, se necessário..."
                      value={answers[`${q.id}_outro`] || ""}
                      onChange={(e) => handleAnswer(`${q.id}_outro`, e.target.value)}
                    />
                  </div>
                )}
              </QuestionWrapper>
            ))}
          </QuestionsGrid>

          <Button
            onClick={() => navigate("/planos")}
            style={{ marginTop: "24px", alignSelf: "center" }}
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



