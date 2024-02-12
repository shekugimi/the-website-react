// src/pages/CoursePage.js

import React from 'react';
import CourseCard from '../components/CourseCard'; // You need to create this component

const courses = [
  {
    id: 1,
    title: 'Responsive Social Media Website UI Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: './images/course1.jpg',
  },
  // Add more course objects as needed
];

const Course = () => {
  return (
    <section className="courses">
      <div className="container courses_container">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default Course;
