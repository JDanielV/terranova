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
      imgUrl: "",
    },
    {
      title: t("servicesCardTitle2.1"),
      subtitle: t("servicesCardSubtitle2.1"),
      imgUrl: "",
    },
    {
      title: t("servicesCardTitle3.1"),
      subtitle: t("servicesCardSubtitle3.1"),
      imgUrl: "",
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
