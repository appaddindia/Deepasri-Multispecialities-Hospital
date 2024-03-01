import ScrollToTop from "hooks/scroll-to-top";
import React, { useEffect } from "react";
import { animationCreate } from "utils/utils";
import Plugin from "../common/plugin";

const Wrapper = ({ children }) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);
  return (
    <>
      <Plugin />
      {children}
      <ScrollToTop />
    </>
  );
};

export default Wrapper;
