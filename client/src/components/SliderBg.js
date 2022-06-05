import React from "react";

const SliderBg = (props) => {
  let styleClasses = ["mobile-nav-bg"];

  if (!props.carouselOpen) styleClasses.push("bg-no-show");
  else styleClasses.push("bg-show");

  return <div className={styleClasses.join(" ")}></div>;
};

export default SliderBg;
