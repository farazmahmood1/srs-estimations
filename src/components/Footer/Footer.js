// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-wrapper footer-layout3" data-bg-src="assets/img/bg/footer_bg_2.jpg">
      <div className="widget-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xxl-3 col-xl-4">
              <div className="widget footer-widget">
                <h3 className="widget_title">About Company</h3>
                <div className="th-widget-about">
                  <p className="about-text">Superior Estimates & Architectural Designs: Providing exceptional solutions to propel your projects forward.</p>
                  <div className="th-social">
                    {/* <a href="https://www.facebook.com/SEADS" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a> */}
                    <a href="https://www.linkedin.com/company/superior-estimates-architectural-designs-seads/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://api.whatsapp.com/send/?phone=16142706554&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Quick Links</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li><a href="/services">Services</a></li>
                    <li><a href="/blogs">Blogs</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">SERVICES</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li><a href="/services">Quantity Takeoff</a></li>
                    <li><a href="/services">Material Estimates</a></li>
                    <li><a href="/services">Cost Estimates</a></li>
                    <li><a href="/services">Bid Proposals</a></li>
                    <li><a href="/services">Architectural Designing</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Recent Posts</h3>
                <div className="recent-post-wrap">
                  <div className="recent-post">
                    <div className="media-img">
                      <a href="/blogs"><img src="assets/img/DTechKrew/BGs/recent-post-2-2.jpg" alt="Web Development Blog Post" /></a>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title"><a className="text-inherit" href="/blogs">Estimates - A futuristic Approach</a></h4>
                      <div className="recent-post-meta">
                        <a href="/blogs"><i className="fal fa-calendar-days"></i>09 June, 2024</a>
                      </div>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="media-img">
                      <a href="/blogs"><img src="assets/img/DTechKrew/BGs/recent-post-2-1.jpg" alt="App Development Blog Post" /></a>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title"><a className="text-inherit" href="/blogs">Bidding - Approach Like a Pro</a></h4>
                      <div className="recent-post-meta">
                        <a href="/blogs"><i className="fal fa-calendar-days"></i>10 June, 2024</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <p className="copyright-text">Copyright <i className="fal fa-copyright"></i> 2024 <a href="/">SEADs (Pvt) Ltd</a>. All Rights Reserved.</p>
            </div>
            <div className="col-lg-6 text-lg-end text-center">
              <div className="footer-links">
                <ul>
                  <li><a href="/careers">Careers</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
