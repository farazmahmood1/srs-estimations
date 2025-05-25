import React from 'react';

const Faq = () => {
  return (
    <div>
      {/* FAQ Section */}
      <div className="space">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">
              <div className="icon-masking me-2">
                <span className="mask-icon" data-mask-src="assets/img/theme-img/title_shape_2.svg" />
              </div>
              FAQ
            </span>
            <h2 className="sec-title">
              Got Questions?  <span className="text-theme">We Have Answers!</span>
            </h2>
          </div>
          <div className="row">
            {/* Left Column */}
            <div className="col-xl-6">
              <div className="accordion-area accordion" id="faqAccordion">
                {/* Question 1 */}
                <div className="accordion-card style2">
                  <div className="accordion-header" id="collapse-item-1">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1"
                      aria-expanded="false"
                      aria-controls="collapse-1"
                    >
                      What are the types of construction estimates that you make?
                    </button>
                  </div>
                  <div
                    id="collapse-1"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-1"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        We provide specific estimates for areas of CSI Divisions 03–33 including concrete and masonry to mechanical, electrical, plumbing (MEP), and finishes. Our commercial, industrial and institutional projects services are tuned for commercial, industrial, and institutional projects.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Question 2 */}
                <div className="accordion-card style2 active">
                  <div className="accordion-header" id="collapse-item-2">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-2"
                      aria-expanded="true"
                      aria-controls="collapse-2"
                    >
                      Which trades or divisions do you specialise in?
                    </button>
                  </div>
                  <div
                    id="collapse-2"
                    className="accordion-collapse collapse show"
                    aria-labelledby="collapse-item-2"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        We include all the key trades entering the construction: concrete, masonry, structural steel, drywall, HVAC, plumbing, electrical, roofing, earthwork, etc – conforming to CSI MasterFormat structuring.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Question 3 */}
                <div className="accordion-card style2">
                  <div className="accordion-header" id="collapse-item-3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-3"
                      aria-expanded="false"
                      aria-controls="collapse-3"
                    >
                      How does one come up with prices for each estimate?
                    </button>
                  </div>
                  <div
                    id="collapse-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-3"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        As for the pricing, we base it on the size of projects, complexity, and divisions. We use the current labor and material rates, regional cost databases, as well as history information to achieve pricing accuracy.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Question 4 */}
                <div className="accordion-card style2">
                  <div className="accordion-header" id="collapse-item-4">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-4"
                      aria-expanded="false"
                      aria-controls="collapse-4"
                    >

                      Will my estimate be shown to the other clients or my competitors?
                    </button>
                  </div>
                  <div
                    id="collapse-4"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-4"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Absolutely not. All the estimates we make are 100 confidential and custom-made for your unique project. We have never recycled or resold our work.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Question 5 */}
                <div className="accordion-card style2">
                  <div className="accordion-header" id="collapse-item-5">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-5"
                      aria-expanded="false"
                      aria-controls="collapse-5"
                    >Is it possible to give an estimate even when you do not posses comprehensive plans?
                    </button>
                  </div>
                  <div
                    id="collapse-5"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-5"
                    data-bs-parent="#faqAccordion2"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Yes. We are also able to develop preliminary or conceptual estimates using sketches or partial drawings, or a project narrative for early budgeting and planning purposes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-xl-6">
              <div className="accordion-area accordion" id="faqAccordion2">


                {/* Question 6 */}
                <div className="accordion-card style2">
                  <div className="accordion-header" id="collapse-item-6">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-6"
                      aria-expanded="false"
                      aria-controls="collapse-6"
                    >
                      What if the drawings are not finished or they are still in progress?
                    </button>
                  </div>
                  <div
                    id="collapse-6"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-6"
                    data-bs-parent="#faqAccordion2"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        We’re used to dealing with schematic or design development drawings and can issue a phased estimate. The absentees from any information will be highlighted, and reasonable assumptions will be properly mentioned.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Question 7 */}
                <div className="accordion-card style2">
                  <div className="accordion-header" id="collapse-item-7">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-7"
                      aria-expanded="false"
                      aria-controls="collapse-7"
                    >
                      How accurate are your estimates?
                    </button>
                  </div>
                  <div
                    id="collapse-7"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-7"
                    data-bs-parent="#faqAccordion2"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        In case full documentation is available, our estimates usually achieves 97% accuracy of the actual construction costs. This accuracy is stimulated by the detailed amount takeoffs, which are current pricing and trade-specific know-how.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Question 8 */}
                <div className="accordion-card style2">
                  <div className="accordion-header" id="collapse-item-8">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-8"
                      aria-expanded="false"
                      aria-controls="collapse-8"
                    >
                      What are the procedures of usage of your services?
                    </button>
                  </div>
                  <div
                    id="collapse-8"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-8"
                    data-bs-parent="#faqAccordion2"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        It is as easy as asking for a quote by our website address or contacting us directly. We’ll look through your project documents and kick-start the estimating process immediately.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Question 9 */}
                <div className="accordion-card style2">
                  <div className="accordion-header" id="collapse-item-9">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-9"
                      aria-expanded="false"
                      aria-controls="collapse-9"
                    >
                      Do you offer services nationwide?
                    </button>
                  </div>
                  <div
                    id="collapse-9"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-9"
                    data-bs-parent="#faqAccordion2"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Yes. We work with contractors and developers, throughout the U.S., including regionally-adjusted pricing and local code compliance to every estimate.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Question 10 */}
                <div className="accordion-card style2">
                  <div className="accordion-header" id="collapse-item-10">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-10"
                      aria-expanded="false"
                      aria-controls="collapse-10"
                    >
                      What kind of estimation software or tools do you use?
                    </button>
                  </div>
                  <div
                    id="collapse-10"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-10"
                    data-bs-parent="#faqAccordion2"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        We employ leading industry tools such as Bluebeam, PlanSwift, and CostX to do precise quantity takeoffs and cost estimate. RS refers to, Accubid, National Data Base and Vendor prices also help to do so. These platforms allow us to provide the detailed, organized, and accurate quotes that can be tuned to meet your project requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;