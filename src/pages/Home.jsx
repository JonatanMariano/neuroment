// src/pages/Home.jsx
import React from "react";
import Background from "../components/globals/Background.jsx";
import Footer from "../components/globals/Footer.jsx";
import styled from "styled-components";
import colors from "../styles/colors.js";

const HomeContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.tealDark};
  font-size: 2rem;
  font-weight: bold;
`;

const Home = () => {
  return (
    <Background theme="light">
      <HomeContent>Bem-vindo à Home!</HomeContent>
      <Footer />
    </Background>
  );
};

export default Home;
