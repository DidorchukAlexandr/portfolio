import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Oleksandr D.</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/oleksandr-didorchuk-85328925b/"
            className="footer__social-link"
            target="_blanc"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://github.com/DidorchukAlexandr"
            className="footer__social-link"
            target="_blanc"
          >
            <i className="uil uil-github-alt"></i>
          </a>
          <a
            href="https://t.me/didorchukA"
            className="footer__social-link"
            target="_blanc"
          >
            <i className="uil uil-telegram-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Oleksandr Didorchuk. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
