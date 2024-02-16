import React from 'react';
import testimonialsData from '../data/info/testimonials.json'
import '../styles/style.css';
import Avatar from '../data/images/avatar3.jpg'
import Avatar2 from '../data/images/avatar2.jpg'
import Avatar3 from '../data/images/avatar1.jpg'

const Testimonials = () => {
  return (
    <section class="container testimonial_container swiper mySwiper">
      <div className='heading h-[10%] flex items-center justify-center p-20'>
                <span className='max-w-2xl mb-4 text-xl md:text-4xl font-extrabold'>Fee Structure</span>
            </div>
             <div class="swiper-wrapper flex gap-10 flex-col md:flex-row">
        <article class="testimonial swiper-slide">
          <div class="avatar">
            <img src={Avatar} />
          </div>
          <div class="testimonial_info">
            <h5>Edem Christ</h5>
            <small>Student</small>
          </div>
          <div class="testimonial_body bg-black ml-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </article>
        <article class="testimonial swiper-slide">
          <div class="avatar">
          <img src={Avatar2}/>
          </div>
          <div class="testimonial_info">
            <h5>Jane Doe</h5>
            <small>Student</small>
          </div>
          <div class="testimonial_body bg-black">
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
