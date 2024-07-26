import React from "react";
import About from "./About.js";
import Experience from "./Experience.js";
import Contact from "./Contact.js";
import ArchivedProjects from "./ArchivedProjects.js";

export default function Content() {
  return (
    <div className="flex flex-col w-1/2 py-24">
      <About />
      <Experience />
      <ArchivedProjects />
      <Contact />
    </div>
  );
}
