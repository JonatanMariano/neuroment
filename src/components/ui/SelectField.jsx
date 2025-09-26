// src/components/ui/SelectField.jsx
import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../styles/colors.js";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: 10px 0;  
  position: relative;
`;

const Label = styled.label`
  margin-bottom: 4px;
  color: ${colors.tealDark};
  font-size: 0.85rem;
`;

const SelectBox = styled.div`
  padding: 14px 12px;
  border-radius: 6px;
  border: 2px solid ${colors.tealDark};
  font-size: 1rem;
  color: ${colors.grayDark};
  background-color: ${colors.white};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 8px ${colors.tealLight};
    border-color: ${colors.tealLight};
  }
`;

const OptionsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  border: 2px solid ${colors.tealDark};
  border-radius: 6px;
  background: ${colors.white};
  margin-top: 4px;
  z-index: 10;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.orangeVibrant};
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background: ${colors.white};
  }
`;

const OptionItem = styled.li`
  padding: 12px;
  font-size: 1rem;
  cursor: pointer;
  color: ${colors.grayDark};

  &:hover {
    background: ${colors.tealLight};
    color: ${colors.white};
  }
`;

function SelectField({ name, placeholder, options = [], value, onChange }) {
  const [open, setOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <Wrapper>
      {name && <Label>{name}</Label>}
      <SelectBox onClick={() => setOpen(!open)}>
        {value || placeholder}
      </SelectBox>
      {open && (
        <OptionsList>
          {options.map((option, idx) => (
            <OptionItem key={idx} onClick={() => handleSelect(option)}>
              {option}
            </OptionItem>
          ))}
        </OptionsList>
      )}
    </Wrapper>
  );
}

export default SelectField;
