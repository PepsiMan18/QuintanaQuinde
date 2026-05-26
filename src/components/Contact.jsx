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
              <div className="contact-item-icon" style={{animationDelay: '0.1s'}}>📍</div>
              <div>
                <h4>Dirección</h4>
                <p>Mza. H lote. 7 COO.<br/>San juan de miraflores Lima - Lima - Villa el salvador</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-item-icon">📱</div>
              <div>
                <h4>Teléfono / WhatsApp</h4>
                <p>+51 928 144 703<br/>+51 906 093 447</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-item-icon">✉️</div>
              <div>
                <h4>Correo Electrónico</h4>
                <p>contacto@quintanayquinde.com</p>
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
