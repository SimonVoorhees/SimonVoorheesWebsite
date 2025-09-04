import { useState } from "react";

import { Rightpoint } from "./components/Rightpoint";
import { RIT } from "./components/RIT";
import { Title } from "./components/Title";
import { Bio } from "./components/Bio";
import { Navbar } from "./components/Navbar";
import { Navlink } from "./components/Navlink";
import { HomePage } from "./components/HomePage";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Idexx } from "./components/Idexx";
import "./App.scss";
import { Experience } from "./components/Experience";

function App() {
  return (
    <div className="App">
      {/* <Title/> */}
      {/* <Navbar /> */}
      {/* Overview */}
      {/* <Bio /> */}
      <HomePage />
      <Experience />
      <Projects />
      {/* Education */}
      <RIT />
      <Footer />      
    </div>
  );
}

export default App;
