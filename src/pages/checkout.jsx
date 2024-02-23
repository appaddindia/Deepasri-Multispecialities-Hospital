import Mobilelinks from "../common/mobilelinks";
import Checkout from "../components/checkout";
import SEO from "../components/seo";
import Wrapper from "../layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Checkout" />
      <Checkout />
      <Mobilelinks />
    </Wrapper>
  );
};

export default index;
