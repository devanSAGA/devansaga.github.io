import React from 'react';

export default function Emoji(props) {
  const { ariaLabel, emoji, className } = props;

  return (
    <span
      role="img"
      className={className}
      aria-label={ariaLabel ? ariaLabel : ""}
      aria-hidden={ariaLabel ? "false" : "true"}
    >
      {emoji}
    </span>
  );
}