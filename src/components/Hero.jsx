import React from "react";
import Navbar from "./Navbar";
import TextSpan from "./TextSpan";
import women from "../images/woman_developer-transformed.png"
// import Model from "../../public/images/Scene";



const sentence = "Developer";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center scroll-snap-align-center text-white">
      <style>
        {`
          @keyframes wiggle {
            to {
              transform: translateY(80px);
            }
          }

          .animate-wiggle {
            animation: wiggle 2s infinite ease alternate;
          }
        `}
      </style>
      
      <div className="z-10">
        <Navbar />
        <div className="scroll-snap-align-center flex justify-between mx-8">
          <div className="flex-1 ml-4 mt-32">
            <h1 className="text-5xl font-bold mb-2">
              Hi. I. am. <span style={{ color: "#00BFFF" }}> Priyanshi,</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-purple-700">
              <span className="text-2xl text-pink-700"> A Full Stack Web </span>
              {sentence.split("").map((letter, index) => (
                <TextSpan key={index}>{letter}</TextSpan>
              ))}
            </h2>
            <div className="md:text-lg text-justify mb-4 w-96" style={{ textShadow: "8px 8px 10px #0000FF" }}>
              I possess a keen passion for learning new technologies. I am a Web
              Developer aficionado who has a deep understanding of front-end and
              backend. My interest and experience also extend to Cloud Computing.
            </div>
            <a
  href="/Priyanshi_Kotian__Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 border-dashed border-purple-700 border-4 hover:border-solid rounded inline-block"
>
  My Resume
</a>

          </div>
          <div className="relative ml-10">
            <img
              src={women}
              alt="Developer"
              className="h-auto animate-wiggle"
            />
          </div>
{/*          <Model/> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
