import React from 'react';
import Breadcumb from './components/Breadcumb';
import TestimonialsSection from './components/TestimonialsSection';
import './components/styles.css';
import { Slide } from 'react-awesome-reveal';
import './HireUs.css';
import testimonials from './components/testimonials_data';

const HireUs = () => {
  return (
    <div className="hire-us">
      <Breadcumb title="Hire Us" />
      <section className="hero">
        <div className="container">
          <div className="fade-in">
            <p>
              At Superior Estimates, we turn blueprints into actionable insights, delivering precision in every detail of construction estimation. From quantity takeoffs to detailed bid forms, our services are designed to build the foundation for your project's success.
            </p>
            <p>
              Our team comprises industry experts skilled in advanced estimation techniques, delivering results that align with your project’s goals and budget. We are dedicated to providing high-quality, customized solutions to meet your specific needs in construction estimation, architectural design, and project planning.
            </p>
            <h2>How We Add Value</h2>
            <ul className="justify-text">
              <li>Unmatched expertise in construction estimation and planning.</li>
              <li>Precise material and labor cost projections.</li>
              <li>Customized architectural and structural designs for practical and aesthetic appeal.</li>
              <li>Efficient, transparent, and streamlined bidding process.</li>
              <li>End-to-end support from planning through to execution.</li>
            </ul>
            <p>
              Our services cater to various segments, offering specific solutions to drive efficiency and accuracy in construction planning:
            </p>
            <ul className="justify-text">
              <li>Commercial: Tailored estimates for large-scale commercial projects to control costs and improve resource management.</li>
              <li>Residential: Detailed material lists and cost estimation to ensure quality and budget compliance in residential projects.</li>
              <li>Infrastructure: Specialized RFQs and bid forms for complex infrastructure projects, ensuring regulatory and compliance alignment.</li>
              <li>Industrial: Custom estimates for industrial facilities to optimize both time and material resources effectively.</li>
            </ul>
          </div>
          <div className="bounce-in">
            <h2>Our Approach</h2>
            <p>We follow a meticulous workflow to ensure precision and success:</p>
            <ol>
              <li>
                <strong>Project Review:</strong> We start by assessing your blueprints and project specifications, enabling us to tailor our services precisely to your needs.
              </li>
              <li>
                <strong>Estimation Development:</strong> Our team then develops accurate, comprehensive estimates covering all essential materials and labor requirements.
              </li>
              <li>
                <strong>Documentation and Reporting:</strong> We compile our findings into clear, detailed reports that facilitate effective project management and budgeting.
              </li>
              <li>
                <strong>Ongoing Support:</strong> Our support extends throughout the project, ensuring our solutions remain aligned with evolving needs and standards.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <Slide>
            <h2>What Our Clients Say</h2>
            <TestimonialsSection testimonials={testimonials} />
          </Slide>
        </div>
      </section>
    </div>
  );
};

export default HireUs;
