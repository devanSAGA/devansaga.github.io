import React from "react";
import Link from "./Link";
import "../styles/components/Experience.css";

const Experience = props => {
  return (
    <div className="experience">
      <div className="exp-info">
        <div className="exp-info--main">
          <div className="role-and-company">
            <span className="exp--role">{`${props.role} @ `}</span>
            <Link
              to={props.companyWebsite}
              textColor="#113f67"
              className="exp--companyLink"
            >
              {props.companyName}
            </Link>
          </div>
          <span className="exp--dates">{`${props.startDate} - ${props.endDate}`}</span>
        </div>
        <div className="exp-info--sub">
          <ul className="exp-desc dashed">
            {props.summary.map((point, index) => (
              <li key={`point-${index}`}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
