// Home.js
import React from 'react';
import Contact from './pages/contact';
import About from './pages/about';
import Courses from './pages/courses';
import Testimonials from './page/testimonial'; // Corrected 'page' to 'pages'
import FAQs from './pages/faqs';
import Achievements from './pages/achievements';


function Home() {
  return (
    <div>
      {/* Content for the Home page */}
      <Courses />
      <Testimonials />
      <FAQs />
      <About />
      <Contact />
      {/* <Achievements/> */}
      {/* Add any additional content for the Home page */}
    </div>
  );
}

export default Home;
