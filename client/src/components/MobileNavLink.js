import React, { useState, useEffect } from "react";

const MobileNavLink = ({
  navLinkName,
  navLinkId,
  sidebarClose,
  currentLang,
}) => {
  const [anchorTarget, setAnchorTarget] = useState(null);
  const [navLinkNameLang, setNavLinkNameLang] = useState(navLinkName);

  useEffect(() => {
    setAnchorTarget(document.getElementById(navLinkId));
  }, [navLinkId]);

  useEffect(() => {
    setNavLinkNameLang(navLinkName);
  }, [currentLang, navLinkName]);

  const handleClick = (event) => {
    event.preventDefault();
    anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <li className="mobile-nav__link">
      <a
        className="mobile-nav__link"
        href={`#${navLinkId}`}
        onClick={(event) => {
          sidebarClose();
          handleClick(event);
        }}
      >
        {navLinkNameLang}
      </a>
    </li>
  );
};
export default MobileNavLink;
