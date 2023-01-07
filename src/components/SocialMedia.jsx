import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://github.com/ayannagori44">
        <FaGithub />
      </a>
      <a>
        <BsTwitter />
      </a>
      <a>
        <FaFacebookF />
      </a>
    </div>
  );
};

export default SocialMedia;
