import React from "react";

const MobileNav = () => {
  return (
    <nav className="mobile-nav">
      <div className="mobile-nav__layout-wrapper">
        <div className="mobile-nav__close-wrapper">
          <img
            className="mobile-nav__close"
            src="./assets/icons/close-icon.png"
            alt="close"
          />
        </div>
        <div className="mobile-nav__links-wrapper">
          <ul className="mobile-nav__links-ul">
            <li className="mobile-nav__link">About Us</li>
            <li className="mobile-nav__link">Products</li>
            <li className="mobile-nav__link">Services</li>
            <li className="mobile-nav__link">Contact Us</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
