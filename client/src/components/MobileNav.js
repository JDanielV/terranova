import React from "react";
import MobileNavLink from "./MobileNavLink";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const MobileNav = (props) => {
  let styleClasses = ["mobile-nav"];

  if (!props.sidebarOpen) {
    styleClasses.push("sidebarClosed");
    document.ontouchmove = (e) => true;
    enableBodyScroll();
  } else {
    styleClasses.push("sidebarOpen");
    document.ontouchmove = (e) => e.preventDefault();
    disableBodyScroll();
  }

  return (
    <nav className={styleClasses.join(" ")} id="mobile-nav-id">
      <div className="mobile-nav__layout-wrapper">
        <div className="mobile-nav__close-wrapper">
          <img
            className="mobile-nav__close"
            src="./assets/icons/close-icon.png"
            alt="close"
            onClick={props.sidebarClose}
          />
        </div>
        <div className="mobile-nav__links-wrapper">
          <ul className="mobile-nav__links-ul">
            <MobileNavLink
              navLinkName={props.firstNavLink}
              navLinkId={props.firstLinkId}
              sidebarClose={props.sidebarClose}
              currentLang={props.currentLang}
            />
            <MobileNavLink
              navLinkName={props.secondNavLink}
              navLinkId={props.secondLinkId}
              sidebarClose={props.sidebarClose}
              currentLang={props.currentLang}
            />
            <MobileNavLink
              navLinkName={props.thirdNavLink}
              navLinkId={props.thirdLinkId}
              sidebarClose={props.sidebarClose}
              currentLang={props.currentLang}
            />
            <MobileNavLink
              navLinkName={props.fourthNavLink}
              navLinkId={props.fourthLinkId}
              sidebarClose={props.sidebarClose}
              currentLang={props.currentLang}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
