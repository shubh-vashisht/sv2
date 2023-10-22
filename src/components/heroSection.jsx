import "./heroSection.css";
import React from "react";
import "../App.css";
import { Button } from "./button/button";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <h1>Shubh Vashisht</h1>
      <p>
        <span className="typo">Software Engineer</span>
      </p>
      <div className="hero-btns">
        <Button
          link="/resume"
          go="#homecards"
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Know More
        </Button>
        <Button
          link="/projects"
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          View Projects <i className="fas fa-play"></i>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
