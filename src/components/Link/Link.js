import React from "react";
import styled from 'styled-components';

const StyledLink = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
  height: 24px;
  padding: 4px 2px;
  color: #0265D2;

  &:hover {
    background-color: #E7F0FF;
    padding: 4px 2px;
    border-radius: 3px;
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
