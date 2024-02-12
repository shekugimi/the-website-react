// components/About/About.js
import React from 'react';
// import './About.css';

const About = () => {
  return (
    <section className="about_achivements">
      <div className="container about_achivements-container">
        <div className="about_achivements-left">
          <img src="./images/achivements.svg" alt="Achievements" />
        </div>

        <div className="about_achivements-right">
          <h1>Achievements</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>

          <div className="achivements_cards">
            <article className="achivement_cards">
              <span className="achivement-icon">
                <i className="uil uil-video"></i>
              </span>
              <h3>450+</h3>
              <p>Courses</p>
            </article>

            <article className="achivement_cards">
              <span className="achivement-icon">
                <i className="uil uil-users-alt"></i>
              </span>
              <h3>79,000+</h3>
              <p>Students</p>
            </article>

            <article className="achivement_cards">
              <span className="achivement-icon">
                <i className="uil uil-award"></i>
              </span>
              <h3>26+</h3>
              <p>Awards</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
