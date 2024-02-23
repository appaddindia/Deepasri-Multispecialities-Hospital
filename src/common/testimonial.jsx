import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

// ts img
const ts_img = [
  {
    img: "assets/photo/R (2).jpg",
  },
  {
    img: "assets/photo/s_name_pic (5).jpg",
  },
  {
    img: "assets/photo/tt2.jpg",
  },
  {
    img: "assets/photo/tt4.jpg",
  },
];

// ts_text
const ts_text = [
  {
    des: (
      <>
        Good service to patients from all the staff very good hospital, since
        past 8 year I'm coming to this hospital all the doctors and staffs are
        very good strongly recommend this hospital.
      </>
    ),
    name: "punith gowda v",
    title: "a week ago",
  },
  {
    des: (
      <>
        I admitted my mother in law for left hip fracture due to which undergone
        treatment at deepasri . Quality of procedure, service at hospital is
        very satisfactory. All the Staffs and doctors are humble and
        supportive..
      </>
    ),
    name: "shyla rv",
    title: "a week ago",
  },
  {
    des: (
      <>
        Very good services and treatment very professional doctors and staff
        happy with treatment and good clean hygiene atmosphere good
        infrastructure very happy recommended to every one
      </>
    ),
    name: "Tapan kumar",
    title: "a week ago",
  },
  {
    des: (
      <>
        Visiting since 2 yrs quality of treatment and service from staff and
        management is very satisfactory they guide us very well doctors are so
        professional and friendly thank you whole team highly recommended
      </>
    ),
    name: "Paddu Padma",
    title: "2 months ago",
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
                    className="testi-avta-bottom pb-30"
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
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          paddingBottom: "15px",
                        }}
                      >
                        <img
                          style={{ width: "24px", padding: "2px" }}
                          src="assets/photo/star.png"
                          alt=""
                        />
                        <img
                          style={{ width: "24px", padding: "2px" }}
                          src="assets/photo/star.png"
                          alt=""
                        />
                        <img
                          style={{ width: "24px", padding: "2px" }}
                          src="assets/photo/star.png"
                          alt=""
                        />
                        <img
                          style={{ width: "24px", padding: "2px" }}
                          src="assets/photo/star.png"
                          alt=""
                        />
                        <img
                          style={{ width: "24px", padding: "2px" }}
                          src="assets/photo/star.png"
                          alt=""
                        />
                      </div>
                      <p style={{ marginBottom: "25px" }}>{item.des}</p>
                      <i>{item.name}</i>
                      <span>{item.title}</span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "8px",
              padding: "0px 10px",
            }}
          >
            <a
              style={{ color: "white", textAlign: "center" }}
              href="https://www.google.com/search?q=DEEPASRI+MULTISPECIALITIES&oq=DEEPASRI+MULTISPECIALITIES&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTINCAEQLhivARjHARiABDIGCAIQRRg8MgYIAxBFGDwyBggEEEUYPNIBBzk2MmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x3bae6b3b1f1b3117:0x286fe35d86e0c8d6,1,,,,"
            >
              Google rating score:<b>4.3 of 5</b>,based on <b>437</b> reviews
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
