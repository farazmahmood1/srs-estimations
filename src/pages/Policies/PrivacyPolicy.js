import React from 'react';

const PrivacyPolicy = () => {
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
              <h2>PRIVACY POLICY</h2>

              <ol className="policy-list">
                <li>
                  <strong>What is the nature of the type of personal information that SAEDS collects among clients and website visitors?</strong>
                  <p>
                    SAEDS receives personal data, including name, email address, phone number, project detail, and payment details when you interact with our website or use our services.
                  </p>
                </li>

                <li>
                  <strong>When and under what circumstances is personal information collected?</strong>
                  <p>
                    Personal information is gathered in the case of submission of an inquiry, requesting a quote, website chat, and payment for services. It is only employed in order to give you true estimates and efficient utilization of projects.
                  </p>
                </li>

                <li>
                  <strong>What does SAEDS do with the information that it collects?</strong>
                  <p>
                    SAEDS utilizes the information collected to make reliable construction estimates, handle projects efficiently and communicate with the clients. We also benefit from this information in order to enhance our services and make sure your project is completed successfully.
                  </p>
                </li>

                <li>
                  <strong>Will my data be transmitted to any third persons or will it be used for marketing for that matter?</strong>
                  <p>
                    SAEDS does not provide to third parties for their marketing purposes information about you that identifies you personally. We respect your privacy and only share information where necessary in project execution or in laws.
                  </p>
                </li>

                <li>
                  <strong>What are the options under which I can access my personal data, make changes to it or request for deletion of my personal data that I have submitted?</strong>
                  <p>
                    You always may contact us to access, update, or delete your personal information. We are dedicated to making your data accurate and up to date.
                  </p>
                </li>

                <li>
                  <strong>Do we comply with the California Online Privacy Protection Act? How?</strong>
                  <p>
                    Yes, we are in compliance with California Online Privacy Protection Act (CalOPPA) because we have a transparent privacy policy and it supports the users’ data preferences, including Do Not Track signals.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;