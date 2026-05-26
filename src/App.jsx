import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AreasDePractica from './pages/AreasDePractica';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/areas-de-practica" element={<AreasDePractica />} />
        </Routes>
        
        {/* WhatsApp Flotante */}
        <a href="https://wa.me/51928144703" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 32 32" className="whatsapp-icon">
            <path d="M16.002 0c-8.837 0-16 7.163-16 16 0 2.823 0.738 5.474 2.051 7.785l-2.051 7.715 8.082-2.008c2.35 1.258 5.048 1.97 7.918 1.97 8.837 0 16-7.163 16-16s-7.163-16-16-16zM24.035 21.656c-0.344 0.965-1.953 1.836-3.152 2.039-0.812 0.137-1.895 0.25-5.465-1.23-4.281-1.781-7.051-6.156-7.266-6.441-0.215-0.285-1.734-2.309-1.734-4.414s1.109-3.137 1.496-3.543c0.387-0.406 0.836-0.508 1.113-0.508s0.559-0.008 0.816-0.008c0.258 0 0.605-0.098 0.945 0.723 0.344 0.824 1.18 2.883 1.285 3.098 0.105 0.215 0.172 0.469 0.043 0.723-0.129 0.254-0.191 0.414-0.387 0.648-0.191 0.23-0.406 0.496-0.578 0.684-0.195 0.215-0.406 0.445-0.172 0.848 0.23 0.406 1.023 1.703 2.195 2.746 1.516 1.348 2.766 1.766 3.176 1.957s0.645 0.152 0.887-0.078c0.238-0.23 1.023-1.191 1.301-1.602 0.277-0.41 0.555-0.344 0.941-0.195s2.449 1.152 2.867 1.367c0.422 0.215 0.703 0.328 0.805 0.508 0.105 0.18 0.105 1.031-0.238 1.996z" fill="#fff"></path>
          </svg>
        </a>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
