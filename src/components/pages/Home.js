import React from "react";
import "../../App.css";
import Intro from "../Intro";
import About from "./About";
import Contact from "./Contact";
import Resume from "./Resume";
function Home() {
  return (
    <>
      <Intro />
      <About />
      <Resume />
      <Contact />
    </>
  );
}

export default Home;
