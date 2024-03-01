import Plugin from "../common/plugin";
import SEO from "../components/seo";
import TeamOne from "../components/team/team/team-one";
import Wrapper from "../layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Team One" />
      <TeamOne />
      <Plugin />
    </Wrapper>
  );
};

export default index;
