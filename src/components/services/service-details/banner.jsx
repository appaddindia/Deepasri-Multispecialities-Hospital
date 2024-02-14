import Link from "next/link";
import React, { useMemo } from "react";

const Banner = ({ banner, name }) => {
  return (
    <>
      <section
        className="breadcrumb__area pt-0 pb-0 breadcrumb__overlay asdsjb"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-7 col-md-12 col-12">
              <div className="tp-breadcrumb">
                <h2 className="tp-breadcrumb__title">{name}</h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5 col-md-12 col-12">
              <div className="tp-breadcrumb__link serv-md d-flex">
                <span>
                  Deepasri :<Link href="/service-details">Home</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
