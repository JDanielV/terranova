import React from "react";
import SliderContent from "./SliderContent";
import { enableBodyScroll } from "body-scroll-lock";

const Slider = (props) => {
  let sliderClasses = ["products__slider"];

  if (!props.sliderOpen) {
    sliderClasses.push(`${props.product}Slider-closed`);
  } else {
    sliderClasses.push(`${props.product}Slider-open`);
  }

  return (
    <div className={sliderClasses.join(" ")}>
      <div className="products__slider-close-btn-container">
        <div
          className="products__slider-close-btn"
          onClick={() => {
            props.toggleSlider();
            enableBodyScroll();
          }}
        />
      </div>
      <SliderContent
        imageURLs={props.imageURLs}
        product={props.product}
        viewportWidth={props.viewportWidth}
      />
    </div>
  );
};

export default Slider;
