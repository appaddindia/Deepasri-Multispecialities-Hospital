import Mobilelinks from "../common/mobilelinks";
import Plugin from "../common/plugin";
import SEO from "../components/seo";
import ServiceDetails from "../components/services/service-details/service-details";
import Wrapper from "../layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Service Details" />
      <ServiceDetails />

      <Mobilelinks />
    </Wrapper>
  );
};

export default index;
