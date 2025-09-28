// src/components/ui/LikertScale.jsx
import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors.js";

// Cores padrão exportáveis
export const defaultColors = {
  minColor: "#ee6352", // Orange Vibrant
  maxColor: "rgba(170, 250, 200, 1)", // Mint
};

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

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const SliderInput = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 14px;
  border-radius: 6px;
  background: linear-gradient(
    to right,
    ${(props) => props.minColor},
    ${(props) => props.maxColor}
  );
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 8px ${(props) => props.maxColor};
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: ${colors.white};
    border: 2px solid ${colors.tealDark};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  &::-moz-range-thumb {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: ${colors.white};
    border: 2px solid ${colors.tealDark};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
`;

const LabelsRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: ${colors.grayDark};
  margin-top: 4px;
`;

const LikertScale = ({
  name,
  value,
  onChange,
  min = 1,
  max = 5,
  minLabel = "Ruim",
  maxLabel = "Bom",
  minColor = defaultColors.minColor,
  maxColor = defaultColors.maxColor,
  theme = "light",
}) => {
  return (
    <Wrapper>
      {name && <Label themeMode={theme}>{name}</Label>}
      <SliderWrapper>
        <SliderInput
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          minColor={minColor}
          maxColor={maxColor}
        />
        <LabelsRow>
          <span>{minLabel}</span>
          <span>{maxLabel}</span>
        </LabelsRow>
      </SliderWrapper>
    </Wrapper>
  );
};

export default LikertScale;
