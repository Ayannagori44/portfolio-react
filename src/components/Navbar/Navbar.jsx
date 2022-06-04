import React, { useState } from "react";

import { HiMenuAlt4, HiX } from "react-icons/hi";
import "./Navbar.scss";
import { images } from "../../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="LOGO" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "skills", "work", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div></div>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        <div className={`app__navbar-list ${toggle ? "active" : ""}`}>
          <HiX onClick={() => setToggle(false)} />

          <ul>
            {["home", "about", "work", "skills", "contact"].map((item) => (
              <li key={item}>
                <div></div>
                <a href={`#${item}`} onClick={() => setToggle(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
