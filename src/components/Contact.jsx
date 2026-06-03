import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: ''
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Número principal de WhatsApp del estudio
    const numeroWhatsApp = "51928144703";
    
    // Formatear el mensaje
    const textoMensaje = `¡Hola! Vengo de su página web y deseo hacer una consulta legal:\n\n*Nombre:* ${formData.nombre}\n*Correo:* ${formData.correo}\n*Teléfono:* ${formData.telefono}\n\n*Detalles de mi caso:*\n${formData.mensaje}`;
    
    // Crear el enlace de WhatsApp y abrirlo en una nueva pestaña
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoMensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contacto" className={`contact ${isVisible ? 'is-visible' : ''}`} ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Estamos aquí para ayudarte</h3>
            <p>Comunícate con nosotros para agendar una consulta y discutir tu caso legal.</p>
            
            <div className="contact-item">
              <div className="contact-item-icon" style={{animationDelay: '0.1s'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <p>Mza. H lote. 7 COO.<br/>San juan de miraflores Lima - Lima - Villa el salvador</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-item-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                <a href="tel:+51928144703" className="email-link" style={{ color: 'inherit', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                  +51 928 144 703
                </a>
                <a href="tel:+51906093447" className="email-link" style={{ color: 'inherit', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                  +51 906 093 447
                </a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-item-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gaquinde@quintanaquindeabogados.com" target="_blank" rel="noopener noreferrer" className="email-link" style={{ color: 'inherit', textDecoration: 'none' }}>
                  gaquinde@quintanaquindeabogados.com
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jquintana@quintanaquindeabogados.com" target="_blank" rel="noopener noreferrer" className="email-link" style={{ color: 'inherit', textDecoration: 'none' }}>
                  jquintana@quintanaquindeabogados.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nombre Completo</label>
                <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Tu nombre" required />
              </div>
              <div className="form-group">
                <label>Correo Electrónico</label>
                <input type="email" name="correo" value={formData.correo} onChange={handleChange} placeholder="tu@correo.com" required />
              </div>
              <div className="form-group">
                <label>Teléfono</label>
                <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Tu número de celular" required />
              </div>
              <div className="form-group">
                <label>Mensaje o Consulta</label>
                <textarea name="mensaje" rows="4" value={formData.mensaje} onChange={handleChange} placeholder="Describe brevemente tu caso..." required></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>Enviar Mensaje por WhatsApp</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
