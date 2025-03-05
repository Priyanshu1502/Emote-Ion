import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import "tailwindcss/tailwind.css";

const Home = () => {
  return (
    <div className="bg-black min-h-screen text-white font-[lexend] pl-4 pr-4">
      <Header />
      <div className="flex justify-center items-center flex-col mt-4 md:mt-10 ">
        <div className="flex justify-center items-center text-center flex-col text-3xl md:text-7xl font-bold">
          <p className="  ">Unleashing the Power of</p>
          <p className="  ">Emotion: Real-Time Dowsiness Detection</p>
        </div>
        <div className="flex justify-center text-[#878785] text-center font-Golos items-center flex-col text-lg mt-6 md:mt-10 md:text-2xl">
          <p className=" ">
            Welcome to EMOTE-ION, the revolutionary startup dedicated to
            preventing road
          </p>
          <p className="">
            accidents through cutting-edge emotion recognition technology
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-10 items-center justify-center ">
        <img
          src="https://cdn-imgs.dora.run/design/o4UJ0nG2PvKP4xACg1xZx.webp/w/4096/h/4096/format/webp?"
          className=" min-h-20 min-w-screen object-cover"
        />
        <div className="flex flex-col font-Golos mt-5">
          <div>
            <h2 className="text-xl ">Detect Drowsiness</h2>
            <p className="text-md text-[#878785] mt-2">
              Cutting-Edge Emotion Recognition
            </p>
          </div>
          <div className="mt-5">
            <h2 className="text-xl ">Prevents Accidents</h2>
            <p className="text-md text-[#878785] mt-2">
              Innovatibe AI-Powered Solution
            </p>
          </div>
          <div className="mt-5">
            <h2 className="text-xl ">Enhances Driver Safety</h2>
            <p className="text-md text-[#878785] mt-2">
              Revolutionize Road Safety
            </p>
          </div>
          <div className="mt-5">
            <h2 className="text-xl ">Real-Time Monitoring</h2>
            <p className="text-md text-[#878785] mt-2">
              Comprehensive Drowsiness Detection System
            </p>
          </div>
          <div className="mt-5">
            <h2 className="text-xl ">Personalized Alerts</h2>
            <p className="text-md text-[#878785] mt-2">
              Advanced Algorithms for Optimal Performance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
