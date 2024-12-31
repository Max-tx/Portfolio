import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="nav">
        <div className="left-nav">
          <span>Mohit Parmar</span>
        </div>
        <i className="fa-solid fa-bars" id="menu-bar"></i>
        <div className="right-nav">
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/education">education</Link></li>
            <li><Link to="/skills">skills</Link></li>
            <li><Link to="/projects">projects</Link></li>
          </ul>
        </div>
        <div className="btn">
          <Link to="/contact">contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
