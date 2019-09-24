import React from "react";
import { GitHub, Globe } from "react-feather";
import Link from "./Link";
import "../styles/components/Project.css";

const Project = props => {
  return (
    <div className="project-container">
      <div className="project__header">
        <div className="project__header--heading">{props.title}</div>
        <div className="project__header--links">
          {props.githubLink ? (
            <Link to={props.githubLink} title="View source on GitHub">
              <GitHub className="project__header--githubIcon" size={24} />
            </Link>
          ) : null}
          {props.demoLink ? (
            <Link to={props.demoLink} title="Check live demo">
              <Globe className="project__header--globeIcon" size={24} />
            </Link>
          ) : null}
        </div>
      </div>
      <div className="project__content">
        <div className="project__content--desc">{props.description}</div>
        <ul className="project__content--tech">
          {props.technologies.map((tech, index) => (
            <li key={`tech-${index}`} className="tech-badge">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
