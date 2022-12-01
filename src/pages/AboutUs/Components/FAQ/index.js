import React from "react";
import Faq from "../../../../utils/FakeData/faq";

const FAQ = () => {
  const faq = Faq.map((el) => {
    return (
      <div className="card border-0 mb-3  bg-white">
        <div
          className="card-header  bg-white collapsed"
          data-toggle="collapse"
          data-target={`#collapse${el.id}`}
          aria-expanded="false"
          aria-controls={`#collapse${el.id}`}
          id={`heading${el.id}`}
        >
          <div className="mb-0">
            <div className="btn d-flex justify-content-between">
              <p className=" w-75 text-left">{el.question}</p>
              <h5 className="font-weight-bold color1 text-right">&#43;</h5>
            </div>
          </div>
        </div>

        <div
          id={`collapse${el.id}`}
          className={`collapse ${
            el.id === 1 ?  "show": ""
          } bg-blue`}
          aria-labelledby={`heading${el.id}`}
          data-parent="#accordion"
        >
          <div className="card-body  faq-bg">{el.answer}</div>
        </div>
      </div>
    );
  });
  return (
    <section className="frequently-asked-question">
      <h2 className="text-center">Frequently Asked Questions</h2>
      <div className="my-5 container">
        <div className="row">
          <div className="mx-auto col-md-6">
            <div id="accordion">
              {faq}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
