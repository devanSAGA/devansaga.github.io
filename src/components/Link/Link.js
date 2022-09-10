import React from "react";
import styled from 'styled-components';

const StyledLink = styled.a`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  height: 24px;
  padding: 4px 2px;
  font-size: ${(props) => props.theme['font-size-m']};
  font-weight: ${(props) => props.theme['font-weight-regular']};
  color: ${(props) => props.theme['content-color-link']};

  &:hover {
    background-color: ${(props) => props.theme['content-color-link-hover']};
    border-radius: ${(props) => props.theme['border-radius-default']};
    padding: 4px 2px;
  }
`;

const Link = ({ to, children, className }) => {
  return (
    <StyledLink
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </StyledLink>
  );
};

export default Link;
