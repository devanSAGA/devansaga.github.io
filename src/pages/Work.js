import React from "react";
import Project from "../components/Project";
import Experience from "../components/Experience";
import Projects from "../data/projectsData";
import Experiences from "../data/experienceData";
import "../styles/pages/Work.css";

const Work = () => {
  return (
    <div className="section work-section">
      <div className="work__experience">
        <h1 className="page-heading" id="experience">
          <span className="hash-symbol">#</span>Experience
        </h1>
        <div className="work__experience--content">
          {Experiences.map((exp, index) => (
            <Experience
              key={`Experience-${index}`}
              companyName={exp.companyName}
              companyWebsite={exp.companyWebsite}
              companyLogo={exp.companyLogo}
              role={exp.role}
              startDate={exp.startDate}
              endDate={exp.endDate}
              summary={exp.summary}
            />
          ))}
        </div>
      </div>
      <div className="work__projects">
        <h1 className="page-heading" id="projects">
          <span className="hash-symbol">#</span>Projects
        </h1>
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
