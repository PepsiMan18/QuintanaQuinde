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
            </div>
            <p className="footer-desc">
              Firma peruana de abogados y consultores que brinda servicios legales integrales y de excelencia a personas naturales y jurídicas.
            </p>
          </div>
          
          {/* Col 2: Dirección */}
          <div className="footer-col-info">
            <h4>
              <span className="icon" style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </span>
            </h4>
            <p>Mza. H lote. 7 COO.</p>
            <p>San juan de miraflores Lima - Lima - Villa el salvador</p>
          </div>

          {/* Col 3: Contacto */}
          <div className="footer-col-info">
            <h4>
              <span className="icon" style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </span>
            </h4>
            <p>+51 928 144 703 / +51 906 093 447</p>
            <p style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gaquinde@quintanaquindeabogados.com" target="_blank" rel="noopener noreferrer" className="email-link" style={{ color: 'inherit', textDecoration: 'none' }}>
                gaquinde@quintanaquindeabogados.com
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jquintana@quintanaquindeabogados.com" target="_blank" rel="noopener noreferrer" className="email-link" style={{ color: 'inherit', textDecoration: 'none' }}>
                jquintana@quintanaquindeabogados.com
              </a>
            </p>
            <p>Lunes a Viernes de 8:00am – 6:00pm</p>
            <div className="social-links" style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <a href="https://www.facebook.com/profile.php?id=61560288190019" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', transition: 'all 0.3s ease', color: 'white' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
              </a>
              <a href="https://www.instagram.com/quintanaquinde/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', transition: 'all 0.3s ease', color: 'white' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://wa.me/51928144703" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', transition: 'all 0.3s ease', color: 'white' }}>
                <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor"><path d="M16.002 0c-8.837 0-16 7.163-16 16 0 2.823 0.738 5.474 2.051 7.785l-2.051 7.715 8.082-2.008c2.35 1.258 5.048 1.97 7.918 1.97 8.837 0 16-7.163 16-16s-7.163-16-16-16zM24.035 21.656c-0.344 0.965-1.953 1.836-3.152 2.039-0.812 0.137-1.895 0.25-5.465-1.23-4.281-1.781-7.051-6.156-7.266-6.441-0.215-0.285-1.734-2.309-1.734-4.414s1.109-3.137 1.496-3.543c0.387-0.406 0.836-0.508 1.113-0.508s0.559-0.008 0.816-0.008c0.258 0 0.605-0.098 0.945 0.723 0.344 0.824 1.18 2.883 1.285 3.098 0.105 0.215 0.172 0.469 0.043 0.723-0.129 0.254-0.191 0.414-0.387 0.648-0.191 0.23-0.406 0.496-0.578 0.684-0.195 0.215-0.406 0.445-0.172 0.848 0.23 0.406 1.023 1.703 2.195 2.746 1.516 1.348 2.766 1.766 3.176 1.957s0.645 0.152 0.887-0.078c0.238-0.23 1.023-1.191 1.301-1.602 0.277-0.41 0.555-0.344 0.941-0.195s2.449 1.152 2.867 1.367c0.422 0.215 0.703 0.328 0.805 0.508 0.105 0.18 0.105 1.031-0.238 1.996z"></path></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            Copyright &copy; {new Date().getFullYear()} – QUINTANA & QUINDE ABOGADOS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
