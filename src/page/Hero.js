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
          <span className="max-w-2xl text-xl md:text-4xl font-extrabold tracking-tight leading-none lg:text-5xl mb-10 dark:text-white">
            Education Reimagined for the Modern Era
          </span>
          <p className="max-w-2xl my-6 font-light text-gray-500 lg:mb-8 text-sm md:text-lg dark:text-gray-400">
            At Progyan Educations, we believe that education should be
            personalized, engaging, and accessible to all. Fueled by the power
            of Artificial Intelligence, we offer innovative learning solutions
            designed to prepare students for the demands of the modern world.
          </p>
          <p className="max-w-2xl my-6 font-light text-gray-500 lg:mb-8 text-sm md:text-lg dark:text-gray-400">
             for the demands of the modern world.
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
