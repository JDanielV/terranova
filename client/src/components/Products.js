import React from "react";

const Products = () => {
  return (
    <section className="products">
      <div className="products__content-wrapper">
        <h3 className="products__title">
          We proudly represent companies in the food industry, each one a leader
          in its sector
        </h3>
        <div className="products__products-wrapper">
          <img
            className="products__product-category"
            src="./assets/images/tomate_empaque.jpg"
            alt="tomatoes"
          />
          <img
            className="products__product-category"
            src="./assets/images/atun.jpg"
            alt="tuna"
          />
          <img
            className="products__product-category"
            src="./assets/images/guacamole.jpg"
            alt="guacamole"
          />
          <img
            className="products__product-category"
            src="./assets/images/latas.jpg"
            alt="canned food"
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
