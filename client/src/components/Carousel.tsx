import React, { useState } from "react";
import { CarouselDataObj } from "../resources/CarouselData";

interface CarouselProps {
  carouselSlides: CarouselDataObj[];
  toggleCarousel(carousel: string): void;
}

const Carousel = ({ carouselSlides, toggleCarousel }: CarouselProps) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === carouselSlides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? carouselSlides.length - 1 : current - 1);
  };

  return (
    <section className="products__carousel">
      <button className="products__carousel-button-close-wrapper">
        <div
          className="products__carousel-button-close"
          onClick={() => toggleCarousel("")}
        ></div>
      </button>
      <div className="products__carousel-buttons-slides-wrapper">
        <button className="products__slider-button-left" onClick={prevSlide}>
          <div className="products__slider-button-left-icon" />
        </button>
        <div className="products__carousel-slides-wrapper">
          {carouselSlides?.map((slide: CarouselDataObj, index: number) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? "products__carousel-slide products__carousel-slide--active"
                    : "products__carousel-slide"
                }
              >
                {index === current && (
                  <img src={slide.img} alt={slide.imgAlt} />
                )}
              </div>
            );
          })}
        </div>
        <button className="products__slider-button-right" onClick={nextSlide}>
          <div className="products__slider-button-right-icon" />
        </button>
      </div>
    </section>
  );
};

export default Carousel;
