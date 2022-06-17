import React from "react";
import "./projects-component.scss";

const Projects = () => {
  return (
    <div id="projects">
      <div className="header">Projects</div>
      <br />
      <div className="content-container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="image-container">
          <a href="https://crownshopping.netlify.app" target="_blank">
            <img className="image" alt="" src="images/crownclothing.png"></img>
            <br />
            <div>e-commerce</div>
          </a>
          <a href="#projects">
            <img className="image" alt="" src="images/tours.png"></img>
            <br />
            <div>travel agency</div>
          </a>
          <a href="#projects">
            <img className="image" alt="" src="images/menu.png"></img>
            <br />
            <div>gastronomy</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
