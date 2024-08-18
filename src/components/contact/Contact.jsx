import React from "react";

import "./contact.css";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>
      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <ContactCard />
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
