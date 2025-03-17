import React, { useState, useEffect, useRef } from 'react';
import 'animate.css';
import './CounterSection.css';

const CounterSection = () => {
  const [counters, setCounters] = useState({ projects: 0, years: 0, clients: 0, efficiency: 0 });
  const [animate, setAnimate] = useState(false);
  const counterSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setAnimate(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (counterSectionRef.current) {
      observer.observe(counterSectionRef.current);
    }

    return () => {
      if (counterSectionRef.current) {
        observer.unobserve(counterSectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (animate) {
      const interval = setInterval(() => {
        setCounters((prev) => {
          const projects = prev.projects < 1100 ? prev.projects + 100 : 1150;
          const years = prev.years < 9 ? prev.years + 1 : 9;
          const clients = prev.clients < 500 ? prev.clients + 50 : 500;
          const efficiency = prev.efficiency < 98 ? prev.efficiency + 10 : 98;
          return { projects, years, clients, efficiency };
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [animate]);

  return (
    <div ref={counterSectionRef} className="bg-theme space-extra animate__animated animate__fadeIn" data-bg-src="assets/img/bg/counter_bg_1.png">
      <div className="container py-2">
        <div className="row gy-40 justify-content-between">
          <div className="col-6 col-lg-3">
            <div className={`counter-card ${animate ? 'animate__animated animate__fadeInUp' : ''}`}>
              <div className="counter-card_icon">
                <img src="assets/img/icon/counter_1_1.svg" alt="Icon" />
              </div>
              <div className="media-body">
                <h2 className="counter-card_number"><span className="counter-number">{counters.projects}</span>+</h2>
                <p className="counter-card_text">Projects Completed</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className={`counter-card ${animate ? 'animate__animated animate__fadeInUp' : ''}`} style={{ animationDelay: '0.1s' }}>
              <div className="counter-card_icon">
                <img src="assets/img/icon/counter_1_4.svg" alt="Icon" />
              </div>
              <div className="media-body">
                <h2 className="counter-card_number"><span className="counter-number">{counters.years}</span>+</h2>
                <p className="counter-card_text">Years of Experience</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className={`counter-card ${animate ? 'animate__animated animate__fadeInUp' : ''}`} style={{ animationDelay: '0.2s' }}>
              <div className="counter-card_icon">
                <img src="assets/img/icon/counter_1_2.svg" alt="Icon" />
              </div>
              <div className="media-body">
                <h2 className="counter-card_number"><span className="counter-number">{counters.clients}</span>+</h2>
                <p className="counter-card_text">Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className={`counter-card ${animate ? 'animate__animated animate__fadeInUp' : ''}`} style={{ animationDelay: '0.3s' }}>
              <div className="counter-card_icon">
                <img src="assets/img/icon/counter_1_3.svg" alt="Icon" />
              </div>
              <div className="media-body">
                <h2 className="counter-card_number"><span className="counter-number">{counters.efficiency}</span>%</h2>
                <p className="counter-card_text">Efficiency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
