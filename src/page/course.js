import React, { useState } from "react";
import { Link } from "react-router-dom";
import coursesData from "../data/info/coursesData.json";
import "../styles/style.css";

const Courses = () => {
  const [visibleCourses, setVisibleCourses] = useState(3);

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

      <div className="avcards">
        {coursesData.slice(0, visibleCourses).map((course, index) => (
          <div key={index} className="avcard avshadow">
            <img
              src={require(`../data/images/Courses/${course.image}`)}
              alt={course.title}
              className="avcard-img"
            />
            <h4 className="avcard-title">{course.title}</h4>
            <p className="avcard-para">{course.description}</p>
            <div className="avcard-btn">
              <Link
                to={{
                  pathname: `/courseDetails/${course.id}`, state: { course },
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
          </div>
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
