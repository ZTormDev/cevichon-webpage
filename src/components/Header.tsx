import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>
        <Link to="/">Cevichón</Link>
      </h1>
      <nav className="header-nav">
        <Link to="/" className="nav-link">
          Inicio
        </Link>
        <Link to="/menu" className="nav-link">
          Carta
        </Link>
        <Link to="/horario" className="nav-link">
          Horario
        </Link>
        <a
          href="https://wa.me/?text=Hola!"
          className="nav-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contactar
        </a>
      </nav>
    </header>
  );
};

export default Header;
