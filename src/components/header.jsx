import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link if you're using React Router
import '../styles/style.css';

import logo from '../data/images/logo.png'; // Update the path accordingly
import headerImage from '../data/images/header.svg'; // Update the path accordingly

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      nav.classList.toggle('window-scroll', window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    const menu = document.querySelector('.nav_menu');
    const menuBtn = document.querySelector('#open-menu-btn');
    const closeBtn = document.querySelector('#close-menu-btn');

    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';
  };

  const handleCloseClick = () => {
    const menu = document.querySelector('.nav_menu');
    const closeBtn = document.querySelector('#close-menu-btn');
    const menuBtn = document.querySelector('#open-menu-btn');

    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
  };

  return (
    <>
      <nav>
        <div className="container nav_container">
          <a href="/" class="flex items-center rounded rounded-2xl pl-1">
            <img src={logo} className='h-[16%] w-[16%] flex text-white ' alt="Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-left ml-5"> Progyan <br /> Educations </span>
          </a>
          <ul className="nav_menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <button id="open-menu-btn" onClick={handleMenuClick}>
            <i className="uil uil-bars"></i>
          </button>
          <button id="close-menu-btn" onClick={handleCloseClick}>
            <i className="uil uil-multiply"></i>
          </button>
        </div>
      </nav>
      <header>
        <div className="container header_container">
          <div className="header-left ">
            <h1>Grow your Skill to advance your career path</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            {/* <Link to="/courses" className="btn btn-primary"> */}
            Get Started
            {/* </Link> */}
          </div>

          <div className="header-right">
            <div className="header-right-image">
              <img src={headerImage} alt="Header Image" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
