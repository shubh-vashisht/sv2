import React, { Component } from "react";
import "../../App.css";
import "./style.css";
import CardSkills from "../cardSkills";

class Skills extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  state = {};
  render() {
    return (
      <div className="skillshome">
        <h1 className="headingskills">Skills</h1>
        <div>
          <div className="threeDBody">
            <canvas className="webgl"></canvas>;
          </div>
          <div className="tdtext"></div>
        </div>
        <CardSkills />
      </div>
    );
  }
}

export default Skills;
