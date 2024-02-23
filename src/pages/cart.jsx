import Mobilelinks from "../common/mobilelinks";
import Cart from "../components/cart";
import SEO from "../components/seo";
import Wrapper from "../layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="cart" />
      <Cart />
      <Mobilelinks />
    </Wrapper>
  );
};

export default index;
