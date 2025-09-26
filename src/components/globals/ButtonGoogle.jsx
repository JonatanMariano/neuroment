import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors.js";

const StyledGoogleButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px; /* espaço entre ícone e texto */
  padding: 12px 24px;
  border: 2px solid ${colors.grayMedium};
  border-radius: 6px;
  background-color: #ffffff;
  color: #000000;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  min-height: 44px;
  white-space: nowrap;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 8px rgba(0,0,0,0.2);
    border-color: ${colors.grayDark};
  }

  &:active {
    background-color: ${colors.grayLight};
    border-color: ${colors.grayLight};
    box-shadow: none;
    transform: scale(0.98);
  }

  &:disabled {
    background-color: ${colors.disabled};
    border-color: ${colors.disabled};
    color: ${colors.grayLight};
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  img {
    height: 20px;
    width: 20px;
  }
`;

const ButtonGoogle = ({ ...props }) => {
  return (
    <StyledGoogleButton {...props}>
      <img src="/icons/google.svg" alt="Google Logo" />
      Entrar com Google
    </StyledGoogleButton>
  );
};

export default ButtonGoogle;
