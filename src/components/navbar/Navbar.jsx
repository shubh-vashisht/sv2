import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "../button/button";
const Navbar = () => {
  const [click, setClicker] = useState(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  const closeMobileMenu = () => setClicker(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Shubh Vashisht
            <i class="far fa-keyboard ic"></i>
          </Link>
          <div className="menu-icon" onClick={() => setClicker(!click)}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/skills"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Skills
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/resume"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle="btn--outline" link="/contact">
              Contact
            </Button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
