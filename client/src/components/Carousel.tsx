import React, { useState } from "react";
import { CarouselDataObj } from "../resources/CarouselData";

interface CarouselProps {
  carouselSlides: CarouselDataObj[];
}

const Carousel = ({ carouselSlides }: CarouselProps) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === carouselSlides.length ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? carouselSlides.length - 1 : current - 1);
  };

  return (
    <section className="products__carousel">
      <button className="products__slider-button-left" onClick={prevSlide}>
        <div className="products__slider-button-left-icon" />
      </button>
      <button className="products__slider-button-right" onClick={nextSlide}>
        <div className="products__slider-button-right-icon" />
      </button>
      {carouselSlides.map((slide: CarouselDataObj, index: number) => {
        return (
          <div
            key={index}
            className={index === current ? "slide active" : "slide"}
          >
            {index === current && <img src={slide.img} alt={slide.imgAlt} />}
          </div>
        );
      })}
      <div className="test"></div>
    </section>
  );
};

export default Carousel;
