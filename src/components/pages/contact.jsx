import React, { Component } from "react";
import "../../App.css";
import "./contact.css";

class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="contactContainer">
        <h1 className="contact">Contact</h1>
        <h4>Call me at +1 413 409 9810</h4>
        <h3 className="h3">Contact me through these social media websites!</h3>
        <div className="social-icons sabkuch">
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
    );
  }
}

export default Contact;
