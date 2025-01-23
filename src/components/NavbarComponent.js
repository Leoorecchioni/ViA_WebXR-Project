import React, { useState } from 'react';
import './styles/NavbarComponent.css'; // On inclut le fichier CSS pour les styles
// import Splines from './Splines';

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">ARMed</a>
      </div>
      <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </button>
    </nav>
  );
};

export default NavbarComponent;