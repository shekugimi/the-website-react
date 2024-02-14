// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/home'; // Assuming the home page is in 'pages/home.js'
import Contact from './pages/contact';
import About from './pages/about';
import Courses from './pages/courses';
import Header from './components/header';
import Footer from './components/footer';
import Testimonials from './page/testimonial'; // Corrected 'page' to 'pages'
import FAQs from './pages/faqs';
import Achievements from './pages/achievements';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/testimonial" element={<Testimonials />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/achievements" element={<Achievements />} />
          {/* <Route path="*" element={<Home />} /> */}
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
