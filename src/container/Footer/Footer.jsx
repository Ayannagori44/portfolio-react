import React, { useRef } from "react";

import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import ReactTooltip from "react-tooltip";

import "./Footer.scss";

const Footer = () => {
  const currentTooltip = useRef(null);

  const copyText = function (e) {
    let parentDiv = e.currentTarget;
    let button = parentDiv.children[1];
    let textArea = document.createElement("textarea");
    let ptags = [...button.children];

    // copy text
    textArea.setAttribute("readonly", "");
    textArea.style.position = "absolute";
    textArea.style.top = "0";
    textArea.style.opacity = "0";
    textArea.value = button.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");

    // add particle
    let lottie = parentDiv.children[2];
    lottie.play();

    // toggle between info to text copied
    ptags.forEach((el) => el.classList.add("active"));

    // prevent spam
    parentDiv.style.pointerEvents = "none";

    setTimeout(() => {
      ptags.forEach((el) => el.classList.remove("active"));

      parentDiv.style.pointerEvents = "all";
      lottie.stop();
    }, 2500);
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        {["mobile", "email"].map((el) => {
          return (
            <div
              key={el}
              className="app__footer-card"
              data-tip="Tap to copy"
              data-for="tooltip"
              onClick={(e) => copyText(e)}
              onMouseEnter={() => {
                ReactTooltip.show();
                currentTooltip.current.tooltipRef.style.opacity = 1;
              }}
              onMouseLeave={() =>
                (currentTooltip.current.tooltipRef.style.opacity = 0)
              }
            >
              <img
                src={images[el === "mobile" ? "mobile" : "email"]}
                alt={el}
              />
              <h6 className="p-text btn-copy">
                <p>
                  {el === "mobile"
                    ? "91+ 9870699786"
                    : "ayannagori44@gmail.com"}
                </p>
                <span>Text Copied!</span>
              </h6>

              <lottie-player
                src="https://assets9.lottiefiles.com/packages/lf20_ahrbr631.json"
                background="transparent"
                speed="2"
              ></lottie-player>
            </div>
          );
        })}
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
