// Header.js
"use client";
import React from "react";
import "../styles/style.css";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

import headerImage from "../data/images/ai.png";
import BackgroundBeams from "./background-beams";

const Header = () => {
  return (
    <section className="bg-gray-900">
      <div className="grid md:flex-row md:max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
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
          <a
            href="/courses"
            className="button_primary inline-flex items-center hover:bg-gray-700 justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex text-start items-center justify-center px-5 py-3 font-medium hover:text-gray-950 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 text-gray-500 "
          >
            Speak to Sales
          </a>
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
