import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoImg from '../assets/quintanaquinde2.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
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
    if (location.pathname !== '/') {
      navigate('/#' + targetId);
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`navbar fade-in ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="navbar-logo" onClick={() => window.scrollTo(0,0)}>
          <img src={logoImg} alt="Quintana & Quinde Abogados" className="logo-image" />
        </Link>
        <div className="navbar-links">
          <Link to="/" onClick={() => window.scrollTo(0,0)}>Inicio</Link>
          <a href="#nosotros" onClick={(e) => handleNavClick(e, 'nosotros')}>Nosotros</a>
          <a href="#servicios" onClick={(e) => handleNavClick(e, 'servicios')}>Servicios</a>
          <Link to="/areas-de-practica">Áreas de Práctica</Link>
          <a href="#contacto" onClick={(e) => handleNavClick(e, 'contacto')}>Contacto</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
