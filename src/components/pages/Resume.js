import React from "react";
import "./Resume.css";
function Resume() {
  return (
    <div className="resume">
      <div className="resume-container">
        <div className="technical-skill">
          <div className="three-tech">
            <h1>
              <span>Technical Skill</span>
            </h1>
          </div>
          <div className="seven-tech">
            <h1> Languages</h1>
            <ul className="technical-nav">
              <li className="technical-items"> - JavaScript, HTML/CSS</li>
              <li className="technical-items"> - Java,C#.NET</li>
            </ul>
            <h1>FrameWorks and PlatForms</h1>
            <ul className="technical-nav">
              <li className="technical-items"> - ReactJS, NodeJS</li>
              <li className="technical-items"> - Jquery, Bootstrap, SASS</li>
              <li className="technical-items"> - Webpack, ES6, Web API</li>
              <li className="technical-items"> - Yarn/NPM</li>
              <li className="technical-items">
                {" "}
                - Entity FrameWork, Winforms/Java Swing
              </li>
            </ul>
            <h1>Database Management Systems</h1>
            <ul className="technical-nav">
              <li className="technical-items">
                {" "}
                - MongoDB, MS SQL Sever, MySQL
              </li>
            </ul>
            <h1>Version Control</h1>
            <ul className="technical-nav">
              <li className="technical-items"> - GIT</li>
            </ul>
            <h1>Operating Systems</h1>
            <ul className="technical-nav">
              <li className="technical-items"> - Window, Mac OS</li>
            </ul>
            <h1>IDE and Text Editer</h1>
            <ul className="technical-nav">
              <li className="technical-items">
                {" "}
                - Visual Studio Code, Atom, Sublime Text, Netbeans, Visual
                Studio
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
