import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Project = ({ project }) => {
  // console.log(project)
  const [activeHoverEffect, setActiveHoverEffect] = useState(false);
  return (
    <a
      href={project.projectLink}
      className="w-full sm:p-4 px-0 py-4 flex gap-3 hover:bg-gray-500/10 rounded-sm hover:shadow-lg"
      onMouseEnter={() => setActiveHoverEffect((prev) => !prev)}
      onMouseLeave={() => setActiveHoverEffect((prev) => !prev)}
    >
      <div className="w-1/4 flex flex-col gap-2 p-2">
        <img
          src={project.img}
          alt="Project-1"
          className=" rounded-sm outline outline-offset-2 outline-2 outline-cyan-800"
        />
        <span className="text-gray-400 text-sm">{project.period}</span>
      </div>
      <div className="w-3/4 flex flex-col gap-2">
        <h1
          className={`text-xl flex items-center gap-2 ${
            activeHoverEffect ? "text-cyan-500" : ""
          }`}
        >
          <span>{project.name}</span>{" "}
          <FaArrowRight
            className={`text-base -rotate-45 transition-transform ease-in-out  ${
              activeHoverEffect ? "-translate-y-1 translate-x-1" : ""
            }  `}
          />
        </h1>
        <p className="text-sm font-light text-gray-300">
          {project.text}
        </p>
        <div className="flex gap-1 flex-wrap">
          {project?.techStack.map((tech, id) => (
            <span key={id} className="text-sm font-light bg-cyan-800/50 py-1 px-3 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default Project;
