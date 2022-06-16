import React from "react";
import "./navbar-component.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="btn">
          <a className="about-button" href="#about">
            about{" "}
          </a>
        </div>
        <div className="btn">
          <a className="projects-button" href="#projects">
            projects{" "}
          </a>
        </div>
        <div className="btn">
          <a className="contact-button" href="#contact">
            contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
