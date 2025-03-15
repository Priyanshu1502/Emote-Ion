import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-white h-1 mt-10"></div>
      <div className="flex justify-between items-center mt-5 ml-6 mr-6">
        <img src="/insta.webp" className="w-8 h-8" />
        <img src="/linkedin.webp" className="w-8 h-8" />
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
