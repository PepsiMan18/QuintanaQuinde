import React from 'react';
import cliente1 from '../assets/cliente1.jpeg';
import cliente2 from '../assets/cliente2.png';
import cliente3 from '../assets/cliente3.png';
import cliente4 from '../assets/cliente4.png';
import cliente5 from '../assets/Cliente5.PNG';
import cliente6 from '../assets/Cliente6.png';
import cliente7 from '../assets/cliente7.png';

const partnersData = [
  { id: 1, name: "ViguDent", logo: cliente1 },
  { id: 2, name: "Bro Burger", logo: cliente2 },
  { id: 3, name: "INDECOR", logo: cliente3 },
  { id: 4, name: "Aletse Accounting", logo: cliente4 },
  { id: 5, name: "Cliente 5", logo: cliente5 },
  { id: 6, name: "Cliente 6", logo: cliente6 },
  { id: 7, name: "Cliente 7", logo: cliente7 }
];

const Partners = () => {
  // Duplicamos los elementos para generar un bucle infinito continuo
  const doubledPartners = [...partnersData, ...partnersData, ...partnersData];

  return (
    <section className="partners-section">
      <div className="container">
        <h2 className="partners-title">Nuestros Clientes</h2>
        <div style={{
          width: '60px',
          height: '3px',
          backgroundColor: 'var(--accent-gold)',
          margin: '0 auto 1.5rem auto',
          borderRadius: '2px'
        }}></div>
        <p className="partners-subtitle">
          Empresas y organizaciones que confían en nuestra firma para recibir asesoría legal de excelencia y soluciones estratégicas efectivas.
        </p>

        <div className="partners-carousel-container">
          <div className="partners-track">
            {doubledPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="partner-logo-wrapper"
                title={partner.name}
              >
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
