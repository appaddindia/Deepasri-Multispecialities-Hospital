import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// blog_content
const blog_content = [
  {
    id: 1,
    img: "/assets/photo/aa2.jpg",
    title: "Doctors to be Consulted for Back Pain",
    des: "Back pain is one of the most common ailments troubling hundreds and thousands of ...",
    date: "Dec 28, 2023",
    views: "1,832 views",
  },
  {
    id: 2,
    img: "/assets/photo/aa3.jpg",
    title: "The Most Common Diseases of Childhood",
    des: "Childhood though is considered to be the best part of human life the children are ...",
    date: "Sep 20, 2023",
    views: "1,526 views",
  },
  {
    id: 3,
    img: "/assets/photo/aa4.jpg",
    title: "Covid Vaccines and their Protective Power",
    des: "Ever since Covid-19 pandemic had broken out in the world, the developed and developing ...",
    date: "Aug 18, 2023",
    views: "2,526 views",
  },
  {
    id: 4,
    img: "/assets/photo/aa5.jpg",
    title: "What Conditions does a urologist treat?",
    des: "If anything really bad happens with your urinary system or your body’s mechanism for ...",
    date: "Aug 16, 2023",
    views: "2,800 views",
  },
];

// blog setting
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
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
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
const Blog = () => {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);
  return (
    <>
      <section className="blog-area pt-100 pb-100">
        <div className="container  wow fadeInUp" data-wow-delay=".3s">
          <div className="row align-items-center">
            <div className="col-md-8 col-12">
              <div className="tp-section">
                <span className="tp-section__sub-title left-line mb-25">
                  Waht’s New
                </span>
                <h3
                  style={{ fontSize: "28px" }}
                  className="tp-section__title mb-65"
                >
                  Blog & Article
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
            modules={[Navigation]}
            loop={isLoop}
            {...setting}
            className="swiper-container blog-active"
          >
            {blog_content.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="pb-50">
                  <div className="blog-item">
                    <div className="blog-item__thumb fix">
                      <img
                        style={{ width: "100%" }}
                        src={item.img}
                        alt="blog-thumb"
                      />
                    </div>
                    <div className="blog-item__content">
                      <h5 className="blog-item__title mb-15">
                        <Link href="/blog">{item.title}</Link>
                      </h5>
                      <p>{item.des}</p>
                      <div className="blog-item__date-info">
                        <ul className="d-flex align-items-center">
                          <li>
                            <i className="fa-light fa-clock"></i>Dec 28, 2022
                          </li>
                          <li>
                            <i className="fa-light fa-eye"></i>1,526 views
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-link text-center">
                <span>
                  Join our Community for Get Update :
                  <Link href="/blog">
                    Join our Community
                    <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
