// src/components/globals/Logo.jsx
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../styles/colors";

// Container
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

// Imagem
const LogoImage = styled.img`
  width: ${({ dimension }) => dimension};
  height: auto;
  display: block;
`;

// Texto completo
const AppName = styled.h1`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: bold;
  margin: 0;
  display: flex;
  align-items: center;
`;

// Partes coloridas
const Euro = styled.span`
  color: ${colors.tealLight};
`;
const Ment = styled.span`
  color: ${colors.orangeAccent};
`;

function Logo({ size = "medium", alt = "NeuroMent Logo", className }) {
  const sizes = {
    xsmall: { img: "50px", text: "25px" },
    small: { img: "80px", text: "40px" },
    medium: { img: "150px", text: "75px" },
    large: { img: "250px", text: "125px" },
  };

  const { img, text } = sizes[size] || sizes.medium;

  return (
    <LogoWrapper className={className}>
      <LogoImage src="/images/logo.png" alt={alt} dimension={img} />
      <AppName fontSize={text}>
        <Euro>euro</Euro>
        <Ment>Ment</Ment>
      </AppName>
    </LogoWrapper>
  );
}

Logo.propTypes = {
  size: PropTypes.oneOf(["xsmall", "small", "medium", "large"]),
  alt: PropTypes.string,
  className: PropTypes.string,
};

// Exporta subcomponentes para permitir override externo
Logo.Wrapper = LogoWrapper;
Logo.AppName = AppName;
Logo.Euro = Euro;
Logo.Ment = Ment;
Logo.Image = LogoImage;

export default Logo;

/* ---------------------
   Instruções de uso:

1. Importar:
   import Logo from "../components/globals/Logo.jsx";

2. Uso direto (sem dor de cabeça):
   <Logo size="small" />

3. Estilizar de fora sem editar Logo.jsx:
   import styled from "styled-components";
   import Logo from "../components/globals/Logo.jsx";

   const CustomLogo = styled(Logo)`
     justify-content: flex-end;
     margin-top: 20px;
   `;

   const CustomEuro = styled(Logo.Euro)`
     color: red;
   `;

   const CustomMent = styled(Logo.Ment)`
     color: blue;
   `;

4. Substituição no JSX:
   <CustomLogo size="medium" />
   <Logo.Wrapper>
     <Logo.Image dimension="80px" />
     <Logo.AppName fontSize="30px">
       <CustomEuro>euro</CustomEuro>
       <CustomMent>Ment</CustomMent>
     </Logo.AppName>
   </Logo.Wrapper>
--------------------- */

