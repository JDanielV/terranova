import React from "react";
import Slide from "./Slide";

const SliderContent = (props) => {
  return (
    <div className="products__slider-content">
      <div className="products__slider-content-wrapper">
        {props.imageURLs.map((image) => (
          <Slide key={image} image={image} product={props.product} />
        ))}
      </div>
    </div>
  );
};

export default SliderContent;
