// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7 col-12">
              <p className="copyright-text mb-0">
                Copyright ©{" "}
                <a href="/">Maesot Hospital</a> DeveloperBy.KITTIKON
                Design: <a href="https://templatemo.com" target="_blank">TemplateMo</a>
              </p>
            </div>
            <div className="col-lg-6 col-md-5 col-12 d-flex justify-content-center align-items-center mx-auto">
              <ul className="social-icon">
                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-twitter"></a>
                </li>
                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-facebook"></a>
                </li>
                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-instagram"></a>
                </li>
                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-linkedin"></a>
                </li>
                <li className="social-icon-item">
                  <a href="https://youtube.com/templatemo" className="social-icon-link bi-youtube"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
