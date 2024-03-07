import React from 'react'

const Footer = () => {
  return (
    <footer className="footer-area">
    <div className="footer-widget">
    <div className="container">
    <div className="row footer-widget-wrapper pt-100 pb-70">
    <div className="col-md-6 col-lg-4">
    <div className="footer-widget-box about-us">
    <a href="#" className="footer-logo">
    <img src="../assets/img/logo/logo1.png" style={{backgroundColor:"#ffffff",width:"50%",height:"50%"}} alt/>
    </a>
    <p className="mb-3">
    We are many variations of passages available but the majority have suffered alteration
    in some form by injected humour words believable.
    </p>
    <ul className="footer-contact">
    <li><a href="tel:+21236547898"><i className="far fa-phone"></i>+9999599840</a></li>
    <li><i className="far fa-map-marker-alt"></i>40-40B, Vardhman Starshop Setor-19,Mathura Road,Faridabad</li>
    <li><a href="https://live.themewild.com/cdn-cgi/l/email-protection#8ce5e2eae3cce9f4ede1fce0e9a2efe3e1"><i className="far fa-envelope"></i><span className="__cf_email__" data-cfemail="f1989f979eb19489909c819d94df929e9c">[email&#160;protected]</span></a></li>
    </ul>
    </div>
    </div>
    <div className="col-md-6 col-lg-2">
    <div className="footer-widget-box list">
    {/* <h4 className="footer-widget-title">Quick Links</h4>
    <ul className="footer-list">
    <li><a href="#"><i className="fas fa-caret-right"></i> About Us</a></li>
    <li><a href="#"><i className="fas fa-caret-right"></i> Update News</a></li>
    <li><a href="#"><i className="fas fa-caret-right"></i> Testimonials</a></li>
    <li><a href="#"><i className="fas fa-caret-right"></i> Terms Of Service</a></li>
    <li><a href="#"><i className="fas fa-caret-right"></i> Privacy policy</a></li>
    <li><a href="#"><i className="fas fa-caret-right"></i> Our Dealers</a></li>
    </ul> */}
    </div>
    </div>
    <div className="col-md-6 col-lg-3">
    <div className="footer-widget-box list">
    {/* <h4 className="footer-widget-title">Support Center</h4>
    <ul className="footer-list">
    <li><a href="#"><i className="fas fa-caret-right"></i> FAQ's</a></li>
    <li><a href="#"><i className="fas fa-caret-right"></i> Affiliates</a></li>
    <li><a href="#"><i className="fas fa-caret-right"></i> Booking Tips</a></li>
    <li><a href="#"><i className="fas fa-caret-right"></i> Sell Vehicles</a></li>
    <li><a href="#"><i className="fas fa-caret-right"></i> Contact Us</a></li>
    <li><a href="#"><i className="fas fa-caret-right"></i> Sitemap</a></li>
    </ul> */}
    </div>
    </div>
    <div className="col-md-6 col-lg-3">
    <div className="footer-widget-box list">
    <h4 className="footer-widget-title">Newsletter</h4>
    <div className="footer-newsletter">
    <p>Subscribe Our Newsletter To Get Latest Update And News</p>
    <div className="subscribe-form">
    <form action="#">
    <input type="email" className="form-control" placeholder="Your Email"/>
    <button className="theme-btn" type="submit">
    Subscribe Now <i className="far fa-paper-plane"></i>
    </button>
    </form>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div className="copyright">
    <div className="container">
    <div className="row">
    <div className="col-md-6 align-self-center">
    <p className="copyright-text">
    &copy; Copyright <span id="date"></span> <a href="#">Vagonan </a> All Rights Reserved.
    </p>
    </div>
    <div className="col-md-6 align-self-center">
    <ul className="footer-social">
    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
    </ul>
    </div>
    </div>
    </div>
    </div>
    </footer>
    
  )
}

export default Footer
