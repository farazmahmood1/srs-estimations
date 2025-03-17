import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { servicesData } from './components/servicesData';
import './components/styles.css';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleLearnMore = (service) => {
    setSelectedService(service);
  };

  const handleCloseDetails = () => {
    setSelectedService(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleCloseDetails();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="services-page">
      <div className="container">
        <div className="breadcrumb-wrapper">
          <div className="container">
            <div className="breadcrumb-content">
              <h1 className="breadcrumb-title">Services</h1>
              <ul className="breadcrumb-menu">
                <li><a href="/">Superior Estimation</a></li>
                <li>Services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="space" id="service-sec">
        <div className="container">
          {servicesData.map((section, index) => (
            <div key={index} className="service-section">
              <h2 className="section-title">{section.category}</h2>
              <div className="service-board">
                {section.services.map((service, idx) => (
                  <div key={idx} className="service-card">
                    <div className="service-icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <button className="service-link" onClick={() => handleLearnMore(service)}>Learn More</button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="position-relative space">
        <div className="th-bg-img">
          <img src="assets/img/DTechKrew/BGs/bg_overlay_1.png" alt="overlay" />
        </div>
        <div className="container z-index-common">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-9 text-center">
              <div className="title-area mb-35">
                <span className="sub-title">
                  <div className="icon-masking me-2">
                    <span className="mask-icon"><img src="assets/img/theme-img/title_shape_2.svg" alt="shape" /></span>
                  </div>
                  CONTACT US
                </span>
                <h2 className="sec-title text-white">Need Precision Construction Estimation for <span className="text-theme fw-normal">Your Project?</span></h2>
              </div>
              <a href="https://api.whatsapp.com/send/?phone=923087625314&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="th-btn style3">Get In Touch</a>
            </div>
          </div>
        </div>
      </section>

      <div className="scroll-top">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{ transition: 'stroke-dashoffset 10ms linear 0s', strokeDasharray: '307.919, 307.919', strokeDashoffset: '307.919' }}></path>
        </svg>
      </div>

      {selectedService && (
        <div className="service-details-overlay" onClick={handleCloseDetails}>
          <div className="service-details-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseDetails}>
              <FaTimes />
            </button>
            <div className="service-details-icon">{selectedService.icon}</div>
            <h2>{selectedService.title}</h2>
            <p>{selectedService.text}</p>
            <div className="service-details-description">
              <h3>Components</h3>
              <p>{selectedService.components}</p>
              <h3>Process</h3>
              <ol>
                {selectedService.process.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
              <h3>Implementations</h3>
              <ul>
                {selectedService.examples.map((example, index) => (
                  <li key={index}>{example}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
