import React, { useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const banner = [
  {
    img1: "/assets/photo/banner5.png",
    img2: "/assets/photo/mob5.png",
  },
  {
    img1: "/assets/photo/banner2.png",
    img2: "/assets/photo/mob2.png",
  },
  {
    img1: "/assets/photo/banner3.png",
    img2: "/assets/photo/mob3.png",
  },
  // {
  //   img1: "/assets/photo/banner1.png",
  //   img2: "/assets/photo/mob1.png",
  // },
  // {
  //   img1: "/assets/photo/banner4.png",
  //   img2: "/assets/photo/mob4.png",
  // },
  {
    img1: "/assets/photo/banner6.png",
    img2: "/assets/photo/mob6.png",
  },
  {
    img1: "/assets/photo/banner7.png",
    img2: "/assets/photo/mob7.png",
  },
  {
    img1: "/assets/photo/banner8.png",
    img2: "/assets/photo/mob8.png",
  },
  {
    img1: "/assets/photo/banner9.png",
    img2: "/assets/photo/mob9.png",
  },
  {
    img1: "/assets/photo/banner10.png",
    img2: "/assets/photo/mob10.png",
  },
  {
    img1: "/assets/photo/banner11.png",
    img2: "/assets/photo/mob11.png",
  },
  {
    img1: "/assets/photo/banner12.png",
    img2: "/assets/photo/mob12.png",
  },
];

const setting = {
  // loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
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
function Slider() {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Swiper
        modules={[Navigation]}
        loop={isLoop}
        {...setting}
        className="swiper-container blog-active"
      >
        {banner.map((elem, i) => (
          <SwiperSlide key={i}>
            <div style={{ width: "100%" }}>
              <img
                className="topperscreen"
                style={{ width: "100%" }}
                src={elem.img1}
                alt=""
              />
              <img
                className="lowerscreen"
                style={{ width: "100%" }}
                src={elem.img2}
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        style={{ position: "absolute", zIndex: "800" }}
        className="container"
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
          className="blog-arrow d-flex align-items-center"
        >
          <div className="blog-prv">
            <i className="fa-regular fa-arrow-left"></i>
          </div>
          <div className="blog-nxt">
            <i className="fa-regular fa-arrow-right"></i>
          </div>
        </div>
      </div>

      {/* <div
        style={{ padding: "0px 100px", width: "100%", position: "relative" }}
        className="team-arrow"
      >
        <div className="team-prv">
          <i className="fa-regular fa-arrow-left"></i>
        </div>
        <div className="team-nxt">
          <i className="fa-regular fa-arrow-right"></i>
        </div>
      </div> */}
    </div>
  );
}

export default Slider;
