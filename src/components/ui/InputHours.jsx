// src/components/ui/InputHours.jsx
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

const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TimeInput = styled.input`
  width: 60px;
  padding: 14px 12px;
  border-radius: 6px;
  border: 2px solid ${colors.tealDark};
  outline: none;
  font-size: 1rem;
  color: ${colors.grayDark};
  background-color: ${colors.white};
  text-align: center;
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

const Separator = styled.span`
  margin: 0 8px;
  font-size: 1.2rem;
  color: ${colors.tealDark};
`;

const InputHours = ({ name, onChange }) => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");

  const handleScroll = (e, type) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 1 : -1;

    if (type === "hours") {
      setHours((prev) => {
        let val = parseInt(prev || 0, 10) + delta;
        if (val < 0) val = 23;
        if (val > 23) val = 0;
        onChange && onChange({ hours: val, minutes });
        return val.toString().padStart(2, "0");
      });
    } else if (type === "minutes") {
      setMinutes((prev) => {
        let val = parseInt(prev || 0, 10) + delta;
        if (val < 0) val = 59;
        if (val > 59) val = 0;
        onChange && onChange({ hours, minutes: val });
        return val.toString().padStart(2, "0");
      });
    }
  };

  const handleInputChange = (e, type) => {
    const value = e.target.value.replace(/\D/g, "");
    if (type === "hours") {
      const valid = Math.min(parseInt(value || 0, 10), 23);
      setHours(valid.toString().padStart(2, "0"));
      onChange && onChange({ hours: valid, minutes });
    } else {
      const valid = Math.min(parseInt(value || 0, 10), 59);
      setMinutes(valid.toString().padStart(2, "0"));
      onChange && onChange({ hours, minutes: valid });
    }
  };

  return (
    <Wrapper>
      {name && <Label>{name}</Label>}
      <TimeWrapper>
        <TimeInput
          type="text"
          value={hours}
          placeholder="HH"
          onChange={(e) => handleInputChange(e, "hours")}
          onWheel={(e) => handleScroll(e, "hours")}
        />
        <Separator>:</Separator>
        <TimeInput
          type="text"
          value={minutes}
          placeholder="MM"
          onChange={(e) => handleInputChange(e, "minutes")}
          onWheel={(e) => handleScroll(e, "minutes")}
        />
      </TimeWrapper>
    </Wrapper>
  );
};

export default InputHours;
