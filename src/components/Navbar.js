import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = props => {
  return (
    <div className="navbar-container">
      <div className="navbar-start-section">
        <NavLink exact to="/" activeClassName="selected">
          Home
        </NavLink>
      </div>
      <div className="navbar-end-section">
        <NavLink to="/about" activeClassName="selected">
          About Me
        </NavLink>
        <NavLink exact to="/designs" activeClassName="selected">
          Designs
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
