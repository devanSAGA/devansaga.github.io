import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink, withRouter } from "react-router-dom";
import { slide as BurgerMenu } from "react-burger-menu";
import { Menu as MenuIcon, X as CloseIcon } from "react-feather";

const NavBarContainer = styled.div`
  font-family: ${(props) => props.theme['font-family-primary']};
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1.6rem 0;

  & a {
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    line-height: 20px;
    font-size: 18px;
    font-weight: ${(props) => props.theme['font-weight-strong']};;
    color: ${(props) => props.theme['content-color-link']};
    margin-right: 12px;
    border-bottom: 1px solid transparent;
  }

  & .bm-burger-button {
    display: none;
  }

  & .bm-overlay {
    background-color: rgba(0, 0, 0, 0.55);
    position: absolute;
    inset: 0;
  }

  & .bm-menu-wrap {
    left: 0;
    top: 0;
    padding: 16px;
    background-color: ${(props) => props.theme['background-color-primary']};
  }
`;

const IconButton = styled.button`
  display: inline-flex !important;
  outline: none;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['content-color-secondary']};
  color: ${(props) => props.theme['content-color-secondary']};
  background-color: transparent;
  height: 32px;
  width: 32px;

  svg {
    height: 16px;
    width: 16px;
  }

  &:hover {
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.32);
  }
`;

const CloseButtonContainer = styled.div`
  margin-bottom: 64px;
`;

const BurgerMenuSection = styled.div`
  a {
    box-sizing: border-box;
    display: block;
    padding: 8px 0px;
    border-radius: 4px;
    font-size: 1.6rem;
    font-weight: 600;
  }
`;

const Divider = styled.hr`
  outline: none;
  border: 1px solid #EDEDED;
  width: 100%;
  margin: 16px 0px;
`;

const NavBarLeftSection = styled.div``;

const NavBarRightSection = styled.div``;

function Navbar(props) {
  const [isBurgerMenuOpen, setBurgerMenuVisibility] = useState(false);
  const [mediaQuery, setMediaQuery] = useState({
    matches: window.innerWidth <= 468 ? true : false,
  });

  useEffect(() => {
    let currentQuery = window.matchMedia("(max-width: 468px)");
    currentQuery.addListener(setMediaQuery);

    return () => currentQuery.removeListener(setMediaQuery);
  }, []);

  useEffect(() => {
    const unlisten = props.history.listen((location, action) => {
      closeMenu();
    });

    return () => unlisten();
  }, []);

  const openMenu = () => {
    setBurgerMenuVisibility(true);
  };

  const closeMenu = () => {
    setBurgerMenuVisibility(false);
  };

  return (
    <NavBarContainer>
      {mediaQuery && mediaQuery.matches ? (
        <>
          <IconButton onClick={openMenu}>
            <MenuIcon />
          </IconButton>
          <BurgerMenu
            isOpen={isBurgerMenuOpen}
            onClose={closeMenu}
            disableAutoFocus
            className="burger-menu"
          >
            <CloseButtonContainer>
              <IconButton onClick={closeMenu}>
                <CloseIcon/>
              </IconButton>
            </CloseButtonContainer>
            <BurgerMenuSection className="burger-menu__section">
              <NavLink exact to="/">
                Devansh Purohit
              </NavLink>
              <NavLink exact to="/about">
                About
              </NavLink>
              <NavLink exact to="/dashboard">
                Dashboard
              </NavLink>
              <NavLink exact to="/designs">
                Designs
              </NavLink>
            </BurgerMenuSection>
            <Divider />
            <BurgerMenuSection className="burger-menu__section">
              <a
                href="https://twitter.com/devanshp_"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://github.com/devanSAGA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://www.instagram.com/_devansaga_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </BurgerMenuSection>
            <Divider />
          </BurgerMenu>
        </>
      ) : (
        <>
          <NavBarLeftSection>
            <NavLink exact to="/">
              Devansh Purohit
            </NavLink>
          </NavBarLeftSection>
          <NavBarRightSection>
            <NavLink to="/about">About</NavLink>
            <NavLink exact to="/dashboard">Dashboard</NavLink>
            <NavLink to="/designs">Designs</NavLink>
          </NavBarRightSection>
        </>
      )}
    </NavBarContainer>
  );
}

export default withRouter(Navbar);
