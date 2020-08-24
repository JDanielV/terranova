import React from "react";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services__text-wrapper1">
        <h2 className="services__title">Services</h2>
        <h3 className="services__subtitle">Custom Made</h3>
        <div className="services__paragraph-wrapper">
          <div className="services__indent" />
          <p className="services__paragraph">
            Our specialty is working together to find opportunities and provide
            solutions to meet or exceed customer expectations.
          </p>
        </div>
      </div>
      <img
        className="services__hero-img"
        src="./assets/images/terranova_bandera.png"
        alt="terranova flag"
      />
      {/* SERVICES CLUSTER 1 */}
      <div className="services__cluster1-content">
        <div className="services__cluster1-imgs-container">
          <div className="services__cluster1-wrapper">
            <div className="services__cluster1-img1-container">
              <img
                className="services__cluster1-img1"
                src="./assets/images/consultoria_01.png"
                alt="strategy planning"
              />
            </div>
            <div className="services__cluster1-handshake-bg">
              <img
                className="services__cluster1-handshake"
                src="./assets/images/consultoria_04.png"
                alt="handshake"
              />
            </div>
            <div className="services__cluster1-img2-container">
              <img
                className="services__cluster1-img2"
                src="./assets/images/consultoria_02.png"
                alt="containers at port"
              />
            </div>
          </div>
        </div>
        <div className="services__cluster1-text-wrapper">
          <h3 className="services__cluster1-subtitle">
            Sales and international trade consulting
          </h3>
          <p className="services__cluster1-paragraph">
            We can help you find the right market for your products.
          </p>
        </div>
      </div>

      {/* SERVICES CLUSTER 2 */}
      <div className="services__cluster2-content">
        <div className="services__cluster2-imgs-container">
          <div className="services__cluster2-wrapper">
            <div className="services__cluster2-img1-container">
              <img
                className="services__cluster2-img1"
                src="./assets/images/logistica_01.png"
                alt="logistics"
              />
            </div>
            <div className="services__cluster2-trailer-bg"></div>
            <div className="services__cluster2-img2-container">
              <img
                className="services__cluster2-img2"
                src="./assets/images/logistica_02.png"
                alt="warehouse"
              />
            </div>
          </div>
        </div>
        <div className="services__cluster1-text-wrapper">
          <h3 className="services__cluster1-subtitle">
            Logistics: freight, importing, warehousing
          </h3>
          <p className="services__cluster1-paragraph">
            We offer freight, importing into Canada and warehousing services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
