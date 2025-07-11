// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="footer-wrapper footer-layout3" data-bg-src="assets/img/bg/footer_bg_2.jpg">
        <div className="widget-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 col-xxl-3 col-xl-4">
                <div className="widget footer-widget">
                  <h3 className="widget_title">About Company</h3>
                  <div className="th-widget-about">
                    <p className="about-text">Superior Estimates & Architectural Designs (SEADs): Providing exceptional solutions to propel your projects forward.</p>
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
                      <li><Link to='/privacy-policy'>Privacy Policy</Link></li>
                      <li><Link to="/terms-and-conditions" >Terms and Conditions</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">SERVICES</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li><Link to='/services'>Quantity Takeoff</Link></li>
                      <li><Link to='/services'>Material Estimates</Link></li>
                      <li><Link to='/services'>Cost Estimates</Link></li>
                      <li><Link to='/services'>Bid Proposals</Link></li>
                      <li><Link to='/services'>Architectural Designing</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-6 col-xl-auto">
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
              </div> */}
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
                  {/* <ul>
                    <li><a href="/careers">Careers</a></li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <input class="chat-menu hidden" id="offchat-menu" type="checkbox" />
      <div class="sticky-button" id="sticky-button">
        <label for="offchat-menu">
          <svg class="chat-icon" viewBox="0 0 24 24">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z" />
          </svg>
          <svg class="close-icon" viewBox="0 0 512 512">
            <path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z" />
          </svg>
        </label>
      </div>
      <div class="sticky-chat">
        <div class="chat-content">
          <div class="chat-header">
            <svg viewBox="0 0 32 32">
              <path d="M24,22a1,1,0,0,1-.64-.23L18.84,18H17A8,8,0,0,1,17,2h6a8,8,0,0,1,2,15.74V21a1,1,0,0,1-.58.91A1,1,0,0,1,24,22ZM17,4a6,6,0,0,0,0,12h2.2a1,1,0,0,1,.64.23L23,18.86V16.92a1,1,0,0,1,.86-1A6,6,0,0,0,23,4Z" />
              <rect height="2" width="2" x="19" y="9"></rect>
              <rect height="2" width="2" x="14" y="9"></rect>
              <rect height="2" width="2" x="24" y="9"></rect>
              <path d="M8,30a1,1,0,0,1-.42-.09A1,1,0,0,1,7,29V25.74a8,8,0,0,1-1.28-15,1,1,0,1,1,.82,1.82,6,6,0,0,0,1.6,11.4,1,1,0,0,1,.86,1v1.94l3.16-2.63A1,1,0,0,1,12.8,24H15a5.94,5.94,0,0,0,4.29-1.82,1,1,0,0,1,1.44,1.4A8,8,0,0,1,15,26H13.16L8.64,29.77A1,1,0,0,1,8,30Z" />
            </svg>
            <div class="title">Please chat with our team <span>An admin will respond within a few minutes.</span>
            </div>
          </div>
          <div class="chat-text"><span>Hello, is there anything we can assist you with?</span>
            <span class="typing">
              <svg viewBox="0 0 512 512">
                <circle cx="256" cy="256" r="48"></circle>
                <circle cx="416" cy="256" r="48"></circle>
                <circle cx="96" cy="256" r="48"></circle>
              </svg>
            </span>
          </div>
        </div>
        <a class="chat-button" href="https://api.whatsapp.com/send/?phone=16142706554&text&type=phone_number&app_absent=0" rel="nofollow noreferrer" target="_blank">
          <span>Type a message</span>
          <svg viewBox="0 0 32 32">
            <path d="M19.47,31a2,2,0,0,1-1.8-1.09l-4-7.57a1,1,0,0,1,1.77-.93l4,7.57L29,3.06,3,12.49l9.8,5.26,8.32-8.32a1,1,0,0,1,1.42,1.42l-8.85,8.84a1,1,0,0,1-1.17.18L2.09,14.33a2,2,0,0,1,.25-3.72L28.25,1.13a2,2,0,0,1,2.62,2.62L21.39,29.66A2,2,0,0,1,19.61,31Z" />
          </svg>
        </a>
      </div>
    </>
  );
};

export default Footer;
