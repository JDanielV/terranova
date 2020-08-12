import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__content-wrapper">
        <h2 className="contact__title">Contact</h2>
        <div className="contact__img-text-wrapper">
          <img
            className="contact__img"
            src="./assets/images/contacto.png"
            alt="contact"
          />
          <p className="contact__company-name">Terranova Marketing Inc.</p>
          <div className="contact__address">
            <p className="contact__office">Office:</p>
            <p className="contact__office-address1">
              922-51O W Hastings Street,
            </p>
            <p className="contact__office-address2">Vancouver, BC V6B 1L8</p>
            <p className="contact__office-address3">Canada</p>
          </div>
          <div className="contact__address">
            <p className="contact__office">Mailing address:</p>
            <p className="contact__office-address1">
              P.O. Box 93590 Nelson Park,
            </p>
            <p className="contact__office-address2">Vancouver, BC V6E 4L7</p>
            <p className="contact__office-address3">Canada</p>
          </div>
        </div>
        <div className="contact__map" />
        <div className="contact__form-wrapper">
          <form className="contact__form">
            <input className="contact__form-input" type="text" name="name" />
            <input className="contact__form-input" type="text" name="email" />
            <textarea
              className="contact__form-textarea"
              type="text"
              name="message"
            />
            <button className="contact__form-btn" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* FOOTER STARTS */}
      <footer className="contact__footer">
        <span className="contact__footer-company">
          Terranova Marketing Inc.
        </span>
        <img
          className="contact__footer-logo"
          src="./assets/logo/terranova_ic.svg"
          alt="terranova logo"
        />
        <div className="contact__footer-social-wrapper">
          <div className="contact__footer-social-ig" />
          <div className="contact__footer-social-fb" />
        </div>
      </footer>

      {/* FOOTER ENDS */}
    </section>
  );
};

export default Contact;
