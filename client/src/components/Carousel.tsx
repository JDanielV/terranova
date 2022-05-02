import React, { useState } from "react";
import { CarouselDataObj } from "../resources/CarouselData";

interface CarouselProps {
  carouselImages: CarouselDataObj[];
}

const Carousel = ({ carouselImages }: CarouselProps) => {
  return (
    <section className="products__carousel">
      <div className="test"></div>
    </section>
  );
};

export default Carousel;
