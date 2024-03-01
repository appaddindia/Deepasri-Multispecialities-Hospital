import team_home_two from "../../../data/team-home-2";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// slider setting
const setting = {
  slidesPerView: 4,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },

  breakpoints: {
    1400: {
      slidesPerView: 5,
    },
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
    nextEl: ".blog-nxt",
    prevEl: ".blog-prv",
  },
};

const Team = ({ bg_img }) => {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);
  return (
    <>
      <section className="team-area ">
        <div
          className="gallery-bg-title theme-light-bg tp-box-space pt-100 pb-200 mr-30 ml-30 sbdcvbsjv"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* <div className="tp-section text-center">
                  <h3
                    style={{ fontSize: "28px" }}
                    className="tp-section__title title-white mb-70"
                  >
                    Deepasri Multispeciality Hospital Gallery
                  </h3>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div
          className="gallery-item-bg  wow fadeInUp pb-45 "
          data-wow-delay=".3s"
          style={{ backgroundImage: `url(/assets/img/shape/shape-bg-07.png)` }}
        >
          <div className="container ">
            <div className="p-relative">
              <div className="row align-items-center">
                <div className="col-md-8 col-12">
                  <div className="tp-section">
                    <span
                      style={{ color: "white" }}
                      className="tp-section__sub-title  mb-25"
                    >
                      OUR TEAM
                    </span>
                    <h3
                      style={{ fontSize: "28px" }}
                      className="tp-section__title mb-65"
                    >
                      Our Specialist
                    </h3>
                  </div>
                </div>
                <div className="col-md-4 col-12">
                  <div className="blog-arrow d-flex align-items-center">
                    <div className="blog-prv">
                      <i className="fa-regular fa-arrow-left"></i>
                    </div>
                    <div className="blog-nxt">
                      <i className="fa-regular fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <Swiper
                {...setting}
                modules={[Navigation]}
                loop={isLoop}
                className="swiper-container blog-active"
                data-wow-delay=".3s"
              >
                {team_home_two.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="swiper-slide">
                      <div className="team-item mb-30">
                        <div className="team-item__thumb mb-30">
                          <img
                            style={{
                              width: "60%",
                              borderRadius: "50%",
                              border: "3px solid #0e63ff",
                            }}
                            src={item.img}
                            alt="team-thumb"
                          />
                        </div>
                        <div className="team-item__content">
                          <h5 className="team-item__title mb-15">
                            {item.name}
                          </h5>
                          <span>{item.title}</span>
                          {/* <div className="team-item__social-info">
                            {item.social_links.map((l, i) => (
                              <a key={i} href={l.link} target={l.target}>
                                <i className={l.icon}></i>
                              </a>
                            ))}
                          </div> */}
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

export default Team;
