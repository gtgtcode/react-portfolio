import React from "react";
import Project from "./Project";

const Portfolio = () => {
  return (
    <div className="w-3/4 container mx-auto lg:flex text-center">
      <Project
        name="beerMe"
        src="/beerMe.png"
        alt="beerMe Project Image"
        description="This project lets you look up bars and pubs that are all over the country!"
        githubHref="https://github.com/cbw1981/beerMe"
        projectHref="https://cbw1981.github.io/beerMe/"
      />
      <Project
        name="Coding Quiz"
        src="/coding-quiz.png"
        alt="Coding Quiz Project Image"
        description="This project quizzes you on your coding knowledge! Aim for a big highscore!"
        githubHref="https://github.com/gtgtcode/code-quiz"
        projectHref="https://gtgtcode.github.io/code-quiz/"
      />
      <Project
        name="Password Generator"
        src="/password-gen.png"
        alt="Password Generator Project Image"
        description="This project randomly generates a password between 8-12 characters."
        githubHref="https://github.com/gtgtcode/random-password-gen"
        projectHref="https://gtgtcode.github.io/random-password-gen/"
      />
    </div>
  );
};

export default Portfolio;
