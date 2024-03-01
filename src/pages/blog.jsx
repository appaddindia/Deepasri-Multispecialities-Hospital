import Mobilelinks from "../common/mobilelinks";
import Plugin from "../common/plugin";
import Blog from "../components/blog";
import SEO from "../components/seo";
import Wrapper from "../layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Blog" />
      <Blog />
      <Mobilelinks />
      <Plugin />
    </Wrapper>
  );
};

export default index;
