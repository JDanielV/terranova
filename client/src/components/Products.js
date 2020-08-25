import React from "react";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();

  return (
    <section className="products" id="products">
      <div className="products__content-wrapper">
        <h3 className="products__title">{t("productsSubtitle.1")}</h3>
        <div className="products__products-wrapper">
          <div className="products__product-wrapper">
            <div className="products__product-category-img-container">
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
            <div className="products__product-category-img-container">
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
            <div className="products__product-category-img-container">
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
            <div className="products__product-category-img-container">
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
