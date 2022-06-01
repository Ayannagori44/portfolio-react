import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import "./Footer.scss";

const Footer = () => {
  const copyText = function (e) {
    let text = e.target.children[1].textContent;
    const textArea = document.createElement("textarea");
    textArea.setAttribute("readonly", "");
    textArea.style.position = "absolute";
    textArea.value = e.target.children[1].textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");

    e.target.children[1].textContent = "Text Copied!";
    setTimeout(() => {
      e.target.children[1].textContent = text;
    }, 1000);
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card" onClick={(e) => copyText(e)}>
          <img src={images.email} alt="email" />
          <a href="" className="p-text">
            ayannagori44@gmail.com
          </a>
        </div>
        <div className="app__footer-card" onClick={(e) => copyText(e)}>
          <img src={images.mobile} alt="phone" />
          <a href="" className="p-text">
            +91 9870699786
          </a>
        </div>
      </div>
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
          />
        </div>
        <div className="app__flex">
          <input
            className="p-text"
            type="email"
            placeholder="Your Email"
            name="email"
          />
        </div>
        <div>
          <textarea
            className="p-text"
            placeholder="Your Message"
            name="message"
          />
        </div>
        <button type="submit" className="p-text">
          Send message
        </button>
      </form>
    </>
  );
};

export default AppWrap(Footer, "app__footer");
