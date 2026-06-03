import React from 'react';
import cliente1 from '../assets/cliente1.jpeg';
import cliente2 from '../assets/cliente2.png';
import cliente3 from '../assets/cliente3.png';
import cliente4 from '../assets/cliente4.png';

const partnersData = [
  { id: 1, name: "Ministerio de Justicia", logo: cliente1, url: "https://www.gob.pe/minjus" },
  { id: 2, name: "Ministerio Público", logo: cliente2, url: "https://www.gob.pe/mpfn" },
  { id: 3, name: "Colegio de Abogados de Lima", logo: cliente3, url: "https://www.cal.org.pe/" },
  { id: 4, name: "MAC", logo: cliente4, url: "https://www.mac.pe/" }
];

const Partners = () => {
  // Duplicamos los elementos para generar un bucle infinito continuo
  const doubledPartners = [...partnersData, ...partnersData, ...partnersData];

  return (
    <section className="partners-section">
      <div className="container">
        <h2 className="partners-title">Enlaces de Interés</h2>
        <div style={{
          width: '60px',
          height: '3px',
          backgroundColor: 'var(--accent-gold)',
          margin: '0 auto 1.5rem auto',
          borderRadius: '2px'
        }}></div>
        <p className="partners-subtitle">
          En esta sección podrá encontrar los enlaces a los portales web de diferentes entidades del sector público, que son relevantes para la gestión de trámites legales.
        </p>

        <div className="partners-carousel-container">
          <div className="partners-track">
            {doubledPartners.map((partner, index) => (
              <a 
                href={partner.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                key={`${partner.id}-${index}`}
                className="partner-logo-wrapper"
                title={`Visitar ${partner.name}`}
              >
                <img src={partner.logo} alt={partner.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
