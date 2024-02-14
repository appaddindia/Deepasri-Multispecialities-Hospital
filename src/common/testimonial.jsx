import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

// ts img
const ts_img = [
  {
    img: "assets/photo/tt1.jpg",
  },
  {
    img: "assets/photo/tt3.jpg",
  },
  {
    img: "assets/photo/tt4.jpg",
  },
  {
    img: "assets/photo/tt2.jpg",
  },
];

// ts_text
const ts_text = [
  {
    des: (
      <>
        Really appreciate the help provided to me during my tough times by this
        Deepasri Multispecialities Hospital. My entire family was admitted in
        the same week for the same problem of COVID, and the staff was really
        helpful and took care of everyone so well. This was really helpful for
        us as a family too. And we recovered very fast with the help of
        wonderful team over there.
      </>
    ),
    name: "Mrs. Sumira",
    title: "March 19, 2020",
  },
  {
    des: (
      <>
        I got admitted for Knee Replacement in Deepasri Hospital. We were
        provided homely atmosphere at Deepasri Hospital. Consultants & Staffs
        were excellent. Anaesthesia department helped us a lot during and after
        the Operation. Physiotherapists assisted us to start walking on day two
        after the operation. This Hospital is really a blessing for our region.
      </>
    ),
    name: "Mr. Rajeev",
    title: "April 06, 2020",
  },
  {
    des: (
      <>
        Behaviour of staffs are very polite. Doctors are treating patient in
        very satisfied manner during COVID Crisis. They explain all health
        issues to patient representative very clear cut. Also, hustle fee
        appointment for COVID patients are adopted by hospital. Cleanliness is
        good standard. I recomend Deepasri Multispecialities Hospital to
        everyone best medical services.
      </>
    ),
    name: "Mr. Bipin",
    title: "May 28, 2020",
  },
  {
    des: (
      <>
        Really appreciate the help provided to me during my tough times by this
        Deepasri Multispecialities Hospital. My entire family was admitted in
        the same week for the same problem of COVID, and the staff was really
        helpful and took care of everyone so well. This was really helpful for
        us as a family too. And we recovered very fast with the help of
        wonderful team over there.
      </>
    ),
    name: "Mrs. Sumira",
    title: "March 19, 2020",
  },
];

const bg_style = {
  backgroundImage: `url(/assets/img/shape/shape-bg-05.png)`,
};

const Testimonial = ({ bg_img }) => {
  const [isLoop, setIsLoop] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  useEffect(() => {
    setIsLoop(true);
  }, []);
  return (
    <>
      <div
        className={`testimonial-area pt-100 classtestimonial ${
          bg_img ? "testi-bg theme-light-bg" : "tp-common-area"
        } `}
        style={bg_img ? bg_style : {}}
      >
        <div
          className="container p-relative  wow fadeInUp"
          data-wow-delay=".3s"
        >
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className={`testi-thumb ${
                  bg_img ? "" : "tp-testi-thumb-ava"
                } text-center`}
              >
                <div className="swiper-container swiper  test-ava-active">
                  <Swiper
                    loop={isLoop}
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    navigation={{
                      nextEl: ".testi-button-next",
                      prevEl: ".testi-button-prev",
                    }}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="testi-avta-bottom pb-50"
                    breakpoints={{
                      1400: {
                        slidesPerView: 4,
                      },
                      1200: {
                        slidesPerView: 3,
                      },
                      992: {
                        slidesPerView: 3,
                      },
                      768: {
                        slidesPerView: 3,
                      },
                      576: {
                        slidesPerView: 1,
                      },
                      0: {
                        slidesPerView: 1,
                      },
                    }}
                  >
                    {ts_img.map((img, i) => (
                      <SwiperSlide key={i}>
                        <img
                          style={{ width: "80px" }}
                          src={img.img}
                          alt="testi-avata"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
            <div
              className={`${bg_img ? "testi-arrow" : "tp-testimonial-arrow"}`}
            >
              <div className="testi-button-next">
                <i className="fa-regular fa-arrow-right"></i>
              </div>
              <div className="testi-button-prev">
                <i className="fa-regular fa-arrow-left"></i>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-10 col-md-11 col-12">
              <Swiper
                loop={isLoop}
                spaceBetween={10}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                navigation={{
                  nextEl: ".testi-button-next",
                  prevEl: ".testi-button-prev",
                }}
                modules={[FreeMode, Navigation, Thumbs]}
                className={`swiper-container ${
                  bg_img ? "" : "tp-testimonial-text "
                } test-active`}
              >
                {ts_text.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="testi-content text-center">
                      <p style={{ marginBottom: "25px" }}>{item.des}</p>
                      <i>{item.name}</i>
                      <span>{item.title}</span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
