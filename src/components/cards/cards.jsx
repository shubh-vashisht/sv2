import React from "react";
import CardItem from "./cardItem";
import "./cards.css";
import image1 from "../../images/skills1.jpg";
import image2 from "../../images/proj.jpg";
const Cards = () => {
  return (
    <div className="cards">
      <h1>My Experiences</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={image1}
              text="Get to know about the skills I have mastered and the technologies I have learnt."
              label="Skills"
              path="/skills"
            />
            <CardItem
              src={image2}
              text="Get to know about the projects I have worked on and spent my blood and sweat on!"
              label="Projects"
              path="/projects"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
