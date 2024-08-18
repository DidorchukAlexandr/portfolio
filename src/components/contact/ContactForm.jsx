import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ReactComponent as Send } from "../../assets/send.svg";
import { toast } from "react-hot-toast";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(() => toast.success("Successfully send!"))
      .catch((e) => toast.error("Successfully send!"));

    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact__form">
      <div className="contact__form-div">
        <label className="contact__form-tag">Name</label>
        <input
          required
          type="text"
          name="name"
          placeholder="Insert you name"
          className="contact__form-input"
        />
      </div>

      <div className="contact__form-div">
        <label className="contact__form-tag">Mail</label>
        <input
          required
          type="email"
          name="email"
          placeholder="Insert you name"
          className="contact__form-input"
        />
      </div>

      <div className="contact__form-div contact__form-area">
        <label className="contact__form-tag">Project</label>
        <textarea
          required
          minLength="10"
          name="project"
          cols="30"
          rows="10"
          className="contact__form-input"
          placeholder="Write you project"
        ></textarea>
      </div>

      <button className="button button--flex">
        Say Hello
        <Send />
      </button>
    </form>
  );
};

export default ContactForm;
