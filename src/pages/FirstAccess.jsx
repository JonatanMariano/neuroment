// src/pages/FirstAccess.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Background from "../components/globals/Background.jsx";
import Logo from "../components/globals/Logo.jsx";
import Footer from "../components/globals/Footer.jsx";
import Button from "../components/ui/Button.jsx";
import colors from "../styles/colors.js";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 20px;
`;

const FirstAccessContainer = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr; /* deixa a esquerda maior que a direita */
  grid-template-rows: auto 1fr auto;
  gap: 20px;
  background-color: rgba(255, 255, 255, 0.90);
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 1100px;   /* aumentei um pouco a largura máxima */
  min-height: 60vh;
  margin-bottom: 40px;

  /* em telas pequenas (ex: celular), volta pra 1 coluna */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
  }
`;

/* Quadrantes */
const Quadrant = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.grayLight};
  border-radius: 6px;
  min-height: 120px;
  text-align: center;
  font-size: 14px;
  color: ${colors.grayDark};
`;

/* Grid áreas */
const QuadrantTopLeft = styled(Quadrant)`
  grid-column: 1;
  grid-row: 1;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  padding: 20px;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: ${colors.tealMedium}; /* cor principal do seu projeto */
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    color: ${colors.grayDark};

    strong {
      font-weight: bold;
      color: ${colors.orangeVibrant}; /* destaque em outra cor */
    }
  }
`;

const QuadrantCenterLeft = styled(Quadrant)`
  grid-column: 1;
  grid-row: 2 / span 2; /* ocupa duas linhas (central + inferior) */
`;

const QuadrantCenterRight = styled(Quadrant)`
  grid-column: 2;
  grid-row: 1 / span 2;
  align-self: stretch;
  height: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* vídeo cola embaixo */
  align-items: center;       /* centraliza horizontalmente */
`;

const LogoWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  img {
    margin: 0 !important;
    max-width: 100%;
    height: auto;
  }
`;

const QuadrantBottomRight = styled(Quadrant)`
  grid-column: 2;
  grid-row: 3;

  display: flex;           /* sobrescreve o display do Quadrant base */
  flex-direction: column;  /* empilha verticalmente */
  justify-content: flex-start; /* texto em cima */
  align-items: center;         /* centraliza horizontalmente */
  padding: 16px;

  p {
    font-size: 1rem;
    line-height: 1.5;
    color: ${colors.grayDark};
    margin-bottom: 16px; /* espaço entre texto e botão */

    strong {
      font-weight: bold;
      color: ${colors.orangeVibrant};
    }
  }
`;


const FirstAccess = () => {
  const navigate = useNavigate();

  return (
    <Background theme="light">
      <PageWrapper>
        <FirstAccessContainer>
          <QuadrantTopLeft style = {{ background: 'none'}}>
            <h1>Boas-vindas, Username!</h1>
            <p>
              Estamos <strong>muito felizes</strong> por ter você aqui.  
              Este é o <strong>NeuroMent</strong>, um espaço feito para transformar sua
              forma de aprender. Prepare-se para uma jornada de crescimento,
              descobertas e conquistas que vão te surpreender.  
              O futuro do seu aprendizado começa agora!
            </p>
          </QuadrantTopLeft>

          <QuadrantCenterLeft style = {{ background: 'none'}}> 
            <img
            src = "/images/estudanteIA-1.png"
            alt = "Estudante lendo livro seguinda as estratégias do NeuroMent"
            style = {{ width: "80%", height: "auto" }}
            />
          </QuadrantCenterLeft>

          <QuadrantCenterRight style={{ background: 'none' }}>
            <LogoWrapper>
              <Logo size="xsmall"/>
            </LogoWrapper>
             <video
              src="/videos/telas.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{width: "80%", height: "auto", borderRadius: '6px', border: '2px solid ' + colors.tealMedium}}
            />  
          </QuadrantCenterRight>



          <QuadrantBottomRight style = {{ background: 'none'}}>
            <p>
              Vamos começar nossa jornada juntos? Clique no botão abaixo para 
              <strong> personalizar</strong> seu aprendizado!
            </p>
            <Button
              onClick={() => navigate("/dados-pessoais")}
              style={{ marginTop: "24px", alignSelf: "center"}}
            >  
              Personalizar
            </Button>
          </QuadrantBottomRight>
        </FirstAccessContainer>
      </PageWrapper>
      <Footer />
    </Background>
  );
};

export default FirstAccess;
