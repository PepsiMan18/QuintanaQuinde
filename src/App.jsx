import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingSocial from './components/FloatingSocial';
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
        
        {/* Redes Sociales Flotantes */}
        <FloatingSocial />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
