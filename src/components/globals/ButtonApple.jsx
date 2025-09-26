import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors.js";

const StyledAppleButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border: 2px solid ${colors.grayMedium};
  border-radius: 6px;
  background-color: #000000;
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  min-height: 44px;
  white-space: nowrap;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 8px rgba(0,0,0,0.3);
    border-color: ${colors.grayLight};
  }

  &:active {
    background-color: ${colors.grayDark};
    border-color: ${colors.grayDark};
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
    filter: invert(100%); /* garante ícone branco */
  }
`;

const ButtonApple = ({ ...props }) => {
  return (
    <StyledAppleButton {...props}>
      <img src="/icons/apple.svg" alt="Apple Logo" />
      Entrar com Apple
    </StyledAppleButton>
  );
};

export default ButtonApple;
