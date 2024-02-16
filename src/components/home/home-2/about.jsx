import VideoPopup from "../../../modals/video-popup";
import Link from "next/link";
import React, { useState } from "react";

const About = () => {
  // about content data
  const about_content = {
    about_bg: "/assets/img/shape/shape-bg-05.png",
    about_img: "/assets/photo/firstmain.png",
    popup_video: "",
    about_thumb: "/assets/img/about/about-bg-03.png",
    title: "BEST HOSPITAL FOR YOUR GOOD HEALTH",
    sub_title: "About",
    des_1: (
      <>
        At Deepasri Multispecialities Hospital, we share the common dream of
        giving you the compassionate healthcare that you deserve. Our
        specialized services have been designed to deliver the care that is best
        suited to your needs.
      </>
    ),
    dex_2: (
      <>
        Deepasri Multispecialities Hospital is clean, efficient, customer
        centric, affordable and accessible. The innovative design of the
        hospital, from their manageable size to their advanced technology, is
        focused on creating positive experience for patients. We believe in
        making your concern, ours. Our 24 X 7 human, medical, and
        infrastructural services ensure your constant comfort and quick
        recovery. Success for us is the smile on our patients’ faces as they
        leave our hospital.
      </>
    ),
    btn: "Talk with Expart",

    // booking data
    booking_bg: "/assets/photo/mainimage.png",
    b_sub_title: "Quick Help Here",
    b_title: (
      <>
        Feel free to contact us; our team<br></br> is glad to assist you
        promptly.
      </>
    ),
    b_btn: "Book Now",
    b_img: "/assets/photo/logomin.png",
  };
  const {
    about_bg,
    about_img,
    popup_video,
    about_thumb,
    sub_title,
    title,
    des_1,
    dex_2,
    btn,
    booking_bg,
    b_sub_title,
    b_title,
    b_btn,
    b_img,
  } = about_content;

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section
        className="about-area grey-bg pt-100 tp-box-space pb-100 ml-30 mr-30"
        style={{
          backgroundImage: `url(${about_bg})`,
        }}
      >
        <div className="about-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-12 col-12">
                <div
                  className="about-thumb text-lg-center p-relative ml-85 mb-60 wow fadeInLeft"
                  data-wow-delay=".3s"
                >
                  <img src={about_img} alt="about-thumb" />
                  <div className="about-video">
                    {/* <button
                      onClick={() => setIsVideoOpen(true)}
                      className="popup-video"
                      href={popup_video}
                    >
                      <i className="fa-solid fa-play"></i>
                    </button> */}
                  </div>
                  <div className="about-thumb-shape d-none d-md-block">
                    <img src={about_thumb} alt="about-shape" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-12">
                <div
                  className="about-content ml-60 mb-60 wow fadeInRight"
                  data-wow-delay=".3s"
                >
                  <div className="tp-section">
                    <span className="tp-section__sub-title left-line mb-10">
                      {sub_title}
                    </span>
                    <h3 className="tp-section__title mb-25">{title}</h3>
                    <i>{des_1}</i>
                    <p style={{ marginTop: "-20px" }} className=" mr-20 mb-15 ">
                      {dex_2}
                    </p>
                  </div>
                  <div className="about-content__btn">
                    <Link href="/about" className="tp-btn">
                      {btn}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-area pt-40 ">
          <div className="container">
            <div className="row wow fadeInUp" data-wow-delay=".3s">
              <div className="col-lg-12">
                <div
                  className="tp-cta-bg p-relative theme-light-bg pt-50 pb-55"
                  style={{
                    backgroundImage: `url(${booking_bg})`,
                  }}
                >
                  <div className="cta-content ml-90">
                    <div className="tp-section">
                      <span className="tp-section__sub-title sub-title-white left-line-white mb-20">
                        {b_sub_title}
                      </span>
                    </div>
                    <h2 className="cta-title mb-30">{b_title}</h2>
                    <div className="cta-btn">
                      <button className="tp-btn-second">{b_btn}</button>
                    </div>
                    <div className="cta-shape d-none d-md-block">
                      <img
                        style={{ width: "60px", marginBottom: "10px" }}
                        src={b_img}
                        alt="cta-logo-shape"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"d8w5SICzzxc"}
      />
      {/* video modal end */}
    </>
  );
};

export default About;
