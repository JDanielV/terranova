import React from "react";

const NavLink = ({ navLinkName, navLinkId }) => {
  return (
    <li className="header__li">
      <a href={`#${navLinkId}`} className="header__li">{navLinkName}</a>
    </li>
  );
};
export default NavLink;
