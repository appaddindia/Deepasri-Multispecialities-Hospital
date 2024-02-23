import React from "react";
import FooterTwo from "./footer/footer-2";
import HeaderTwo from "./header/header-two";
import FooterFour from "./footer/footer-4";

const LayoutTwo = ({ children }) => {
  return (
    <>
      <HeaderTwo />
      <main>{children}</main>
      <FooterFour />
    </>
  );
};

export default LayoutTwo;
