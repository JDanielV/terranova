import React from "react";

const Slide = (props) => {
  return (
    <div className="products__slider-slide-container">
      <img
        className="products__slider-slide"
        src={props.image}
        alt={`${props.product} example`}
      />
    </div>
  );
};

export default Slide;
