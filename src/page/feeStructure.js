import React from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "../styles/style.css";

// Importing course images from online sources
import selfPaced from "../data/images/selfpaced.jpg";
import mentorLed from "../data/images/mentor-led.jpg";
import Advanced from "../data/images/advanced.webp";
// import cppImage from '../online/image3.jpg';
// import javascriptImage from '../online/image4.jpg';

const coursesList = [
  {
    id: 1,
    title: "Self Paced Courses",
    description:
      "Self-paced courses are designed to be completed at your own pace, at any time that is convenient for you. You can work through the course material at your own speed, and you can complete the course in as little or as much time as you need.",
    image: selfPaced,
    link: "/courses",
  },
  {
    id: 2,
    title: "Mentor Led Courses",
    description:
      "Mentor-led courses are designed to provide you with a more structured learning experience. You will have access to a mentor who will guide you through the course material and provide you with feedback and support.",
    image: mentorLed,
    link: "/courses",
  },
  {
    id: 3,
    title: "Advanced Courses",
    price: 3000,
    description:
      "Advanced courses are designed to provide you with a more in-depth understanding of a particular topic. These courses are typically more challenging and require a higher level of knowledge and experience.",
    image: Advanced,
    link: "/courses",
  },
];

const FeesStructure = () => {
  return (
    <div className="md:h-screen bg-[#2e3267] items-center flex flex-col ">
      <div className="heading h-[10%] flex items-center justify-center p-20">
        <span className="max-text-2xl mb-4 text-3xl  md:text-4xl font-extrabold">
          Fee Structure
        </span>
      </div>
      <div className=" flex md:h-[85%] flex-col lg:flex-row justify-between gap-5 p-5 mb-5">
        {coursesList.map((course) => (
          <div
            key={course.id}
            className="flex bg-gray-900 hover:bg-gray-950 hover:shadow shadow-lg h-[100%] md:mb-0 flex-col rounded-lg shadow-lg overflow-hidden"
          >
            <div className="max-w-sm rounded-lg ">
              <img
                className="rounded-t-lg max-h-[210px] '"
                src={course.image}
                alt={course.title}
              />
              <h5 className="m-2 text-2xl font-bold text-gray-900 dark:text-white">
                {course.title}
              </h5>
              <div className="px-5 h-[35%] ">
                <p className=" dark:text-gray-400">
                  {course.description}
                </p>
              </div>
              <div>
                <span>


                  <Link
                    to={course.link}
                    className="inline-flex my-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read More
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeesStructure;
