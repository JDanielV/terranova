import React, { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();

  const [messageSent, setMessageSent] = useState(undefined);
  const [emptyFields, setEmptyFields] = useState(undefined);

  const resetForm = () => {
    document.getElementById("contact-form").reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const data = {
      name: name,
      email: email,
      message: message,
    };

    if (!name || !email || !message) {
      setEmptyFields(true);
    } else {
      setEmptyFields(false);
      axios
        .post("/api", data)
        .then((response) => {
          console.log(response);
          setMessageSent(true);
          resetForm();
        })
        .catch((err) => {
          console.log(err);
          setMessageSent(false);
        });
    }
  };

  return (
    <div className="contact__form-wrapper">
      <form className="contact__form" onSubmit={handleSubmit} id="contact-form">
        <p className="contact__form-required-fields">
          {t("contactRequiredFields.1")}
        </p>
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
        {messageSent ? (
          <p className="contact__form-message-sent">
            {t("contactMessageSent.1")}
          </p>
        ) : (
          <div></div>
        )}
        {emptyFields ? (
          <p className="contact__form-message-sent">
            {t("contactEmptyFields.1")}
          </p>
        ) : (
          <div></div>
        )}
        <button className="contact__form-btn" type="submit">
          {t("contactSendMessage.1")}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
