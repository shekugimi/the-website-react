import React from "react";
import testimonialsData from "../data/info/testimonials.json";
import "../styles/style.css";
import Avatar from "../data/images/avatar3.jpg";
import Avatar2 from "../data/images/avatar2.jpg";
import Avatar3 from "../data/images/avatar1.jpg";

const Testimonials = () => {
  return (
    <section className="container testimonial_container swiper mySwiper p-0">
      <div className="heading h-[10%] flex items-center justify-center p-8">
        <span className="max-w-2xl mb-4 text-xl md:text-4xl font-extrabold">
          What our Student Says
        </span>
      </div>
      <div className="swiper-wrapper flex gap-10 flex-col md:flex-row">
        <article className="testimonial swiper-slide">
          <div className="avatar">
            <img src={Avatar} />
          </div>
          <div className="testimonial_info">
            <h5>Edem Christ</h5>
            <small>Student</small>
          </div>
          <div className="testimonial_body bg-black ml-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </article>
        <article className="testimonial swiper-slide">
          <div className="avatar">
            <img src={Avatar2} />
          </div>
          <div className="testimonial_info">
            <h5>Jane Doe</h5>
            <small>Student</small>
          </div>
          <div className="testimonial_body bg-black">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </article>
      </div>
      <div className="swiper-pagination"></div>
    </section>
  );
};

export default Testimonials;
