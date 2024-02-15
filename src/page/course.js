import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import coursesData from '../data/info/coursesData.json';
import '../styles/style.css';

const Courses = () => {
  const [visibleCourses, setVisibleCourses] = useState(4); // State to manage the number of visible courses

  const handleViewAllCourses = () => {
    // Function to handle "View All Courses" button click
    setVisibleCourses(coursesData.length); // Set visibleCourses to the total number of courses
  };

  return (
    <section className="courses">
      <h2>Our Popular Courses</h2>
      <div className="container courses_container">
        {coursesData.slice(0, visibleCourses).map((course, index) => (
          <article key={index} className="course">
            <div className="course_image">
              <img src={course.image} alt={course.title} />
            </div>
            <div className="course_info">
              <h4>{course.title}</h4>
              <p>{course.description}</p>
              <a href={course.registerLink} className="btn btn-primary">Register</a>
              <a href={course.brochureLink} className="btn btn-primary">Brochure</a>
            </div>
          </article>
        ))}
      </div>
      {visibleCourses < coursesData.length && ( // Show "View All Courses" button conditionally
        <div className="view-all-button-container">
          <Link to="/courses" className="btn btn-primary" onClick={handleViewAllCourses}>
            View All Courses
          </Link>
        </div>
      )}
    </section>
  );
};

export default Courses;
