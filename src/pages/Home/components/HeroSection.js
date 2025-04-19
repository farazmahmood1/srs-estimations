import React from "react";
import "animate.css";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div
      className="th-hero-wrapper hero-4"
      id="hero"
      style={{
        backgroundImage: "url(assets/img/DTechKrew/BGs/hero-123.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-content">
        <div className="hero-box animate__animated animate__fadeInLeft">
          <div className="hero-text-left">
            <div className="hero-style4">
              <span className="hero-subtitle">
                Welcome to Superior Estimates
              </span>
              <h1 className="hero-title">Transforming Plans into Reality</h1>
              <p className="hero-text">
                Your trusted partner for comprehensive and perfect estimates.
                Superior Estimates combines accuracy with excellence, offering
                top-tier services to turn your challenges into opportunities and
                vision into reality.
              </p>
              <div className="btn-group" >
                <a
                  href="https://api.whatsapp.com/send/?phone=16142706554&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="th-btn"
                  style={{borderRadius:"25px !important"}}
                >
                  Talk to Experts<i className="call-btn"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-image animate__animated animate__fadeInRight">
          <img
            src="assets/img/DTechKrew/BGs/hero-123.jpg"
            alt="Hero Background"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
