import React from 'react';
import './WhyUs.css';
import { FaUsers, FaHeadset, FaStar, FaShippingFast } from 'react-icons/fa';

const WhyUs = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Column */}
        <div className="col-md-6">
          <p className="text-info fw-bold">SOME FACTS</p>
          <h2 className="fw-bold mb-3">#1 Place To Manage All Of Your Shipments</h2>
          <p className="text-muted">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
            Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
          </p>
          <div className="d-flex align-items-center mt-4">
            <div className="call-icon me-3">
              <FaHeadset size={30} color="white" />
            </div>
            <div>
              <p className="fw-bold mb-0">Call for any query!</p>
              <h5 className="text-danger fw-bold mb-0">+012 345 6789</h5>
            </div>
          </div>
        </div>

        {/* Right Column - Cards */}
        <div className="col-md-6 mt-5 mt-md-0">
          <div className="row g-3">
            <div className="col-6">
              <div className="fact-card bg-danger text-white text-center p-4">
                <FaUsers size={30} />
                <h3 className="fw-bold mt-2">1234</h3>
                <p className="mb-0">Happy Clients</p>
              </div>
            </div>
            <div className="col-6">
              <div className="fact-card bg-success text-white text-center p-4">
                <FaStar size={30} />
                <h3 className="fw-bold mt-2">1234</h3>
                <p className="mb-0">Customer Reviews</p>
              </div>
            </div>
            <div className="col-12">
              <div className="fact-card bg-info text-white text-center p-4">
                <FaShippingFast size={30} />
                <h3 className="fw-bold mt-2">1234</h3>
                <p className="mb-0">Complete Shipments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
