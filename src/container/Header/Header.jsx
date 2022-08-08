import React, { useRef, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { images } from "../../constants";

import { AppWrap } from "../../wrapper";

import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  const firstImage = useRef();

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      firstImage.current.style.transform = `translate(-50% ,-${
        window.pageYOffset * 1.5
      }px)`;
    });
  }, []);

  return (
    <div className="app__header app__flex">
      <motion.div
        className="app__header-info"
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="app__header-badge">
          <div className="badge-cmp app-flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I'am</p>
              <h1 className="head-text">Ayan</h1>
            </div>
          </div>

          <div className="tag-cmp app-flex">
            <p className="p-text">Designer / UI-UX</p>
            <p className="p-text">Web Developer</p>
            <p className="p-text">FreeLancer</p>
          </div>
        </div>
      </motion.div>

      {/* -------------------------------- */}
      {/* -------------------------------- */}

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.2 }}
        className="app__header-img"
      >
        <img ref={firstImage} src={images.text} alt="Hero Text" />
      </motion.div>

      {/* -------------------------------- */}
      {/* -------------------------------- */}

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.figma, images.react, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
