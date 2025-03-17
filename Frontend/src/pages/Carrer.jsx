import React from "react";
import { Button } from "@mui/material";

const Contact = () => {
  return (
    <div className="ml-4 mr-4 text-white">
      <div className="image">
        <img
          src="hire.jpg"
          className="w-screen h-64 object-cover md:h-screen"
        />
      </div>
      <div className="text-white md:mt-20">
        <h2 className="text-4xl font-Lexend font-bold text-center mt-10 md:text-5xl">
          Current Opportunities
        </h2>
        <p className="text-center mt-5 text-[#727479] md:text-lg">
          Exciting Opportunities Await: Join Our Team
        </p>
        <div className="grid grid-cols-2 gap-10 mt-10 md:place-items-center md:p-20 md:mt-0">
          <div className="">
            <img
              src="1.webp"
              className="md:rounded-[2rem] md:h-[20rem] md:w-[26rem] rounded-lg"
            />
            <h2 className="font-bold font-lexend text-center mt-2">
              Deep Learning intern
            </h2>
          </div>
          <div>
            <img
              src="2.webp"
              className="md:rounded-[2rem] md:h-[20rem] md:w-[26rem] rounded-lg"
            />
            <h2 className="font-bold font-lexend text-center mt-2">
              Web Dev intern
            </h2>
          </div>
          <div className="flex-1">
            <img
              src="3.webp "
              className="md:rounded-[2rem] md:h-[20rem] md:w-[26rem] rounded-lg"
            />
            <h2 className="font-bold font-lexend text-center mt-2">
              IOT intern
            </h2>
          </div>
          <div>
            <img
              src="4.webp"
              className="md:rounded-[2rem] md:h-[20rem] md:w-[26rem] rounded-lg"
            />
            <h2 className="font-bold font-lexend text-center mt-2">
              Sales intern
            </h2>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-Lexend font-bold text-center mt-10 md:mt-0 md:text-5xl">
          Steps To Apply!
        </h2>
        <div className="mt-10 flex flex-col md:flex-row md:flex-wrap md:justify-evenly md:ml-20 md:mr-20 md:gap-16 gap-10 md:mt-20">
          <div className="flex flex-col items-center">
            <img
              src="5.webp"
              className="rounded-lg h-[16rem] md:h-[20rem] md:w-[20rem] w-full object-cover"
            />
            <Button
              sx={{
                backgroundColor: "#622fca",
                color: "white",
                padding: "10px",
                paddingLeft: "20px",
                paddingRight: "20px",
                borderRadius: "50px",
                fontSize: "12px",
                marginTop: { xs: "16px", md: "30px" },
                fontWeight: "bold",
              }}
              target="_blank"
              rel="noopener noreferrer"
              fontFamily="Lexend"
              href="https://forms.gle/kqJkofSCwuqrpq266"
            >
              Survey Form
            </Button>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="6.webp"
              className="rounded-lg h-[16rem] w-full object-cover md:h-[20rem] md:w-[20rem]"
            />
            <Button
              sx={{
                backgroundColor: "#622fca",
                color: "white",
                padding: "10px",
                paddingLeft: "20px",
                paddingRight: "20px",
                borderRadius: "50px",
                fontSize: "12px",
                marginTop: { xs: "16px", md: "30px" },
                fontWeight: "bold",
              }}
              target="_blank"
              rel="noopener noreferrer"
              fontFamily="Lexend"
              href="https://docs.google.com/forms/d/e/1FAIpQLScn93SbaKsNUR8jzXj61mqsEdZGn-uaTc57oefZP5PuECYchw/viewform"
            >
              Application Form
            </Button>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="7.webp"
              className="rounded-lg h-[16rem] w-full object-cover md:h-[20rem] md:w-[20rem]"
            />
            <h3 className="text-center font-bold mt-3 md:mt-8">
              Showcase your skills in a technical evaluation.
            </h3>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="8.webp"
              className="rounded-lg h-[16rem] w-full object-cover md:h-[20rem] md:w-[20rem]"
            />
            <h3 className="text-center font-bold mt-3 md:mt-8">
              Engage with our team in the final discussion.
            </h3>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="9.webp"
              className="rounded-lg h-[16rem] w-full object-cover md:h-[20rem] md:w-[20rem]"
            />
            <h3 className="text-center font-bold mt-3 md:mt-8">
              Congratulations! Welcome aboard. 🚀
            </h3>
          </div>
        </div>
      </div>
      <div className="text-[#909398] text-center mt-10 md:mt-16">
        <h3>Note:</h3>
        <p className="mt-3">
          Completing both the Survey Form and Application Form is mandatory to
          be considered for the Tech Assessment round. Incomplete applications
          will not be processed !!
        </p>
      </div>
    </div>
  );
};

export default Contact;
