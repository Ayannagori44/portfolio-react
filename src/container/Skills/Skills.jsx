import React, { useState, useEffect } from "react";

// import Tooltip from "react-power-tooltip";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { data } from "../../data/skills-data";
import { Edata } from "../../data/experience-data";
import { images } from "../../constants";
import ReactTooltip from "react-tooltip";
import "./Skills.scss";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(data);
    setExperiences(Edata);
  }, []);

  return (
    <section className="skills">
      <h2 className="head-text">Skills & Experience</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list" key="skills">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={images[skill.name]} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AppWrap(Skills, "skills", "app__skills");
