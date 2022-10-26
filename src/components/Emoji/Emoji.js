import React from 'react';
import styled from 'styled-components';

const StyledEmoji = styled.span`
  font-size: ${(props) => props.size ? props.theme[`font-size-${props.size}`] : 'inherit'};
`;

function Emoji(props) {
  const { ariaLabel, emoji, size, className } = props;

  return (
    <StyledEmoji
      role="img"
      size={size}
      className={className}
      aria-label={ariaLabel ? ariaLabel : ""}
      aria-hidden={ariaLabel ? "false" : "true"}
    >
      {emoji}
    </StyledEmoji>
  );
}

export default Emoji;