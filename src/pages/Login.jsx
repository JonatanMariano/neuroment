// Login.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import Background from "../components/globals/Background.jsx";
import Footer from "../components/globals/Footer.jsx";
import Logo from "../components/globals/Logo.jsx";
import ThemeSelector from "../components/globals/ThemeSelector.jsx";

import InputField from "../components/ui/InputField.jsx";
import InputFieldPassword from "../components/ui/InputFieldPassword.jsx";
import Button from "../components/ui/Button.jsx";
import ButtonGoogle from "../components/globals/ButtonGoogle.jsx";
import ButtonApple from "../components/globals/ButtonApple.jsx";

import { API_URL } from "../config";
import { lightTheme, darkTheme } from "../styles/themes.js";

// Container geral da página
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 20px;
  position: relative;
  color: ${({ theme }) => theme.textPrimary};
`;

// Container do formulário
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundOpacity};
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px ${({ theme }) => theme.shadow};
  width: 100%;
  max-width: 400px;
  margin-bottom: 40px;
`;

// Logo + nome app
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
  color: ${({ theme }) => theme.textPrimary};
`;

// Linha lembrar-me / esqueci senha
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
  color: ${({ theme }) => theme.textPrimary};

  input {
    margin-right: 4px;
  }
`;

const ForgotPasswordLink = styled(Link)`
  font-size: 14px;
  color: ${({ theme }) => theme.textLink};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const SocialButtonsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 16px;
  width: 100%;
`;

const CreateAccountLink = styled(Link)`
  margin-top: 16px;
  font-size: 14px;
  color: ${({ theme }) => theme.textLink};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

// Selector de tema no canto superior direito
const ThemeSelectorWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [theme, setTheme] = useState("light");

  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  const handleLogin = async () => {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        alert("Login realizado com sucesso!");
        navigate("/planos");
      } else {
        alert(data.message || "Erro no login");
      }
    } catch (error) {
      console.error("Erro ao tentar login:", error);
      alert("Não foi possível conectar ao servidor.");
    }
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <Background theme={theme}>
        <PageWrapper>
          <ThemeSelectorWrapper>
            <ThemeSelector theme={theme} setTheme={setTheme} />
          </ThemeSelectorWrapper>

          <LoginContainer>
            <LogoWrapper>
              <Logo size="xsmall" />
              <AppName></AppName>
            </LogoWrapper>

            <InputField
              theme={theme}
              name="Email/Username"
              placeholder="Digite seu email..."
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <InputFieldPassword
              theme={theme}
              name="Senha"
              placeholder="Digite sua senha..."
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

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

            <Button onClick={handleLogin} style={{ marginTop: "24px", alignSelf: "center" }}>
              Entrar
            </Button>

            <SocialButtonsRow>
              <ButtonGoogle />
              <ButtonApple />
            </SocialButtonsRow>

            <CreateAccountLink to="/Cadastro">
              Criar uma conta
            </CreateAccountLink>
          </LoginContainer>
        </PageWrapper>

        <Footer theme={theme} />
      </Background>
    </ThemeProvider>
  );
};

export default Login;
