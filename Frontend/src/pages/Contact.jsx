import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(form.current);

    emailjs
      .sendForm("service_iuhm9tb", "template_5fswzs8", form.current, {
        publicKey: "UZ5HUhzWGXkUYkaVk",
      })
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="bg-white flex-col flex gap-10 pb-10">
      <div className=" flex-col flex gap-10 md:flex-row md:w-screen md:justify-evenly md:mt-24">
        <div className="flex flex-col ml-6 mr-6 md:ml-16 md:mr-16">
          <h3 className="text-sm text-[#4e4e4e] font-bold font-Lexend mt-10 md:text-base">
            Sensing Your Emotions
          </h3>
          <h2 className="text-4xl font-bold font-Lexend mt-4 md:text-5xl md:mt-2">
            Contact Us
          </h2>
          <p className=" text-[#4e4e4e] font-Lexend mt-4">
            Reach out to us- we'd love to connect and collaborate
          </p>
          <div className="flex flex-col gap-4 mt-16 md:mt-10">
            <p className="">
              <MailOutlineIcon />
              &emsp; emoteion24@gmail.com
            </p>
            <p>
              <PhoneOutlinedIcon />
              &emsp; +91-9027725404
            </p>
            <p>
              <RoomOutlinedIcon />
              &emsp; Runway Incubators, UPES, Dehradun
            </p>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col ml-6 mr-6 mt-10 md:w-[34rem] "
        >
          <label className="font-bold text-[#4e4e4e]">Name</label>
          <input
            className="border-[1px] p-2 mt-1 "
            type="text"
            name="user_name"
          />
          <label className="mt-6 font-bold text-[#4e4e4e]">
            Email<span className="text-red-600">*</span>
          </label>
          <input
            className="border-[1px] p-2 mt-1"
            required
            type="email"
            name="user_email"
          />
          <label className="mt-6 font-bold text-[#4e4e4e]">Message</label>
          <textarea
            className="border-[1px] p-2 mt-1"
            name="message"
            placeholder="Type your message..."
          />
          <Button
            sx={{
              color: "white",
              backgroundColor: "#333333",
              mt: 6,
              width: "35%",
              fontWeight: "bold",
              fontSize: "15px",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
            type="submit"
            value="send"
            variant="contained"
            color="primary"
          >
            Send
            <SendOutlinedIcon sx={{ marginLeft: "6px" }} fontSize="10" />
          </Button>
        </form>
      </div>

      <div className="flex flex-col items-center mt-10 ml-6 mr-6 md:mt-28 ">
        <h1 className="text-4xl font-bold font-Lexend md:text-5xl">
          Our Locations
        </h1>
        <p className="text-center text-[#4e4e4e] font-Lexend mt-4 text-sm ">
          Our presence is expanding as we innovate with emotion recognition
          technology.
        </p>
        <img
          className="rounded-xl mt-10 object-contain md:w-5/12 md:h-6/12 "
          src="upe.jpg"
        />
        <h2 className="mt-4 font-bold font-Lexend md:text-xl">Headquarters</h2>
        <h3 className="font-Golos text-sm">Runway Incubators</h3>
        <h3 className=" font-Golos text-sm">UPES, Dehradun</h3>
      </div>
    </div>
  );
};

export default Contact;
