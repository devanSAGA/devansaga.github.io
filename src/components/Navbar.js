import React from "react";
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
    margin-right: 12px;
    color: #0265D2;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid #0265D2;
    }    
  }
`;

const NavBarLeftSection = styled.div``;

const NavBarRightSection = styled.div``;

function Navbar() {
  return (
    <NavBarContainer>
      <NavBarLeftSection>
        <NavLink exact to="/">
          Home
        </NavLink>
      </NavBarLeftSection>
      <NavBarRightSection>
        <NavLink to="/about">
          About
        </NavLink>
        <NavLink to="/goals">
          Goals
        </NavLink>
      </NavBarRightSection>
    </NavBarContainer>
  );
}

export default Navbar;
