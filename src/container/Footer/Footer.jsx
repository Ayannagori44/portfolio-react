import React, { useRef } from "react";

import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import ReactTooltip from "react-tooltip";

import "./Footer.scss";

const Footer = () => {
  const currentTooltip = useRef(null);

  const copyText = function (e) {
    let currentParent = e.currentTarget;
    let text = currentParent.children[1].textContent;
    let textArea = document.createElement("textarea");
    textArea.setAttribute("readonly", "");

    textArea.style.position = "absolute";
    textArea.style.top = "0";
    textArea.style.opacity = "0";
    textArea.value = currentParent.children[1].textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");

    currentParent.children[1].textContent = "Text Copied!";
    setTimeout(() => {
      currentParent.children[1].textContent = text;
    }, 1000);
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div
          className="app__footer-card"
          data-tip="Tap to copy"
          data-for="tooltip"
          onClick={(e) => {
            copyText(e);
          }}
          onMouseEnter={() => {
            ReactTooltip.show();
            currentTooltip.current.tooltipRef.style.opacity = 1;
          }}
          onMouseLeave={() => {
            currentTooltip.current.tooltipRef.style.opacity = 0;
          }}
        >
          <img src={images.email} alt="email" />
          <a href="" className="p-text" onClick={(e) => e.preventDefault()}>
            ayannagori44@gmail.com
          </a>
        </div>
        <div
          className="app__footer-card"
          data-tip="Tap to copy"
          data-for="tooltip"
          onClick={(e) => {
            copyText(e);
          }}
          onMouseEnter={() => {
            ReactTooltip.show();
            currentTooltip.current.tooltipRef.style.opacity = 1;
          }}
          onMouseLeave={() => {
            ReactTooltip.hide(
              (currentTooltip.current.tooltipRef.style.opacity = 0)
            );
          }}
        >
          <img src={images.mobile} alt="phone" />
          <a href="" className="p-text" onClick={(e) => e.preventDefault()}>
            +91 9870699786
          </a>
        </div>
        <ReactTooltip
          styles={{ position: "absolute", top: 0, left: 0 }}
          ref={currentTooltip}
          id="tooltip"
        ></ReactTooltip>
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
            name="name"
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
            style={{ resize: "none", height: "100px" }}
          />
        </div>
        <button type="submit" className="p-text">
          Send message
        </button>
      </form>
    </>
  );
};

export default AppWrap(Footer, "contact", "app__footer");
