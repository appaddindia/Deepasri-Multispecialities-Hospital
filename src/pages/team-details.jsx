import SEO from "../components/seo";
import TeamDetails from "../components/team/team-details/team-details";
import Wrapper from "../layout/wrapper";
import React from "react";
import Mobilelinks from "../common/mobilelinks";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Team Details" />
      <TeamDetails />

      <Mobilelinks />
    </Wrapper>
  );
};

export default index;
