import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link desde react-router-dom
import './Header.css'; // Asegúrate de que este archivo contiene los estilos
import logo from './img/logo-cinemania.png'; // Importar la imagen

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/"> {/* Usamos el componente Link para la navegación */}
            <img src={logo} alt="cinemania" />
          </Link>
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="#peliculas">Películas</a></li>
            <li><a href="#cafeteria">Cafetería</a></li>
            <li><a href="#tarjetas">Tarjetas</a></li>
            <li><a href="#reservas">Reservas</a></li>
          </ul>
        </nav>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Buscar..." />
      </div>
      <div className="login">
        <button>Iniciar Sesión</button>
      </div>
    </header>
  );
};

export default Header;
