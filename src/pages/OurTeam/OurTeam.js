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
    <div className="team-page">
      <div className="container">
        <div className="breadcrumb-wrapper">
          <div className="breadcrumb-content">
            <h1 className="breadcrumb-title">Our Team</h1>
            <ul className="breadcrumb-menu">
              <li><a href="/">Superior Estimates</a></li>
              <li>Our Team</li>
            </ul>
          </div>
        </div>

        <div className="ceo-section">
          <div className="message-content">
            <h2>Message From The CEO</h2>
            <p>Welcome to Superior Estimates, your premier destination for expert cost estimation services. I'm delighted to introduce you to our team of seasoned professionals dedicated to delivering accurate, timely, and data-driven solutions. Leveraging cutting-edge technology and industry expertise, we optimize project budgets, mitigate risks, and drive success. Our commitment to excellence and client satisfaction drives everything we do. Explore our services and let's get started on your next project.</p>
            <p>- Muhammad Awais Haider, Founder & CEO</p>
            <p>- Muhammad Ahtsham Azam, Co-Founder</p>
          </div>
          <div className="ceo-card">
            <img src="assets/img/DTechKrew/Team/ceo.png" alt="Muhammad Awais Haider" className="team-photo" />
            <h3 className="team-name">Muhammad Awais Haider</h3>
            <p className="team-role">Founder & CEO</p>
          </div>
        </div>

        <div className="team-main-card">
          <section className="team-section">
            <h2>Meet Our Team</h2>
            <div className="team-section__content">
              {teamMembers.map(member => (
                <div className="team-member" key={member.id}>
                  <div className="team-card">
                    <img src={member.img} alt={member.name} className="team-photo" />
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
