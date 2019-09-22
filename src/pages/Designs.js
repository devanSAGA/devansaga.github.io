import React from "react";
import Link from "../components/Link";
import "../styles/pages/Designs.css";

const Designs = props => {
  return (
    <div className="design-page-container">
      <div className="designs">
        I am working on it. Please be back soon!
        <br />
        Meanwhile you can check my designs on{" "}
        <Link to="https://www.instagram.com/_devansaga_/" textColor="#e14594">
          Instagram
        </Link>
      </div>
    </div>
  );
};

export default Designs;
