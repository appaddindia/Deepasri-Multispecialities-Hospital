import Mobilelinks from "../common/mobilelinks";
import Plugin from "../common/plugin";
import ProjectDetails from "../components/project-details";
import SEO from "../components/seo";
import Wrapper from "../layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Project Details" />
      <ProjectDetails />
      <Mobilelinks />
      <Plugin />
    </Wrapper>
  );
};

export default index;
