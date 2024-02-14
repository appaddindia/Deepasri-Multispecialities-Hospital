import React from "react";

const NewsLetter = () => {
  return (
    <>
      <section
        className="news-letter-area pt-100 pb-100 news-round-shape p-relative tp-box-space mr-30 ml-30 theme-light-bg fix"
        style={{
          backgroundImage: `url("/assets/img/shape/shape-bg-05.png")`,
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10 col-12">
              <div className="newsletter-content text-center">
                <h3 className="newsletter-title mb-15">Book Appointment</h3>
                <span>
                  Please contact us with your question and needs, our team would
                  be delighted to assist you promptly
                </span>
                <div className="newsletter-form p-relative ml-10 mr-10">
                  <form action="#">
                    <input
                      type="email"
                      placeholder="info.yourwebmail@gmail.com"
                    />
                    <button className="newsletter-btn">
                      Subscribe<i className="fa-solid fa-paper-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
