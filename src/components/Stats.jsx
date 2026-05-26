import React, { useEffect, useRef, useState } from 'react';

const CountUp = ({ end, duration, isVisible, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutQuart effect for smooth ending
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return <span>{count}{suffix}</span>;
};

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Se activa cuando el 30% es visible
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

  // Datos ajustados para el primer año de operaciones
  const statsData = [
    { label: 'Socios Comerciales', value: 15, suffix: '+', icon: '💼' },
    { label: 'Casos Resueltos', value: 96, suffix: '%', icon: '⚖️' },
    { label: 'Clientes Satisfechos', value: 85, suffix: '+', icon: '👥' },
    { label: 'Casos Ganados', value: 94, suffix: '%', icon: '🏆' },
  ];

  return (
    <section className="stats" ref={sectionRef}>
      <div className="stats-overlay"></div>
      <div className="container stats-content">
        <h2 className="section-title">COMPROMETIDOS AL 100% CON NUESTROS CLIENTES</h2>
        <p className="stats-subtitle">
          Ante un conflicto legal, nuestro equipo le dará una solución integral y personalizada con estrategias que optimicen los procesos legales, administrativos y judiciales.
        </p>
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-icon">{stat.icon}</div>
              <h3>
                <CountUp end={stat.value} duration={2000} isVisible={isVisible} suffix={stat.suffix} />
              </h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
