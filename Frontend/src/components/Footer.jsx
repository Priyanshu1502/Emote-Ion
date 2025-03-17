import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="bg-white h-[1px] mt-10"></div>
      <div className="flex justify-between items-center mt-5 ml-6 mr-6">
        <Link
          to="https://www.instagram.com/emote_ion?igsh=MXYyeTBwbW9rOXR1cA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/insta.webp" className="w-8 h-8 cursor-pointer" />
        </Link>
        <Link
          to="https://www.linkedin.com/company/emote-ion/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/linkedin.webp" className="w-8 h-8 cursor-pointer" />
        </Link>
      </div>
      <div className="flex justify-center items-center mt-5 pb-10">
        <p className="text-white">
          &copy; 2024 EMOTE-ION. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
