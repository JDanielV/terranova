import React, { useState } from "react";
import Slide from "./Slide";

const SliderContent = (props) => {
  const [x, setX] = useState(100);

  const goLeft = () => {
    x === 100 ? setX(-100) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 ? setX(100) : setX(x - 100);
  };

  return (
    <div className="products__slider-content">
      {props.imageURLs.map((image) => (
        <Slide key={image} image={image} product={props.product} x={x} />
      ))}

      <button className="products__slider-button-left" onClick={goLeft}>
        <div className="products__slider-button-left-icon" />
      </button>
      <button className="products__slider-button-right" onClick={goRight}>
        <div className="products__slider-button-right-icon" />
      </button>
    </div>
  );
};

export default SliderContent;
