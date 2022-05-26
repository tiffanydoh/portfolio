import React from "react";
import Home from "./views/Home";
import About from "./views/About";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
