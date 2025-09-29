// ConfirmEmail.jsx
import React, { useState } from "react";
import Background from "../components/globals/Background.jsx";
import Footer from "../components/globals/Footer.jsx";
import Button from "../components/ui/Button.jsx";
import Logo from "../components/globals/Logo.jsx";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import colors from "../styles/colors.js";
import { API_URL } from "../config"; // Importa a URL da API do arquivo de configuração BD

// Container geral
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 20px;
`;

// Caixa transparente
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

// Título
const ConfirmTitle = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 24px;
  text-align: center;
`;

const ConfirmGreen = styled.span`
  color: ${colors.tealLight};
`;

const ConfirmOrange = styled.span`
  color: ${colors.orangeAccent};
`;

// Mensagem principal
const Message = styled.div`
  font-size: 16px;
  color: ${colors.grayDark};
  text-align: center;
  margin-bottom: 24px;

  b {
    color: ${colors.tealDark};
    font-weight: bold;
  }
`;

// Container dos inputs do código
const CodeRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 16px;

  input {
    width: 48px;
    height: 48px;
    text-align: center;
    font-size: 20px;
    border-radius: 4px;
    border: 1px solid ${colors.grayLight};
  }
`;

// Links secundários
const LinksRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 12px;

  a {
    color: ${colors.link};
    font-size: 14px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ConfirmEmail = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  // Agora pega dados reais do localStorage
  const userId = localStorage.getItem("userId");

  const handleChange = (e, idx) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    if (val.length > 1) return;
    const newCode = [...code];
    newCode[idx] = val;
    setCode(newCode);

    if (val && idx < 5) {
      const next = document.getElementById(`code-${idx + 1}`);
      if (next) next.focus();
    }
  };

  const handleConfirmacao = async () => {
  if (code.some((d) => d === "")) {
    alert("Digite todos os dígitos do código.");
    return;
  }

  try {
    const response = await fetch(`${API_URL}/auth/confirm-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        code: code.join("") // junta os 6 dígitos
      }),
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      navigate("/confirm-success");
    } else {
      alert(data.message || "Código incorreto. Tente novamente.");
    }
  } catch (error) {
    console.error(error);
    alert("Erro ao conectar com o servidor.");
  }
};


  return (
    <Background theme="light">
      <PageWrapper>
        <ConfirmContainer>

          <ConfirmTitle>
            <ConfirmGreen>Confirme seu </ConfirmGreen>
            <ConfirmOrange>e-mail</ConfirmOrange>
          </ConfirmTitle>

          <Message>
            Olá <b>Usuário</b>,<br/>
            Enviamos um e-mail para <b>seuemail@exemplo.com</b> com um código de 6 dígitos. <br/>
            Por favor, confirme o código abaixo.
          </Message>

          <CodeRow>
            {code.map((digit, idx) => (
              <input
                key={idx}
                id={`code-${idx}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, idx)}
              />
            ))}
          </CodeRow>

          <Button
            onClick={handleConfirmacao}
            disabled={code.some((d) => d === "")}
            style={{ marginTop: "8px", alignSelf: "center" }}
          >
            Confirmar
          </Button>

          <LinksRow>
            <Link to="#">Reenviar código</Link>
            <Link to="/cadastro">Trocar de conta</Link>
          </LinksRow>

        </ConfirmContainer>
      </PageWrapper>
      <Footer />
    </Background>
  );
};

export default ConfirmEmail;
