// src/components/ui/Modal.jsx
import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors.js";

// Overlay escuro cobrindo toda a tela
const Overlay = styled.div`
  display: ${({ show }) => (show ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// Caixa modal centralizada
const ModalContainer = styled.div`
  background-color: ${colors.white};
  padding: 40px;
  border-radius: 8px;
  max-width: 600px;
  width: 90%;
  position: relative;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
`;

// Botão de fechar (X)
const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: ${colors.grayDark};
  &:hover {
    color: ${colors.orangeVibrant};
  }
`;

const Modal = ({ show, onClose, children, showClose = true }) => {
  return (
    <Overlay show={show}>
      <ModalContainer>
        {showClose && <CloseButton onClick={onClose}>×</CloseButton>}
        {children}
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
