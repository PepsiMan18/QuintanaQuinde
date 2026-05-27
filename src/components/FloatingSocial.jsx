import React, { useState } from 'react';

const FloatingSocial = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="floating-social-container">
      <div className="floating-social-main">
        {/* Toggle button */}
        <button className={`floating-toggle-btn ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Social Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </button>

        {/* WhatsApp Flotante */}
        <a href="https://wa.me/51928144703" className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <svg viewBox="0 0 32 32" className="whatsapp-icon">
            <path d="M16.002 0c-8.837 0-16 7.163-16 16 0 2.823 0.738 5.474 2.051 7.785l-2.051 7.715 8.082-2.008c2.35 1.258 5.048 1.97 7.918 1.97 8.837 0 16-7.163 16-16s-7.163-16-16-16zM24.035 21.656c-0.344 0.965-1.953 1.836-3.152 2.039-0.812 0.137-1.895 0.25-5.465-1.23-4.281-1.781-7.051-6.156-7.266-6.441-0.215-0.285-1.734-2.309-1.734-4.414s1.109-3.137 1.496-3.543c0.387-0.406 0.836-0.508 1.113-0.508s0.559-0.008 0.816-0.008c0.258 0 0.605-0.098 0.945 0.723 0.344 0.824 1.18 2.883 1.285 3.098 0.105 0.215 0.172 0.469 0.043 0.723-0.129 0.254-0.191 0.414-0.387 0.648-0.191 0.23-0.406 0.496-0.578 0.684-0.195 0.215-0.406 0.445-0.172 0.848 0.23 0.406 1.023 1.703 2.195 2.746 1.516 1.348 2.766 1.766 3.176 1.957s0.645 0.152 0.887-0.078c0.238-0.23 1.023-1.191 1.301-1.602 0.277-0.41 0.555-0.344 0.941-0.195s2.449 1.152 2.867 1.367c0.422 0.215 0.703 0.328 0.805 0.508 0.105 0.18 0.105 1.031-0.238 1.996z" fill="#fff"></path>
          </svg>
        </a>
      </div>

      {/* Sub menu */}
      <div className={`floating-social-menu ${isOpen ? 'active' : ''}`}>
        <a href="https://www.facebook.com/profile.php?id=61560288190019" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="floating-social-item fb">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
        </a>
        <a href="https://www.instagram.com/quintanaquinde/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="floating-social-item ig">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
      </div>
    </div>
  );
};

export default FloatingSocial;
