import React from "react";
import About from "./About.js";
import Experience from "./Experience.js";
import Contact from "./Contact.js";
import ArchivedProjects from "./ArchivedProjects.js";

export default function Content() {
  return (
    <div className="flex flex-col w-1/2">
      <div className="pb-16">
        <About />
      </div>
      <div className="pb-16">
        <Experience />
      </div>
      <div className="pb-16">
        <ArchivedProjects />
      </div>
      <div className="pb-16">
        <Contact />
      </div>
    </div>
  );
}
