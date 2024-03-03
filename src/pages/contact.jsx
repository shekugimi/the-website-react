import React from "react";
import contactData from "../data/info/contactData.json";
import "../styles/style.css";
import "../styles/contact.css"; // Add the CSS file for the contact page

const Contact = () => {
  return (
    <section className="" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-0">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
              We'd love to hear from you! Drop us a message and we'll get back
              to you as soon as possible.
            </p>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <ul className="mb-6 text-start p-10 md:mb-0">
                <p className="mt-0 mb-12 ml-4 text-lg text-gray-600 dark:text-slate-400">
                  Feel free to reach out to us for any inquiries or if you have
                  any questions. Our team is here to assist you.
                </p>
                <li className="flex text-start justify-between">

                  <div className="ml-4 mb-4">
                    <h3 className="mb-2  text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Our Office Address
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      28/5, Progyan Educations, Rama Mandi , Jalandhar
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      Punjab (144023), India
                    </p>
                  </div>
                </li>
                <li className="flex text-start justify-between">

                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Contact
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      Mobile: +91 7649866386
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      Email: info@progyaneducations.live
                    </p>
                  </div>
                </li>
                <li className="flex text-start justify-between">

                  <div className="ml-4 mb-4">
                    <h3 className="mb-2  text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Working Hours
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      Monday - Friday: 10:00 AM - 08:00 PM
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      Sunday: Closed
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:px-12  md:pt-8 login-box" id="form">
              <h2 className="mb-4 text-2xl font-bold">Have a query ? Let Us Know</h2>
              <form className="bg-gray-80 rounded p-2 form">
                <div className="mb-0">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <div className="mx-0 mb-1 sm:mb-4 ">
                      <label
                        htmlFor="name"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="text"
                        id="name"
                        autoComplete="given-name"
                        placeholder="Your name"
                        className="mb-2  w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="name"
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="email"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="email"
                        id="email"
                        autoComplete="email"
                        placeholder="Your email address"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label
                      htmlFor="textarea"
                      className="pb-1 text-xs uppercase tracking-wider"
                    ></label>
                    <textarea
                      id="textarea"
                      name="textarea"
                      cols="30"
                      rows="5"
                      placeholder="Write your message..."
                      className=" w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                    ></textarea>
                  </div>
                </div>
                <center>
                  <a href="#">
                      SEND
                    <span>
                    </span>
                  </a>
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
