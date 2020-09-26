import React, { useState } from "react";
import Slide from "./Slide";

const SliderContent = (props) => {
  const [x, setX] = useState(props.viewportWidth);

  const goLeft = () => {
    setX(x + props.viewportWidth);
  };

  const goRight = () => {
    setX(x - props.viewportWidth);
  };

  return (
    <div className="products__slider-content">
      <div
        className="products__slider-content-wrapper"
        style={{ transform: `translateX(${x}px)` }}
      >
        {props.imageURLs.map((image) => (
          <Slide key={image} image={image} product={props.product} />
        ))}
      </div>
      <button className="products__slider-button-left" onClick={goLeft}>
        Left
      </button>
      <button className="products__slider-button-right" onClick={goRight}>
        Right
      </button>
    </div>
  );
};

export default SliderContent;
