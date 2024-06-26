import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <>
      <section
        className="breadcrumb__area pt-0 pb-0 breadcrumb__overlay asdsjb"
        style={{
          backgroundImage: `url(/assets/photo/gallery.jpg)`,
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="tp-breadcrumb">
                <h2 className="tp-breadcrumb__title">Gallery</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="tp-breadcrumb__link d-flex">
                <span>
                  DEEPASRI : <Link href="/"> Home</Link>
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
