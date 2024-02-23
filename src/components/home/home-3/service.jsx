import ServiceDataHomeThree from "../../../data/service-data-home-3";
import Link from "next/link";
import React from "react";
import serviceinfo from "../../services/service-details/serviceinfo";

const Service = () => {
  return (
    <>
      <section
        className="services-area tp-common-area pt-20 pb-80 sbdcvbsjv"
        style={{ backgroundImage: `url(/assets/img/shape/shape-bg-01.png)` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 col-12">
              <div className="tp-section tp-section-center">
                <span className="tp-section__sub-title left-line mb-20">
                  Facility
                </span>
                <h3 className="tp-section__title mb-75">Advanced center</h3>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-12">
              <div className="services-link tp-section-center">
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
            {serviceinfo.map((item, id) => {
              return (
                id > 14 &&
                id < 21 && (
                  <div key={item.id} className="col-lg-4 col-md-6 col-12">
                    <div
                      className={`services-thumb-box blue mb-30 wow fadeInRight`}
                      data-wow-delay=".3s"
                    >
                      <div className="services-thumb-box__thumb fix">
                        <img src={item.img} alt="services-thumb" />
                      </div>
                      <div className="services-thumb-box__text-area d-flex align-items-center grey-bg">
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

export default Service;
