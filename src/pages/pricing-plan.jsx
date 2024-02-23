import Mobilelinks from "../common/mobilelinks";
import PricingPlan from "../components/pricing-plan";
import SEO from "../components/seo";
import Wrapper from "../layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Pricing Plan" />
      <PricingPlan />
      <Mobilelinks />
    </Wrapper>
  );
};

export default index;
