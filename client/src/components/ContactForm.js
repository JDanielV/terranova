import React from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();

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
      console.log("Please fill all fields");
    } else {
      axios
        .post("/api", data)
        .then((response) => {
          console.log(response);
          resetForm();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="contact__form-wrapper">
      <form className="contact__form" onSubmit={handleSubmit} id="contact-form">
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
  );
};

export default ContactForm;
