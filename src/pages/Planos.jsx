// src/pages/Planos.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Background from "../components/globals/Background.jsx";
import Footer from "../components/globals/Footer.jsx";
import Button from "../components/ui/Button.jsx";
import styled from "styled-components";
import colors from "../styles/colors.js";

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
  text-align: center;
`;

const Message = styled.p`
  font-size: 1rem;
  color: ${colors.grayDark};
  margin-bottom: 24px;
  text-align: center;
`;

const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const PlanCard = styled.div`
  background: ${({ plano }) =>
    plano === "Ouro"
      ? "linear-gradient(135deg, #FFD700, #FFA500)" // gradiente ouro
      : plano === "Bronze"
      ? "linear-gradient(135deg, #CD7F32, #8B4513)" // gradiente bronze
      : `linear-gradient(135deg, ${colors.white}, ${colors.grayLight})`};
  padding: 24px;
  border-radius: 6px;
  box-shadow: inset 0 2px 6px rgba(0,0,0,0.2),
              0 2px 6px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

const PlanTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 12px;
  color: ${({ plano }) =>
    plano === "Ouro" || plano === "Bronze"
      ? colors.white
      : colors.orangeVibrant};
`;

const PlanDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 16px;
  color: ${({ plano }) =>
    plano === "Ouro" || plano === "Bronze"
      ? colors.white
      : colors.grayDark};
`;

const Price = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: ${({ plano }) =>
    plano === "Ouro" || plano === "Bronze"
      ? colors.white
      : colors.tealMedium};
`;

const Planos = () => {
  const navigate = useNavigate();

  const planos = [
    {
      nome: "Basic",
      descricao: "Grátis com só 3 planos consecutivos por vez.",
      preco: "R$ 0,00",
      action: () => navigate("/home"),
    },
    {
      nome: "Bronze",
      descricao: "Personalização apurada + 9 planos consecutivos por vez.",
      preco: "R$ 19,90 / mês",
      action: () => alert("Assinatura Bronze em breve 🚀"),
    },
    {
      nome: "Ouro",
      descricao: "Personalização apurada + planos consecutivos ilimitados.",
      preco: "R$ 39,90 / mês",
      action: () => alert("Assinatura Ouro em breve 🚀"),
    },
  ];

  return (
    <Background theme="light">
      <PageWrapper>
        <Container>
          <Title>Planos de Estudo</Title>
          <Message>
            Escolha o plano que melhor se adapta à sua jornada de aprendizado 🎓
          </Message>

          <PlansGrid>
            {planos.map((plano, index) => (
              <PlanCard key={index} plano={plano.nome}>
                <div>
                  <PlanTitle plano={plano.nome}>{plano.nome}</PlanTitle>
                  <PlanDescription plano={plano.nome}>
                    {plano.descricao}
                  </PlanDescription>
                  <Price plano={plano.nome}>{plano.preco}</Price>
                </div>
                <Button onClick={plano.action}>Assinar</Button>
              </PlanCard>
            ))}
          </PlansGrid>
        </Container>
      </PageWrapper>
      <Footer />
    </Background>
  );
};

export default Planos;
