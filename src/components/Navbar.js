import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";
import mycv from "./doc/lehuuphucCV.doc.docx";
function Navbar() {
  const [button, setButton] = useState(true);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const displayButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    displayButton();
  }, []);
  // const dowloadFile = () => {
  //   const link = document.createElement("a");
  //   link.href =
  //     "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.talkwalker.com%2Fblog%2Fwhat-is-image-analysis&psig=AOvVaw20gI793Tqrmdp3xey_0r0w&ust=1615085757069000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjwhLjVmu8CFQAAAAAdAAAAABAI";
  //   link.download = true;
  //   document.body.appendChild(link);
  //   console.log(link.href);
  // };
  const dowloadFile = () => {
    const element = document.createElement("a");
    element.href = mycv;
    element.download = "lehuuPhucCV.doc";
    element.click();
  };
  window.addEventListener("resize", displayButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            LeHuuPhucCV <i class="fas fa-id-card"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-items">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-items">
              <Link
                to="/resume"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Resume
              </Link>
            </li>
            <li className="nav-items">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                DOWLOAD CV
              </Link>
            </li>
          </ul>
          {button && (
            <Button onClick={dowloadFile} buttonStyle="btn--outline">
              DOWLOAD CV
            </Button>
          )}
        </div>
      </nav>
      {/* <div className="banner"></div> */}
    </>
  );
}

export default Navbar;
