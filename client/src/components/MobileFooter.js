import React from "react";

const MobileFooter = ({ languageClick, currentLang }) => {
  let activeLangEs = ["mobile-footer__language"];
  let activeLangEn = ["mobile-footer__language"];

  if (currentLang === "es") {
    activeLangEs.push("mobile-footer__active-lang");
  }

  if (currentLang === "en") {
    activeLangEn.push("mobile-footer__active-lang");
  }

  return (
    <footer className="mobile-footer">
      <div className="mobile-footer__wrapper">
        <div className="mobile-footer__left-divider">
          <span className="mobile-footer__phone-number">
            Tel: +1 (236) 866-4475
          </span>
        </div>
        <div className="mobile-footer__right-divider">
          <span
            className={activeLangEs.join(" ")}
            onClick={() => languageClick("es")}
          >
            ES
          </span>
          <span
            className={activeLangEn.join(" ")}
            onClick={() => languageClick("en")}
          >
            EN
          </span>
        </div>
      </div>
    </footer>
  );
};

export default MobileFooter;
