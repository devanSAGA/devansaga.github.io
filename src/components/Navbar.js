import React from "react";
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const StyledNavbarContainer = styled.div`
  display: flex;
  height: 48px;
  width: 100%;
  padding: 1.6rem 0;

  & a {
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: 600;
    height: 24px;
    padding: 4px;
    margin-right: 8px;
    color: #0265D2;

    &:hover {
      background-color: #E7F0FF;
      padding: 4px;
      border-radius: 3px;
    }    
  }
`;

function Navbar() {
  return (
    <StyledNavbarContainer>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/about">
        About
      </NavLink>
    </StyledNavbarContainer>
  );
}

export default Navbar;
