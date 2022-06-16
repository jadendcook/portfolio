import "./App.css";
import React from "react";

import About from "./about/about-component";
import Projects from "./projects/projects-component";
import Contact from "./contact/contact-component";
import Navbar from "./navbar/navbar-component";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
