import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { data } from "../../data/about-data";
import { AppWrap } from "../../wrapper";
import "./About.scss";

const About = () => {
  const [abouts, setabouts] = useState([]);
  useEffect(() => {
    setabouts(data);
  }, []);

  return (
    <div className="app__about">
      <h2 className="head-text">
        I Know That <span>Good Design</span>
        <br /> Means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={images[about.image]} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(About, "about");
