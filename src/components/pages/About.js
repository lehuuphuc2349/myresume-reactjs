import React from "react";
import "../../App.css";
import "./About.css";
import myImg from "../images/my-image.jpg";
function About() {
  return (
    <div className="about">
      <div className="about-container">
        <div className="three">
          <img src={myImg} alt="" className="my-img" />
        </div>
        <div className="about-content">
          <div className="about-me-text">
            <h2>About me</h2>
            <p>
              Desiring to become an official Front end Web Developer of the
              Company from the experience of Front End Web programming skills,
              to learn and improve experience, build a website that satisfies my
              passion and brings more values to the Company.
            </p>
          </div>
          <div className="contact">
            <h2>Contact</h2>
            <span>Le Huu Phuc</span> <br />
            <span>
              Birth Day: 23/04/1999 <br />
              Address: DaNang, VietNam <br />
              Gmail: lephuc2349@gmail.com <br />
              Phone: 0905-982-524 <br />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
