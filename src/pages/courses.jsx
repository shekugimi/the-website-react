import React from 'react';
import Course from './../page/course';
import coursesData from '../data/info/coursesData.json';
import '../styles/style.css';

const Courses = () => {
  return (
    <section className="courses">
      <h2>All Programs</h2>
      <div className="container courses_container">
        {coursesData.map((course, index) => (
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
    </section>
  );
};

export default Courses;
