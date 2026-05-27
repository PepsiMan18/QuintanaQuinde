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

  const BriefcaseIcon = <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>;
  const ScaleIcon = <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22v-20"></path><path d="M12 2H22"></path><path d="M12 2H2"></path><path d="M18 2L20 8C20 10.2091 18.2091 12 16 12C13.7909 12 12 10.2091 12 8L14 2"></path><path d="M6 2L4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8L10 2"></path></svg>;
  const UsersIcon = <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
  const TrophyIcon = <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"></path></svg>;

  // Datos ajustados para el primer año de operaciones
  const statsData = [
    { label: 'Socios Comerciales', value: 15, suffix: '+', icon: BriefcaseIcon },
    { label: 'Casos Resueltos', value: 96, suffix: '%', icon: ScaleIcon },
    { label: 'Clientes Satisfechos', value: 85, suffix: '+', icon: UsersIcon },
    { label: 'Casos Ganados', value: 94, suffix: '%', icon: TrophyIcon },
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
