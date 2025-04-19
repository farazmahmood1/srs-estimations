import React from 'react';
import './WhyUs.css';
import { FaUsers, FaHeadset, FaStar, FaShippingFast } from 'react-icons/fa';

const WhyUs = () => {
  return (

    <div>

      <div className="container my-5">
        <div className="row justify-content-lg-between justify-content-center align-items-center">
          <div className="col-lg-6 col-sm-9 pe-xl-5" >
            <div className="title-area text-lg-start" style={{ margin: "0px", padding: "0px" }}>
              <span className="sub-title " style={{ justifyContent: "flex-start" }}>
                WORK TESTIMONIALS
              </span>
              <h2 className="sec-title">What our <span className="text-theme">Client</span> says</h2>
              <p className="sec-description">
                Our methodical approach ensures accuracy and precision at every stage, providing comprehensive, dependable estimates and exceptional service.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6">
            {/* <span className="sub-title" style={{ justifyContent: "flex-start" }}>WHAT US</span> */}
            <h2 className="fw-bold">Tempor erat elitr rebum at cli</h2>
            <p className="text-muted">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
              Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
            </p>
            <p className="text-muted">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
              Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
              Tempor erat elitr rebum at clita. Diam d
            </p>
            <div className="d-flex align-items-center mt-4">
              <div className="call-icon me-3">
                <FaHeadset size={30} color="white" />
              </div>
              <div>
                <p className="fw-bold mb-0">Call for any query!</p>
                <h5 className=" fw-bold mb-0" style={{ color: "#106ebe" }}>+012 345 6789</h5>
              </div>
            </div>
          </div>

          {/* Right Column - Cards */}
          <div className="col-md-6 mt-5 mt-md-0">
            <div className="row g-3">
              <div className="col-6">
                <div className="fact-card text-white text-center p-4" style={{ backgroundColor: "#a4bcf3" }}>
                  <FaUsers size={30} />
                  <h3 className="fw-bold mt-2">1234</h3>
                  <p className="mb-0">Happy Clients</p>
                </div>
              </div>
              <div className="col-6">
                <div className="fact-card text-white text-center p-4" style={{ backgroundColor: "#E1EAFF" }}>
                  <FaStar size={30} />
                  <h3 className="fw-bold mt-2">1234</h3>
                  <p className="mb-0">Customer Reviews</p>
                </div>
              </div>
              <div className="col-12">
                <div className="fact-card text-white text-center p-4" style={{ backgroundColor: "#a4bcf3" }}>
                  <FaShippingFast size={30} />
                  <h3 className="fw-bold mt-2">1234</h3>
                  <p className="mb-0">Complete Shipments</p>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>

      <section className="" style={{marginTop:"250px"}} id="contact-sec">
        <div className="container">
          <div className="cta-box">
            <div className="row">
              <div className="col-lg-5">
                <div className="cta-box_img"><img src="assets/img/gallery/customer_support.jpg" alt="Image" /></div>
              </div>
              <div className="col-lg-7">
                <div className="cta-box_content">
                  <div className="cta-box_icon"><img src="assets/img/icon/call_1.svg" alt="Icon" /></div>
                  <div className="title-area mb-35">
                    <div className="shadow-title">CONSULTATION</div><span className="sub-title">
                      <div className="icon-masking me-2"><span className="mask-icon" data-mask-src="assets/img/theme-img/title_shape_2.svg" /> </div>LET’S
                      CONSULTATION
                    </span>
                    <h2 className="sec-title">Let’s Talk About Business Solutions <span className="text-theme">With
                      Us</span></h2>
                  </div><a href="contact.html" className="th-btn">CONTACT US<i className="fa-solid fa-arrow-right ms-2" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>


  );
};

export default WhyUs;
