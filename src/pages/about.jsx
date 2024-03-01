import Mobilelinks from "../common/mobilelinks";
import Plugin from "../common/plugin";
import About from "../components/about/about";
import SEO from "../components/seo";
import Wrapper from "../layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="About" />
      <About />
      <Mobilelinks />
    </Wrapper>
  );
};

export default index;
