import React from 'react';
import logoImg from '../assets/quintanaquinde2.png';

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-overlay"></div>
      <img src={logoImg} alt="Watermark" className="hero-watermark" />
      <div className="container">
        <div className="hero-content">
          <h1 className="fade-in delay-1">
            Experiencia jurídica<br/>
            <span style={{ color: 'var(--accent-gold)' }}>con resultados.</span>
          </h1>
          <div className="hero-buttons fade-in delay-2">
            <a href="#nosotros" className="btn-pill">
              Nuestra empresa <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
