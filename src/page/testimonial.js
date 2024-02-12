import React from 'react';
import testimonialsData from '../data/info/testimonials.json'

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <div className="testimonials_list space-y-4">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="testimonial_item">
              <p className="text-gray-600">{testimonial.comment}</p>
              <div className="testimonial_author mt-2">
                <span className="font-semibold">{testimonial.name}</span>
                <span className="text-gray-500"> - {testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
