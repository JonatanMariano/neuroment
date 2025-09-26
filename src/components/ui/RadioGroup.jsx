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
  color: ${colors.tealDark};
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
  background-color: ${colors.white};
  color: ${colors.grayDark};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 8px ${colors.tealLight};
    border-color: ${colors.tealLight};
  }

  input {
    margin-right: 10px;
    accent-color: ${colors.tealDark}; /* cor da bolinha */
    cursor: pointer;
  }
`;

const RadioGroup = ({ name, options = [], value, onChange }) => {
  return (
    <Wrapper>
      {name && <Label>{name}</Label>}
      <Options>
        {options.map((option, index) => (
          <OptionLabel key={index}>
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
