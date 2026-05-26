import React, { useEffect } from 'react';
import imgCorporativo from '../assets/derechocorporativo.jpg';
import imgCivil from '../assets/derechocivil1.jpg';
import imgPenal from '../assets/derechopenal.jpg';
import imgLaboral from '../assets/derecholaboral.jpg';
import imgFamiliar from '../assets/derechofamiliar.jpg';

const practices = [
  {
    id: 'corporativo',
    title: 'Derecho Corporativo',
    image: imgCorporativo,
    services: [
      'Contratos.',
      'Constitución, disolución y liquidación de empresas.',
      'Fusiones y escisiones.',
      'Mercado de capitales e inversiones.',
      'Reorganización empresarial.',
      'Derecho concursal.',
      'Quiebra de personas naturales y jurídicas.',
      'Compra de empresas extranjeras.',
      'Competencia desleal.'
    ]
  },
  {
    id: 'civil',
    title: 'Derecho Civil',
    image: imgCivil,
    services: [
      'Contratos civiles de compraventa, arrendamiento, etc.',
      'Resolución de disputas contractuales.',
      'Indemnizaciones por daños y perjuicios.',
      'Sucesiones, testamentos y herencias.',
      'Prescripción adquisitiva de dominio.'
    ]
  },
  {
    id: 'penal',
    title: 'Derecho Penal',
    image: imgPenal,
    services: [
      'Defensa técnica en investigaciones fiscales.',
      'Litigios penales y juicios orales.',
      'Delitos contra el patrimonio (estafa, apropiación ilícita).',
      'Delitos contra la administración pública.',
      'Asesoría preventiva para empresas (Compliance Penal).'
    ]
  },
  {
    id: 'laboral',
    title: 'Derecho Laboral',
    image: imgLaboral,
    services: [
      'Asesoría en contratación laboral.',
      'Auditorías laborales y prevención de contingencias.',
      'Acompañamiento en inspecciones de SUNAFIL.',
      'Procesos judiciales por despido o beneficios sociales.',
      'Negociaciones sindicales y pactos colectivos.'
    ]
  }
];

const AreasDePractica = () => {
  useEffect(() => {
    // Al entrar a la página, asegurar que estemos arriba
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="practice-areas-page">
      <div className="practice-hero">
        <div className="container">
          <h1 className="fade-in">Áreas de Práctica</h1>
          <p className="fade-in" style={{ animationDelay: '0.2s' }}>
            Brindamos soluciones legales estratégicas adaptadas a las necesidades específicas de cada cliente, garantizando seguridad y confianza en cada caso.
          </p>
        </div>
      </div>
      
      <div className="container practice-content">
        {practices.map((practice, index) => (
          <div className={`practice-row animate-on-scroll ${index % 2 !== 0 ? 'row-reverse' : ''}`} key={practice.id}>
            <div className="practice-image-col">
              <img src={practice.image} alt={practice.title} />
            </div>
            <div className="practice-text-col">
              <h2>{practice.title}</h2>
              <ul className="practice-services-list">
                {practice.services.map((item, i) => (
                  <li key={i}>
                    <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreasDePractica;
