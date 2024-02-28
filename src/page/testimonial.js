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
            <h5>Shivam Patidar</h5>
            <small>Data Science <br/> (Lovely prfessional University)</small>
          </div>
          <div className="testimonial_body bg-black ml-4">
            <p>
              It is a unique and better way to learn my domain Data Science with ChatGPT 4.0, Hugging Face, Datacamp Workspacee AI all at once.
            </p>
          </div>
        </article>
        <article className="testimonial swiper-slide">
          <div className="avatar">
            <img src={Avatar2} />
          </div>
          <div className="testimonial_info">
            <h5>Md. Danish Raza </h5>
            <small>Data Science <br/> (Lovely prfessional University)</small>
          </div>
          <div className="testimonial_body bg-black">
            <p>
              I have learned a lot from this platform. It's a great platform to learn and enhance your skills.
            </p>
          </div>
        </article>
      </div>
      <div className="swiper-pagination"></div>
    </section>
  );
};

export default Testimonials;
