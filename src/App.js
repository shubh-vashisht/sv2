import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/home";
import Projects from "./components/pages/projects";
import Skills from "./components/pages/skills";
import Contact from "./components/pages/contact";
import Resume from "./components/pages/resume";
import Footer from "./components/footer/footer";

import HashLoader from "react-spinners/HashLoader";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

let text = "{ Talent, Hardwork, Ambition } = ShubhVashisht";

function App() {
  const [loading, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      console.log("loading khatam: ", "boom");
      setLoader(false);
    }, 4000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loaderScreen">
          <div className="home1">
            <h1> SV </h1>
          </div>
          <div className="loadingText">
            <h2>{text}</h2>
          </div>

          <div className="loader">
            <HashLoader color={"#E086A6"} loading={loading} size={80} />
          </div>
          <div>
            <svg
              class="waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shape-rendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g class="parallax">
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="0"
                  fill="rgba(255,255,255,0.7"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="3"
                  fill="rgba(255,255,255,0.5)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="5"
                  fill="rgba(255,255,255,0.3)"
                />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
              </g>
            </svg>
          </div>
        </div>
      ) : (
        <>
          <Router>
            <Navbar />
            <Routes>
              {/* <Route path="/" exact /> */}
              <Route path="/home" exact element={<Home />} />
              <Route path="/projects" exact element={<Projects />} />
              <Route path="/resume" exact element={<Resume />} />
              <Route path="/contact" exact element={<Contact />} />
              <Route path="/skills" exact element={<Skills />} />
              <Route
                path="/github"
                exact
                element={() => {
                  window.location.replace("https://github.com/shubh-vashisht");
                  return null;
                }}
              />
              <Route
                path="/linkedin"
                exact
                element={() => {
                  window.location.replace(
                    "https://www.linkedin.com/in/shubh-vashisht-b41992194/"
                  );
                  return null;
                }}
              />
              <Route
                path="/youtube"
                exact
                element={() => {
                  window.location.replace(
                    "https://www.youtube.com/channel/UC9glVe670UUyz5es4Jta-MA"
                  );
                  return null;
                }}
              />

              <Route
                path="/instagram"
                exact
                element={() => {
                  window.location.replace(
                    "https://www.instagram.com/shubh_vashisht/"
                  );
                  return null;
                }}
              />
              <Route
                path="/competitions"
                exact
                element={() => {
                  window.location.replace(
                    "https://devpost.com/shubh-vashisht?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
                  );
                  return null;
                }}
              />
              <Route
                path="/hobbies"
                exact
                element={() => {
                  window.location.replace("https://www.npmjs.com/~svashisht");
                  return null;
                }}
              />
              <Route
                path="/email"
                exact
                element={() => {
                  window.location.replace("mailto: shubhv2@gmail.com");
                  return null;
                }}
              />

              {!loading && (
                <Route path="/" element={<Navigate replace to="/home" />} />
              )}
            </Routes>
            <Footer />
          </Router>
        </>
      )}
    </>
  );
}

export default App;
