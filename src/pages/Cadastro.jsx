// Cadastro.jsx
import React, { useState } from "react";
import Background from "../components/globals/Background.jsx";
import Footer from "../components/globals/Footer.jsx";
import InputField from "../components/ui/InputField.jsx";
import InputFieldPassword from "../components/ui/InputFieldPassword.jsx";
import Button from "../components/ui/Button.jsx";
import ButtonGoogle from "../components/globals/ButtonGoogle.jsx";
import ButtonApple from "../components/globals/ButtonApple.jsx";
import Logo from "../components/globals/Logo.jsx";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import colors from "../styles/colors.js";

// Container que envolve toda a página
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 20px;
`;

// Container do formulário de cadastro
const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 450px;
  margin-bottom: 40px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  
  margin-bottom: 24px;
`;

// Container para Nome e Sobrenome lado a lado
const NameRow = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  width: 100%;
  margin-bottom: 6px;

  > div {
    flex: 1; // Faz os inputs ocuparem a mesma largura
  }
`;

const SocialButtonsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 16px;
  width: 100%;
`;

const TermsRow = styled.label`
  font-size: 14px;
  color: ${colors.grayDark};
  margin-top: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  text-align: left;

  input {
    margin-right: 4px;
  }

  a {
    color: ${colors.link};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const LoginLinkTop = styled.div`
  width: 100%;
  color: ${colors.grayDark};
  text-align: center;
  margin-bottom: 8px;
  font-size: 14px;
  

  a {
    color: ${colors.link};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Cadastro = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [termos, setTermos] = useState(false);

  const handleRegister = () => {
    if (termos) {
      navigate("/confirm-email");
    }
  };

  return (
    <Background theme="light">
      <PageWrapper>
        <RegisterContainer>   

          <LogoWrapper>
            <Logo size="xsmall"/>
          </LogoWrapper>

          <LoginLinkTop>
            Já tenho uma conta <Link to="/">Entrar</Link>
          </LoginLinkTop>

          <NameRow>
            <InputField
              name="Nome"
              placeholder="Digite seu nome..."
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <InputField
              name="Sobrenome"
              placeholder="Digite seu sobrenome..."
              type="text"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
            />
          </NameRow>

          <InputField
            name="Email"
            placeholder="Digite seu email..."
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputFieldPassword
            name="Senha"
            placeholder="Digite sua senha..."
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <InputFieldPassword
            name="Confirme sua senha"
            placeholder="Confirme sua senha..."
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />

          <TermsRow>
            <input
              type="checkbox"
              checked={termos}
              onChange={() => setTermos(!termos)}
            />
              Li e concordo com os 
              <Link to="/terms">termos de uso</Link>
          </TermsRow>

          <Button
            onClick={handleRegister}
            disabled={!termos}
            style={{ marginTop: "8px", alignSelf: "center" }}
          >
            Registrar
          </Button>

          <SocialButtonsRow>
            <ButtonGoogle />
            <ButtonApple />
          </SocialButtonsRow>
        </RegisterContainer>
      </PageWrapper>
      <Footer />
    </Background>
  );
};

export default Cadastro;