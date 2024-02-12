// src/components/CourseCard.js

import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <article className="course">
      <div className="course_image">
        <img src={course.image} alt={course.title} />
      </div>
      <div className="course_info">
        <h4>{course.title}</h4>
        <p>{course.description}</p>
        <a href={`/course/${course.id}`} className="btn btn-primary">
          Learn More
        </a>
      </div>
    </article>
  );
};

export default CourseCard;
