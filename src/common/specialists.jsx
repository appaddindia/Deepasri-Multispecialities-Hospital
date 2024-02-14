import Link from "next/link";
import React from "react";

// choose data
const choose = [
  {
    id: 1,
    color: "",
    icon: "flaticon-microscope",
    title: (
      <>
        High Quality <br />
        Services
      </>
    ),
    des: (
      <>
        Superior services, ensuring excellence and client satisfaction
        consistently.
      </>
    ),
  },
  {
    id: 2,
    color: "pink-icon",
    icon: "flaticon-thinking",
    title: (
      <>
        Fast Working <br />
        Process
      </>
    ),
    des: (
      <>
        Efficient process, delivering quick results with precision and
        reliability.
      </>
    ),
  },
  {
    id: 3,
    color: "green-icon",
    icon: "flaticon-24-hours-1",
    title: (
      <>
        24/7 Customer <br /> Support
      </>
    ),
    des: <>Continuous support, addressing customer needs around the clock.</>,
  },
  {
    id: 4,
    color: "sky-icon",
    icon: "flaticon-team",
    title: (
      <>
        We have <br /> Expert Team
      </>
    ),
    des: (
      <>We take pride in our expert team, known for unparalleled proficiency.</>
    ),
  },
];

const Specialists = () => {
  return (
    <>
      <section
        className="choose-area grey-bg pt-100 pb-70 tp-box-space ml-30 mr-30"
        style={{ backgroundImage: `url(/assets/img/shape/shape-bg-07.png)` }}
      >
        <div className="container">
          <div className="">
            <div className="row">
              <div className="col-lg-12">
                <div className="tp-section text-center">
                  <span className="tp-section__sub-title left-line right-line mb-25">
                    who we are
                  </span>
                  <h3 className="tp-section__title mb-45">Why Choose Us</h3>
                </div>
              </div>
            </div>
            <div className="row">
              {choose.map((item) => (
                <div key={item.id} className="col-xl-3 col-md-6 col-6">
                  <div
                    className="tp-choose__item ml-25 mb-30 wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <div className="centetbody" style={{ width: "100%" }}>
                      <div className={`tp-choose__icon ${item.color} mb-20`}>
                        <i className={item.icon}></i>
                      </div>
                    </div>
                    <div className="tp-choose__content">
                      <h4
                        style={{ color: "black" }}
                        className="tp-choose__title mb-20 bodestes"
                      >
                        {item.title}
                      </h4>
                      <p className="descerbodtwhy" style={{ color: "gray" }}>
                        {item.des}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="row text-center">
              <div className="col-lg-12">
                <div className="tp-choose-option">
                  <span>
                    Laboratories Used For Scientific Research :
                    <Link href="/">
                      Take Many Forms<i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Specialists;
