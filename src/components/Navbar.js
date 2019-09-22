import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

import "../styles/components/Navbar.css";

class Navbar extends Component {
  state = {
    isMenuOpen: false
  };

  closeMenu = () => {
    this.setState({
      isMenuOpen: false
    });
  };

  handleStateChange = state => {
    this.setState({ isMenuOpen: state.isMenuOpen });
  };

  render() {
    return (
      <Fragment>
        <div className="navbar-container desktop-only">
          <div className="navbar-start-section">
            <NavLink exact to="/" activeClassName="selected">
              Home
            </NavLink>
          </div>
          <div className="navbar-end-section">
            <NavLink to="/work" activeClassName="selected">
              Work
            </NavLink>
            <NavLink to="/about" activeClassName="selected">
              About Me
            </NavLink>
            <NavLink exact to="/designs" activeClassName="selected">
              Designs
            </NavLink>
          </div>
        </div>
        <div className="navbar-hamburger mobile-only">
          <Menu
            width={"100%"}
            right
            isOpen={this.state.isMenuOpen}
            onStateChange={state => this.handleStateChange(state)}
          >
            <NavLink
              exact
              to="/"
              activeClassName="selected"
              onClick={this.closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/work"
              activeClassName="selected"
              onClick={this.closeMenu}
            >
              Work
            </NavLink>
            <NavLink
              to="/about"
              activeClassName="selected"
              onClick={this.closeMenu}
            >
              About Me
            </NavLink>
            <NavLink
              exact
              to="/designs"
              activeClassName="selected"
              onClick={this.closeMenu}
            >
              Designs
            </NavLink>
          </Menu>
        </div>
      </Fragment>
    );
  }
}

export default Navbar;
