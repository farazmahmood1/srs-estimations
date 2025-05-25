import React from 'react';

const TermsAndConditions = () => {
  return (
    <div>
      {/* Breadcrumb Section */}
      <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg">
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Privacy Policy</h1>
            <ul className="breadcumb-menu">
              <li><a href="/">Home</a></li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <div className="space">
        <div className="container">
          <div className="row gy-4">
            <div className="col-12">
              <section className="policy-section">
                <h2>Terms & Conditions</h2>
                <p>
                  Welcome to Superior Estimates Architectural Designs (SEADS). These Terms & Conditions govern your use of our cost estimation services. By engaging with us, you agree to the following terms:
                </p>
                <p>
                  Here is Superior Estimates Architectural Designs (SEADS). These Terms & Conditions apply to the use of our services for cost estimation. By getting in touch with us, you accept the following terms:
                </p>

                <ol className="policy-list">
                  <li>
                    <strong>Service Agreement</strong>
                    <p>
                      SEADS offers professional cost estimating, takeoff, and design services for commercial, industrial, and institutional jobs.
                      Turnaround periods vary from 2 to 4 business days depending on the complexity and scope of the project. An anticipated delivery date will be advised after quote approval and payment.
                      Scope changes once a project has commenced may lead to revisions in delivery dates and/or additional charges.
                    </p>
                  </li>

                  <li>
                    <strong>Payment Terms</strong>
                    <p>
                      Payments must be made in full before the commencement of any work. Upon reviewing your plans, a formal quote and invoice will be issued.
                      Payments are accepted through secure channels such as QuickBooks Online Payments, PayPal, and major credit/debit cards.
                      No work will commence without confirmed payment.
                    </p>
                  </li>

                  <li>
                    <strong>Refund & Cancellation Policy</strong>
                    <p>
                      If the client decides to cancel the project after it has been initiated, a 50% refund will be issued.
                      After this point, no refunds will be given because resources are allocated immediately and work starts right away.
                      Additional expenses may apply if project plans are modified during the course of the work, depending on the scope of the changes.
                    </p>
                  </li>

                  <li>
                    <strong>Confidentiality & Non-Disclosure</strong>
                    <p>
                      All client plans, project details, and company information are treated with strict confidentiality.
                      SEADS will not share, reuse, or resell any of your estimate or project details with third parties.
                      SEADS is willing to sign a Mutual Non-Disclosure Agreement (NDA), if required.
                    </p>
                  </li>

                  <li>
                    <strong>Estimate Accuracy</strong>
                    <p>
                      Our estimates are typically accurate up to 97%, based on complete documentation.
                      They are created using real-time data, including regional material and labor costs, reflecting current industry standards. However, due to market price fluctuations, estimates are for guidance only and should not be considered fixed prices.
                    </p>
                  </li>

                  <li>
                    <strong>Incomplete or Preliminary Drawings</strong>
                    <p>
                      We can work with schematic, conceptual, or partially completed drawings, clearly marking all assumptions and exclusions.
                      Tentative estimates are suitable for budgeting and early-stage planning—not for final bidding.
                    </p>
                  </li>

                  <li>
                    <strong>Intellectual Property</strong>
                    <p>
                      All deliverables provided by SEADS are the intellectual property of SEADS until full payment is received.
                      The client receives usage rights only for the specific project listed on the invoice.
                      Copying, reselling, or using deliverables on other projects is strictly prohibited without written permission.
                    </p>
                  </li>

                  <li>
                    <strong>Software & Tools</strong>
                    <p>
                      We use industry-standard estimating and takeoff platforms such as Bluebeam, PlanSwift, and CostX to ensure precision, clarity, and compatibility with your workflows.
                    </p>
                  </li>

                  <li>
                    <strong>Revisions Policy</strong>
                    <p>
                      Minor revisions involving quantifiable errors or clarifications are free if requested within 5 business days of delivery.
                      Major changes (e.g., plan changes, scope additions) may require a new quote or revision fee.
                    </p>
                  </li>

                  <li>
                    <strong>Limitation of Liability</strong>
                    <p>
                      SEADS shall not be held liable for any direct, indirect losses, missed bids, or consequential damages arising from the use of our estimates.
                      Clients are expected to review all estimates before submission and ensure that final pricing aligns with actual quotes from vendors and subcontractors.
                    </p>
                  </li>
                </ol>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;