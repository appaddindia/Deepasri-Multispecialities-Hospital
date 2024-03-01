import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/seo";
import HeaderTwo from "../layout/header/header-two";
import Conditions from "../components/contact/conditions";
import FooterFour from "../layout/footer/footer-4";
import Terms from "../components/contact/terms";
import Banner from "../components/services/service-details/banner";
import Mobilelinks from "../common/mobilelinks";
import Plugin from "../common/plugin";

function Privancy() {
  return (
    <Wrapper>
      <SEO pageTitle="Blog" />
      <HeaderTwo />
      <Banner name={"Privacy policy"} banner={"assets/photo/pri.jpg"} />
      <Terms />
      <FooterFour />
      <Mobilelinks />
      <Plugin />
    </Wrapper>
  );
}

export default Privancy;
