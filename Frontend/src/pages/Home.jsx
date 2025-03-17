import React from "react";
import { useState } from "react";
import "tailwindcss/tailwind.css";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <div className="bg-[#03040b] min-h-screen text-white font-[lexend] pl-4 pr-4 pb-5">
      <div className="flex justify-center items-center flex-col mt-4 md:mt-16 ">
        <div className="flex justify-center items-center text-center flex-col text-3xl md:text-7xl font-bold">
          <p className="  ">Unleashing the Power of</p>
          <p className="  ">
            Emotion: Real-Time
            <p>Dowsiness Detection</p>
          </p>
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
      <div className="flex flex-col md:flex-row mt-10 md:mt-16 items-center justify-center md:pr-10 md:pl-10 md:gap-16">
        <img
          src="https://cdn-imgs.dora.run/design/o4UJ0nG2PvKP4xACg1xZx.webp/w/4096/h/4096/format/webp?"
          className=" min-h-20 min-w-screen md:h-[65rem] md:w-[52rem] md:aspect-auto md:mr-16"
        />
        <div className="flex flex-col font-Golos mt-5 md:justify-center md:gap-32">
          <div>
            <h2 className="text-xl md:text-2xl">Detects Drowsiness</h2>
            <p className="text-md md:text-lg text-[#878785] mt-2">
              Cutting-Edge Emotion Recognition
            </p>
          </div>
          <div className="mt-5">
            <h2 className="text-xl md:text-2xl ">Prevents Accidents</h2>
            <p className="text-md md:text-lg text-[#878785] mt-2">
              Innovatibe AI-Powered Solution
            </p>
          </div>
          <div className="mt-5">
            <h2 className="text-xl md:text-2xl ">Enhances Driver Safety</h2>
            <p className="text-md md:text-lg text-[#878785] mt-2">
              Revolutionize Road Safety
            </p>
          </div>
          <div className="mt-5">
            <h2 className="text-xl md:text-2xl ">Real-Time Monitoring</h2>
            <p className="text-md md:text-lg text-[#878785] mt-2">
              Comprehensive Drowsiness Detection System
            </p>
          </div>
          <div className="mt-5">
            <h2 className="text-xl md:text-2xl ">Personalized Alerts</h2>
            <p className="text-md md:text-lg text-[#878785] mt-2">
              Advanced Algorithms for Optimal Performance
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-car h-[27rem] flex justify-center items-center md:mt-24 md:justify-start pt-6 pb-6 mt-7 bg-cover md:h-screen rounded-lg">
        <div className=" bg-[#0b0f16] p-6 md:w-5/12 md:h-screen rounded-lg md:flex md:flex-col md:gap-8 md:justify-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Navigating the
            <br /> Future of Mobility
          </h2>

          <p className="mt-5 font-Golos text-lg text-[#878785]">
            Discover the Power of EMOTE-ION: AI-driven Drowsiness Detection for
            a Safer, More Secure Driving Experience
          </p>
          <div className="flex justify-center mt-6 min-w-full md:min-w-12 md:justify-start">
            <Button
              sx={{
                backgroundColor: "#ffef6c",
                minWidth: "inherit",
                padding: { md: "20px 40px" },
                borderRadius: { md: "50px", xs: "50px" },
                fontSize: { md: "16px" },
                fontWeight: { md: "bold" },
                color: "#615836",
              }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://emoteionmain-5hzda4f44ll3depnypk9w3.streamlit.app/"
            >
              Let's try it
            </Button>
          </div>
        </div>
        {/* <div className="hidden md:block">
          <img src="/car.webp" className="w-[50rem] h-screen aspect-square" />
        </div> */}
      </div>
      <div className="mt-10 md:mt-28">
        <h2 className="text-3xl md:text-7xl font-bold text-center">
          Transforming the Driving Experience
        </h2>
        <p className="text-lg text-[#878785] mt-5 text-center font-Golos">
          Unlock the Future of Mobility with EMOTE-ION's Groundbreaking Emotion
          Recognition <br />
          and Drowsiness Detection Technology
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:gap-6 md:ml-12 md:mr-12 mt-10 md:mt-20 items-center justify-center min-w-screen  ">
        <div className="flex flex-col md:w-5/12  items-center p-14 font-Golos mt-5 bg-[#141921] min-h-96 rounded">
          <img className="h-40 w-46" src="eye.webp" alt="img" />
          <h2 className="text-3xl font-bold text-center mt-5">
            Intelligent Monitoring
          </h2>
          <p className="text-lg text-[#878785] mt-5 text-center">
            Cutting-Edge AI Algorithms for Enhanced Driver Safety
          </p>
        </div>
        <div className="flex flex-col md:w-5/12 items-center p-14 font-Golos mt-5 bg-[#141921] min-h-96 rounded">
          <img className="h-40 w-46" src="alert.webp" alt="img" />
          <h2 className="text-3xl font-bold text-center mt-5">
            Personalized Alerts
          </h2>
          <p className="text-lg text-[#878785] mt-5 text-center">
            Real-Time Drowsiness Detection for Improved Road Safety
          </p>
        </div>
        <div className="flex flex-col md:w-5/12 items-center p-14 font-Golos mt-5 bg-[#141921] min-h-96 md:min-h-[25rem] rounded">
          <img className="h-40 w-46" src="brain.webp" alt="img" />
          <h2 className="text-3xl font-bold text-center mt-5">EMOTE-ION</h2>
          <p className="text-lg text-[#878785] mt-5 text-center">
            Revolutionary AI-Powered Solutions
          </p>
        </div>
      </div>
      <div className="bg-[#ffe765] md:mt-20 mt-10 pb-6 md:rounded-t-lg md:flex md:h-40 md:justify-between md:items-baseline md:pt-6 ">
        <h2 className="text-[#3c391f] text-3xl font-bold text-center pt-10 md:ml-64">
          Empowering Drivers, Saving Lives
        </h2>
        <div className="flex justify-center items-center flex-col mt-5 min-w-full md:min-w-96 md:mr-64 p-2">
          <Button
            sx={{
              backgroundColor: "#6a0dad",
              color: "white",
              padding: { md: "20px 40px" },
              borderRadius: { md: "50px", xs: "50px" },
              fontSize: { md: "16px" },
              fontWeight: { md: "bold" },
            }}
            href="/about"
          >
            About us
          </Button>
        </div>
      </div>
      <div className="mt-10 md:mt-0 h-1 flex justify-center overflow-hidden">
        <div className="bg-white text-[#e8a605] w-16 md:w-[33%]"></div>
        <div className="bg-[#e8a605] text-[#e8a605] w-14 md:w-[33%]"></div>
        <div className="bg-white text-[#e8a605] w-16 md:w-[33%]"></div>
        <div className="bg-[#fbfe2b] text-[#fbfe2b] w-14 md:w-[33%]"></div>
        <div className="bg-white text-[#e8a605] w-16 md:w-[33%]"></div>
      </div>
      <div className="mt-10 md:mt-20 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-6xl font-bold text-center">
          Pioneering the Future of Mobility
        </h2>
        <p className="text-lg text-[#878785] mt-8 text-center font-Golos">
          Experience the Power of EMOTE-ION: Transforming Road Safety with
          Real-Time <br /> Emotion Recognition and Drowsiness Detection
        </p>
      </div>
      <div className="flex flex-col md:justify-center md:h-screen md:flex-row md:mt-20 md:min-w-screen mt-16 items-center justify-center ">
        <div className="flex flex-col md:ml-20 md:gap-20 gap-8 md:w-4/12">
          <div className="">
            <h2 className="text-3xl font-bold ">Personalized Insights</h2>
            <p className="text-lg text-[#878785] mt-5  font-Golos">
              Advanced Algorithms for Optimal Performance
            </p>
          </div>
          <div className="">
            <h2 className="text-3xl font-bold ">Preventive Measures</h2>
            <p className="text-lg text-[#878785] mt-5  font-Golos">
              Comprehensive Drowsiness Detection System
            </p>
          </div>
          <div className="">
            <h2 className="text-3xl font-bold ">Intelligent Alerts</h2>
            <p className="text-lg text-[#878785] mt-5  font-Golos">
              Enhancing Driver Awareness and Safety
            </p>
          </div>
        </div>
        <div className="mt-10 p-5 md:w-7/12">
          <img
            className="min-w-[22rem] h-[20rem] md:h-[90vh] md:w-full oject-contain"
            src="/car1.webp"
          />
        </div>
      </div>
      <div className="m-10 md:mt-20 justify-center items-center flex flex-col md:w-[98vw] md:ml-0 md:bg-[#0c1015]">
        <div className="text-center md:mt-32">
          <h2 className="text-3xl md:text-7xl font-bold">Our Purpose</h2>
          <p className="text-lg text-[#878785] mt-5  font-Golos">
            Redefining Road Safety with EMOTE-ION
          </p>
        </div>
        <div className="md:flex md:w-11/12 md:h-screen md:gap-10">
          <img
            className="min-w-[22rem] h-[20rem] mt-10 md:w-full md:h-[90vh] rounded-lg oject-contain"
            src="/ai person.webp"
          />
          <div className="flex flex-col mt-10 bg-[#151a22] pt-10 pb-10 pl-5 pr-5 w-[90vw] md:h-[90vh] rounded-lg">
            <h1 className="text-3xl md:ml-4 md:text-4xl md:mt-16 font-bold">
              Our Mission
            </h1>
            <h2 className="text-xl md:ml-4 font-semibold text-[#878785] mt-1 font-Golos">
              Empowering Drivers
            </h2>
            <p className="text-md text-[#878785] md:text-lg md:ml-4 mt-5 font-Golos">
              At EMOTE-ION, we are on a mission to revolutionize road safety by
              harnessing the power of real-time emotion recognition and
              drowsiness detection. Our cutting-edge AI-driven solutions aim to
              prevent accidents and save lives
            </p>
            <p className="text-lg md:ml-4 text-[#5a89a4] md:mt-10 mt-5  font-Golos">
              Partner with Us
            </p>
            <Button
              sx={{
                marginTop: { xs: 3, sm: 3, md: 10 },
                backgroundColor: "#ffad51",
                color: "black",
                padding: { md: "10px" },
                borderRadius: { md: "50px", xs: "50px" },
                fontSize: { md: "20px" },
                fontWeight: { md: "bold" },
              }}
              href="/contact"
            >
              Join us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
