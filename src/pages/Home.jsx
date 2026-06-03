import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import Contact from '../components/Contact';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Un pequeño timeout para asegurar que los componentes estén montados
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <AboutUs />
      <Stats />
      <Services />
      <Testimonials />
      <Partners />
      <Contact />
    </main>
  );
};

export default Home;
