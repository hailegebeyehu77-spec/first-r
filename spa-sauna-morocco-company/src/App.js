import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Menu from "./Menus";
import Services from "./Services";
import Contact from "./Contact";
import "./styles.css";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Menu />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
