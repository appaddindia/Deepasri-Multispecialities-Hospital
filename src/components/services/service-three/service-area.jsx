import Link from "next/link";
import React from "react";
import serviceinfo from "../service-details/serviceinfo";

const ServiceArea = () => {
  return (
    <>
      <section
        className="services-area pt-100 pb-80 grey-bg"
        style={{ backgroundImage: `url(/assets/img/shape/shape-bg-01.png)` }}
      >
        <div className="container">
          <div className="row align-items-end  mb-35">
            <div className="col-lg-5 col-md-12 col-12">
              <div className="tp-section">
                <span className="tp-section__sub-title left-line mb-20">
                  our DEPARTMENTs
                </span>
                <h3
                  style={{ fontSize: "28px" }}
                  className="tp-section__title mb-50"
                >
                  Service Area
                </h3>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-12">
              <div className="services-link text-md-start text-lg-end mb-30">
                <span>
                  {`We'll`} ensure you always get the best results:
                  <Link href="/contact">
                    Contact us<i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            {serviceinfo.map((item) => {
              return (
                item.id < 14 && (
                  <div key={item.id} className="col-lg-4 col-md-6 col-12">
                    <div
                      className={`services-thumb-box blue mb-30 wow fadeInRight`}
                      data-wow-delay=".3s"
                    >
                      <div className="services-thumb-box__thumb fix">
                        <img src={item.img} alt="services-thumb" />
                      </div>
                      <div className="services-thumb-box__text-area d-flex align-items-center">
                        <div className="services-thumb-box__icon mr-20">
                          <img
                            style={{
                              width: "48px",
                              marginBottom: "10px",
                              padding: "5px",
                            }}
                            src={item.icon}
                          ></img>
                        </div>
                        <div className="services-thumb-box__content">
                          <h5 className="services-thumb-box__title">
                            <Link style={{ fontSize: "16px" }} href={item.link}>
                              {item.name}
                            </Link>
                          </h5>
                          <Link className="tp-btn-link" href={item.link}>
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceArea;
