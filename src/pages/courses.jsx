import React from 'react';
import Course from './../page/course';
import coursesData from '../data/info/coursesData.json';

const Courses = () => {
  return (
    <section className="courses bg-gray-100 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coursesData.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default Courses;
