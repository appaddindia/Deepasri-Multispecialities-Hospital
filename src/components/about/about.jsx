import Counter from "../../common/counter";
import HeaderTwo from "../../layout/header/header-two";
import React from "react";
import AboutArea from "./about-area";
import Banner from "./banner";
import Specialists from "../../common/specialists";
import NavTab from "../../common/nav-tab";
import Team from "../../common/team";
import FooterFour from "../../layout/footer/footer-4";
import ServiceArea from "../home/home/service-area";
import Blog from "../home/home-2/blog";

const About = () => {
  return (
    <>
      <HeaderTwo />
      <Banner />
      <AboutArea />
      <div style={{ marginTop: "-20px" }}></div>
      {/* <div style={{ marginTop: "-60px" }}></div>
      <Counter /> */}
      <ServiceArea />
      <NavTab />
      {/* <Specialists /> */}
      <section
        className="grey-bg"
        style={{ backgroundImage: `url(/assets/img/shape/shape-bg-07.png)` }}
      >
        <Blog />
      </section>

      <FooterFour />
    </>
  );
};

export default About;
