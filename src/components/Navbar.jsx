import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoImg from '../assets/quintanaquinde2.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false); // Cierra el menú al hacer clic
    if (location.pathname !== '/') {
      navigate('/#' + targetId);
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    window.scrollTo(0,0);
  };

  return (
    <nav className={`navbar fade-in ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="navbar-logo" onClick={handleLinkClick}>
          <img src={logoImg} alt="Quintana & Quinde Abogados" className="logo-image" />
        </Link>

        {/* Icono de Hamburguesa */}
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={handleLinkClick}>Inicio</Link>
          <a href="#nosotros" onClick={(e) => handleNavClick(e, 'nosotros')}>Nosotros</a>
          <a href="#servicios" onClick={(e) => handleNavClick(e, 'servicios')}>Servicios</a>
          <Link to="/areas-de-practica" onClick={handleLinkClick}>Áreas de Práctica</Link>
          <a href="#contacto" onClick={(e) => handleNavClick(e, 'contacto')}>Contacto</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
