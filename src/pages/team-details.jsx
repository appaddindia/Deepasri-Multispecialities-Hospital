import SEO from "../components/seo";
import TeamDetails from "../components/team/team-details/team-details";
import Wrapper from "../layout/wrapper";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
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
