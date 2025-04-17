import React from 'react';
import 'animate.css';
import './ServicesSection.css';

const services = [
  { icon: "assets/img/icon/quantity.png", title: "Quantity Takeoff", description: "Ensures accurate cost estimation by measuring required goods and resources, critical for budgeting and effective project execution in construction." },
  { icon: "assets/img/icon/materials.png", title: "Material Estimates", description: "Provides a comprehensive material list to ensure effective resource allocation and budgeting, aiding in efficient project execution." },
  { icon: "assets/img/icon/budget.png", title: "Cost Estimates", description: "Our cost assessment serves as a financial blueprint, ensuring resources are used wisely and budgets stay on track." },
  { icon: "assets/img/icon/proposal.png", title: "Bid Proposals", description: "Crafts a compelling bid proposal with clarity and precision, distinguishing your offer from competitors." },
  { icon: "assets/img/icon/quotation.png", title: "RFQS", description: "Offering RFQS with our expertise, fulfilling unique requirements to secure preferred partner status." },
  { icon: "assets/img/icon/blueprint.png", title: "Architectural Designing", description: "Combining functionality with aesthetics, our architectural designs transform ideas into inspiring, lasting structures." }
];

const ServicesSection = () => {
  return (
    <section className="bg-top-center z-index-common space-top animate__animated animate__fadeIn" style={{ padding: "230px 0px 100px 0px" }} id="service-sec">
      <div className="container">
        <div className="row justify-content-lg-between justify-content-center align-items-center">
          <div className="col-lg-6 col-sm-9 pe-xl-5">
            <div className="title-area text-center text-lg-start">
              <div className="shadow-title color2">SERVICES</div>
              <span className="sub-title" style={{justifyContent:"flex-start"}}>WHAT WE DO</span>
              <h2 className="sec-title">We Provide Exclusive Service For <span className="text-theme">Your Business</span></h2>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 animate__animated animate__zoomIn" key={index}>
              <div className="service-grid">
                <div className="service-grid_icon">
                  <img src={service.icon} alt="Icon" />
                </div>
                <div className="service-grid_content mt-1">
                  <h3 className="box-title" style={{fontSize:"16px"}}><a href="#">{service.title}</a></h3>
                  <p className="service-grid_text" style={{fontSize:"14px"}}>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
