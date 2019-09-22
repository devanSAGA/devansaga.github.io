import React from "react";
import "../styles/components/Link.css";

const Link = ({ to, textColor, children, className, otherProps }) => {
  const linkClass = className ? className : "link";
  return (
    <a
      href={to}
      style={{ color: textColor }}
      target="_blank"
      rel="noopener noreferrer"
      {...otherProps}
      className={linkClass}
    >
      {children}
    </a>
  );
};

export default Link;
