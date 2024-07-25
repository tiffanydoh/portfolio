import React from "react";
import { Link } from "react-scroll";

const PageNav = () => {
  return (
    <div className="flex flex-col text-[#e5e5e5]">
      <p className="hover:text-black">
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
      </p>
      <p className="hover:text-black">
        <Link to="experience" smooth={true} duration={500}>
          Experience
        </Link>
      </p>
      <p className="hover:text-black">
        <Link to="projects" smooth={true} duration={500}>
          Projects
        </Link>
      </p>
      <p className="hover:text-black">
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
      </p>
    </div>
  );
};

export default PageNav;
