// Home.js
import React from "react";
import Contact from "./pages/contact";
import About from "./pages/about";
import Course from "./page/course";
import Testimonials from "./page/testimonial";
import FAQs from "./pages/faqs";
import Header from "./components/header";
import Partners from "./pages/partners";
import FeeStructure from "./page/feeStructure";

function Home() {
  return (
    <div>
      {/* Content for the Home page */}
      <Header />
      <Course />
      <Testimonials />
      <FAQs />
      <About />
      <Partners />
      <FeeStructure />
      <Contact />
      
      {/* <Achievements/> */}
      {/* Add any additional content for the Home page */}
    </div>
  );
}

export default Home;
