import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink, withRouter } from "react-router-dom";
import { slide as BurgerMenu } from "react-burger-menu";
import { Menu as MenuIcon, X as CloseIcon } from "react-feather";
import AvatarImg from '../../assets/AppleAvatar.webp';
import Link from '../Link/Link';
import { INSTAGRAM_LINK, TWITTER_LINK, GITHUB_LINK } from "../../pages/AboutMe";
import TwitterIcon from "../../icons/TwitterIcon";
import GithubIcon from "../../icons/GithubIcon";
import InstagramIcon from "../../icons/InstagramIcon";

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
  align-items: center;
  justify-content: center;
  outline: none;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['content-color-tertiary']};
  color: ${(props) => props.theme['content-color-secondary']};
  background-color: transparent;
  height: 32px;
  width: 32px;

  svg {
    height: 20px;
    width: 20px;
    stroke: ${({ theme }) => theme['content-color-primary']};;
  }

  &:hover {
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.32);
  }
`;

const BurgerMenuContent = styled.div`
  display: flex !important;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

const BurgerMenuSection = styled.div`
  position: relative;
`;

const Avatar = styled.img`
  position: absolute;
  height: 96px;
  width: 96px;
  top: -96px;
  left: -20px;
`;

const StyledNavLink = styled(NavLink)`
  && {
    box-sizing: border-box;
    display: block;
    margin-right: 0px;
    margin-bottom: 4px;
    padding: 4px 0px;
    border: none;
    font-size: ${(props) => props.theme['font-size-s']};
  }

  &.burger-menu__section--home-page-link {
    margin-bottom: 16px;
    color: ${({ theme }) => theme['content-color-primary']};
  }
`;

const SocialLinks = styled.div`
  margin-top: 24px;
  display: flex;

  & svg {
    height: 16px;
    width: 16px;
  }
`;

const NavBarLeftSection = styled.div`
  height: 20px;
`;

const NavBarRightSection = styled.div`
  height: 20px;
`;

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
            <BurgerMenuContent>
              <IconButton onClick={closeMenu}>
                <CloseIcon />
              </IconButton>
              <BurgerMenuSection className="burger-menu__section">
                <Avatar src={AvatarImg} alt='My Avatar' />
                <StyledNavLink exact to="/" className='burger-menu__section--home-page-link'>
                  Devansh Purohit
                </StyledNavLink>
                <StyledNavLink exact to="/about">
                  About
                </StyledNavLink>
                <StyledNavLink exact to="/dashboard">
                  Dashboard
                </StyledNavLink>
                <StyledNavLink exact to="/designs">
                  Designs
                </StyledNavLink>
                <SocialLinks>
                  <Link to={TWITTER_LINK} className="social-link__twitter"><TwitterIcon /></Link>
                  <Link to={INSTAGRAM_LINK} className="social-link__instagram"><InstagramIcon /></Link>
                  <Link to={GITHUB_LINK} className="social-link__github"><GithubIcon /></Link>
                </SocialLinks>
              </BurgerMenuSection>
            </BurgerMenuContent>
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
