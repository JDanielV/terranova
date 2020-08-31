import React from "react";
import ContactMap from "./ContactMap";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="contact" id="contact">
      <div className="contact__content-wrapper">
        <h2 className="contact__title">{t("contactTitle.1")}</h2>
        <div className="contact__img-text-wrapper">
          <img
            className="contact__img"
            src="./assets/images/contacto.png"
            alt="contact"
          />
          <p className="contact__company-name">Terranova Marketing Inc.</p>
          <div className="contact__address">
            <p className="contact__office">{t("contactOffice.1")}</p>
            <p className="contact__office-address1">
              922-510 W Hastings Street
            </p>
            <p className="contact__office-address2">Vancouver, BC V6B 1L8</p>
            <p className="contact__office-address3">Canada</p>
          </div>
          <div className="contact__address">
            <p className="contact__office">{t("contactMailing.1")}</p>
            <p className="contact__office-address1">
              P.O. Box 93590 Nelson Park
            </p>
            <p className="contact__office-address2">Vancouver, BC V6E 4L7</p>
            <p className="contact__office-address3">Canada</p>
          </div>
        </div>
        <div className="contact__map-form-wrapper">
          <ContactMap />
          <div className="contact__form-wrapper">
            <form className="contact__form">
              <input
                className="contact__form-input"
                type="text"
                name="name"
                placeholder={`${t("contactName.1")}`}
              />
              <input
                className="contact__form-input"
                type="email"
                name="email"
                placeholder={`${t("contactEmail.1")}`}
              />
              <textarea
                className="contact__form-textarea"
                type="text"
                name="message"
                placeholder={`${t("contactMessage.1")}`}
              />
              <button className="contact__form-btn" type="submit">
                {t("contactSendMessage.1")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
