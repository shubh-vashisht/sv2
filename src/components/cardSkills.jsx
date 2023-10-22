import React from "react";
import CardItem from "./cards/cardItem";
import "./cardsskills.css";

import java from "../images/java.png";
import c from "../images/c.jpeg";
import cplus from "../images/c++.jpeg";
import nodejs from "../images/nodejs.png";
import python from "../images/python.jpeg";
import algorihms from "../images/algorithms.jpeg";
import react from "../images/react.png";
import js from "../images/js.jpeg";
import mern from "../images/mern.jpeg";
import css from "../images/css.png";
import express from "../images/express.png";
import mongo from "../images/mongo.png";
import html from "../images/html.jpeg";
import django from "../images/django.png";
const CardSkills = () => {
  return (
    <div className="cards">
      <h1>These are some of the skills I possess:</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items2">
            <CardItem
              src={algorihms}
              text="Algorithm Design"
              label="Dynamic Programming, Divide and Conquer"
              path="/skills"
            />
            <CardItem
              src={mern}
              text="Full Stack Web Development"
              label="Node, React, Express and MongoDB"
              path="/skills"
            />
            <CardItem
              src={python}
              text="Python"
              label="Image Manipulation and Automation"
              path="/skills"
            />
            <CardItem
              src={java}
              text="Java"
              label="Backend Development"
              path="/skills"
            />
          </ul>
          <ul className="cards__items2">
            <CardItem
              src={nodejs}
              text="Nodejs"
              label="For Backend Services"
              path="/skills"
            />
            <CardItem
              src={react}
              text="React"
              label="Front Development"
              path="/skills"
            />
            <CardItem
              src={express}
              text="Express"
              label="Http Requests"
              path="/skills"
            />
          </ul>
          <ul className="cards__items2">
            <CardItem
              src={mongo}
              text="MongoDB"
              label="Document Oriented Database"
              path="/skills"
            />
            <CardItem
              src={cplus}
              text="C++"
              label="Object Oriented Design"
              path="/skills"
            />
            <CardItem
              src={js}
              text="JavaScript"
              label="Functional Programming"
              path="/skills"
            />
            <CardItem src={c} text="C" label="Systems" path="/skills" />
          </ul>
          <ul className="cards__items2">
            <CardItem src={html} text="HTML" label="DOM" path="/skills" />
            <CardItem
              src={css}
              text="CSS"
              label="Cascading Style Sheets"
              path="/skills"
            />
            <CardItem
              src={django}
              text="Django"
              label="Python Web Development"
              path="/skills"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardSkills;
