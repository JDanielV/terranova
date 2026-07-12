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
    </footer>
  );
};

export default Footer;
