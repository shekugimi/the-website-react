// src/components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer_container">
        <div className="footer_1">
          <a href="index.html" className="footer_logo">
            <h4>EGATOR</h4>
          </a>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>

        <div className="footer_2">
          <h4>Permalinks</h4>
          <ul className="permalinks">
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
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer_3">
          <h4>Primacy</h4>
          <ul className="privacy">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Refund Policy</a>
            </li>
          </ul>
        </div>

        <div className="footer_4">
          <h4>Contact Us</h4>
          <div>
            <p>+91 884 037 8060</p>
            <p>abhitrivedi119@gmail.com</p>
          </div>

          <ul className="footer_social">
            <li>
              <a href="#">
                <i className="uil uil-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="uil uil-instagram-alt"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="uil uil-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="uil uil-linkedin-alt"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_copyright">
        <small>Copyright &copy; EGATOR Youtube Tutorials </small>
      </div>
    </footer>
  );
};

export default Footer;
