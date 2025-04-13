import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import CounterSection from './components/CounterSection';
import ProcessSection from './components/ProcessSection';

const Home = () => {
  return (
    <>
      <div className="cursor"></div>
      <div className="cursor2"></div>
      <HeroSection />
      <AboutSection/>
      <ServicesSection />
      <CounterSection />
      <ProcessSection />
    </>
  );
};

export default Home;
