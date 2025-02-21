import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import "tailwindcss/tailwind.css";

const cards = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  image: "https://via.placeholder.com/150",
  text: `Card ${i + 1}`,
}));

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center flex-col mt-4">
        <img src="https://outstanding-motherly-penguin-gwu7pf.teleporthq.app/screenshot%202023-12-21%20160823-800w.png" />
        <p className="text-center font-serif mt-4 ">
          EMOTE-ION enhances existing technologies by integrating emotion
          recognition to improve safety, efficiency, and user experience. By
          combining AI-driven emotion detection with current systems, we aim to
          reduce accidents, enhance human-machine interaction, and revolutionize
          real-time monitoring across industries.
        </p>
      </div>
      <div>
        <div className="mt-6 w-full overflow-hidden bg-blue-500 py-10 relative">
          <div
            className={`flex gap-6 whitespace-nowrap scrolling-container ${
              isHovered ? "scrolling-paused" : ""
            }`}
          >
            {[...cards, ...cards].map((card, index) => (
              <div
                key={index}
                className="transform transition-transform duration-300 hover:scale-105 card-item"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Card sx={{ width: 275, height: 325 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={card.image}
                    alt={card.text}
                  />
                  <CardContent>
                    <Typography variant="h6" color="textPrimary">
                      {card.text}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
