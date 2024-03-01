import Mobilelinks from "../common/mobilelinks";
import Plugin from "../common/plugin";
import SEO from "../components/seo";
import ServiceOne from "../components/services/service/service-one";
import Wrapper from "../layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Department" />
      <ServiceOne />

      <Mobilelinks />
    </Wrapper>
  );
};

export default index;
