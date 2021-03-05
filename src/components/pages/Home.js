import React from "react";
import "../../App.css";
import Intro from "../Intro";
import About from "./About";
import Contact from "./Contact";
import Resume from "./Resume";
import ScrollToTop from "./ScrollTop";
function Home() {
  return (
    <>
      <Intro />
      <About />
      <Resume />
      <Contact />
      <ScrollToTop />
    </>
  );
}

export default Home;
