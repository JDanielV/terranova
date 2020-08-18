import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__company-wrapper">
        <span className="footer__company-copyright">©</span>
        <span className="footer__company-name">Terranova Marketing Inc.</span>
      </div>
      <img
        className="footer__logo"
        src="./assets/logo/terranova_ic.svg"
        alt="terranova logo"
      />
      <div className="footer__social-wrapper">
        <a
          className="footer__social-icon-link"
          href="https://www.instagram.com/terranovasales/?hl=en"
        >
          <img
            className="footer__social-icon-img"
            src="./assets/icons/ig-icon.png"
            alt="instagram icon"
          />
        </a>
        <a
          className="footer__social-icon-link"
          href="https://www.facebook.com/Terranovasales/"
        >
          <img
            className="footer__social-icon-img"
            src="./assets/icons/fb-icon.png"
            alt="facebook icon"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
