import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const { t } = useTranslation();

  const servicesData = [
    {
      title: t("servicesCardTitle1.1"),
      subtitle: t("servicesCardSubtitle1.1"),
      imgUrl: "./assets/images/prospects.jpg",
      alt: "prospects",
    },
    {
      title: t("servicesCardTitle2.1"),
      subtitle: t("servicesCardSubtitle2.1"),
      imgUrl: "./assets/images/sales.jpg",
      alt: "sales call",
    },
    {
      title: t("servicesCardTitle3.1"),
      subtitle: t("servicesCardSubtitle3.1"),
      imgUrl: "./assets/images/logistics.jpg",
      alt: "logistics",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="services" id="services">
      <div className="services__content-wrapper">
        <div className="services__text">
          <h2 className="home-about__about-title">{t("servicesTitle.1")}</h2>
          <h3 className="services__subtitle">{t("servicesSubtitle.1")}</h3>
          <div className="home-about__about-descr-wrapper">
            <div className="home-about__about-descr-indent" />
            <div className="services__text-paragraph-wrapper">
              <p className="services__text-paragraph">
                {t("servicesParagraph1.1")}
              </p>
            </div>
          </div>
        </div>
        <div className="services__cards-wrapper">
          {servicesData.map((service) => {
            return (
              <div className="services__card">
                <div className="services__card-top-wrapper">
                  <img
                    className="services__card-img"
                    src={service.imgUrl}
                    alt={service.alt}
                  />
                </div>
                <div className="services__card-bottom-wrapper">
                  <span className="services__card-title">{service.title}</span>
                  <span className="services__card-subtitle">
                    {service.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <img
          className="services__hero-img"
          src="./assets/images/terranova_bandera.png"
          alt="terranova flag"
        />
      </div>
    </section>
  );
};

export default Services;
