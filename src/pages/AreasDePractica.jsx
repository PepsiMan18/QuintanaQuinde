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
import imgOficialCumplimiento from '../assets/oficialdecum2.jpeg';

const practices = [
  {
    id: 'corporativo',
    title: 'Derecho Corporativo y Empresarial',
    image: imgCorporativo,
    description: 'Brindamos asesoría en práctica corporativa general y gestión empresarial, incluyendo estructuración de negocios, reorganizaciones empresariales, gobierno corporativo, contratos comerciales y acompañamiento legal permanente para empresas nacionales y extranjeras.'
  },
  {
    id: 'civil',
    title: 'Derecho Civil',
    image: imgCivil,
    description: 'Ofrecemos asesoría y patrocinio en materia civil, incluyendo elaboración y revisión de contratos, responsabilidad civil, obligaciones, derecho de propiedad, indemnizaciones y resolución de controversias civiles.'
  },
  {
    id: 'penal',
    title: 'Derecho Penal',
    image: imgPenal,
    description: 'Ejercemos defensa y representación legal en procesos penales, tanto para personas naturales como jurídicas, en delitos económicos, patrimoniales y corporativos, así como en investigaciones fiscales y procesos judiciales.'
  },
  {
    id: 'laboral',
    title: 'Derecho Laboral',
    image: imgLaboral,
    description: 'Brindamos asesoría a empleadores y trabajadores en materia laboral, incluyendo contratación de personal, elaboración de políticas internas, desvinculaciones, negociación laboral, inspecciones de SUNAFIL y patrocinio en procesos judiciales laborales.'
  },
  {
    id: 'familiar',
    title: 'Derecho de Familia',
    image: imgFamiliar,
    description: 'Asesoramos en procesos de divorcio, tenencia, régimen de visitas, alimentos, sucesiones y otros asuntos vinculados al entorno familiar, procurando soluciones legales eficientes y orientadas a la protección de los derechos de nuestros clientes.'
  },
  {
    id: 'arbitraje',
    title: 'Arbitraje',
    image: imgArbitraje,
    description: 'Brindamos asesoría y patrocinio en procesos arbitrales nacionales e internacionales, representando a nuestros clientes en controversias comerciales, contractuales y societarias. Asimismo, participamos en etapas de negociación, conciliación y ejecución de laudos arbitrales, priorizando soluciones eficientes y estratégicas.'
  },
  {
    id: 'contrataciones',
    title: 'Contrataciones con el Estado',
    image: imgContrataciones,
    description: 'Ofrecemos asesoría integral en procedimientos de contratación pública, incluyendo participación en licitaciones y concursos públicos, ejecución contractual, resolución de controversias y defensa en procedimientos administrativos ante entidades del Estado y el Tribunal de Contrataciones del Estado.'
  },
  {
    id: 'administrativo',
    title: 'Derecho Administrativo',
    image: imgAdministrativo,
    description: 'Asesoramos a personas y empresas en procedimientos administrativos ante entidades públicas, procedimientos sancionadores, obtención de licencias, autorizaciones y permisos, así como en impugnaciones y recursos administrativos.'
  },
  {
    id: 'inmobiliario',
    title: 'Derecho Inmobiliario',
    image: imgInmobiliario,
    description: 'Ofrecemos asesoría legal en compraventa de inmuebles, saneamiento físico legal, arrendamientos, independizaciones, constitución de garantías y desarrollo de proyectos inmobiliarios.'
  },
  {
    id: 'marcario',
    title: 'Derecho Marcario',
    image: imgMarcario,
    description: 'Brindamos asesoría en registro, protección y defensa de marcas, nombres comerciales y demás signos distintivos ante las autoridades competentes, así como en oposición e infracción marcaria.'
  },
  {
    id: 'notarial',
    title: 'Derecho Notarial Registral',
    image: imgNotarial,
    description: 'Asesoramos en trámites notariales y registrales, incluyendo elaboración de escrituras públicas, constitución de garantías, sucesiones, poderes, rectificaciones y procedimientos ante SUNARP.'
  },
  {
    id: 'societario',
    title: 'Derecho Societario',
    image: imgSocietario,
    description: 'Brindamos asesoría en constitución de sociedades, acuerdos de accionistas, juntas generales, aumento y reducción de capital, reorganizaciones societarias, responsabilidad de directores y cumplimiento de obligaciones corporativas.'
  },
  {
    id: 'proteccion',
    title: 'Derecho de Protección del Consumidor',
    image: imgProteccion,
    description: 'Asesoramos a empresas en el cumplimiento de normas de protección al consumidor, atención de reclamos y defensa en procedimientos administrativos ante INDECOPI.'
  },
  {
    id: 'oficial-cumplimiento',
    title: 'Oficial de Cumplimiento',
    image: imgOficialCumplimiento,
    description: 'Implementamos y supervisamos modelos de prevención de delitos, gestión de riesgos normativos y cumplimiento de obligaciones legales para proteger a su organización de sanciones administrativas y penales.'
  },
  {
    id: 'cobranza',
    title: 'Recuperación de Carteras y Cobranza Judicial',
    image: imgRecuperacion,
    description: 'Ofrecemos servicios de recuperación de créditos y cobranza judicial y extrajudicial, diseñando estrategias eficientes para la recuperación de cartera morosa y representación en procesos ejecutivos y de obligación de dar suma de dinero.'
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
          <p className="fade-in" style={{ animationDelay: '0.2s', textAlign: 'center' }}>
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
              <p className="practice-services-text" style={{ textAlign: 'left', textWrap: 'pretty', fontSize: '1.1rem', color: '#4b5563', lineHeight: '1.8' }}>
                {practice.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreasDePractica;
