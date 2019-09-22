import React from "react";
import Project from "../components/Project";
import Projects from "../data/projectsData";
import "../styles/pages/Work.css";

const Work = () => {
  return (
    <div className="work-section">
      {/* <div className="work__experience">
        <h1 className="page-heading">Experience</h1>
      </div> */}
      <div className="work__projects">
        <h1 className="page-heading">Projects</h1>
        <div className="work__projects--content">
          {Projects.map((project, index) => (
            <Project
              key={`Project-${index}`}
              title={project.title}
              description={project.description}
              demoLink={project.demoLink}
              githubLink={project.githubLink}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
