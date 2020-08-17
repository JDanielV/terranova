import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer__company">Terranova Marketing Inc.</span>
      <img
        className="footer__logo"
        src="./assets/logo/terranova_ic.svg"
        alt="terranova logo"
      />
      <div className="footer__social-wrapper">
        <div className="footer__social-ig" />
        <div className="footer__social-fb" />
      </div>
    </footer>
  );
};

export default Footer;
