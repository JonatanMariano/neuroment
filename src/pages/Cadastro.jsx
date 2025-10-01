// Cadastro.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

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
  color: ${({ themeMode }) => themeMode.textPrimary};
`;

// Container do formulário de cadastro
const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ themeMode }) => themeMode.backgroundOpacity};
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px ${({ themeMode }) => themeMode.shadow};
  width: 100%;
  max-width: 450px;
  margin-bottom: 40px;
`;

// Logo wrapper
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  
  margin-bottom: 24px;
`;

// Nome + sobrenome em linha
const NameRow = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  width: 100%;
  margin-bottom: 6px;

  > div {
    flex: 1;
  }
`;

// Botões sociais
const SocialButtonsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 16px;
  width: 100%;
`;

// Checkbox de termos
const TermsRow = styled.label`
  font-size: 14px;
  color: ${({ themeMode }) => themeMode.textSecondary};
  margin-top: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  text-align: left;

  input {
    margin-right: 4px;
    accent-color: ${({ themeMode }) => themeMode.textLink}; // muda cor do checkbox
  }

  a {
    color: ${({ themeMode }) => themeMode.textLink};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

// Link para login
const LoginLinkTop = styled.div`
  width: 100%;
  color: ${({ themeMode }) => themeMode.textSecondary};
  text-align: center;
  margin-bottom: 8px;
  font-size: 14px;
  
  a {
    color: ${({ themeMode }) => themeMode.textLink};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

// Selector de tema no canto superior direito
const ThemeSelectorWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;

const Cadastro = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [termosAceitos, setTermosAceitos] = useState(false);
  const [theme, setTheme] = useState(lightTheme); // inicia com tema claro

  const handleRegister = async () => {
    if (!name || !sobrenome || !email || !password || !confirmarSenha) {
      alert("Preencha todos os campos!");
      return;
    }
    if (password !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }
    if (!termosAceitos) {
      alert("Você precisa aceitar os termos!");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          sobrenome,
          email,
          password,
          termos_aceitos: termosAceitos,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        alert(`Seu código de confirmação é: ${data.codigo_confirmacao}`);
        localStorage.setItem("userId", data.id);
        navigate("/confirm-email");
      } else {
        alert(data.message || "Erro no cadastro.");
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <Background theme={theme.name}>
      <PageWrapper themeMode={theme}>
        <ThemeSelectorWrapper>
          <ThemeSelector 
            theme={theme.name} 
            setTheme={(t) => setTheme(t === "light" ? lightTheme : darkTheme)} 
          />
        </ThemeSelectorWrapper>

        <RegisterContainer themeMode={theme}>
          <LogoWrapper>
            <Logo size="xsmall" />
          </LogoWrapper>

          <LoginLinkTop themeMode={theme}>
            Já tenho uma conta <Link to="/">Entrar</Link>
          </LoginLinkTop>

          <NameRow>
            <InputField
              theme={theme}
              name="Nome"
              placeholder="Digite seu nome..."
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputField
              theme={theme}
              name="Sobrenome"
              placeholder="Digite seu sobrenome..."
              type="text"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
            />
          </NameRow>

          <InputField
            theme={theme}
            name="Email"
            placeholder="Digite seu email..."
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputFieldPassword
            theme={theme}
            name="Senha"
            placeholder="Digite sua senha..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <InputFieldPassword
            theme={theme}
            name="Confirme sua senha"
            placeholder="Confirme sua senha..."
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />

          <TermsRow themeMode={theme}>
            <input
              type="checkbox"
              checked={termosAceitos}
              onChange={(e) => setTermosAceitos(e.target.checked)}
            />
            Li e concordo com os <Link to="/terms">termos de uso</Link>
          </TermsRow>

          <Button
            theme={theme}
            onClick={handleRegister}
            disabled={!termosAceitos}
            style={{ marginTop: "8px", alignSelf: "center" }}
          >
            Registrar
          </Button>

          <SocialButtonsRow>
            <ButtonGoogle theme={theme} />
            <ButtonApple theme={theme} />
          </SocialButtonsRow>
        </RegisterContainer>
      </PageWrapper>
      <Footer theme={theme} />
    </Background>
  );
};

export default Cadastro;

