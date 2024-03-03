import React, { useState } from "react";
import { Link } from "react-router-dom";
import coursesData from "../data/info/coursesData.json";
import "../styles/style.css";

const Courses = () => {
  const [visibleCourses, setVisibleCourses] = useState(4);

  const handleViewAllCourses = () => {
    setVisibleCourses(coursesData.length);
  };

  return (
    <section className="p-3 md:p-auto mb-10 ">
      <div className="mb-4 p-4">
        <span className="mb-4 bg- p-10 text-xl md:text-4xl font-extrabold">
          Our Best Courses
        </span>
      </div>
      <div className="rounded-3xl pb-2 flex dlex-col md:flex-row max-w-screen overflow-x-scroll scrollbar-none">
        {coursesData.slice(0, visibleCourses).map((course, index) => (
          <article key={index} className="min-w-10/12 md:w-1/4 bg-[#424890] m-2 p-2 rounded-2xl">
            <div className=" rounded-3xl overflow-hidden h-[50%]  max-h-[50%] flex items-center justify-center ">
             <img
                src={require(`../data/images/Courses/${course.image}`)}
                alt={course.title}
                className="bg-contain w-full rounded rounded-inherit object-cover object-center"
              />
            </div>
            <div className=" p-5 h-[35%] mb-2 md:mb-0 md:h-[40%] ">
              <h4 className="mb-2 font-semibold">{course.title}</h4>
              <p classname='text-sm font-light md:h-[40%]  overflow-y-scroll scrollbar-none'>{course.description}</p>
            </div>
            <div className="flex flex-row h-[100%] items-center justify-around ">
              <Link
                to={{
                  pathname: `/course-details/${course.id}`, // Assuming course.id exists in coursesData
                  state: { course }, // Pass the course object as state
                }}
                className="btn btn-primary w-[40%]"
              >
                More
              </Link>
              <a
                href={course.brochureLink}
                className="btn btn-primary w-[40%]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Brochure
              </a>
            </div>
          </article>
        ))}
      </div>
      {visibleCourses < coursesData.length && (
        <button className="view-all-button-container mt-4 border border-transparent hover:border-white p-4 px-6 rounded rounded hover:bg-orange-500  bg-orange-600 font-semibold">
          <Link
            to="/courses"
            className=""
            onClick={handleViewAllCourses}
          >
            View All Courses
          </Link>
        </button>
      )}
    </section>
  );
};

export default Courses;
