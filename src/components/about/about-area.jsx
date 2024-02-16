import Count from "../../common/count";
import Link from "next/link";
import React from "react";

const AboutArea = () => {
  return (
    <>
      <section className="about-area pt-120 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-4 col-12">
              <div
                className="tp-about-thumb mb-60 wow fadeInLeft"
                data-wow-delay=".3s"
              >
                <div className="tp-ab-img d-flex">
                  <div className="tp-ab-main-img p-relative">
                    <img src="/assets/photo/hh3.jpg" alt="about-thumb" />
                    <div className="about__exprience tp-ab-counter">
                      <h3 className="counter">
                        <Count add_style={true} number={12} />
                      </h3>
                      <i>
                        Years of <br />
                        Experience
                      </i>
                    </div>
                  </div>
                  <div className="tp-ab-shape d-none d-md-block d-lg-none d-xl-block">
                    <img
                      width="100%"
                      className="ab-shape-one"
                      src="/assets/photo/hh1.jpg"
                      alt="about-shape"
                    />
                    <img
                      width="100%"
                      className="ab-shape-two"
                      src="/assets/photo/hh2.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ display: "flex", alignItems: "center" }}
              className="col-xl-6 col-lg-8 col-12"
            >
              <div
                className="about-content about-align mb-60 wow fadeInRight"
                data-wow-delay=".3s"
              >
                <div className="tp-section">
                  <h3
                    style={{ fontSize: "28px" }}
                    className="tp-section__title ab-title mb-25"
                  >
                    BEST HOSPITAL FOR YOUR GOOD HEALTH
                  </h3>
                  <p className=" mr-20 mb-20">
                    At Deepasri Multispecialities Hospital, our collective
                    vision revolves around providing you with compassionate
                    healthcare of the highest quality. Our specialized services
                    are meticulously crafted to cater to your unique needs.
                  </p>
                  <p className=" mr-20 mb-40">
                    Deepasri Multispecialities Hospital stands out for its
                    cleanliness, efficiency, customer-centric approach,
                    affordability, and accessibility. The hospitals innovative
                    design, encompassing a manageable size and cutting-edge
                    technology, is dedicated to fostering positive experiences
                    for our patients. Your concerns become our own, and our 24/7
                    human, medical, and infrastructural services are committed
                    to ensuring your continual comfort and swift recovery. For
                    us, success is epitomized by the smiles on our patients
                    faces as they depart from our facility.
                  </p>
                </div>
                {/* <div className="tp-about__info-list ab-check-list mb-55">
                  <ul>
                    <li>
                      <i className="fa-solid fa-check"></i>Extramural Funding
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Bacteria Markers
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Nam nec mi euismod
                      euismod
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>In aliquet dui nec
                      lectus
                    </li>
                  </ul>
                </div> */}
                <div className="about-content__btn">
                  <Link href="/about" className="tp-btn">
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;
