// ConfirmSuccess.jsx

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Background from "../../../components/globals/Background.jsx";
import Footer from "../../../components/globals/Footer.jsx";
import Button from "../../../components/ui/Button.jsx";
import colors from "../../../styles/colors.js";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 20px;
`;

const ConfirmContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  width: 100%;
  max-width: 450px;
  margin-bottom: 40px;
`;

const ConfirmTitle = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 24px;
  text-align: center;
  color: ${colors.tealLight};
`;

const Message = styled.div`
  font-size: 16px;
  color: ${colors.grayDark};
  text-align: center;
  margin-bottom: 24px;
`;

const ConfirmSuccess = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/first-access");
  };

  return (
    <Background theme="light">
      <PageWrapper>
        <ConfirmContainer>
          <ConfirmTitle>Confirmação realizada!</ConfirmTitle>
          <img
           src="/icons/fireworks.png"
           alt="Parabéns"
           style={{ width: "80px", marginBottom: "16px" }}
          />
          <Message>
            Seu e-mail foi confirmado com sucesso.<br/>
            Agora você pode continuar e acessar o aplicativo.
          </Message>
          <Button onClick={handleContinue} style={{ alignSelf: "center" }}>
            Continuar
          </Button>
        </ConfirmContainer>
      </PageWrapper>
      <Footer />
    </Background>
  );
};

export default ConfirmSuccess;
