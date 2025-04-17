import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import CounterSection from './components/CounterSection';
import ProcessSection from './components/ProcessSection';
import Reviews from './components/Reviews';

const Home = () => {
  return (
    <>
      {/* <div className="cursor"></div>
      <div className="cursor2"></div> */}
      <HeroSection />
      <AboutSection/>
      <ServicesSection />
      <CounterSection />
      <ProcessSection />
      <Reviews/>
    </>
  );
};

export default Home;
