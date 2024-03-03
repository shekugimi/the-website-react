// Home.js
import React from "react";
import Contact from "./pages/contact";
import About from "./pages/about";
import Course from "./page/course";
import Testimonials from "./page/testimonial";
import FAQs from "./pages/faqs";
import Hero from "./page/Hero";
import Partners from "./pages/partners";
import FeeStructure from "./page/feeStructure";
import WhyUs from "./page/whyUs";

function Home() {
  return (
    <div>
      <Hero />
      <WhyUs />
      <Course />
      <FeeStructure />
      <Partners />
      <FAQs />
      <Testimonials />
      <About />
      <Contact />
     </div>
  );
}

export default Home;
