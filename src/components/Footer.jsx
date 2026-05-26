import React from 'react';
import logoImg from '../assets/quintanaquinde2.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Col 1: Logo & Desc */}
          <div className="footer-col-main">
            <div className="footer-brand">
              <img src={logoImg} alt="Quintana & Quinde" className="footer-logo-img" />
              <div className="footer-logo-text">
                Quintana <span>&</span> Quinde
                <span className="footer-subtitle">Estudio Jurídico</span>
              </div>
            </div>
            <p className="footer-desc">
              Firma peruana de abogados y consultores que brinda servicios legales integrales y de excelencia a personas naturales y jurídicas.
            </p>
          </div>
          
          {/* Col 2: Dirección */}
          <div className="footer-col-info">
            <h4><span className="icon">📍</span> Dirección</h4>
            <p>Mza. H lote. 7 COO.</p>
            <p>San juan de miraflores Lima - Lima - Villa el salvador</p>
          </div>

          {/* Col 3: Contacto */}
          <div className="footer-col-info">
            <h4><span className="icon">📞</span> Contacto</h4>
            <p>+51 928 144 703 / +51 906 093 447</p>
            <p>contacto@quintanayquinde.com</p>
            <p>Lunes a Viernes de 8:00am – 6:00pm</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            Copyright &copy; {new Date().getFullYear()} – ESTUDIO JURÍDICO QUINTANA & QUINDE
          </div>
          
          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=61560288190019" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
            </a>
            <a href="https://www.instagram.com/quintanaquinde/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
