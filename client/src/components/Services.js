import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const { t } = useTranslation();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="services" id="services">
      <div className="services__content-wrapper">
        <div className="home-about__about-text">
          <h2 className="home-about__about-title">{t("servicesTitle.1")}</h2>
          <h3 className="services__subtitle">{t("servicesSubtitle.1")}</h3>
          <div className="home-about__about-descr-wrapper">
            <div className="home-about__about-descr-indent" />
            <div className="home-about__about-paragraph-wrapper">
              <p className="home-about__about-paragraph">
                {t("servicesParagraph1.1")}
              </p>
              <p className="home-about__about-paragraph">
                {t("servicesParagraph2.1")}
              </p>
            </div>
          </div>
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
