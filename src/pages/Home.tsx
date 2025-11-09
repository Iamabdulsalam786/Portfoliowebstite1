import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Portfolio from '../components/sections/Portfolio';
import About from '../components/sections/About';
import Pricing from '../components/sections/Pricing';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

const Home: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    const targetId = state?.scrollTo;

    if (targetId) {
      const scrollToTarget = () => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };

      // give the DOM a tick to render before scrolling
      const timeout = setTimeout(scrollToTarget, 120);

      navigate(location.pathname, { replace: true, state: {} });

      return () => clearTimeout(timeout);
    }

    return undefined;
  }, [location, navigate]);

  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Pricing />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
