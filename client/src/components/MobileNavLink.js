import React, { useState, useEffect } from "react";

const MobileNavLink = ({ navLinkName, navLinkId, sidebarClose }) => {
  const [anchorTarget, setAnchorTarget] = useState(null);

  useEffect(() => {
    setAnchorTarget(document.getElementById(navLinkId));
  }, [navLinkId]);

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
        {navLinkName}
      </a>
    </li>
  );
};
export default MobileNavLink;
