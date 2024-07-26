import React from "react";
import linkedin from "../assets/linkedin-logo.jpg";
import github from "../assets/github-logo.jpeg";

const SideNavBar = () => {
  return (
    <div>
      <div className="flex fixed flex-col space-y-4 scale-[55%] top-[70%] left-0 bg-transparent text-white text-[27px] p-5">
        <a
          href="https://www.linkedin.com/in/tiffanydoh/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="linkedin logo" />
        </a>
        <a
          href="https://github.com/tiffanydoh"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="github logo" />
        </a>
      </div>
    </div>
  );
};

export default SideNavBar;
