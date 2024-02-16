import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Link from "next/link";

// slider setting
const setting = {
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".services-n",
    prevEl: ".services-p",
  },
};

// slider_content
const slider_content = [
  {
    id: 1,
    icon: "/assets/photo/obstetrics (2).png",
    title: "OBG",
    des: (
      <>
        Obstetrics and Gynaecology is a medical specialty dedicated to the
        health and well-being of women...
      </>
    ),
    color_icon: "",
    color: "",
    ml: 20,
    link: "/obg",
  },
  {
    id: 2,
    icon: "/assets/photo/skin.png",
    title: "Cosmetology",
    des: (
      <>
        Skin and cosmetology focus on enhancing and maintaining the health and
        appearance of the skin...
      </>
    ),
    color_icon: "pink-icon",
    color: "pink-hexa",
    ml: 20,
    link: "/ophthalmology",
  },
  {
    id: 3,
    icon: "/assets/photo/first-aid-kit.png",
    title: "General Medicine",
    des: (
      <>
        General medicine is a broad medical specialty that involves the
        diagnosis, treatment, and prevention...
      </>
    ),

    color_icon: "green-icon",
    color: "green-hexa",
    ml: 20,
    link: "/generalmedicine",
  },
  {
    id: 4,
    icon: "/assets/photo/surgery-tools (1).png",
    title: "General Surgery",
    des: (
      <>
        General surgery is a medical specialty that focuses on surgical
        procedures to treat...
      </>
    ),

    color_icon: "sky-icon",
    color: "sky-hexa",
    ml: 20,
    link: "/generalsurgery",
  },
  {
    id: 5,
    icon: "/assets/photo/diabetes.png",
    title: "Diabetology",
    des: (
      <>
        Diabetology is the specialized field of medicine dedicated to the study,
        diagnosis, and management of diabetes...
      </>
    ),

    color_icon: "green-icon",
    color: "green-hexa",
    ml: 20,
    link: "/diabetology",
  },
  {
    id: 6,
    icon: "/assets/photo/eyeball.png",
    title: "Ophthalmology",
    des: (
      <>
        Ophthalmology is a medical specialty centered on the health of the eyes
        and visual system. Ophthalmologists...
      </>
    ),

    color_icon: "sky-icon",
    color: "sky-hexa",
    ml: 20,
    link: "/ophthalmology",
  },
  {
    id: 7,
    icon: "/assets/photo/x-ray.png",
    title: "Orthopaedics",
    des: (
      <>
        Orthopaedics is the medical specialty that focuses on the diagnosis,
        treatment, and prevention of disorders...
      </>
    ),

    color_icon: "",
    color: "",
    ml: 20,
    link: "/orthopaedics",
  },
  {
    id: 8,
    icon: "/assets/photo/people.png",
    title: "Paediatrics",
    des: (
      <>
        Paediatrics is the branch of medicine dedicated to the health and
        well-being of infants, children...
      </>
    ),

    color_icon: "pink-icon",
    color: "pink-hexa",
    ml: 20,
    link: "/paediatrics",
  },
];

const ServiceArea = () => {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);
  return (
    <>
      <section
        className="services-area pt-95 pb-70 grey-bg mt-60 fix"
        style={{ backgroundImage: `url(/assets/img/shape/shape-bg-01.png)` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-8 col-12">
              <div className="tp-section">
                <span className="tp-section__sub-title left-line mb-20">
                  our Services
                </span>
                <h3
                  style={{ fontSize: "28px" }}
                  className="tp-section__title mb-50"
                >
                  Service Area
                </h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="tp-services d-flex align-items-center">
                <div className="services-p">
                  <i className="fa-regular fa-arrow-left"></i>
                </div>
                <div className="services-n">
                  <i className="fa-regular fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="services-slider  wow fadeInUp" data-wow-delay=".3s">
            <div>
              <Swiper
                {...setting}
                loop={isLoop}
                modules={[Navigation]}
                className="service-active"
              >
                {slider_content.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="services-item mb-40">
                      <div
                        className={`services-item__icon ${item.color_icon} mb-30`}
                      >
                        <img
                          style={{ width: "48px", marginBottom: "10px" }}
                          src={item.icon}
                        ></img>
                      </div>
                      <div className="services-item__content">
                        <h4 className="services-item__tp-title mb-30">
                          <Link href={item.link}>{item.title}</Link>
                        </h4>
                        <p>{item.des}</p>
                        <div className="services-item__btn">
                          <Link
                            className={`btn-hexa ${item.color}`}
                            href={item.link}
                          >
                            <i></i>Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceArea;
