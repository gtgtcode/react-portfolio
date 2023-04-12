import React from "react";

const Project = (props) => {
  return (
    <div className="container mx-auto">
      <div
        id="project-container"
        className="md:w-[300px] max-w-[300px] h-[600px] bg-purple-400 container mx-auto m-4 p-4"
      >
        <img src={props.src} alt={props.alt}></img>
        <h1 className="text-center text-2xl my-4">{props.name}</h1>
        <p className="mb-6">{props.description}</p>
        <div className="text-center">
          {props.projectHref && (
            <a
              href={props.projectHref}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <button className="p-4 md:outline outline-1 rounded-full bg-white text-purple-400 md:text-white md:bg-transparent md:hover:bg-white md:hover:text-purple-400 transition hover:outline-none">
                Deployed App
              </button>
            </a>
          )}
          <br />
          {props.githubHref && (
            <a
              href={props.githubHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-6 p-4 md:outline outline-1 rounded-full bg-white text-purple-400 md:text-white md:bg-transparent md:hover:bg-white md:hover:text-purple-400 transition hover:outline-none">
                GitHub Repo
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
