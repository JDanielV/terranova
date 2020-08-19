import React, { useState } from "react";
import MobileNav from "./MobileNav";
import MobileNavBg from "./MobileNavBg";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

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
        <div className="header__nav-hamburger-wrapper">
          <img
            className="header__nav-hamburger"
            src="./assets/icons/hamburger-icon.png"
            alt="display nav button"
            onClick={sidebarClick}
          />
        </div>
        <div className="header__nav-links">
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
        </div>
        <MobileNav sidebarOpen={sidebarOpen} sidebarClose={sidebarClick} />
        <MobileNavBg sidebarOpen={sidebarOpen} />
      </nav>
    </header>
  );
};

export default Header;
