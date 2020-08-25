import React from "react";

const MobileFooter = ({ languageClick }) => {
  return (
    <footer className="mobile-footer">
      <div className="mobile-footer__wrapper">
        <div className="mobile-footer__left-divider">
          <span className="mobile-footer__phone-number">
            Tel/Fax +1 (604) 669-3355
          </span>
        </div>
        <div className="mobile-footer__right-divider">
          <span
            className="mobile-footer__language"
            onClick={() => languageClick("es")}
          >
            ES
          </span>
          <span
            className="mobile-footer__language"
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
