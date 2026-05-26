import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import imgCivil from '../assets/derechocivil1.jpg';
import imgPenal from '../assets/derechopenal.jpg';
import imgLaboral from '../assets/derecholaboral.jpg';
import imgFamiliar from '../assets/derechofamiliar.jpg';
import imgCorporativo from '../assets/derechocorporativo.jpg';

const Services = () => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.style.scrollBehavior = 'smooth';
      carouselRef.current.scrollBy({ left: -350 });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.style.scrollBehavior = 'smooth';
      carouselRef.current.scrollBy({ left: 350 });
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeftPos(carouselRef.current.scrollLeft);
    carouselRef.current.style.scrollBehavior = 'auto'; // Movimiento instantáneo al arrastrar
    carouselRef.current.style.cursor = 'grabbing';
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault(); // Evitar seleccionar texto o imágenes
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Multiplicador de velocidad de arrastre
    carouselRef.current.scrollLeft = scrollLeftPos - walk;
  };

  const servicesData = [
    {
      title: 'Derecho Civil',
      image: imgCivil,
      icon: '📄'
    },
    {
      title: 'Derecho Penal',
      image: imgPenal,
      icon: '⚖️'
    },
    {
      title: 'Derecho Laboral',
      image: imgLaboral,
      icon: '🤝'
    },
    {
      title: 'Derecho de Familia',
      image: imgFamiliar,
      icon: '👨‍👩‍👧‍👦'
    },
    {
      title: 'Derecho Corporativo',
      image: imgCorporativo,
      icon: '🏢'
    }
  ];

  return (
    <section id="servicios" className="services-section">
      <div className="services-bg-text">práctica</div>
      <div className="container services-layout">
        <div className="services-info">
          <p className="services-subtitle">Servicios Principales</p>
          <h2 className="services-title">Diferentes casos,<br/>necesitan<br/>diferentes<br/>servicios</h2>
          <div className="services-nav">
            <button className="nav-btn" onClick={scrollLeft}>←</button>
            <button className="nav-btn" onClick={scrollRight}>→</button>
          </div>
        </div>
        <div className="services-carousel-container">
          <div 
            className="services-carousel" 
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {servicesData.map((service, index) => (
              <div 
                className="service-card-new" 
                key={index}
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="service-card-overlay"></div>
                <div className="service-icon-top">{service.icon}</div>
                <div className="service-card-content">
                  <h3>{service.title}</h3>
                  <Link to="/areas-de-practica" className="service-arrow-btn" style={{textDecoration: 'none', color: 'inherit'}}>
                    →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
