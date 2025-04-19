import React from 'react';
import './OurTeam.css';

const teamMembers = [
  { id: '01', name: 'Muhammad Ahtsham Haider', role: 'Co-Founder', img: 'assets/img/team/Co-founder_-_Muhammad_Ahtsham_Azam.png' },
  { id: '02', name: 'Cody Martinez', role: 'Sales Manager', img: 'assets/img/team/Business_development_manager-Cody_Martinez.png' },
  { id: '03', name: 'Jia Brian', role: 'Marketing Head', img: 'assets/img/team/Marketing_head_-_Jia_Brian.png' },
  { id: '04', name: 'Anna Amelia', role: 'Operational Manager', img: 'assets/img/DTechKrew/Team/oprmngr.jpg' },
  { id: '05', name: 'Norah Smith', role: 'Recruitment Manager', img: 'assets/img/team/Norah Smith - Recruitment_manager-.png' },
  { id: '06', name: 'James Stephen', role: 'Legal Advisor', img: 'assets/img/team/Legal_Advisor-_James_Stephen-.png' },
  // { id: '07', name: 'Ken Mark', role: 'Co-Founder', img: 'assets/img/team/Ken Mark -Bussiness Developer.png' },
];

const OurTeam = () => {
  return (
    <div>
      <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg">
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Our Team</h1>
            <ul className="breadcumb-menu">
              <li><a href="index.html">Home</a></li>
              <li>Our Team</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="space-top">
        <div className="container">
          <div className="row gy-40 align-items-center">
            <div className="col-xl-5">
              <div className="team-featured-img"><img src="assets/img/team/team_featured.jpg" alt="Team" /></div>
            </div>
            <div className="col-xl-7">
              <div className="team-featured">
                <h2 className="team-title">Rachna Sheth</h2>
                <p className="team-desig">CEO, of Webteck Company</p>
                <p className="team-bio">Enthusiastically parallel task 2.0 niches wherea end-to-end strategic theme
                  area. Dramatically harness e-business ROI and granular service. Quickly target enabled
                  internal organic sources after cross-unit methods of empowerment. Seamlessly e-enable
                  intuitive applications before end-to-end applications. Uniquely matrix seamless supply
                  chains for resource-leveling.</p>
                <div className="team-contact-wrap">
                  <div className="team-contact">
                    <div className="icon-btn"><i className="fa-solid fa-phone" /></div>
                    <div className="media-body">
                      <h6 className="team-contact_label">Phone Number</h6><a className="team-contact_link" href="tel:+19356542587">+1 935-654-2587</a>
                    </div>
                  </div>
                  <div className="team-contact">
                    <div className="icon-btn"><i className="fa-solid fa-envelope" /></div>
                    <div className="media-body">
                      <h6 className="team-contact_label">Email Address</h6><a className="team-contact_link" href="mailto:info@rachna.com">info@rachna.com</a>
                    </div>
                  </div>
                  <div className="team-contact">
                    <div className="icon-btn"><i className="fa-solid fa-phone" /></div>
                    <div className="media-body">
                      <h6 className="team-contact_label">Phone Number</h6><span className="team-contact_link">10:00AM - 4:00PM</span>
                    </div>
                  </div>
                </div><a href="about.html" className="th-btn">MAKE AN APPOINTMENT<i className="fa-regular fa-arrow-right ms-2" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="space">
        <div className="container">
          <div className="title-area text-center"><span className="sub-title">
            <div className="icon-masking me-2"><span className="mask-icon" data-mask-src="assets/img/theme-img/title_shape_1.svg" /> <img src="assets/img/theme-img/title_shape_1.svg" alt="shape" /></div>ALL MEMBERS
          </span>
            <h2 className="sec-title">See Our Skilled Expert <span className="text-theme">Team</span></h2>
          </div>
          <div className="row gy-40">
            <div className="col-lg-3 col-md-6">
              <div className="th-team team-card">
                <div className="team-img"><img src="assets/img/team/team_1_1.jpg" alt="Team" /></div>
                <div className="team-content">
                  <div className="box-particle" id="team-p1" />
                  <div className="team-social"><a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f" /></a> <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter" /></a> <a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram" /></a> <a target="_blank" href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></a>
                  </div>
                  <h3 className="box-title"><a href="team-details.html">Rayan Athels</a></h3><span className="team-desig">Founder &amp; CEO</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="th-team team-card">
                <div className="team-img"><img src="assets/img/team/team_1_2.jpg" alt="Team" /></div>
                <div className="team-content">
                  <div className="box-particle" id="team-p2" />
                  <div className="team-social"><a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f" /></a> <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter" /></a> <a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram" /></a> <a target="_blank" href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></a>
                  </div>
                  <h3 className="box-title"><a href="team-details.html">Alex Furnandes</a></h3><span className="team-desig">Project Manager</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="th-team team-card">
                <div className="team-img"><img src="assets/img/team/team_1_3.jpg" alt="Team" /></div>
                <div className="team-content">
                  <div className="box-particle" id="team-p3" />
                  <div className="team-social"><a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f" /></a> <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter" /></a> <a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram" /></a> <a target="_blank" href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></a>
                  </div>
                  <h3 className="box-title"><a href="team-details.html">Mary Crispy</a></h3><span className="team-desig">Cheif Expert</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="th-team team-card">
                <div className="team-img"><img src="assets/img/team/team_1_4.jpg" alt="Team" /></div>
                <div className="team-content">
                  <div className="box-particle" id="team-p4" />
                  <div className="team-social"><a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f" /></a> <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter" /></a> <a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram" /></a> <a target="_blank" href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></a>
                  </div>
                  <h3 className="box-title"><a href="team-details.html">Henry Joshep</a></h3><span className="team-desig">Product Manager</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="th-team team-card">
                <div className="team-img"><img src="assets/img/team/team_1_5.jpg" alt="Team" /></div>
                <div className="team-content">
                  <div className="box-particle" id="team-p5" />
                  <div className="team-social"><a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f" /></a> <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter" /></a> <a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram" /></a> <a target="_blank" href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></a>
                  </div>
                  <h3 className="box-title"><a href="team-details.html">Sanjida Carlose</a></h3><span className="team-desig">IT Consultant</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="th-team team-card">
                <div className="team-img"><img src="assets/img/team/team_1_6.jpg" alt="Team" /></div>
                <div className="team-content">
                  <div className="box-particle" id="team-p6" />
                  <div className="team-social"><a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f" /></a> <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter" /></a> <a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram" /></a> <a target="_blank" href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></a>
                  </div>
                  <h3 className="box-title"><a href="team-details.html">Marian Widjya</a></h3><span className="team-desig">Head Manager</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="th-team team-card">
                <div className="team-img"><img src="assets/img/team/team_1_7.jpg" alt="Team" /></div>
                <div className="team-content">
                  <div className="box-particle" id="team-p7" />
                  <div className="team-social"><a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f" /></a> <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter" /></a> <a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram" /></a> <a target="_blank" href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></a>
                  </div>
                  <h3 className="box-title"><a href="team-details.html">Peter Parker</a></h3><span className="team-desig">Web Developer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="th-team team-card">
                <div className="team-img"><img src="assets/img/team/team_1_8.jpg" alt="Team" /></div>
                <div className="team-content">
                  <div className="box-particle" id="team-p8" />
                  <div className="team-social"><a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f" /></a> <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter" /></a> <a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram" /></a> <a target="_blank" href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></a>
                  </div>
                  <h3 className="box-title"><a href="team-details.html">Grayson Gabriel</a></h3><span className="team-desig">UI/UX Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
};

export default OurTeam;
