import Mobilelinks from "../common/mobilelinks";
import Plugin from "../common/plugin";
import Research from "../components/research/research";
import SEO from "../components/seo";
import Wrapper from "../layout/wrapper";
import React from "react";

function gallery() {
  return (
    <Wrapper>
      <SEO pageTitle="Research" />
      <Research />
      <Mobilelinks />
      <Plugin />
    </Wrapper>
  );
}

export default gallery;
