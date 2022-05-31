import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

const Footer = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  // const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  // const [loading, setLoading] = useState(false);

  // const { username, email, message } = formData;

  // const handleChangeInput = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = () => {
  //   setLoading(true);

  //   const contact = {
  //     _type: "contact",
  //     name: formData.username,
  //     email: formData.email,
  //     message: formData.message,
  //   };
  // };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:ayannagori44@gmail.com" className="p-text">
            ayannagori44@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+91 9870699786" className="p-text">
            +91 9870699786
          </a>
        </div>
      </div>
      {/* {!isFormSubmitted ? ( */}
      <form
        name="contact-form"
        data-netlify="true"
        method="POST"
        className="app__footer-form app__flex"
      >
        <input type="hidden" name="form-name" value="contact-form" />
        <div className="app__flex">
          <input
            className="p-text"
            type="text"
            placeholder="Your Name"
            name="username"
            // value={username}
            // onChange={handleChangeInput}
          />
        </div>
        <div className="app__flex">
          <input
            className="p-text"
            type="email"
            placeholder="Your Email"
            name="email"
            // value={email}
            // onChange={handleChangeInput}
          />
        </div>
        <div>
          <textarea
            className="p-text"
            placeholder="Your Message"
            name="message"
            // value={message}
            // onChange={handleChangeInput}
          />
        </div>
        <button type="button" className="p-text">
          Send message
        </button>
      </form>
      {/* ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )} */}
    </>
  );
};

export default AppWrap(Footer, "app__footer");
