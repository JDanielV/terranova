import React, { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import MobileNavBg from "./MobileNavBg";
import NavLink from "./NavLink";
import { useTranslation } from "react-i18next";

const Header = (props) => {
  const { t, i18n } = useTranslation();

  const [navLinks, setNavLinks] = useState({
    firstNavLink: t("navAboutUs.1"),
    firstLinkId: "home-about",
    secondNavLink: t("navProducts.1"),
    secondLinkId: "products",
    thirdNavLink: t("navServices.1"),
    thirdLinkId: "services",
    fourthNavLink: t("navContact.1"),
    fourthLinkId: "contact",
  });

  const [activeLang, setActiveLang] = useState(i18n.language);

  if (activeLang !== i18n.language) setActiveLang(i18n.language);

  useEffect(() => {
    setNavLinks({
      firstNavLink: t("navAboutUs.1"),
      firstLinkId: "home-about",
      secondNavLink: t("navProducts.1"),
      secondLinkId: "products",
      thirdNavLink: t("navServices.1"),
      thirdLinkId: "services",
      fourthNavLink: t("navContact.1"),
      fourthLinkId: "contact",
    });
  }, [activeLang, t]);

  const firstNavLink = navLinks.firstNavLink;
  const firstLinkId = navLinks.firstLinkId;
  const secondNavLink = navLinks.secondNavLink;
  const secondLinkId = navLinks.secondLinkId;
  const thirdNavLink = navLinks.thirdNavLink;
  const thirdLinkId = navLinks.thirdLinkId;
  const fourthNavLink = navLinks.fourthNavLink;
  const fourthLinkId = navLinks.fourthLinkId;

  let activeLangEs = ["header__language"];
  let activeLangEn = ["header__language"];

  if (props.currentLang === "es") {
    activeLangEs.push("header__active-lang");
  }

  if (props.currentLang === "en") {
    activeLangEn.push("header__active-lang");
  }

  return (
    <header className="header">
      <nav className="header__nav">
        <span className="header__phone">Tel: +1 (604) 669-3355</span>
        <a href="#home-about" className="header__logo-wrapper">
          <div>
            <img
              className="header__logo"
              src="./assets/logo/terranova_logo.svg"
              alt="terranova sales logo"
            />
          </div>
        </a>
        <div className="header__nav-hamburger-wrapper">
          <img
            className="header__nav-hamburger"
            src="./assets/icons/hamburger-icon.png"
            alt="display nav button"
            onClick={props.sidebarClick}
          />
        </div>
        <div className="header__nav-links">
          <ul className="header__ul">
            <NavLink navLinkName={firstNavLink} navLinkId={firstLinkId} />
            <NavLink navLinkName={secondNavLink} navLinkId={secondLinkId} />
            <NavLink navLinkName={thirdNavLink} navLinkId={thirdLinkId} />
            <NavLink navLinkName={fourthNavLink} navLinkId={fourthLinkId} />
          </ul>
          <div className="header__language-wrapper">
            <span
              className={activeLangEn.join(" ")}
              onClick={() => props.languageClick("en")}
            >
              EN
            </span>
            <span
              className={activeLangEs.join(" ")}
              onClick={() => props.languageClick("es")}
            >
              ES
            </span>
          </div>
        </div>
        <MobileNav
          sidebarOpen={props.sidebarOpen}
          sidebarClose={props.sidebarClick}
          firstNavLink={firstNavLink}
          firstLinkId={firstLinkId}
          secondNavLink={secondNavLink}
          secondLinkId={secondLinkId}
          thirdNavLink={thirdNavLink}
          thirdLinkId={thirdLinkId}
          fourthNavLink={fourthNavLink}
          fourthLinkId={fourthLinkId}
          currentLang={activeLang}
        />
        <MobileNavBg sidebarOpen={props.sidebarOpen} />
      </nav>
    </header>
  );
};

export default Header;
