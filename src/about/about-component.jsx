import React from "react";
import "./about-component.scss";

const About = () => {
  return (
    <div id="about">
      <div className="header">
        <div>Jaden Cook,</div>
        <div>Front End Web Developer</div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="bio-container">
        <h4>
          Marine Biology <span className="unbold">graduate turned</span>{" "}
          Computer Programmer{" "}
        </h4>
        <br />
        <p>
          After finishing a Bachelor's in Marine Biology, I discovered that the
          analytical, logical, and scientific methods of thought translated well
          to computer programmming. Combined with a lifelong interest in art and
          aesthetics, frontend development became a continous source of
          challenge and satisfaction. Self-taught, I specialize on building
          robust and responsive applications with React.
        </p>
      </div>
    </div>
  );
};

export default About;
