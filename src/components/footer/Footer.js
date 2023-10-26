import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Abhishek</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Project
            </a>
          </li>

          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/profile.php?id=100008598194320"
            className="footer__social-link"
            target="__blank"
          >
            <i class="bx bxl-facebook"></i>
          </a>
          <a
            href="https://instagram.com/nick.name.abhi?igshid=ZDdkNTZiNTM="
            className="footer__social-link"
            target="__blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://twitter.com/Abhi92746444"
            className="footer__social-link"
            target="__blank"
          >
            <i class="bx bxl-twitter"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Abhishek. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
