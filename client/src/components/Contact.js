import React from "react";
import ContactMap from "./ContactMap";
import ContactForm from "./ContactForm";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="contact" id="contact">
      <div className="contact__content-wrapper">
        <h2 className="contact__title">{t("contactTitle.1")}</h2>
        <div className="contact__info-form-map-wrapper">
          <div className="contact__img-text-wrapper">
            <img
              className="contact__img"
              src="./assets/images/contacto.png"
              alt="contact"
            />
            <div className="contact__text-wrapper">
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
          </div>
          <div className="contact__map-form-wrapper">
            <div className="contact__map-wrapper">
              <ContactMap />
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
