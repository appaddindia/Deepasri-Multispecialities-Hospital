import Mobilelinks from "../common/mobilelinks";
import Plugin from "../common/plugin";
import FAQ from "../components/faq/faq";
import SEO from "../components/seo";
import Wrapper from "../layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="FAQ " />
      <FAQ />
      <Mobilelinks />
      <Plugin />
    </Wrapper>
  );
};

export default index;
