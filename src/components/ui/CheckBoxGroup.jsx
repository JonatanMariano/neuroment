// src/components/ui/CheckBoxGroup.jsx
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
    margin-right: 10px;
    transform: scale(1.2); /* checkbox maior */
    cursor: pointer;

    /* cor do check segue a cor do texto */
    accent-color: ${({ checked, themeMode }) =>
      checked
        ? themeMode === "dark"
          ? colors.white
          : colors.orangeVibrant
        : colors.tealDark};
  }
`;

const CheckBoxGroup = ({
  name,
  options = [],
  values = [],
  onChange,
  theme = "light",
}) => {
  const handleToggle = (value) => {
    if (values.includes(value)) {
      onChange(values.filter((v) => v !== value)); // remove
    } else {
      onChange([...values, value]); // adiciona
    }
  };

  return (
    <Wrapper>
      {name && <Label themeMode={theme}>{name}</Label>}
      <Options>
        {options.map((option, index) => (
          <OptionLabel
            key={index}
            checked={values.includes(option)}
            themeMode={theme}
          >
            <input
              type="checkbox"
              name={name}
              value={option}
              checked={values.includes(option)}
              onChange={() => handleToggle(option)}
            />
            {option}
          </OptionLabel>
        ))}
      </Options>
    </Wrapper>
  );
};

export default CheckBoxGroup;

