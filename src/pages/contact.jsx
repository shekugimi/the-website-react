import React from 'react';
import contactData from '../data/info/contactData.json';
import '../styles/style.css';
const Contact = () => {
    return (
      <section className="contact bg-gray-100 py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Aside */}
          <aside className="contact_aside bg-primary text-white p-12 rounded-lg relative bottom-40">
            <div className="aside_image mb-8">
              <img src="./images/contact.svg" alt="Contact Us" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="mb-6">
              Proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ul className="contact_details">
              <li className="flex items-center mb-4">
                <i className="uil uil-phone-times"></i>
                <h5 className="ml-2">{contactData.phone}</h5>
              </li>
              <li className="flex items-center mb-4">
                <i className="uil uil-envelope"></i>
                <h5 className="ml-2">{contactData.email}</h5>
              </li>
              <li className="flex items-center">
                <i className="uil uil-location-point"></i>
                <h5 className="ml-2">{contactData.location}</h5>
              </li>
            </ul>
            <ul className="contact_socials flex gap-2 mt-8">
              <li>
                <a href="#" className="bg-white p-2 rounded-full">
                  <i className="uil uil-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" className="bg-white p-2 rounded-full">
                  <i className="uil uil-instagram-alt"></i>
                </a>
              </li>
              <li>
                <a href="#" className="bg-white p-2 rounded-full">
                  <i className="uil uil-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="bg-white p-2 rounded-full">
                  <i className="uil uil-linkedin-alt"></i>
                </a>
              </li>
            </ul>
          </aside>
  
          {/* Contact Form */}
          <form
            action="https://formspree.io/f/xlevlqaa"
            method="POST"
            className="contact_form bg-white p-8 rounded-lg"
          >
            <div className="form_name flex gap-4 mb-6">
              <input
                type="text"
                name="First Name"
                placeholder="First Name"
                required
                className="w-1/2 p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                name="Last Name"
                placeholder="Last Name"
                required
                className="w-1/2 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <input
              type="email"
              name="Email Address"
              placeholder="Your Email Address"
              required
              className="w-full p-2 border border-gray-300 rounded-md mb-6"
            />
            <textarea
              name="Message"
              rows="7"
              placeholder="Message"
              required
              className="w-full p-2 border border-gray-300 rounded-md mb-6"
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;