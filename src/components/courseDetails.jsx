import React from 'react';
// import courseImage from '../data/images/course-image.jpg'; // Replace with actual course image
// import defaultImage from '../data/images/default-image.jpg'; // Replace with default image

const CourseDetails = () => {
  return (
    <div className="container mx-auto py-10">
      {/* Top Section */}
      <section className="mb-10">
        <div className="flex items-center mb-4">
          <div className="w-1/2">
            <img src='' alt="Course" className="w-full h-auto" />
          </div>
          <div className="w-1/2 flex flex-col justify-center items-start pl-8">
            <h2 className="text-2xl font-semibold">1+1 Specialization</h2>
            <h3 className="text-xl font-semibold mb-2">Job Assisted Program</h3>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2 pr-4">
            <div className="relative overflow-hidden">
              <img src='' alt="Default" className="w-full h-auto transition duration-300 transform hover:scale-105" />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-lg font-semibold bg-black bg-opacity-50 hover:bg-opacity-0 transition duration-300">
                View Course Details
              </div>
            </div>
          </div>
          <div className="w-1/2 pl-4">
            <div className="relative overflow-hidden">
              <img src='' alt="Course" className="w-full h-auto transition duration-300 transform hover:scale-105" />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-lg font-semibold bg-black bg-opacity-50 hover:bg-opacity-0 transition duration-300">
                View Course Curriculum
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Course Details</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Core Domain</h3>
            <p className="text-lg text-gray-800 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae libero nec est mattis rhoncus.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Additional Certification</h3>
            <p className="text-lg text-gray-800 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae libero nec est mattis rhoncus.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Course Duration</h3>
            <p className="text-lg text-gray-800 mb-6">6 months</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Additional Information</h3>
            <ul className="list-disc text-lg text-gray-800">
              <li>Placement Assistance</li>
              <li>Career Guidance</li>
              <li>Top Quality Education from Industry Experts</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Price and Register Button */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Price: $999</h2>
          <button className="btn-primary">Register Now</button>
        </div>
        <p className="text-lg text-gray-800">
          For more information or queries, please contact us at <a href="tel:+123456789">+123456789</a> or email us at <a href="mailto:info@example.com">info@example.com</a>.
        </p>
      </section>
    </div>
  );
};

export default CourseDetails;
