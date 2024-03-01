import Mobilelinks from "../common/mobilelinks";
import Plugin from "../common/plugin";
import ContactUs from "../components/contact/contact";
import SEO from "../components/seo";
import Wrapper from "../layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"contact us"} />
      <ContactUs />
      <Mobilelinks />
      <Plugin />
    </Wrapper>
  );
};

export default index;
