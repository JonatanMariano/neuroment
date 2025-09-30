// src/components/ui/TagInputField.jsx
import React, { useState, useEffect, useRef } from "react";
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
  color: ${({ themeMode }) =>
    themeMode === "dark" ? colors.white : colors.tealDark};
  font-size: 0.85rem;
`;


const InputArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 6px 8px;
  border: 2px solid ${colors.tealDark};
  border-radius: 6px;
  background-color: ${colors.white};
  cursor: text;
  min-height: 46px;
  align-items: center;
  gap: 6px;

  &:focus-within {
    border-color: ${colors.tealLight};
    box-shadow: 0 0 8px ${colors.tealLight};
  }
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.mint};
  color: ${colors.grayDark};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.9rem;
`;

const RemoveButton = styled.span`
  margin-left: 6px;
  cursor: pointer;
  font-weight: bold;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 6px;
  background-color: ${colors.white}; /* força fundo branco */
  color: ${colors.grayDark};

  ::placeholder {
    color: ${colors.grayMedium};
  }
`;


const SuggestionsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 150px;
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

const SuggestionItem = styled.li`
  padding: 10px;
  cursor: pointer;
  color: ${colors.grayDark}; /* força cor visível */
  
  &:hover {
    background-color: ${colors.tealLight};
    color: ${colors.white};
  }
`;

const TagInputField = ({
  name,
  placeholder,
  value = [],
  onChange,
  maxTags,
  options = [],
  theme = "light",
}) => {
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const addTag = (tag) => {
    if (!tag) return;
    if (options.length && !options.includes(tag)) return;
    if (value.includes(tag)) return;
    if (maxTags && value.length >= maxTags) return;

    onChange([...value, tag]);
    setInputValue("");
    setOpen(false);
  };

  const removeTag = (tag) => {
    onChange(value.filter((t) => t !== tag));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(inputValue.trim());
    } else if (e.key === "Backspace" && !inputValue) {
      removeTag(value[value.length - 1]);
    }
  };

  const filteredOptions = options.filter(
    (opt) =>
      opt.toLowerCase().includes(inputValue.toLowerCase()) &&
      !value.includes(opt)
  );

  return (
    <Wrapper ref={wrapperRef}>
      {name && <Label themeMode={theme}>{name}</Label>}
      <InputArea>
        {value.map((tag, idx) => (
          <Tag key={idx}>
            {tag}
            <RemoveButton onClick={() => removeTag(tag)}>×</RemoveButton>
          </Tag>
        ))}
        <Input
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => {
           setInputValue(e.target.value);
           setOpen(true); // abre apenas quando começa a digitar
          }}
          onFocus={() => setOpen(true)} // abre se focar no campo
          onKeyDown={handleKeyDown}
        />

      </InputArea>
      {open && filteredOptions.length > 0 && (
        <SuggestionsList>
          {filteredOptions.map((opt, idx) => (
            <SuggestionItem key={idx} onClick={() => addTag(opt)}>
              {opt}
            </SuggestionItem>
          ))}
        </SuggestionsList>
      )}
    </Wrapper>
  );
};

export default TagInputField;
