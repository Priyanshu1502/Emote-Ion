import { Button } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div className="bg-[#03040b] text-white mr-6 ml-6 md:mr-14 md:ml-14">
      <div className="flex flex-col justify-between mt-14 gap-5 md:flex-row md:mt-32 md:justify-between">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-4xl font-Lexend font-bold md:text-6xl">
            Om Agarwal
          </h2>
          <h3 className="text-sm font-Lexend md:text-2xl md:mt-4 md:font-bold text-[#909398]">
            Founder & CEO
          </h3>
        </div>
        <div className="md:w-6/12">
          <p className="text-[#909398] text-center md:text-justify">
            As an entrepreneur leading innovation in emotion recognition
            technology, I'm dedicated to enhancing existing solutions with
            AI-driven insights. By seamlessly integrating emotions into
            technology, we aim to create smarter, more intuitive experiences
            that improve safety, efficiency, and human connection. Join me in
            shaping the future of intelligent technology.
          </p>
        </div>
      </div>
      <div className="md:mt-20">
        <img
          className="rounded-t-xl mt-6 md:h-[38rem] md:w-screen md:rounded-[2rem]"
          src="/waves.webp"
        />
      </div>
      <div className="hidden md:block h-[1px] bg-white mt-32 "></div>
      <div className=" mt-32">
        <p className="text-5xl font-Lexend font-bold text-center">
          Our Supporters
        </p>
        <div className="flex flex-col md:flex-row mt-10 md:mt-20 md:justify-between gap-8 items-center justify-center md:ml-10 md:mr-10">
          <img
            className="h-24 w-9/12 md:h-[8rem] md:w-4/12"
            src="upes_logo.png"
          />
          <img className="h-24 w-9/12 md:h-[8rem] md:w-4/12" src="runway.png" />
        </div>
      </div>
      <div className="mt-32 md:flex md:justify-between">
        <div className="flex flex-col gap-2 md:w-11/12">
          <h3 className="text-sm text-[#909398] md:font-bold">
            Sensing Your Emotions
          </h3>
          <h2 className="text-4xl font-Lexend font-bold md:text-5xl">
            Tech That Cares About Your Emotions
          </h2>
        </div>
        <div className="mt-6 md:ml-32">
          <p className="text-[#909398] text-wrap md:text-lg">
            Integrating advanced emotion recognition technology into existing
            solutions to make them more intelligent, responsive, and
            human-centric for a safer and more connected future.
          </p>
          <Button
            sx={{
              marginTop: { xs: 3, sm: 3, md: 3 },
              backgroundColor: "#e7991e",
              color: "white",
              padding: { xs: "10px" },
              paddingLeft: { xs: "20px" },
              paddingRight: { xs: "20px" },
              borderRadius: { md: "50px", xs: "50px" },
              fontSize: { md: "16px" },
            }}
          >
            Contact Us
          </Button>
        </div>
      </div>
      <div className="hidden md:block h-[1px] bg-white mt-32 "></div>

      <div className="mt-32">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-Lexend font-bold text-center md:text-6xl">
            Meet our team members
          </h2>
          <h3 className="text-sm text-[#909398] text-center md:text-base">
            Meet the passionate minds driving innovation in emotion recognition
            technology.
          </h3>
        </div>
        <div className="mt-10 flex flex-wrap justify-center items-center gap-4 pb-20 md:justify-center md:flex-nowrap md:items-center md:gap-32">
          <div className="w-5/12 h-48 md:h-[24rem] md:w-[20rem] md:flex md:items-center md:flex-col">
            <img
              src="lucky.png"
              className="rounded-xl h-full md:h-[24rem] md:w-[20rem]"
            />
            <h3 className="text-center font-bold mt-3">Aaman Siddiqui</h3>
            <h2 className="text-center text-[#727479]">Co-Founder</h2>
          </div>
          <div className="w-5/12 h-48 md:h-[24rem] md:w-[20rem] md:flex md:items-center md:flex-col">
            <img
              src="fr.png"
              className="rounded-xl h-full md:h-[24rem] md:w-[20rem]"
            />
            <h3 className="text-center font-bold mt-3">Kshitij Pratap Tomer</h3>
            <h2 className="text-center text-[#727479]">Tech Team Lead I</h2>
          </div>
          <div className="w-5/12 h-48 md:h-[24rem] md:w-[20rem] md:flex md:items-center md:flex-col">
            <img
              src="kanahiya.png"
              className="rounded-xl h-full md:h-[24rem] md:w-[20rem]  "
            />
            <h3 className="text-center font-bold mt-3">Kanhaiya Sethi</h3>
            <h2 className="text-center text-[#727479]">Tech Team Lead II</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
