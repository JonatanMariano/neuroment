// src/components/ui/DateInput.jsx
import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../styles/colors.js";

// Wrapper do input
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 10px 0;
`;

// Label
const Label = styled.label`
  margin-bottom: 4px;
  color: ${({ themeMode }) =>
    themeMode === "dark" ? colors.white : colors.tealDark};
  font-size: 0.85rem;
`;

// Input de data
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

  &::-webkit-calendar-picker-indicator {
    background: url("/icons/calendar.png") no-repeat center;
    background-size: 20px 20px;
    cursor: pointer;
    opacity: 1;
  }

  &::-moz-calendar-picker-indicator {
    background: url("/icons/calendar.png") no-repeat center;
    background-size: 20px 20px;
    cursor: pointer;
  }
`;

const DateInput = ({
  name = "Data",
  placeholder = "dd/mm/aaaa",
  theme = "light",
  ...props
}) => {
  const [value, setValue] = useState("");

  return (
    <Wrapper>
      {name && <Label themeMode={theme}>{name}</Label>}
      <Input
        type="date"
        placeholder={value ? "" : placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
    </Wrapper>
  );
};

export default DateInput;
