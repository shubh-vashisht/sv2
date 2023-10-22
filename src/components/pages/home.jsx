import HeroSection from "../heroSection";
import "../../App.css";
import Cards from "../cards/cards";
import React from "react";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeroSection />
      <div id="homecards">
        <Cards />
      </div>
    </div>
  );
};

export default Home;
