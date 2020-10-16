import React from "react";

const SliderBg = (props) => {
  let styleClasses = ["mobile-nav-bg"];

  if (!props.clamshellSliderOpen) styleClasses.push("bg-no-show");
  else styleClasses.push("bg-show");

  if (!props.tunaSliderOpen) styleClasses.push("bg-no-show");
  else styleClasses.push("bg-show");

  if (!props.avocadoSliderOpen) styleClasses.push("bg-no-show");
  else styleClasses.push("bg-show");

  if (!props.veggiesSliderOpen) styleClasses.push("bg-no-show");
  else styleClasses.push("bg-show");

  return <div className={styleClasses.join(" ")}></div>;
};

export default SliderBg;
