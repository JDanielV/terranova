import React from "react";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <span className="header__phone">Tel/Fax +1 (604) 669-3355</span>
        <div className="header__logo-wrapper">
          <img
            className="header__logo"
            src="./assets/logo/terranova_logo.svg"
            alt="terranova sales logo"
          />
        </div>
        <ul className="header__ul">
          <li className="header__li">About Us</li>
          <li className="header__li">Products</li>
          <li className="header__li">Services</li>
          <li className="header__li">Contact</li>
        </ul>
        <div className="header__language-wrapper">
          <span className="header__language">EN</span>
          <span className="header__language">ES</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
