import React from "react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <section className="services" id="services">
      <div className="services__text-wrapper1">
        <h2 className="services__title">{t("servicesTitle.1")}</h2>
        <h3 className="services__subtitle">{t("servicesSubtitle.1")}</h3>
        <div className="services__paragraph-wrapper">
          <div className="services__indent" />
          <p className="services__paragraph">{t("servicesParagraph.1")}</p>
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
            {t("servicesService1Subtitle.1")}
          </h3>
          <p className="services__cluster1-paragraph">
            {t("servicesService1Paragraph.1")}
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
            {t("servicesService2Subtitle.1")}
          </h3>
          <p className="services__cluster1-paragraph">
            {t("servicesService2Paragraph.1")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
