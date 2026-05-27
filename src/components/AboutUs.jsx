import React, { useEffect, useRef, useState } from 'react';
import nosotrosImg from '../assets/nosotros2.PNG';

const aboutData = [
  {
    title: "Quintana & Quinde Abogados",
    text1: "En Quintana&Quinde Abogados somos un estudio jurídico conformado por profesionales con sólida experiencia en asesoría legal corporativa, litigación judicial y solución estratégica de controversias. Brindamos servicios legales integrales y personalizados en diversas áreas del derecho, incluyendo derecho civil, penal, laboral, societario, corporativo, administrativo, inmobiliario, arbitraje y contrataciones con el Estado.",
    text2: "Nuestro enfoque se basa en ofrecer soluciones legales eficientes, preventivas y estratégicas, orientadas a la protección de los intereses patrimoniales, empresariales y personales de nuestros clientes, priorizando siempre un servicio de alta calidad, atención personalizada y acompañamiento oportuno en cada etapa del proceso.",
    bgColor: "var(--bg-white)",
    textColor: "var(--text-dark)",
    accentColor: "var(--accent-gold)"
  },
  {
    title: "Nuestra Misión",
    text1: "Brindar soluciones legales estratégicas y efectivas, asumiendo cada caso con el más alto nivel de compromiso, ética profesional y rigurosidad académica.",
    text2: "Nos enfocamos en prevenir contingencias y resolver conflictos de manera ágil, garantizando la tranquilidad y protección del patrimonio e intereses de nuestros clientes corporativos y particulares.",
    bgColor: "var(--primary-navy)",
    textColor: "var(--bg-white)",
    accentColor: "var(--accent-gold)"
  }
];

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Permite que se vuelva a animar
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % aboutData.length);
      setIsAnimating(false);
    }, 400); // 400ms es la duración del fade out
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + aboutData.length) % aboutData.length);
      setIsAnimating(false);
    }, 400);
  };

  const activeData = aboutData[currentSlide];

  return (
    <section
      id="nosotros"
      className={`about ${isVisible ? 'is-visible' : ''}`}
      ref={sectionRef}
    >
      <div className="container">
        <h2 className="section-title">Sobre Nosotros</h2>
        <div className="about-grid">
          <div className="about-image">
            <img src={nosotrosImg} alt="Equipo Quintana y Quinde" />
          </div>

          <div
            className="about-interactive-card"
            style={{
              backgroundColor: activeData.bgColor,
              color: activeData.textColor
            }}
          >
            <div className={`about-content-inner ${isAnimating ? 'fade-out' : 'fade-in-active'}`}>
              <h3 style={{ color: activeData.textColor }}>{activeData.title}</h3>
              <p>{activeData.text1}</p>
              <p>{activeData.text2}</p>
              {activeData.text3 && <p style={{ fontWeight: 600, marginTop: '1rem' }}>{activeData.text3}</p>}
            </div>

            <div className="about-controls">
              <div className="about-arrows">
                <button className="about-btn prev" onClick={prevSlide} style={{ color: activeData.textColor, borderColor: activeData.textColor }}>←</button>
                <button className="about-btn next" onClick={nextSlide} style={{ color: activeData.textColor, borderColor: activeData.textColor }}>→</button>
              </div>

              <div className="about-dots">
                {aboutData.map((_, idx) => (
                  <span
                    key={idx}
                    className={`dot ${idx === currentSlide ? 'active' : ''}`}
                    onClick={() => {
                      if (isAnimating || idx === currentSlide) return;
                      setIsAnimating(true);
                      setTimeout(() => {
                        setCurrentSlide(idx);
                        setIsAnimating(false);
                      }, 400);
                    }}
                    style={{
                      backgroundColor: idx === currentSlide ? activeData.accentColor : (activeData.textColor === 'var(--text-dark)' ? '#ccc' : '#555')
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
