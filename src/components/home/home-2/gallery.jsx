import Link from "next/link";
import React from "react";

// gallery_content_data
const gallery_content_data = [
  {
    id: 1,
    class: "col-lg-4 col-md-6",
    img: "/assets/photo/d9 (1)-fotor-20240208143140.png",
    title: "Cardiology",
  },
  {
    id: 2,
    class: "col-lg-8 col-md-6 d-none d-lg-block",
    img: "/assets/photo/d11-fotor-20240208141612.png",
    title: "Multispeciality Hospital",
  },
  {
    id: 3,
    class: "col-lg-4 col-md-6",
    img: "/assets/photo/d7-fotor-2024020814345.png",
    title: "Neurology",
  },
  {
    id: 4,
    class: "col-lg-4 col-md-6",
    img: "/assets/photo/d6 (1)-fotor-20240208143712.png",
    title: "Psychiatry",
  },
  {
    id: 5,
    class: "col-lg-4 col-md-6",
    img: "/assets/photo/d5-fotor-20240208144238.png",
    title: "Urology",
  },
  {
    id: 6,
    class: "col-lg-8 col-md-12 d-lg-none",
    img: "/assets/photo/d7-fotor-2024020814345.png",
    title: "Urine ANALYSIS",
  },
];

const Gallery = () => {
  return (
    <>
      <section className="gallery-area pb-0">
        <div
          className="gallery-bg-title theme-light-bg tp-box-space pt-100 pb-200 mr-30 ml-30"
          style={{
            backgroundImage: `url(/assets/img/shape/shape-bg-06.png)`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="tp-section text-center">
                  <span className="tp-section__sub-title sub-title-white left-line-white right-line-white mb-25">
                    Work Gallery
                  </span>
                  <h3 className="tp-section__title title-white mb-70">
                    Deepasri Multispeciality Hospital Gallery
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery-item-bg wow fadeInUp" data-wow-delay=".3s">
          <div className="container">
            <div className="row">
              {gallery_content_data.map((item) => (
                <div key={item.id} className={item.class}>
                  <div className="gallery-item p-relative mb-30">
                    <img src={item.img} alt="gallery-thumb" />
                    <div className="gallery-item__content">
                      <h4 className="gallery-item__title">
                        <Link href="/gallery">{item.title}</Link>
                      </h4>
                      <span>
                        <i className="fa-solid fa-tag"></i>
                        <Link href="/gallery">Services</Link>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="gallery-btn text-center mt-30">
                  <Link href="/gallery" className="tp-btn">
                    Explore More
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

export default Gallery;
