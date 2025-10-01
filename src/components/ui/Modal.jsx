import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors.js";

const Overlay = styled.div`
  display: ${({ show }) => (show ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ themeMode }) =>
    themeMode === "dark" ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.3)"};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: ${({ themeMode }) =>
    themeMode === "dark" ? colors.grayDark : colors.white};
  padding: 40px;
  border-radius: 8px;
  max-width: 600px;
  width: 90%;
  position: relative;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  color: ${({ themeMode }) =>
    themeMode === "dark" ? colors.white : colors.grayDark};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: ${({ themeMode }) =>
    themeMode === "dark" ? colors.white : colors.grayDark};
  &:hover {
    color: ${colors.orangeVibrant};
  }
`;

const Modal = ({ show, onClose, children, showClose = true, theme = "light" }) => {
  return (
    <Overlay show={show} themeMode={theme}>
      <ModalContainer themeMode={theme}>
        {showClose && <CloseButton onClick={onClose} themeMode={theme}>×</CloseButton>}
        {children}
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;


