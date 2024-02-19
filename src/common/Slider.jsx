import React, { useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const banner = [
  {
    img1: "/assets/photo/banner2.png",
    img2: "/assets/photo/mob2.png",
  },
  {
    img1: "/assets/photo/banner3.png",
    img2: "/assets/photo/mob3.png",
  },
  {
    img1: "/assets/photo/banner1.png",
    img2: "/assets/photo/mob1.png",
  },
  {
    img1: "/assets/photo/banner4.png",
    img2: "/assets/photo/mob4.png",
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
    <div>
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
