import React from "react";

const MobileNavBg = (props) => {
  let styleClasses = ["mobile-nav-bg"];

  if (!props.sidebarOpen) styleClasses.push("bg-no-show");
  else styleClasses.push("bg-show");

  return <div className={styleClasses.join(" ")}></div>;
};

export default MobileNavBg;
