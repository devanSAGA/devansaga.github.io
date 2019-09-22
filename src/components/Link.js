import React from "react";

const Link = ({ to, textColor, children, otherProps }) => {
  return (
    <a
      href={to}
      style={{ color: textColor }}
      target="_blank"
      rel="noopener noreferrer"
      {...otherProps}
    >
      {children}
    </a>
  );
};

export default Link;
