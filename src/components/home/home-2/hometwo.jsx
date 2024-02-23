import React from "react";
import About from "./about";
import Appointment from "./appointment";
import Choose from "./choose";
import Gallery from "./gallery";
import HeroBanner from "./hero-banner";
import NewsLetter from "./news-letter";
import Service from "./service";
import Services from "../home-3/service";
import Team from "./team";
import Testimonial from "../../../common/testimonial";
import Blog from "./blog";
import Specialists from "../../../common/specialists";
import Abouts from "../home/about";
import Slider from "../../../common/Slider";

const HomeTwo = () => {
  return (
    <>
      {/* <HeroBanner /> */}
      <Slider />
      <About />
      <Service />
      <Team />
      <Services />
      <Gallery />
      {/* <Counter cls="pt-90 pb-80" /> */}

      {/* <div className="mb-100"></div>
      <Choose /> */}
      <div className="mb-100"></div>
      {/* <Specialists /> */}
      <Abouts />
      {/* <Appointment /> */}
      {/* <Brands border_style={true} /> */}

      <Testimonial bg_img={true} />
      <Blog />
      {/* <NewsLetter /> */}
      {/* <Appointment /> */}
    </>
  );
};

export default HomeTwo;
