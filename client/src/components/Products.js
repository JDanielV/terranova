import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import Aos from "aos";
import "aos/dist/aos.css";
import Carousel from "./Carousel.tsx";
import SliderBg from "./SliderBg";
import {
  tunaImages,
  clamshellImages,
  veggieCansImages,
  avocadoImages,
  labelImages,
} from "../resources/CarouselData.ts";

const Products = () => {
  const { t } = useTranslation();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [carouselOpen, setCarouselOpen] = useState(null);

  const toggleCarousel = (carousel) => {
    setCarouselOpen(carousel);

    if (carousel == null || carousel === "") {
      enableBodyScroll();
    }
  };

  const getCarouselSlides = () => {
    if (carouselOpen === "clamshell") return clamshellImages;
    else if (carouselOpen === "tuna") return tunaImages;
    else if (carouselOpen === "veggies") return veggieCansImages;
    else if (carouselOpen === "avocado") return avocadoImages;
    else if (carouselOpen === "labels") return labelImages;
  };

  return (
    <section className="products" id="products">
      <div className="products__content-wrapper">
        <h3 className="products__title">{t("productsSubtitle.1")}</h3>
        <div className="products__products-wrapper">
          <div className="products__product-wrapper">
            <div
              className="products__product-category-img-container"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-once="true"
              onClick={() => {
                toggleCarousel("clamshell");
                disableBodyScroll();
                document.ontouchmove = (e) => e.preventDefault();
              }}
            >
              <img
                className="products__product-category-img"
                src="./assets/images/tomate_empaque.jpg"
                alt="tomatoes"
              />
            </div>
            <p className="products__product-category-descr">
              {t("productsDescription1.1")}
            </p>
          </div>
          <div className="products__product-wrapper">
            <div
              className="products__product-category-img-container"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-once="true"
              onClick={() => {
                toggleCarousel("labels");
                disableBodyScroll();
                document.ontouchmove = (e) => e.preventDefault();
              }}
            >
              <img
                className="products__product-category-img"
                src="./assets/images/labelpack-labels.jpg"
                alt="labels"
              />
            </div>
            <p className="products__product-category-descr">
              {t("productsDescription1.1")}
            </p>
          </div>
          <div className="products__product-wrapper">
            <div
              className="products__product-category-img-container"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
              onClick={() => {
                toggleCarousel("tuna");
                disableBodyScroll();
                document.ontouchmove = (e) => e.preventDefault();
              }}
            >
              <img
                className="products__product-category-img"
                src="./assets/images/atun.jpg"
                alt="tuna"
              />
            </div>
            <p className="products__product-category-descr">
              {t("productsDescription2.1")}
            </p>
          </div>
          <div className="products__product-wrapper">
            <div
              className="products__product-category-img-container"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
              onClick={() => {
                toggleCarousel("avocado");
                disableBodyScroll();
                document.ontouchmove = (e) => e.preventDefault();
              }}
            >
              <img
                className="products__product-category-img"
                src="./assets/images/guacamole.jpg"
                alt="guacamole"
              />
            </div>
            <p className="products__product-category-descr">
              {t("productsDescription3.1")}
            </p>
          </div>
          <div className="products__product-wrapper">
            <div
              className="products__product-category-img-container"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-once="true"
              onClick={() => {
                toggleCarousel("veggies");
                disableBodyScroll();
                document.ontouchmove = (e) => e.preventDefault();
              }}
            >
              <img
                className="products__product-category-img"
                src="./assets/images/latas.jpg"
                alt="canned food"
              />
            </div>
            <p className="products__product-category-descr">
              {t("productsDescription4.1")}
            </p>
          </div>
        </div>
      </div>
      {carouselOpen && (
        <div className="products__carousel-bg-wrapper">
          <SliderBg carouselOpen={carouselOpen} />
          <Carousel
            carouselSlides={getCarouselSlides()}
            toggleCarousel={toggleCarousel}
          />
        </div>
      )}
    </section>
  );
};

export default Products;
