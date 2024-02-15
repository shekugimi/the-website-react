import React from 'react';
import faqsData from '../data/info/faqsData.json';

const FAQs = () => {
  return (
    <section className="faqs">
      <h2>Frequently Asked Questions</h2>
      <div className="container faqs_container">
        {faqsData.map((faq, index) => (
          <article key={index} className="faq">
            <div className="faq_icon"><i className="uil uil-plus"></i></div>
            <div className="question_answer">
              <h4>{faq.question}</h4>
              <p>{faq.answer}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
