import React, { useState, useEffect, useRef } from "react";
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

const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TimeInput = styled.input`
  width: 40px;
  height: 45px;
  padding: 0;
  border-radius: 4px;
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
  margin: 0 4px;
  color: ${({ themeMode }) =>
    themeMode === "dark" ? colors.white : colors.tealDark};
  font-size: 1.2rem;
`;

const InputHours = ({ name, onChange, theme = "light" }) => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");

  const hourRef = useRef(null);
  const minuteRef = useRef(null);

  const handleScroll = (e, type) => {
    e.preventDefault(); // agora funciona
    const delta = e.deltaY > 0 ? -1 : 1;

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

  // hook para registrar o wheel como { passive: false }
  useEffect(() => {
    const h = hourRef.current;
    const m = minuteRef.current;
    if (h) h.addEventListener("wheel", (e) => handleScroll(e, "hours"), { passive: false });
    if (m) m.addEventListener("wheel", (e) => handleScroll(e, "minutes"), { passive: false });

    return () => {
      if (h) h.removeEventListener("wheel", (e) => handleScroll(e, "hours"));
      if (m) m.removeEventListener("wheel", (e) => handleScroll(e, "minutes"));
    };
  }, [hours, minutes]);

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
      {name && <Label themeMode={theme}>{name}</Label>}
      <TimeWrapper>
        <TimeInput
          ref={hourRef}
          type="text"
          value={hours}
          placeholder="HH"
          onChange={(e) => handleInputChange(e, "hours")}
        />
        <Separator themeMode={theme}>:</Separator>
        <TimeInput
          ref={minuteRef}
          type="text"
          value={minutes}
          placeholder="MM"
          onChange={(e) => handleInputChange(e, "minutes")}
        />
      </TimeWrapper>
    </Wrapper>
  );
};

export default InputHours;
