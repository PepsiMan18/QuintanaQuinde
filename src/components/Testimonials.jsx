import React, { useEffect, useRef, useState } from 'react';

const testimonialsData = [
  {
    id: 1,
    name: "Carlos Mendoza",
    role: "Empresario",
    text: "Había perdido la esperanza con un litigio comercial que llevaba años estancado. El equipo de Quintana & Quinde no solo me habló con total franqueza desde el día 1, sino que resolvieron a mi favor en meses lo que otros no pudieron en años.",
    rating: 5,
    delay: "0.1s"
  },
  {
    id: 2,
    name: "María Elena Rojas",
    role: "Madre de familia",
    text: "Enfrentar un proceso de pensión de alimentos es desgastante. Ellos me dieron la tranquilidad que necesitaba. Fueron rápidos, súper profesionales y me explicaron cada paso sin palabras enredadas. Totalmente recomendados.",
    rating: 5,
    delay: "0.3s"
  },
  {
    id: 3,
    name: "Javier Villanueva",
    role: "Gerente de Operaciones",
    text: "Teníamos un problema laboral complejo en la empresa que amenazaba nuestra estabilidad. La estrategia que diseñaron fue impecable y nos ahorró miles de soles en posibles multas. Da gusto trabajar con abogados que realmente saben lo que hacen.",
    rating: 5,
    delay: "0.5s"
  }
];

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.disconnect();
    };
  }, []);

  return (
    <section className={`testimonials-section ${isVisible ? 'is-visible' : ''}`} ref={sectionRef}>
      <div className="container">

        
        <div className="testimonials-grid">
          {testimonialsData.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="testimonial-card fade-in"
              style={{ animationDelay: testimonial.delay }}
            >
              <div className="quote-icon">❝</div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
                <div className="stars">
                  {"★".repeat(testimonial.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
