import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors.js";

const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  border: 2px solid ${colors.tealDark};
  border-radius: 6px;
  background-color: ${({ themeMode }) =>
    themeMode === "dark" ? colors.tealMedium : colors.tealDark};
  color: ${({ themeMode }) =>
    themeMode === "dark" ? colors.orangeSoft : colors.tealLight};
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  min-height: 44px;
  white-space: nowrap;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 8px ${colors.tealLight};
    border-color: ${colors.tealLight};
  }

  &:active {
    background-color: ${colors.grayMedium};
    border-color: ${colors.grayMedium};
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
`;

const Button = ({ children, theme = "light", ...props }) => {
  return <StyledButton themeMode={theme} {...props}>{children}</StyledButton>;
};

export default Button;

