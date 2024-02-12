// App.js
import React from 'react';
import './App.css';
import Contact from './pages/contact';
import About from './pages/about';
import Courses from './pages/courses';
import Header from './components/header';
import Footer from './components/footer';
import Testimonials from './page/testimonial';
import FAQs from './pages/faqs';

function App() {
  return (
    <div className="App">
      {/* Other components and sections */}
      <Header/>
      <Courses />
      <Testimonials/>
      <FAQs/>
      <About />
      <Contact />
      <Footer/>


      {/* Other components and sections */}
    </div>
  );
}

export default App;
