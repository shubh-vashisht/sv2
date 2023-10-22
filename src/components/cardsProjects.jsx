import React from "react";
import CardItem from "./cards/cardItem";
import HeroSectionProj from "./heroSectionProj";

import "../components/cards/cards.css";

import mern from "../images/mern.jpeg";
import sd from "../images/sd.jpeg";

const data = require("../projects.json");
const CardsProjects = () => {
  let state = data;
  return (
    <div className="cards">
      <h1>All of my projects can be divided into these two categories:</h1>

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={sd}
              text="Software Development"
              label="Web Scrapping, Voice Assist"
              path="/projects"
            />
            <CardItem
              src={mern}
              text="Web Development"
              label="Web Applications"
              path="/projects"
            />
          </ul>
        </div>
      </div>
      {state.map((elem) => {
        return (
          <>
            <HeroSectionProj
              web={elem.web}
              projName={elem.projName}
              text={elem.text}
              body={elem.body}
              link={elem.link}
              bg={elem.bg}
              buttonText={elem.buttonText}
            />{" "}
            <br></br>
          </>
        );
      })}
    </div>
  );
};

export default CardsProjects;
