// Login.jsx
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

// Container do formulário de login
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 400px;
  margin-bottom: 40px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  
  margin-bottom: 24px;
`;

const AppName = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-left: 0px;
`;

// Linha que contém "Lembrar-me" e "Esqueci minha senha"
const OptionsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 4px;
`;

const RememberRow = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${colors.grayDark};

  input {
    margin-right: 4px;
  }
`;

const ForgotPasswordLink = styled(Link)`
  font-size: 14px;
  color: ${colors.link};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const SocialButtonsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px; /* espaço entre os botões */
  margin-top: 16px;
  width: 100%;
`;

const CreateAccountLink = styled(Link)`
  margin-top: 16px;
  font-size: 14px;
  color: ${colors.link};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        console.log("Login bem-sucedido!");
        navigate("/planos"); // Redireciona para a página de planos
        alert(data.message || "Erro no login");
      }
    } catch (error) {
      console.error("Erro ao tentar login:", error);
      alert("Não foi possível conectar ao servidor.");
    }
  };

  return (
    <Background theme="light">
      <PageWrapper>
        <LoginContainer>
          <LogoWrapper>
            <Logo size="xsmall" />
            <AppName></AppName>
          </LogoWrapper>

          <InputField
            name="Email/Username"
            placeholder="Digite seu email ou username..."
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputFieldPassword
            name="Senha"
            placeholder="Digite sua senha..."
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Lembrar-me e Esqueci senha na mesma linha */}
          <OptionsRow>
            <RememberRow>
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
              Lembrar-me
            </RememberRow>

            <ForgotPasswordLink to="/forgot-password">
              Esqueci minha senha
            </ForgotPasswordLink>
          </OptionsRow>

          <Button
            onClick={handleLogin}
            style={{ marginTop: "24px", alignSelf: "center" }}
          >
            Entrar
          </Button>

          {/* Botões sociais */}
          <SocialButtonsRow>
            <ButtonGoogle />
            <ButtonApple />
          </SocialButtonsRow>

          <CreateAccountLink to="/Cadastro">
            Criar uma conta
          </CreateAccountLink>
        </LoginContainer>
      </PageWrapper>
      <Footer />
    </Background>
  );
};

export default Login;
