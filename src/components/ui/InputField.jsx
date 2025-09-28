// src/components/ui/InputField.jsx
import React from "react";
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
  color: ${({ themeMode }) =>
    themeMode === "dark" ? colors.white : colors.tealDark};
  font-size: 0.85rem;
`;

const Input = styled.input`
  padding: 14px 12px;
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

const InputField = ({ name, placeholder, theme = "light", ...props }) => {
  return (
    <Wrapper>
      {name && <Label themeMode={theme}>{name}</Label>}
      <Input placeholder={placeholder} {...props} />
    </Wrapper>
  );
};

export default InputField;
