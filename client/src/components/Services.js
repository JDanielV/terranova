import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const { t } = useTranslation();

  useEffect(()=> {
    Aos.init({ duration: 1000});
  }, []);

  return (
    <section className="services" id="services">
      <div className="services__content-wrapper">
        <div className="services__text-wrapper1">
          <h2 className="services__title">{t("servicesTitle.1")}</h2>
          <h3 className="services__subtitle">{t("servicesSubtitle.1")}</h3>
        </div>
        <img
          className="services__hero-img"
          src="./assets/images/terranova_bandera.png"
          alt="terranova flag"
        />
        {/* SERVICES CLUSTER 1 */}
        <div className="services__clusters-wrapper">
          <div className="services__cluster1-content">
            <div className="services__cluster1-imgs-container">
              <div className="services__cluster1-wrapper">
                <div className="services__cluster1-img1-container" data-aos="fade-up-left" data-aos-duration="1200"
              data-aos-once="true">
                  <img
                    className="services__cluster1-img1"
                    src="./assets/images/consultoria_01.png"
                    alt="strategy planning"
                  />
                </div>
                <div className="services__cluster1-handshake-bg" data-aos="fade-up" data-aos-duration="800"
              data-aos-once="true"/>
                <div className="services__cluster1-img2-container" data-aos="fade-down-right" data-aos-duration="2000"
              data-aos-once="true">
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
            </div>
          </div>

          {/* SERVICES CLUSTER 2 */}
          <div className="services__cluster2-content">
            <div className="services__cluster2-imgs-container">
              <div className="services__cluster2-wrapper">
                <div className="services__cluster2-img1-container" data-aos="fade-up-left" data-aos-duration="2000"
              data-aos-once="true">
                  <img
                    className="services__cluster2-img1"
                    src="./assets/images/logistica_01.png"
                    alt="logistics"
                  />
                </div>
                <div className="services__cluster2-trailer-bg" data-aos="fade-up" data-aos-duration="800"
              data-aos-once="true"/>
                <div className="services__cluster2-img2-container" data-aos="fade-down-right" data-aos-duration="1200"
              data-aos-once="true">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
