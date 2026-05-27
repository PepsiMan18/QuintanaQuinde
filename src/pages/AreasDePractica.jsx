import React, { useEffect } from 'react';
import imgCorporativo from '../assets/derechocorporativo.jpg';
import imgCivil from '../assets/derechocivil1.jpg';
import imgPenal from '../assets/derechopenal.jpg';
import imgLaboral from '../assets/derecholaboral.jpg';
import imgFamiliar from '../assets/derechofamiliar.jpg';
import imgArbitraje from '../assets/arbitraje.png';
import imgContrataciones from '../assets/contrataciones.jpg';
import imgAdministrativo from '../assets/derechoadministrativo.jpg';
import imgInmobiliario from '../assets/derechoinmobiliario.jpg';
import imgMarcario from '../assets/derechomarcario.jpg';
import imgNotarial from '../assets/derechonotarial.jpg';
import imgProteccion from '../assets/derechoproteccion.jpg';
import imgSocietario from '../assets/derechosocietario.jpg';
import imgRecuperacion from '../assets/recuperacioncartera.jpg';

const practices = [
  {
    id: 'corporativo',
    title: 'Derecho Corporativo y Empresarial',
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
  },
  {
    id: 'familiar',
    title: 'Derecho de Familia',
    image: imgFamiliar,
    services: [
      'Procesos de divorcio por mutuo acuerdo y causal.',
      'Pensión de alimentos y régimen de visitas.',
      'Tenencia y custodia de menores.',
      'Liquidación de sociedad de gananciales.',
      'Reconocimiento y filiación.'
    ]
  },
  {
    id: 'arbitraje',
    title: 'Arbitraje',
    image: imgArbitraje,
    services: [
      'Representación en procesos arbitrales institucionales y ad hoc.',
      'Resolución alternativa de disputas.',
      'Ejecución y anulación de laudos arbitrales.',
      'Asesoría en redacción de convenios arbitrales.'
    ]
  },
  {
    id: 'contrataciones',
    title: 'Contrataciones con el Estado',
    image: imgContrataciones,
    services: [
      'Asesoría integral en procesos de selección.',
      'Elaboración y revisión de propuestas técnicas y económicas.',
      'Recursos de apelación ante el Tribunal de Contrataciones.',
      'Solución de controversias durante la ejecución contractual.'
    ]
  },
  {
    id: 'administrativo',
    title: 'Derecho Administrativo',
    image: imgAdministrativo,
    services: [
      'Procedimientos sancionadores.',
      'Obtención de licencias y permisos.',
      'Defensa ante entidades públicas y municipales.',
      'Recursos administrativos e impugnaciones.'
    ]
  },
  {
    id: 'inmobiliario',
    title: 'Derecho Inmobiliario y de Construcción',
    image: imgInmobiliario,
    services: [
      'Saneamiento físico legal de predios.',
      'Estudio de títulos y estructuración de proyectos inmobiliarios.',
      'Contratos de obra y supervisión.',
      'Resolución de controversias de construcción.'
    ]
  },
  {
    id: 'marcario',
    title: 'Derecho Marcario y Propiedad Intelectual',
    image: imgMarcario,
    services: [
      'Registro de marcas, patentes y derechos de autor.',
      'Oposiciones y acciones por infracción marcaria.',
      'Renovaciones y mantenimiento de registros.',
      'Asesoría en protección de activos intangibles.'
    ]
  },
  {
    id: 'notarial',
    title: 'Derecho Notarial y Registral',
    image: imgNotarial,
    services: [
      'Asesoría en levantamiento de observaciones registrales.',
      'Inscripción de actos y contratos en Registros Públicos.',
      'Independizaciones y declaratorias de fábrica.',
      'Trámites notariales diversos.'
    ]
  },
  {
    id: 'societario',
    title: 'Derecho Societario',
    image: imgSocietario,
    services: [
      'Constitución y estructuración de sociedades.',
      'Aumentos y reducciones de capital.',
      'Elaboración de actas y actualización de libros societarios.',
      'Asesoría a directorios y juntas generales de accionistas.'
    ]
  },
  {
    id: 'proteccion',
    title: 'Derecho de Protección al Consumidor',
    image: imgProteccion,
    services: [
      'Defensa ante procedimientos de INDECOPI.',
      'Asesoría preventiva en publicidad comercial.',
      'Libro de reclamaciones y atención de quejas.',
      'Políticas de atención al cliente.'
    ]
  },
  {
    id: 'cobranza',
    title: 'Recuperación de Cartera y Cobranza Judicial',
    image: imgRecuperacion,
    services: [
      'Cobranza extrajudicial y persuasiva.',
      'Procesos de ejecución de garantías.',
      'Medidas cautelares (embargos, secuestros).',
      'Gestión integral de morosidad.'
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
              <p className="practice-services-text" style={{ textAlign: 'justify', fontSize: '1.1rem', color: '#4b5563', lineHeight: '1.8' }}>
                {practice.services.join(' ')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreasDePractica;
