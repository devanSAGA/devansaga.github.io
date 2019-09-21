import React from "react";

const Link = props => {
  const { to, textColor } = props;
  return (
    <a href={to} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  );
};

export default Link;
