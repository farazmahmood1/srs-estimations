import React, { useState } from 'react';
import 'animate.css';
import './ProcessSection.css';

const ProcessSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState('');

  const handlePrev = () => {
    setSwipeDirection('left');
    setTimeout(() => {
      setCurrentStep((prevStep) => (prevStep > 0 ? prevStep - 1 : processSteps.length - 1));
      setSwipeDirection('');
    }, 300); // Duration of the swipe animation
  };

  const handleNext = () => {
    setSwipeDirection('right');
    setTimeout(() => {
      setCurrentStep((prevStep) => (prevStep < processSteps.length - 1 ? prevStep + 1 : 0));
      setSwipeDirection('');
    }, 300); // Duration of the swipe animation
  };

  return (
    <section className="process-section" id="process-sec">
      <div className="container space text-center">
        <div className="title-area mb-5">
          <div className="shadow-title">PROCESS</div>
          <span className="sub-title">
            <div className="icon-masking me-2">
              <span className="mask-icon" data-mask-src="/assets/img/theme-img/title_shape_2.svg"></span>
              <img src="/assets/img/theme-img/title_shape_2.svg" alt="decorative shape" />
            </div>
            WORK PROCESS
          </span>
          <h2 className="sec-title">Our <span className="text-theme">Process</span></h2>
          <p className="sec-description">Our methodical approach ensures accuracy and precision at every stage, providing comprehensive, dependable estimates and exceptional service.</p>
        </div>
        <div className="process-card-container">
          <div className="process-nav prev" onClick={handlePrev}>❮</div>
          <div className={`process-card p-4 shadow-sm rounded ${swipeDirection}`}>
            <div className="process-card_number">{processSteps[currentStep].number}</div>
            <div className="process-card_icon mb-3">
              <img src={`/assets/img/icon/${processSteps[currentStep].icon}`} alt={`${processSteps[currentStep].title} icon`} className="w-50"/>
            </div>
            <h3 className="box-title mb-3">{processSteps[currentStep].title}</h3>
            <p className="process-card_text">{processSteps[currentStep].text}</p>
          </div>
          <div className="process-nav next" onClick={handleNext}>❯</div>
        </div>
      </div>
    </section>
  );
};

const processSteps = [
  { number: '01', icon: 'process_1_1.svg', title: 'Project Assessment', text: 'We start by understanding your project requirements, scope, and goals to create a customized plan that aligns with your vision and budget.' },
  { number: '02', icon: 'process_1_2.svg', title: 'Detailed Analysis', text: 'Our experts conduct a thorough analysis of materials, labor, and resources needed, ensuring every aspect of the project is accounted for accurately.' },
  { number: '03', icon: 'process_1_3.svg', title: 'Cost Estimation', text: 'Using our precise estimation techniques, we provide a detailed financial blueprint that covers all costs, helping you stay within budget.' },
  { number: '04', icon: 'process_1_4.svg', title: 'Proposal & Bid Preparation', text: 'We compile a professional bid proposal, clearly presenting your project’s value and differentiating you as the top choice for success.' },
  { number: '05', icon: 'process_2_1.svg', title: 'Review & Feedback', text: 'Our team reviews all estimates and proposals for accuracy and clarity, ensuring we exceed your expectations and meet your standards.' },
  { number: '06', icon: 'process_2_2.svg', title: 'Continuous Support', text: 'Even after the estimate and proposal are delivered, we provide ongoing support to adapt to any project changes, ensuring a smooth execution.' },
];

export default ProcessSection;
