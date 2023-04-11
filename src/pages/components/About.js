import React from "react";

const About = () => {
  return (
    <div className="container w-3/4 mx-auto mt-6">
      <h1 className="md:text-6xl text-4xl text-center">Hello!</h1>
      <h1 className="md:text-xl text-center mt-4 text-gray-500">My name is</h1>
      <h1 className="md:text-6xl text-4xl text-center mt-4 text-purple-400">
        George Thomas
      </h1>
      <h1 className="md:text-xl text-center mt-4 text-gray-500">I am a</h1>
      <h1 className="md:text-6xl text-4xl text-center mt-4">
        Full Stack Web Developer
      </h1>

      <p className="mt-[15%] mb-[15%] text-center font-bold">
        From{" "}
        <a
          href="https://expressjs.com/"
          className="hover:text-purple-400 transition md:underline text-purple-400 md:text-white"
        >
          Express.js
        </a>{" "}
        to{" "}
        <a
          href="https://tailwindcss.com/"
          className="hover:text-purple-400 transition md:underline text-purple-400 md:text-white"
        >
          Tailwind CSS
        </a>
        , I can deliver something that will exceed your expectations.
      </p>

      <div
        id="featured-project"
        className="p-4 bg-purple-400 min-h-[100px] max-w-[850px] rounded-[40px] container mx-auto"
      >
        <h1 className="font-bold text-center text-xl drop-shadow-lg">
          Featured Project
        </h1>
        <h2 className="font-bold text-center text-lg drop-shadow-lg mt-3">
          beerMe
        </h2>
        <img
          src="/beerMe.png"
          alt="Project Image for beerMe"
          className="mt-3 mb-6"
        ></img>
      </div>
    </div>
  );
};

export default About;
