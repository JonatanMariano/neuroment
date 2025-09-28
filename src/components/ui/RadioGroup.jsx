// src/components/ui/RadioGroup.jsx
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
  margin-bottom: 6px;
  color: ${({ themeMode }) =>
    themeMode === "dark" ? colors.white : colors.tealDark};
  font-size: 0.85rem;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 12px;
  border-radius: 6px;
  border: 2px solid ${colors.tealDark};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  background-color: ${({ checked, themeMode }) =>
    checked
      ? themeMode === "dark"
        ? colors.tealMedium
        : colors.tealDark
      : colors.white};

  color: ${({ checked, themeMode }) =>
    checked
      ? themeMode === "dark"
        ? colors.white
        : colors.orangeVibrant
      : colors.grayDark};

  &:hover {
    border-color: ${colors.tealLight};
    box-shadow: 0 0 8px ${colors.tealLight};

    ${({ checked }) =>
      !checked &&
      `
        background-color: ${colors.mint};
        color: ${colors.white};
      `}
  }

  input {
    display: none;
  }
`;

const RadioGroup = ({ name, options = [], value, onChange, theme = "light" }) => {
  return (
    <Wrapper>
      {name && <Label themeMode={theme}>{name}</Label>}
      <Options>
        {options.map((option, index) => (
          <OptionLabel
            key={index}
            checked={value === option}
            themeMode={theme}
           >
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={(e) => onChange(e.target.value)}
            />
            {option}
          </OptionLabel>
          ))}
      </Options>
    </Wrapper>
  );
};

export default RadioGroup;
