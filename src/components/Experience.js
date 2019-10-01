import React from "react";
import Link from "./Link";
import "../styles/components/Experience.css";

const Experience = props => {
  return (
    <div className="experience">
      <div className="exp-info">
        <div className="exp-info--main">
          <Link
            to={props.companyWebsite}
            textColor="#113f67"
            className="exp--companyLink"
          >
            <img
              className="exp--companyLogo"
              src={props.companyLogo}
              alt={props.companyName}
            />
          </Link>
          <div className="role-and-duration">
            <div className="exp--role">{props.role}</div>
            <div className="exp--duration">
              <span>{`${props.startDate} - ${props.endDate}`}</span>
            </div>
          </div>
        </div>
        <div className="exp-info--sub">
          <p className="exp-desc">{props.summary}</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
