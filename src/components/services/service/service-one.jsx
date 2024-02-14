import Specialists from "../../../common/specialists";
import FooterFour from "../../../layout/footer/footer-4";
import HeaderTwo from "../../../layout/header/header-two";
import React from "react";
import Banner from "./banner";
import ServiceArea from "./service-area";

const ServiceOne = () => {
  return (
    <>
      <HeaderTwo />
      <Banner />
      <ServiceArea />
      <div style={{ marginTop: "-120px" }}></div>
      <Specialists />
      {/* <PricingArea /> */}
      {/* <DirectContactUs /> */}
      <FooterFour />
    </>
  );
};

export default ServiceOne;
