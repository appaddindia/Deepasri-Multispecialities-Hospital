import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/seo";
import HeaderTwo from "../layout/header/header-two";
import Banner from "../components/services/service-details/banner";
import FooterFour from "../layout/footer/footer-4";
import Terms from "../components/contact/terms";
import Conditions from "../components/contact/conditions";
import Mobilelinks from "../common/mobilelinks";

function termsandconditions() {
  return (
    <Wrapper>
      <SEO pageTitle="Blog" />
      <HeaderTwo />
      <Banner name={"Terms and conditions"} banner={"assets/photo/terms.jpg"} />
      <Conditions />
      <FooterFour />
      <Mobilelinks />
    </Wrapper>
  );
}

export default termsandconditions;
