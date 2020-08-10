import React from "react";

const HomeAbout = () => {
  return (
    // HOME HTML STARTS HERE
    <section className="home-about">
      <div className="home-about__home-title-container">
        <h1 className="home-about__home-title">
          Manufacturers' Representative
        </h1>
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
        <div className="home-about__about-circular-pic2-container"></div>
        <div className="home-about__about-text">
          <h2 className="home-about__about-title">About Us</h2>
          <h3 className="home-about__about-subtitle">
            Custom Solutions and Value for the Long Term
          </h3>
          <div className="home-about__about-descr-wrapper">
            <div className="home-about__about-descr-indent" />
            <div className="home-about__about-paragraph-wrapper">
              <p className="home-about__about-paragraph">
                Those who know us, describe our company as: international sales
                experience and positive relationships.
              </p>
              <p className="home-about__about-paragraph">
                We have been in business since 2013, and our team has more than
                25 years of experience in Business to Business sales in Canada,
                the U.S. and Mexico.
              </p>
              <p className="home-about__about-paragraph">
                Our specialty is turning business opportunities into business
                relationships, with a long-term vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
