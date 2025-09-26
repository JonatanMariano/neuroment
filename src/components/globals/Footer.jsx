import React from "react";
import PropTypes from "prop-types";

function Footer({ email = "suporte@neuroment.com.br" }) {
  const currentYear = new Date().getFullYear();

  const style = {
    backgroundColor: "#009688", // verde-água mais escuro
    color: "#fff",
    textAlign: "center",
    padding: "12px",
    fontSize: "14px",
    width: "100%",          // ocupa toda a largura
    marginTop: "auto",      // empurra para o fim do container flex
  };

  return (
    <footer style={style}>
      <p>© {currentYear} NeuroMent. Todos os direitos reservados.</p>
      <p>
        Contato:{" "}
        <a href={`mailto:${email}`} style={{ color: "#fff" }}>
          {email}
        </a>
      </p>
    </footer>
  );
}

Footer.propTypes = {
  email: PropTypes.string,
};

export default Footer;

