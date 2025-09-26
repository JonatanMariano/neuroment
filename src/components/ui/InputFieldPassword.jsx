import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../styles/colors.js";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: 10px 0;
`;

const Label = styled.label`
  margin-bottom: 4px;
  color: ${colors.tealDark};
  font-size: 0.85rem;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center; /* centraliza verticalmente input + ícone */
`;

const Input = styled.input`
  flex: 1; /* ocupa todo o espaço disponível */
  padding: 14px 40px 14px 12px; /* espaço à direita para o ícone */
  border-radius: 6px;
  border: 2px solid ${colors.tealDark};
  outline: none;
  font-size: 1rem;
  color: ${colors.grayDark};
  background-color: ${colors.white};
  transition: all 0.2s ease-in-out;

  ::placeholder {
    color: ${colors.grayMedium};
  }

  &:hover {
    box-shadow: 0 0 8px ${colors.tealLight};
    border-color: ${colors.tealLight};
  }

  &:focus {
    border-color: ${colors.tealLight};
    box-shadow: 0 0 8px ${colors.tealLight};
  }
`;

const ToggleButton = styled.button`
  position: absolute;
  right: 12px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none; /* remove contorno ao focar */
  
  &:focus {
    outline: none; /* remove contorno do teclado */
  }

  img {
    width: 20px;
    height: 20px;
    display: block;
    pointer-events: none; /* garante que o clique fique no botão, não na imagem */
  }
`;

const InputFieldPassword = ({ name, placeholder, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <Wrapper>
      {name && <Label>{name}</Label>}
      <InputWrapper>
        <Input
          placeholder={placeholder}
          {...props}   // primeiro aplica as props
          type={showPassword ? "text" : "password"}  // sobrescreve type se existir
        />

        <ToggleButton type="button" onClick={togglePassword}>
          <img
            src={showPassword ? "/icons/showPass.png" : "/icons/hidePass.png"}
            alt={showPassword ? "Mostrar senha" : "Ocultar senha"}
          />
        </ToggleButton>
      </InputWrapper>
    </Wrapper>
  );
};

export default InputFieldPassword;
