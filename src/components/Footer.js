import React from 'react'

const Footer = () => {
  return (
   <>
      <footer className="section footer-classic section-sm">
        <div className="container">
          <div className="row row-30">
            <div className="col-lg-3 wow fadeInLeft">
              <a className="brand" href="index.html"><img className="brand-logo-dark" src="https://tarangansolutions.com/im/logo_final.png" alt="" width="100" height="17"/><img className="brand-logo-light" src="images/logo-inverse-200x34.png" alt="" width="100" height="17" /></a>
              <p className="footer-classic-description offset-top-0 offset-right-25">СonsultBiz provides a full range of business consulting & advisory services to small, medium, and international companies worldwide. We use innovations and experience to drive your success.</p>
            </div>
            <div className="col-lg-3 col-sm-8 wow fadeInUp">
              <p className="footer-classic-title">contact info</p>
              <div className="d-block offset-top-0">2164 Wall St, New York<span className="d-lg-block">NY 10122, USA</span></div><a className="d-inline-block accent-link" href="mailto:#">info@demolink.org</a><a className="d-inline-block" href="tel:#">+1 800 123 45 67</a>
              <ul>
                <li>Mon-Thu:<span className="d-inline-block offset-left-10 text-white">9:30 AM - 9:00 PM</span></li>
                <li>Fri:<span className="d-inline-block offset-left-10 text-white">10:00 AM - 9:00 PM</span></li>
                <li>Sat:<span className="d-inline-block offset-left-10 text-white">10:00 AM - 3:00 PM</span></li>
              </ul>
            </div>
            <div className="col-lg-2 col-sm-4 wow fadeInUp" data-wow-delay=".3s">
              <p className="footer-classic-title">Quick Links</p>
              <ul className="footer-classic-nav-list">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="contacts.html">Contacts</a></li>
              </ul>
            </div>
            <div className="col-lg-4 wow fadeInLeft" data-wow-delay=".2s">
              <p className="footer-classic-title">newsletter</p>
              <form className="rd-mailform text-left footer-classic-subscribe-form" data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/rd-mailform.php">
                <div className="form-wrap">
                  <label className="form-label" for="subscribe-email">Your Email Address</label>
                  <input className="form-input" id="subscribe-email" type="email" name="email"/>
                </div>
                <div className="form-button group-sm text-center text-lg-left">
                  <button className="button button-primary button-circle" type="submit">sign up</button>
                </div>
              </form>
              <p>Be the first to find out about our latest news, updates, and special offers.</p>
            </div>
          </div>
        </div>
        <div className="container wow fadeInUp" data-wow-delay=".4s">
          <div className="footer-classic-aside">
            <p className="rights"><span>&copy;&nbsp;</span><span className="copyright-year"></span>. All Rights Reserved. Design by <a href="https://www.templatemonster.com">TemplateMonster</a></p>
            <ul className="social-links">
              <li><a className="fa fa-linkedin" href="#"></a></li>
              <li><a className="fa fa fa-twitter" href="#"></a></li>
              <li><a className="fa fa-facebook" href="#"></a></li>
              <li><a className="fa fa-instagram" href="#"></a></li>
            </ul>
          </div>
        </div>
      </footer>
   </>
  )
}

export default Footer