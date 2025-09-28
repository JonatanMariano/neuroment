// DadosPessoais.jsx
import React, { useState } from "react";
import Background from "../components/globals/Background.jsx";
import Footer from "../components/globals/Footer.jsx";
import InputField from "../components/ui/InputField.jsx";
import DateInput from "../components/ui/DateInput.jsx";
import SelectField from "../components/ui/SelectField.jsx";
import TagInputField from "../components/ui/TagInputField.jsx";
import Button from "../components/ui/Button.jsx";
import styled from "styled-components";
import colors from "../styles/colors.js";
import { useNavigate } from "react-router-dom";
import { generos } from "../data/listas.js";
import { escolaridade } from "../data/listas.js";
import { materias } from "../data/listas.js";
import { idiomas } from "../data/listas.js";
import Modal from "../components/ui/Modal.jsx"; // overlay de modal

// Container que envolve toda a página
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 20px;
`;

// Container do formulário de dados pessoais 
const DadosPessoaisContainer = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.95);
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 700px; /* aumentei de 600px para caber 3 colunas */
  margin-bottom: 40px;
`;
// Título do formulário
const Title = styled.h2`
  font-size: 1.8rem;
  color: ${colors.tealMedium};
  margin-bottom: 8px;
`;

// Mensagem de instrução
const Message = styled.p`
  font-size: 1rem;
  color: ${colors.grayDark};
  text-align: center;
  margin-bottom: 24px;
`;

// Título de sessão
const SessionTitle = styled.h3`
  font-size: 1.2rem;
  color: ${colors.orangeVibrant};
  margin: 16px 0 8px;
  width: 100%;
  border-bottom: 1px solid ${colors.orangeVibrant};
  padding-bottom: 4px;
`;

// Wrapper para sessão 1 (formulário + imagem)
const Sessao1Wrapper = styled.div`
  display: flex;
  gap: 20px; /* espaço entre o formulário e a imagem */
  width: 100%;
  align-items: flex-start;
`;

// Imagem da coruja
const CorujaImage = styled.img`
  width: 230px; /* ou outro tamanho que achar melhor */
  height: auto;
`;

// Grid para organizar campos dentro de cada sessão
const SessionGrid = styled.div`
  display: grid;
  gap: 12px;
  width: 100%;
  grid-template-columns: repeat(${props => props.cols || 1}, 1fr);
`;

//Botões internos do modal:
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 16px;
`;

const NegativeButton = styled(Button)`
  background-color: ${colors.grayDark};
  color: white;
  &:hover {
    background-color: ${colors.grayMedium};
  }
`;

const DadosPessoais = () => {
  const navigate = useNavigate();

  // Estados para inputs
  const [username, setUsername] = useState("Username");
  const [surname, setSurname] = useState("Surname");
  const email = "seu-email@exemplo.com";
  const [birthDate, setBirthDate] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [profession, setProfession] = useState("");
  const [education, setEducation] = useState("");
  const [subject, setSubject] = useState([]);
  const [idioms, setIdioms] = useState([]);

  // Estados para modais
  const [showModal, setShowModal] = useState(false);   // modal principal
  const [showConfirm, setShowConfirm] = useState(false); // modal de confirmação do "pular"

  return (
    <Background theme="light">
      <PageWrapper>      
        <DadosPessoaisContainer>
          <Title>Dados Pessoais</Title>
          <Message>Precisamos que você preencha alguns dados pessoais para prosseguir:</Message>

          {/* Sessão 1 – Informações Básicas */}
          <SessionTitle>Informações Básicas</SessionTitle>
          <Sessao1Wrapper>
             <SessionGrid cols={2}>
                <InputField
                  name="*Nome"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                />
                <InputField
                  name="*Sobrenome"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  placeholder="Surname"
                />
                <InputField
                  name="*E-mail"
                  value={email}
                  disabled={true}
                />
                <InputField
                  name="Telefone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(00) 00000-0000"
                />
              </SessionGrid>

              <CorujaImage src="/images/corujaDados.png" alt="Coruja Dados" />
            </Sessao1Wrapper>


          {/* Sessão 2 – Identidade e Localização */}
          <SessionTitle>Identidade e Localização</SessionTitle>
            <SessionGrid cols={3}>
              {/* Linha 1 */}
              <InputField
                name="*Nacionalidade"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                placeholder="Ex.: Brasileiro(a)"
              />
              <div></div>
              <DateInput                
                name="*Data de Nascimento"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />

              {/* Linha 2 */}
              <InputField
                name="Cidade"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Ex: Anápolis"
              />
              <InputField
                name="Estado"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="Ex: Goiás"
              />
              <InputField
                name="*País"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Ex: Brasil"
              />

              {/* Linha 3 */}
              <SelectField                
                name="*Identidade de gênero"
                placeholder="Escolha uma opção"
                options={generos}
                value={gender}
                onChange={setGender}
              />
              <div></div>
              <div></div>
            </SessionGrid>


          {/* Sessão 3 – Educação e Preferências */}
          <SessionTitle>Educação e Preferências</SessionTitle>
          <SessionGrid cols={3}>
            <InputField
              name="*Profissão"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              placeholder="Ex: Estudante, Professor, Engenheiro..."
            />
            <SelectField
                name="*Escolaridade"
                placeholder="Escolha uma opção"
                options={escolaridade}
                value={education}
                onChange={setEducation}
              />
          </SessionGrid>   
          <SessionGrid cols={2}> 
            <TagInputField              
              name="Matérias favoritas"
              placeholder="Máximo 3 matérias"
              value={subject}
              maxTags={3}
              onChange={setSubject}
              options={materias}
            />
            <TagInputField              
              name="Idiomas"
              placeholder= "Idiomas que você entende ou fala"
              value={idioms}
              onChange={setIdioms}
              options={idiomas}
            />
            <div></div>
            <div></div>
          </SessionGrid>

          {/* Botão Prosseguir */}
          <Button 
            onClick={() => setShowModal(true)}
            style={{ marginTop: "24px", alignSelf: "center"}}
           >
           Prosseguir
          </Button>

          {/* Modal principal */}
          <Modal show={showModal} onClose={() => setShowModal(false)}>
             <Title>Questionário Inicial</Title>
             <Message>
               Agora vamos fazer um questionário inicial básico para que você possa começar sua jornada de estudos livremente no aplicativo.  
               Escolha uma das opções abaixo:
             </Message>

             <ButtonWrapper>
                <Button onClick={() => {
                 setShowModal(false); 
                 navigate("/questionario-1"); // vai para o questionário
                }}>
                 Responder questionário
                </Button>

             <NegativeButton onClick={() => {
              setShowConfirm(true); // abre modal de confirmação de pular
              setShowModal(false);
             }}>
              Pular
             </NegativeButton>
             </ButtonWrapper>
          </Modal>

          {/* Modal de confirmação para pular */}
          <Modal show={showConfirm} showClose={false}>
            <Title>Confirmação</Title>
            <Message>
              Deseja mesmo pular? A personalização do seu aprendizado será menos precisa.  
              O questionário é muito rápido!
            </Message>

            <ButtonWrapper>
              <NegativeButton onClick={() => setShowConfirm(false)}>
                Voltar e responder
              </NegativeButton>

              <Button onClick={() => navigate("/home")}>
                Prosseguir mesmo assim
              </Button>
            </ButtonWrapper>
          </Modal>
          
        </DadosPessoaisContainer>
      </PageWrapper>
      <Footer />
    </Background>
  );
};

export default DadosPessoais;

