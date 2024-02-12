import React, { useEffect } from 'react';
import '../styles/style.css';

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
          <a href="index.html">
            <h4>EGATOR</h4>
          </a>
          <ul className="nav_menu">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="course.html">Courses</a>
            </li>
            <li>
              <a href="contact.html">Contact Us</a>
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
      </>
  );
};

export default Header;
