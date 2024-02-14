import FooterFour from "../../../layout/footer/footer-4";
import HeaderTwo from "../../../layout/header/header-two";
import React from "react";
import Banner from "./banner";
import ProcessArea from "./process-area";
import ServiceArea from "./service-area";
import NavTab from "../../../common/nav-tab";

const ServiceThree = () => {
  return (
    <>
      <HeaderTwo />
      <Banner />
      <ServiceArea />
      <div
        className="grey-bg"
        style={{ backgroundImage: `url(/assets/img/shape/shape-bg-07.png)` }}
      >
        <NavTab />
      </div>
      {/* <ProcessArea /> */}
      {/* <PricingArea /> */}
      {/* <DirectContactUs /> */}
      <FooterFour />
    </>
  );
};

export default ServiceThree;
