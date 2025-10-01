// src/pages/Sobre.jsx
import React, { useState } from "react";
import Logo from "../components/globals/Logo.jsx";
import ThemeSelector from "../components/globals/ThemeSelector.jsx"; // botão que já criamos
import colors from "../styles/colors.js";

//Esta tela pode ser usada para testar coisas e aparece no footer, também contém os créditos dos ícones usados porque deve atribuir ao autor
function Sobre() {
  const [theme, setTheme] = useState("light"); // light | dark

  const styles = {
    page: {
      backgroundColor: theme === "light" ? colors.white : colors.black,
      color: theme === "light" ? colors.tealDark : colors.white,
      minHeight: "100vh",
      padding: "20px",
      transition: "all 0.3s ease",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "40px",
    },
    content: {
      maxWidth: "800px",
      margin: "0 auto",
      lineHeight: "1.6",
    },
    section: {
      marginBottom: "24px",
    },
    links: {
      marginTop: "20px",
    },
    link: {
      color: theme === "light" ? colors.tealMedium : colors.tealLight,
      textDecoration: "underline",
      display: "block",
      marginBottom: "8px",
    },
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <Logo />
        {/* botão no canto superior direito */}
        <ThemeSelector theme={theme} setTheme={setTheme} />
      </header>

      <main style={styles.content}>
        <section style={styles.section}>
          <h1>Sobre o NeuroMent</h1>
          <p>
            O NeuroMent é um projeto acadêmico e tecnológico que busca oferecer
            uma plataforma de aprendizagem personalizada baseada em
            neurociência e inteligência artificial. Ele foi pensado para
            estudantes e profissionais que enfrentam dificuldades de foco,
            organização e engajamento em seus estudos.
          </p>
          <p>
            Combinando princípios como plasticidade cerebral, ritmos biológicos
            e gamificação estratégica, o NeuroMent ajuda usuários a criarem
            planos de estudo adaptativos que respeitam seus próprios ritmos de
            aprendizagem.
          </p>
        </section>

        <section style={styles.section}>
          <h2>Links úteis</h2>
          <div style={styles.links}>
            <a href="/planos" style={styles.link}>
              Planos e assinaturas
            </a>
            <a href="mailto:suporte@neuroment.com.br" style={styles.link}>
              Contato: suporte@neuroment.com.br
            </a>
          </div>
        </section>

        <section style={styles.section}>
          <h2>Créditos de ícones</h2>
          <ul>
            {/* Referência de autores exigida pelo Flaticon */}
            <li>
              Theme light –{" "}
              <a
                href="https://www.flaticon.com/authors/creative-avenue"
                style={styles.link}
              >
                Creative Avenue
              </a>
            </li>
            <li>
              Theme dark –{" "}
              <a
                href="https://www.flaticon.com/authors/arkinasi"
                style={styles.link}
              >
                Arkinasi
              </a>
            </li>
            <li>
              Theme selection –{" "}
              <a
                href="https://www.flaticon.com/authors/awicon"
                style={styles.link}
              >
                Awicon
              </a>
            </li>
            <li>
              Theme auto –{" "}
              <a
                href="https://www.flaticon.com/authors/shahid-mehmood"
                style={styles.link}
              >
                Shahid Mehmood
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Sobre;

