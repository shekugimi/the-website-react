import React, { useState } from 'react';
import faqsData from '../data/info/faqsData.json';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="faqs">
      <h2 className='font-bold text-4xl mb-4'>Frequently Asked Questions</h2>
      <div className="container faqs_container">
        {faqsData.map((faq, index) => (
          <article key={index} className={`faq ${index === activeIndex ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
            <div className="faq_icon"><i className={`uil ${index === activeIndex ? 'uil-minus' : 'uil-plus'}`}></i></div>
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
