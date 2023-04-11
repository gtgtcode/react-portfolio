import React from "react";
import { useState } from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";

const Navigation = ({
  isOnAbout,
  setOnAbout,
  isOnPortfolio,
  setOnPortfolio,
  isOnContact,
  setOnContact,
  isOnResume,
  setOnResume,
}) => {
  console.log(isOnAbout);
  return (
    <div>
      {isOnAbout && <About />}
      {isOnPortfolio && <Portfolio />}
      {isOnContact && <Contact />}
      {isOnResume && <Resume />}
    </div>
  );
};

export default Navigation;
