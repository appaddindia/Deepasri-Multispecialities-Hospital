import Mobilelinks from "../common/mobilelinks";
import Plugin from "../common/plugin";
import ProductDetails from "../components/product-details";
import SEO from "../components/seo";
import Wrapper from "../layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Product Details" />
      <ProductDetails />
      <Mobilelinks />
    </Wrapper>
  );
};

export default index;
