import Specialists from "../../../common/specialists";
import FooterFour from "../../../layout/footer/footer-4";
import HeaderTwo from "../../../layout/header/header-two";
import React from "react";
import Banner from "./banner";
import ServiceArea from "./service-area";
import NavTab from "../../../common/nav-tab";

const ServiceOne = () => {
  return (
    <>
      <HeaderTwo />
      <Banner />
      <ServiceArea />

      {/* <PricingArea /> */}
      {/* <DirectContactUs /> */}
      <FooterFour />
    </>
  );
};

export default ServiceOne;
