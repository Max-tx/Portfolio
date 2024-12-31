import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";


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
            {/* <li><Link to="/">home</Link></li> */}
            <li><Link to="home" smooth={true} duration={100} spy={true} activeClass="active">Home</Link></li>
            <li><Link to="about" smooth={true} duration={100} spy={true} activeClass="active">About</Link></li>
            <li><Link to="education" smooth={true} duration={100} spy={true} activeClass="active">Education</Link></li>
            <li><Link to="skill" smooth={true} duration={100} spy={true} activeClass="active">Skills</Link></li>
            <li><Link to="project" smooth={true} duration={100} spy={true} activeClass="active">Projects</Link></li>
          </ul>
        </div>
        <div className="btn">
          <Link to="contact">contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
