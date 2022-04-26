import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Slider from "./Slider";
import SliderBg from "./SliderBg";
import { disableBodyScroll } from "body-scroll-lock";
import Aos from "aos";
import "aos/dist/aos.css";

const Products = () => {
  const { t } = useTranslation();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

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
    "./assets/images/product-imgs/clamshell4.jpg",
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
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-once="true"
              onClick={() => {
                showClamshellSlider();
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
            <Slider
              sliderOpen={tunaSliderOpen}
              imageURLs={tunaImages}
              product={"tuna"}
              toggleSlider={showTunaSlider}
            />
            <div
              className="products__product-category-img-container"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
              onClick={() => {
                showTunaSlider();
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
            <Slider
              sliderOpen={avocadoSliderOpen}
              imageURLs={avocadoImages}
              product={"avocado"}
              toggleSlider={showAvocadoSlider}
            />
            <div
              className="products__product-category-img-container"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
              onClick={() => {
                showAvocadoSlider();
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
            <Slider
              sliderOpen={veggiesSliderOpen}
              imageURLs={veggieCansImages}
              product={"veggies"}
              toggleSlider={showVeggiesSlider}
            />
            <div
              className="products__product-category-img-container"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-once="true"
              onClick={() => {
                showVeggiesSlider();
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
      <SliderBg
        clamshellSliderOpen={clamshellSliderOpen}
        avocadoSliderOpen={avocadoSliderOpen}
        tunaSliderOpen={tunaSliderOpen}
        veggiesSliderOpen={veggiesSliderOpen}
      />
    </section>
  );
};

export default Products;
