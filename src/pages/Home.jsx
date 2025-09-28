// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Background from "../components/globals/Background.jsx";
import Footer from "../components/globals/Footer.jsx";
import Button from "../components/ui/Button.jsx";
import Logo from "../components/globals/Logo.jsx";
import colors from "../styles/colors.js";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  position: relative;
`;

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.95);
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  width: 100%;
  max-width: 1200px;
  margin-bottom: 40px;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const PageTitle = styled.h2`
  font-size: 1.8rem;
  color: ${colors.tealMedium};
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background-color: ${({ bg }) => bg || colors.white};
  border-radius: 6px;
  padding: 24px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 12px;
`;

const CardMessage = styled.p`
  font-size: 1rem;
  color: ${colors.grayDark};
  margin-bottom: 16px;
`;

const PlusSign = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: ${colors.orangeVibrant};
  margin-top: 16px;
  margin-bottom: 8px;
`;

const Home = () => {
  const navigate = useNavigate();

  const sugestoes = {
    s1: { type: "default" },
    s2: { type: "default" },
  };

  return (
    <Background theme="light">
      <PageWrapper>
        <Container>
          {/* Topo: título da página + logo */}
          <TopRow>
            <PageTitle>Home</PageTitle>
            <Logo size="xsmall" />
          </TopRow>

          <CardsGrid>
            {/* Card 1 - Criar novo plano */}
            <Card bg={colors.orangeSoft}>
              <CardTitle>Criar novo plano de estudos</CardTitle>
              <PlusSign>➕</PlusSign>
            </Card>

            {/* Card 2 - Sugestão 1 */}
            <Card bg={colors.tealLight}>
              <CardTitle>
                {sugestoes.s1.type === "default"
                  ? "Sugestão 1"
                  : sugestoes.s1.titulo}
              </CardTitle>
              <CardMessage>
                {sugestoes.s1.type === "default"
                  ? "Você ainda não preencheu seus dados pessoais. Personalize seu perfil para receber sugestões adaptadas à sua jornada de aprendizado."
                  : sugestoes.s1.mensagem}
              </CardMessage>
              {sugestoes.s1.type === "default" && (
                <Button onClick={() => navigate("/dados-pessoais")}>
                  Personalizar meu perfil
                </Button>
              )}
            </Card>

            {/* Card 3 - Sugestão 2 */}
            <Card bg={colors.mint}>
              <CardTitle>
                {sugestoes.s2.type === "default"
                  ? "Sugestão 2"
                  : sugestoes.s2.titulo}
              </CardTitle>
              <CardMessage>
                {sugestoes.s2.type === "default"
                  ? "Ainda não recebemos informações suficientes para criar uma segunda sugestão personalizada. Complete seu perfil para desbloquear."
                  : sugestoes.s2.mensagem}
              </CardMessage>
              {sugestoes.s2.type === "default" && (
                <Button onClick={() => navigate("/dados-pessoais")}>
                  Personalizar meu perfil
                </Button>
              )}
            </Card>

            {/* Card 4 - Templates prontos */}
            <Card bg={colors.orangeAccent}>
              <CardTitle>Ver templates prontos</CardTitle>
            </Card>
          </CardsGrid>
        </Container>
      </PageWrapper>
      <Footer />
    </Background>
  );
};

export default Home;

