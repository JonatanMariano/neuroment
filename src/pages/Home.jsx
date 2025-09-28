// src/pages/Home.jsx
/*import React from "react";
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
*/

// src/pages/TestComponents.jsx
import React, { useState } from "react";
import Background from "../components/globals/Background.jsx";
import Footer from "../components/globals/Footer.jsx";
import styled from "styled-components";
import colors from "../styles/colors.js";

// Componentes para teste
import InputHours from "../components/ui/InputHours.jsx";
import RadioGroup from "../components/ui/RadioGroup.jsx";
import CheckBoxGroup from "../components/ui/CheckBoxGroup.jsx";
import LikertScale, { defaultColors } from "../components/ui/LikertScale.jsx";

const HomeContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.tealDark};
  font-size: 1.2rem;
  font-weight: bold;
  padding: 20px;
  gap: 30px;
  width: 100%;
  max-width: 600px;
`;

const Home = () => {
  const [inputHours, setInputHours] = useState({ hours: 0, minutes: 0 });
  const [radioValue, setRadioValue] = useState("");
  const [checkValues, setCheckValues] = useState([]);
  const [likertValue, setLikertValue] = useState(3);

  return (
    <Background theme="light">
      <HomeContent>
        <InputHours          
          name="Teste InputHours"
          value={inputHours}
          onChange={setInputHours}
        />

        <RadioGroup          
          name="Teste RadioGroup"
          value={radioValue}
          onChange={setRadioValue}
          options={["Opção 1", "Opção 2", "Opção 3"]}
        />

        <CheckBoxGroup          
          name="Teste CheckBoxGroup"
          values={checkValues}
          onChange={setCheckValues}
          options={["Item A", "Item B", "Item C"]}
        />

        <LikertScale          
          name="Teste LikertScale"
          value={likertValue}
          onChange={setLikertValue}
          minLabel="Ruim"
          maxLabel="Bom"
          minColor={defaultColors.minColor}
          maxColor={defaultColors.maxColor}
        />
      </HomeContent>
      <Footer />
    </Background>
  );
};

export default Home;