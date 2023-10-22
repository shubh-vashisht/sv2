import "./heroSectionProj.css";
import "./heroSection.css";
import React from "react";

import { Button } from "./button/button";

const HeroSectionProj = (props) => {
  console.log(props);
  return (
    <div
      className={`hero-container2 ${props.projName}`}
      style={
        props.bg && {
          backgroundImage: `url(${props.bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }
      }
    >
      <h1>{props.text}</h1>
      <p>{props.body}</p>
      <div className="hero-btns2">
        <Button
          link={props.link}
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          web={props.web}
        >
          {props.buttonText === "Github Repo" && <i class="fab fa-github"></i>}
          {props.buttonText === "Website" && <i class="fab fa-chrome"></i>}
          &nbsp;&nbsp;
          {props.buttonText}
        </Button>
      </div>
    </div>
  );
};

export default HeroSectionProj;
