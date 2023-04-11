import React from "react";
import Project from "./Project";

const Portfolio = () => {
  return (
    <div className="w-3/4 container mx-auto md:flex">
      <Project
        name="beerMe"
        src="/beerMe.png"
        alt="beerMe Project Image"
        description="This project lets you look up bars and pubs that are all over the country!"
        githubHref="https://github.com/cbw1981/beerMe"
        projectHref="https://cbw1981.github.io/beerMe/"
      />
      <Project />
    </div>
  );
};

export default Portfolio;
