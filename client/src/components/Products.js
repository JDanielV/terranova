import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "./Slider";
import { disableBodyScroll } from "body-scroll-lock";

const Products = () => {
  const { t } = useTranslation();

  const [clamshellSliderOpen, setClamshellSliderOpen] = useState(false);
  const [tunaSliderOpen, setTunaSliderOpen] = useState(false);
  const [avocadoSliderOpen, setAvocadoSliderOpen] = useState(false);
  const [veggiesSliderOpen, setVeggiesSliderOpen] = useState(false);

  const showClamshellSlider = () => {
    setClamshellSliderOpen(!clamshellSliderOpen);
  };

  const showTunaSlider = () => {
    setTunaSliderOpen(!tunaSliderOpen);
  };

  const showAvocadoSlider = () => {
    setAvocadoSliderOpen(!avocadoSliderOpen);
  };

  const showVeggiesSlider = () => {
    setVeggiesSliderOpen(!veggiesSliderOpen);
  };

  const [clamshellImages] = useState([
    "./assets/images/product-imgs/clamshell1.jpg",
    "./assets/images/product-imgs/clamshell2.jpg",
    "./assets/images/product-imgs/clamshell3.jpg",
  ]);

  const [tunaImages] = useState([
    "./assets/images/product-imgs/tuna1.jpg",
    "./assets/images/product-imgs/tuna2.jpg",
    "./assets/images/product-imgs/tuna3.jpg",
  ]);

  const [avocadoImages] = useState([
    "./assets/images/product-imgs/guac1.jpg",
    "./assets/images/product-imgs/guac2.jpg",
    "./assets/images/product-imgs/guac3.jpg",
  ]);

  const [veggieCansImages] = useState([
    "./assets/images/product-imgs/can1.jpg",
    "./assets/images/product-imgs/can2.jpg",
    "./assets/images/product-imgs/can3.jpg",
  ]);

  return (
    <section className="products" id="products">
      <div className="products__content-wrapper">
        <h3 className="products__title">{t("productsSubtitle.1")}</h3>
        <div className="products__products-wrapper">
          <div className="products__product-wrapper">
            <Slider
              sliderOpen={clamshellSliderOpen}
              imageURLs={clamshellImages}
              product={"clamshell"}
              toggleSlider={showClamshellSlider}
            />
            <div
              className="products__product-category-img-container"
              onClick={() => {
                showClamshellSlider();
                disableBodyScroll();
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
            <Slider
              sliderOpen={tunaSliderOpen}
              imageURLs={tunaImages}
              product={"tuna"}
              toggleSlider={showTunaSlider}
            />
            <div
              className="products__product-category-img-container"
              onClick={() => {
                showTunaSlider();
                disableBodyScroll();
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
            <Slider
              sliderOpen={avocadoSliderOpen}
              imageURLs={avocadoImages}
              product={"avocado"}
              toggleSlider={showAvocadoSlider}
            />
            <div
              className="products__product-category-img-container"
              onClick={() => {
                showAvocadoSlider();
                disableBodyScroll();
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
            <Slider
              sliderOpen={veggiesSliderOpen}
              imageURLs={veggieCansImages}
              product={"veggies"}
              toggleSlider={showVeggiesSlider}
            />
            <div
              className="products__product-category-img-container"
              onClick={() => {
                showVeggiesSlider();
                disableBodyScroll();
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
    </section>
  );
};

export default Products;
