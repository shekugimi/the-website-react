import React from 'react';
import testimonialsData from '../data/info/testimonials.json'
import '../styles/style.css';

const Testimonials = () => {
  return (
    <section class="container testimonial_container swiper mySwiper">
      <h2>Students' Testimonials</h2>
      <div class="swiper-wrapper">
        <article class="testimonial swiper-slide">
          <div class="avatar">
            {/* <img src="./images/avatar1.jpg" /> */}
          </div>
          <div class="testimonial_info">
            <h5>Diana Ayi</h5>
            <small>Student</small>
          </div>
          <div class="testimonial_body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </article>

        <article class="testimonial swiper-slide">
          <div class="avatar">
            {/* <img src="./images/avatar2.jpg" /> */}
          </div>
          <div class="testimonial_info">
            <h5>Ernest Achiver</h5>
            <small>Web Developer</small>
          </div>
          <div class="testimonial_body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </article>

        <article class="testimonial swiper-slide">
          <div class="avatar">
            {/* <img src="./images/avatar3.jpg" /> */}
          </div>
          <div class="testimonial_info">
            <h5>Edem Christ</h5>
            <small>Student</small>
          </div>
          <div class="testimonial_body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </article>

        <article class="testimonial swiper-slide">
          <div class="avatar">
            {/* <img src="./images/avatar4.jpg" /> */}
          </div>
          <div class="testimonial_info">
            <h5>Hazia Bintu</h5>
            <small>Student</small>
          </div>
          <div class="testimonial_body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </article>

        <article class="testimonial swiper-slide">
          <div class="avatar">
            {/* <img src="./images/avatar5.jpg" /> */}
          </div>
          <div class="testimonial_info">
            <h5>Jane Doe</h5>
            <small>Student</small>
          </div>
          <div class="testimonial_body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </article>
      </div>
      <div class="swiper-pagination"></div>
    </section>
  );
};

export default Testimonials;
