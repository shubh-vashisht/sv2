import React, { Component } from "react";
import CardProjects from "../cardsProjects";
import ThreeSkills from "../3dskills";

import "../../App.css";
import "./style.css";

class Projects extends Component {
  state = {};
  componentDidMount() {
    ThreeSkills();
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="projhome">
        <h1 className="headingprojects">Projects</h1>
        <div className="threeDBody">
          <canvas className="webgl"></canvas>;
        </div>
        <div className="tdtext"></div>
        <CardProjects />
      </div>
    );
  }
}

export default Projects;
