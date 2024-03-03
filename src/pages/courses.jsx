import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import coursesData from '../data/info/coursesData.json';
import '../styles/style.css';

const Courses = () => {
  const [visibleCourses, setVisibleCourses] = useState(4);

  const handleViewAllCourses = () => {
    setVisibleCourses(coursesData.length);
  };

  return (
    <section className="p-3 md:p-auto my-16 bg-[--]">
      <div className='mb-4 p-4'>
        <span className='mb-4 bg- p-10 text-xl md:text-4xl font-extrabold'>Our Popular Courses</span>
      </div>
      <div className=" rounded-3xl  flex flex-wrap h-[50%]  max-h-[50%] flex items-center justify-center ">
        {coursesData.map((course, index) => (
          <article key={index} className=" bg-[#424890] m-2 p-2 lg:max-w-[30%] hover:bg-blue-500 hover:cursor-pointer transition rounded rounded-2xl min-w-screen ">
            <div className="course_image">
              {/* Use the require function to dynamically load images */}
              <img
                src={require(`../data/images/Courses/${course.image}`)}
                alt={course.title}
                className="bg-contain w-full rounded rounded-inherit object-cover object-center"
              />
            </div>
            <div className=' p-5 font-semibold'>
              <h4>{course.title}</h4>
            </div>
            <div className=" p-5 md:course_info ">
              <p>{course.description}</p>
            </div>
            <div className='m-5 flex flex-row items-center justify-between'>
              <Link to='/register' className="btn btn-primary rounded-lg bg-orange-400" target="_blank" rel="noopener noreferrer">
                Register
              </Link>
              <Link to={course.brochureLink} className="btn btn-primary rounded-lg bg-orange-400" target="_blank" rel="noopener noreferrer">
                About
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Courses;
