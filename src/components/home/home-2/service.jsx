import service_data from "../../../data/service";
import Link from "next/link";
import React from "react";
import serviceinfo from "../../services/service-details/serviceinfo";

const Service = () => {
  return (
    <>
      <section className="services-area pt-100 pb-55">
        <div className="container">
          <div className="row align-items-end  mb-45">
            <div className="col-lg-5 col-md-12 col-12">
              <div className="tp-section">
                <span className="tp-section__sub-title left-line mb-20">
                  our Services
                </span>
                <h3 className="tp-section__title mb-30">Service Area</h3>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-12">
              <div className="services-link text-md-start text-lg-end mb-30">
                <span>
                  Well ensure you always get the best results:
                  <Link href="/contact">
                    Contact us<i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            {/* {service_data.map((item) => (
              <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 col-6">
                <div
                  style={{ position: "relative" }}
                  className={`services-item tp-services-item mb-50 mr-0 wow fadeInUp`}
                  data-wow-delay=".2s"
                >
                  <div
                    style={{
                      width: "100%",
                    }}
                    className="centetbody"
                  >
                    <div
                      className={`services-item__icon ${item.color_icon} mb-20`}
                    >
                      <img
                        style={{ width: "48px", marginBottom: "10px" }}
                        src={item.icon}
                      ></img>
                    </div>
                  </div>
                  <div className="services-item__content">
                    <h5 className="services-item__tp-title mb-20 bodestes">
                      <Link href={item.link}>{item.title}</Link>
                    </h5>
                    <p className="descerbodt">{item.des}</p>
                  </div>
                </div>
              </div>
            ))} */}
            {serviceinfo.map((item) => {
              return (
                item.id < 7 && (
                  <div key={item.id} className="col-lg-4 col-md-6 col-12 ">
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
