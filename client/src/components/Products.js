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
          <div className="products__product-wrapper">
            <div className="products__product-category-img-container">
              <img
                className="products__product-category-img"
                src="./assets/images/tomate_empaque.jpg"
                alt="tomatoes"
              />
            </div>
            <p className="products__product-category-descr">
              Customized packaging for produce, bakery and processed foods
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
              Frozen tuna products for foodservice and retail
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
              Frozen avocado products for foodservice and retail
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
              Canned vegetables for foodservice
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
