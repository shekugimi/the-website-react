// Header.js
"use client";
import React from "react";
import "../styles/style.css";

import headerImage from "../data/images/ai.png";
import BackgroundBeams from "../components/background-beams";

const Header = () => {
  return (
    <section className="bg-gray-900">
      <div className="grid md:flex-row md:max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 z-9">
        <div className=" md:hidden lg:mt-0 lg:col-span-5 ">
          <img src={headerImage} alt="mockup" />
        </div>
        <div className="mr-auto text-start place-self-center lg:col-span-7">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-8">
            {/* // Bolder, more concise headline */}
            <span className="text-blue-400">
            Progyan Educations' 
            </span> <br/>
             Education reimagined for the modern era.
          </h1>
          <p className="max-w-2xl lg:mb-8 font-normal text-lg">
            {/* // Emphasis on innovation and impact */}
            Harness cutting-edge AI tools and unlock limitless possibilities through Progyan Educations' immersive, live-streamed training and internships, designed for the modern world.
          </p>
          <p className="max-w-2xl lg:mb-8 text-2xl font-bold">
            {/* // Clear call to action with a futuristic tone */}
            Embrace the AI Revolution. Begin Your Journey Now.
          </p>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 md:flex">
          <img src={headerImage} alt="mockup" />
        </div>
      </div>
      <BackgroundBeams />
    </section>
  );
};

export default Header;
