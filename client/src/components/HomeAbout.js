import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";

const HomeAbout = () => {
  const { t } = useTranslation();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    // HOME HTML STARTS HERE
    <section className="home-about" id="home-about">
      <div className="home-about__home-title-container">
        <h1 className="home-about__home-title">{t("heroHeader.1")}</h1>
      </div>
      <div className="home-about__pic-cluster">
        <div className="home-about__pic1-container">
          <img
            className="home-about__pic1"
            src="./assets/images/contenedores_01.png"
            alt="containers"
          />
        </div>

        <div className="home-about__circular-pic1-container">
          <div className="home-about__circular-pic1-outer-circle">
            <img
              className="home-about__circular-pic1"
              src="./assets/images/deal.png"
              alt="handshake deal"
            />
          </div>
        </div>

        <div className="home-about__pic2-container">
          <img
            className="home-about__pic2"
            src="./assets/images/trailers_01.png"
            alt="trailers"
          />
        </div>
      </div>

      {/* ABOUT PAGE HTML STARTS HERE */}

      <div className="home-about__about-container">
        <div className="home-about__about-circular-pic2-container" data-aos="fade-up-left"
          data-aos-duration="2000"
          data-aos-once="true" />
        <div className="home-about__about-text">
          <h2 className="home-about__about-title">{t("aboutTitle.1")}</h2>
          <h3 className="home-about__about-subtitle">{t("aboutSubtitle.1")}</h3>
          <div className="home-about__about-descr-wrapper">
            <div className="home-about__about-descr-indent" />
            <div className="home-about__about-paragraph-wrapper">
              <p className="home-about__about-paragraph">
                {t("aboutParagraph1.1")}
              </p>
              <p className="home-about__about-paragraph">
                {t("aboutParagraph2.1")}
              </p>
              <p className="home-about__about-paragraph">
                {t("aboutParagraph3.1")}
              </p>
            </div>
          </div>
          <div className="home-about__about-video-wrapper">
            <iframe width="100%" height="100%" src={t("aboutVideo.1")} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true" title="youtube presentation video"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
