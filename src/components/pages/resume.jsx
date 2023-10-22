import React, { Component } from "react";
import svj from "../shubhvashishtresume.pdf";
import "./resume.css";

class Resume extends Component {
  constructor() {
    super();
    this.state = { pdf: svj };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="yo" style={{ height: "100vh", width: "100%" }}>
        <div className="pdfContainer">
          <object data={svj} type="application/pdf" class="pdf">
            <p>
              Your web browser doesn't have a PDF plugin. Instead you can{" "}
              <a href="filename.pdf">click here to download the PDF file.</a>
            </p>
          </object>
        </div>
      </div>
    );
  }
}

export default Resume;
