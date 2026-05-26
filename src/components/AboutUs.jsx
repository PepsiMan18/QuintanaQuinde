import React, { useEffect, useRef, useState } from 'react';
import nosotrosImg from '../assets/nosotros.jpg';

const aboutData = [
  {
    title: "Estudio Jurídico Quintana & Quinde",
    text1: "Somos un estudio jurídico fundado sobre los principios de la justicia, la igualdad y la fuerza. Nuestro emblema, compuesto por la espada y la balanza, representa nuestra dedicación para proteger los derechos de nuestros clientes con firmeza, asegurando siempre que la justicia trate a todos con equidad.",
    text2: "Con años de experiencia en diversas áreas del derecho, nuestro equipo está preparado para brindarle la asesoría y representación legal de la más alta calidad, con un trato personalizado y transparente.",
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
  },
  {
    title: "¿Por qué debería elegirnos?",
    text1: "Cuando te enfrentas a un problema legal, lo último que necesitas son palabras técnicas que no entiendes, promesas vacías o abogados que desaparecen apenas reciben el primer pago. En Quintana & Quinde Abogados rompemos con el viejo modelo de la abogacía tradicional para ofrecerte lo que realmente importa: estrategia, transparencia absoluta y resultados.",
    text2: "No defendemos expedientes; defendemos a personas, familias y empresas que necesitan proteger lo que tanto esfuerzo les costó construir. Ya sea que estés protegiendo tu patrimonio, resolviendo un conflicto laboral o blindando tu negocio, aquí no encontrarás rodeos. Encontrarás un equipo de especialistas de élite que habla tu mismo idioma, que te dice la verdad desde la primera consulta y que diseña el camino legal exacto para ganar tu caso.",
    text3: "Tu tranquilidad no puede esperar a que el sistema judicial decida ser eficiente. Toma el control de la situación hoy mismo.",
    bgColor: "#2c3e50", // Un tono diferente de azul oscuro/gris
    textColor: "var(--bg-white)",
    accentColor: "#e67e22" // Un tono cobrizo/naranja para variar
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
                        if(isAnimating || idx === currentSlide) return;
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
