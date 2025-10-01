import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // necessário para navegação sem recarregar a página

function Footer({ email = "suporte@neuroment.com.br" }) {
  const currentYear = new Date().getFullYear();

  const style = {
    backgroundColor: "#009688",
    color: "#fff",
    textAlign: "center",
    padding: "12px",
    fontSize: "14px",
    width: "100%",
    marginTop: "auto",
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
      <p>
        <Link to="/sobre" style={{ color: "#fff", textDecoration: "underline" }}>
          Sobre
        </Link>
      </p>
    </footer>
  );
}

Footer.propTypes = {
  email: PropTypes.string,
};

export default Footer;

