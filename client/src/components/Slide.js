import React from "react";

const Slide = (props) => {
  return (
    <div
      className="products__slider-slide-container"
      style={{ transform: `translateX(${props.x}%)` }}
    >
      <img
        className="products__slider-slide"
        src={props.image}
        alt={`${props.product} example`}
      />
    </div>
  );
};

export default Slide;
