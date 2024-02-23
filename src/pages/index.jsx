import React from "react";
import Layout from "../layout/layout";
import HomeOne from "../components/home/home/home";
import SEO from "../components/seo";
import Wrapper from "../layout/wrapper";
import Home from "../components/home/home/home";
import HomeTwo from "../components/home/home-2/hometwo";
import LayoutTwo from "../layout/layout-2";
import Mobilelinks from "../common/mobilelinks";

const index = () => {
  return (
    <Wrapper>
      <LayoutTwo>
        <SEO pageTitle="Home Two" />
        <HomeTwo />
        <Mobilelinks />
      </LayoutTwo>
    </Wrapper>
  );
};

export default index;
