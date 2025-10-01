// src/components/globals/ThemeSelector.jsx
// Autor dos ícones (licença Flaticon):
// theme_light -> Creative Avenue (https://www.flaticon.com/authors/creative-avenue)
// theme_dark -> Arkinasi (https://www.flaticon.com/authors/arkinasi)
// theme_selection -> Awicon (https://www.flaticon.com/authors/awicon)
// theme_auto -> Shahid Mehmood (https://www.flaticon.com/authors/shahid-mehmood)

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";

// Container geral
const SelectorWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

// Botão do ícone principal (abre/fecha menu)
const SelectorButton = styled.div`
  padding: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 32px;
    height: 32px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

// Menu dropdown
const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  margin-top: 8px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  padding: 10px;
  opacity: 0.85;

  background-color: ${({ theme }) =>
    theme === "dark" ? colors.black : colors.white};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
  transform-origin: top right;
`;

// Botão de tema individual
const ThemeOption = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;

  img {
    width: 28px;
    height: 28px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const ThemeSelector = ({ theme, setTheme }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Fecha o menu se clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <SelectorWrapper ref={menuRef}>
      {/* Botão principal */}
      <SelectorButton onClick={() => setOpen(!open)}>
        <img src="/icons/theme_selection.png" alt="Selecionar tema" />
      </SelectorButton>

      {/* Menu dropdown */}
      {open && (
        <DropdownMenu theme={theme}>
          <ThemeOption onClick={() => setTheme("light")} title="Tema claro">
            <img src="/icons/theme_light.png" alt="Tema claro" />
          </ThemeOption>

          <ThemeOption onClick={() => setTheme("dark")} title="Tema escuro">
            <img src="/icons/theme_dark.png" alt="Tema escuro" />
          </ThemeOption>

          {/* Automático (opcional futuramente) */}
          {/* <ThemeOption onClick={() => setTheme("auto")} title="Automático">
            <img src="/icons/theme_auto.png" alt="Automático" />
          </ThemeOption> */}
        </DropdownMenu>
      )}
    </SelectorWrapper>
  );
};

export default ThemeSelector;

