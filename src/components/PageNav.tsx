import React from "react";
import { Link } from "react-scroll";

const PageNav = () => {
  return (
    <div className="flex flex-col text-[#e5e5e5] p-20">
      <p className="hover:text-[#f3c677]">
        <Link
          to="about"
          smooth={true}
          duration={500}
          style={{
            fontSize: "2rem",
          }}
        >
          About
        </Link>
      </p>
      <p className="hover:text-[#f3c677]">
        <Link
          to="experience"
          smooth={true}
          duration={500}
          style={{
            fontSize: "2rem",
          }}
        >
          Experience
        </Link>
      </p>
      <p className="hover:text-[#f3c677]">
        <Link
          to="archived-projects"
          smooth={true}
          duration={500}
          style={{
            fontSize: "2rem",
          }}
        >
          Projects
        </Link>
      </p>
      <p className="hover:text-[#f3c677]">
        <Link
          to="contact"
          smooth={true}
          duration={500}
          style={{
            fontSize: "2rem",
          }}
        >
          Contact
        </Link>
      </p>
    </div>
  );
};

export default PageNav;
