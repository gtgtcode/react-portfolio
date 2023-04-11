import React from "react";
import { useState } from "react";

const Header = ({
  isOnAbout,
  setOnAbout,
  isOnPortfolio,
  setOnPortfolio,
  isOnContact,
  setOnContact,
  isOnResume,
  setOnResume,
}) => {
  return (
    <header>
      <div className="container w-3/4 mx-auto p-6" id="header-text">
        <h1
          id="header-title"
          className="hover:text-purple-400 transition md:text-left text-center"
        >
          <a
            href="#"
            onClick={() => {
              setOnAbout(true);
              setOnPortfolio(false);
              setOnContact(false);
              setOnResume(false);
            }}
          >
            gtgt(code);
          </a>
        </h1>
        <div
          id="header-container-desktop"
          className="inline float-right md:block hidden"
        >
          <a
            href="#"
            onClick={() => {
              setOnAbout(false);
              setOnPortfolio(true);
              setOnContact(false);
              setOnResume(false);
            }}
            className="hover:text-purple-400 transition mx-2"
          >
            Portfolio
          </a>
          <a href="/contact" className="hover:text-purple-400 transition mx-2">
            Contact
          </a>
          <a href="/resume" className="hover:text-purple-400 transition ml-2">
            Resume
          </a>
        </div>
        <div
          id="header-container-mobile"
          className="md:hidden block text-center mt-4"
        >
          <a
            href="/portfolio"
            className="hover:text-purple-400 transition mr-2"
          >
            Portfolio
          </a>
          <a href="/contact" className="hover:text-purple-400 transition mx-2">
            Contact
          </a>
          <a href="/resume" className="hover:text-purple-400 transition ml-2">
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
