import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
// menu open and close
const [menu,setMenu] = useState("home")
const menuRef= useRef();
const OpenMenu = () => {
  menuRef.current.style.right ="0";
}
const CloseMenu = () => {
  menuRef.current.style.right ="-100%";
}


  return (
    <header>
      <div className="nav">
        <div className="left-nav">
          <span>Mohit Parmar</span>
        </div>
        <i className='bx bx-menu-alt-right open-menu' onClick={OpenMenu}></i>
        <div className="right-nav">
          <ul ref={menuRef}> 
        <i class='bx bx-x close-menu' onClick={CloseMenu}></i>
            <li>
              <Link
                to="/"
                onClick={() => scrollToSection("home")}
                className={activeSection === "home" ? "active" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => scrollToSection("about")}
                className={activeSection === "about" ? "active" : ""}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => scrollToSection("education")}
                className={activeSection === "education" ? "active" : ""}
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => scrollToSection("skill")}
                className={activeSection === "skill" ? "active" : ""}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => scrollToSection("project")}
                className={activeSection === "project" ? "active" : ""}
              >
                Projects
              </Link>
            </li>
            <li className="menu-contact">
              <Link
                to="/"
                onClick={() => scrollToSection("contact")}
                className={activeSection === "contact" ? "active" : ""}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="btn btn-contact">
          <Link to="/" onClick={() => scrollToSection("contact")} >Contact
          </Link>
        </div>
      </div> 
    </header> 
  );
};

export default Navbar;
