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
import { API_URL } from "../config"; // Importa a URL da API do arquivo de configuração BD

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

  // Estados dos campos
  const [name, setName] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [termosAceitos, setTermosAceitos] = useState(false);

  // Função de cadastro
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
       // exibe o código de confirmação para o usuário
       alert(`Seu código de confirmação é: ${data.codigo_confirmacao}`);

       // salva userId no localStorage para usar no ConfirmEmail.jsx
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
    <Background theme="light">
      <PageWrapper>
        <RegisterContainer>
          <LogoWrapper>
            <Logo size="xsmall" />
          </LogoWrapper>

          <LoginLinkTop>
            Já tenho uma conta <Link to="/">Entrar</Link>
          </LoginLinkTop>

          <NameRow>
            <InputField
              name="Nome"
              placeholder="Digite seu nome..."
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
              checked={termosAceitos}
              onChange={(e) => setTermosAceitos(e.target.checked)}
            />
            Li e concordo com os <Link to="/terms">termos de uso</Link>
          </TermsRow>

          <Button
            onClick={handleRegister}
            disabled={!termosAceitos}
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
