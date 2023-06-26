import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Jennie L</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonial
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/hj1ee/"
            className="footer__social-link"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://dribbble.com/JenHLee"
            className="footer__social-link"
          >
            <i className="bx bxl-dribbble"></i>
          </a>

          <a
            href="https://www.instagram.com/bravehien"
            className="footer__social-link"
          >
            <i className="bx bxl-instagram"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Jennie L. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
