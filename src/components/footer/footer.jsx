import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          I love to code and create new projects!
        </p>
        <p className="footer-subscription-text">
          Here are some useful links below:
        </p>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Me</h2>
            <Link to="/resume">Resume</Link>
            <a href="https://devpost.com/shubh-vashisht?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav">
              Competitions
            </a>
            <a href="https://www.npmjs.com/~svashisht">Hobbies</a>
          </div>
          <div className="footer-link-items">
            <h2>Contact Me</h2>
            <Link to="/contact">Contact</Link>
            <a href="mailto: shubhv2@gmail.com">Email</a>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <a href="https://github.com/shubh-vashisht">GitHub</a>
            <a
              href="https://www.linkedin.com/in/shubh-vashisht-b41992194/"
              className="social-icon-link linkedin"
            >
              LinkedIn
            </a>

            <a
              href="https://www.instagram.com/shubh_vashisht/"
              className="social-icon-link instagram"
            >
              Instagram
            </a>

            <a
              href="https://www.youtube.com/channel/UC9glVe670UUyz5es4Jta-MA"
              className="social-icon-link youtube"
            >
              Youtube
            </a>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Shubh Vashisht <i class="fas fa-keyboard ic"> </i>
            </Link>
          </div>
          <small className="website-rights">Shubh Vashisht © 2021</small>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/shubh.vashisht.5/"
              className="social-icon-link facebook"
            >
              {" "}
              <i className="fab fa-facebook-f" />
            </a>

            <a
              href="https://www.instagram.com/shubh_vashisht/"
              className="social-icon-link instagram"
            >
              {" "}
              <i className="fab fa-instagram" />
            </a>

            <a
              href="https://www.youtube.com/channel/UC9glVe670UUyz5es4Jta-MA"
              className="social-icon-link youtube"
            >
              {" "}
              <i className="fab fa-youtube" />
            </a>

            <a
              href="https://github.com/shubh-vashisht"
              className="social-icon-link github"
            >
              {" "}
              <i className="fab fa-github" />
            </a>

            <a
              href="https://www.linkedin.com/in/shubh-vashisht-b41992194/"
              className="social-icon-link linkedin"
            >
              {" "}
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
