import Link from "next/link";
import React from "react";
import serviceinfo from "../service-details/serviceinfo";

const ServiceArea = () => {
  return (
    <>
      <section
        className="services-area pt-100 pb-90 grey-bg"
        style={{ backgroundImage: `url(/assets/img/shape/shape-bg-01.png)` }}
      >
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="tp-section">
                <span className="tp-section__sub-title left-line right-line mb-20">
                  our facility
                </span>
                <h3
                  style={{ fontSize: "28px" }}
                  className="tp-section__title mb-50"
                >
                  Advanced center
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            {serviceinfo.map((item) => {
              return (
                item.id > 13 && (
                  <div key={item.id} className="col-xl-4 col-md-6">
                    <div
                      className="services-item mb-40 wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      <div className={`services-item__icon  mb-20`}>
                        <img
                          style={{
                            width: "48px",
                            marginBottom: "10px",
                            padding: "3px",
                          }}
                          src={item.icon}
                        ></img>
                      </div>
                      <div className="services-item__content">
                        <h4 className="services-item__tp-title tp-srv-title mb-20">
                          <Link href="/services-details">{item.name}</Link>
                        </h4>
                        <p
                          style={{
                            overflow: "hidden",
                            height: "100px",
                            marginBottom: "20px",
                          }}
                          className=""
                        >
                          {item.content}
                        </p>
                        <div className="services-item__btn">
                          <Link className={`btn-hexa `} href={item.link}>
                            <i></i>Read More
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
