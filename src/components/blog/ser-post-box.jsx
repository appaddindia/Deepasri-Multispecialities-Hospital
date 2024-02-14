import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogSearch from "./blog-search";
import Category from "./category";
import RecentPost from "./recent-post";
import Tags from "./tags";
import Categorytwo from "./categorytwo";
import Tagstwo from "./tagtwo";

// slider setting
const setting = {
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 4000,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".postbox-slider-button-next",
    prevEl: ".postbox-slider-button-prev",
  },
};
function Serpostbox({ name, img, tittle, link, service, des }) {
  const [isLoop, setIsLoop] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    setIsLoop(true);
  }, []);

  return (
    <>
      <div className="postbox-area pt-100 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-12">
              <div className="postbox pr-0 pb-40">
                <div className="postbox__thumb w-img mb-45">
                  <img src={img} alt="blog-thumg" />
                </div>

                <div className="postbox__content">
                  {/* <div className="postbox__meta mb-20">
                            <span>
                              <Link href="/blog-details">
                                <i className="fa-regular fa-user"></i>
                                {article.user}
                              </Link>
                            </span>
                            <span>
                              <i className="fa-regular fa-clock"></i>{" "}
                              {article.date}
                            </span>
                            <span>
                              <Link href="/about">
                                <i className="fa-regular fa-message-dots"></i>
                                {article.comments}
                              </Link>
                            </span>
                            <span>
                              <i className="fa-light fa-eye"></i>{" "}
                              {article.views}
                            </span>
                          </div> */}
                  <h3
                    style={{ marginTop: "-20px" }}
                    className="postbox__title mb-20"
                  >
                    <Link href="/blog-details">{tittle}</Link>
                  </h3>
                  <div className="postbox__text mb-20">{des}</div>
                  <div className="postbox__read-more">
                    <Link href={link} className="tp-btn">
                      Reade more
                    </Link>
                  </div>
                </div>

                {/* <div className="basic-pagination">
                    <nav>
                      <ul>
                        <li>
                          <Link href="/blog">
                            <i className="fa-light fa-arrow-left-long"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog">1</Link>
                        </li>
                        <li>
                          <span className="current">2</span>
                        </li>
                        <li>
                          <Link href="/blog"> 3 </Link>
                        </li>
                        <li>
                          <Link href="/blog">...</Link>
                        </li>
                        <li>
                          <Link href="/blog">
                            <i className="fa-light fa-arrow-right-long"></i>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div> */}
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-12">
              <div className="sidebar__wrapper pl-25 pb-50">
                {/* <BlogSearch /> */}
                {service === "service" && (
                  <>
                    <Category />
                    <Tags />
                  </>
                )}
                {service === "other-service" && (
                  <>
                    <Categorytwo />
                    <Tagstwo />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Serpostbox;
