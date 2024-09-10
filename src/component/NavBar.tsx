import React from "react";
import { Link } from "react-scroll";
import folderIcon from "../assets/images/general/folder-icon.png";
import home from "../assets/images/general/home.png";
import computer from "../assets/images/general/computer.png";
import recommendations from "../assets/images/general/recommendations.png";
import contact from "../assets/images/general/contact.png";

export default function NavBar() {
  return (
    <div className="sticky top-0 flex flex-col text-black px-4 h-fit">
      <p className="hover:text-[#f3c677] text-sm">
        <Link
          className="flex flex-col items-center"
          to="home"
          smooth={true}
          duration={500}
        >
          <img src={home} width="80" height="80" alt="home icon" />
          Home
        </Link>
      </p>
      <p className="hover:text-[#f3c677]">
        <Link
          className="flex flex-col items-center"
          to="experiences"
          smooth={true}
          duration={500}
        >
          <img src={computer} width="80" height="80" alt="computer icon" />
          Experiences
        </Link>
      </p>
      <p className="hover:text-[#f3c677]">
        <Link
          className="flex flex-col items-center"
          to="projects"
          smooth={true}
          duration={500}
        >
          <img src={folderIcon} width="80" height="80" alt="folder icon" />
          Projects
        </Link>
      </p>
      <p className="hover:text-[#f3c677]">
        <Link
          className="flex flex-col items-center"
          to="recommendations"
          smooth={true}
          duration={500}
        >
          <img
            src={recommendations}
            width="80"
            height="80"
            alt="recommendations icon"
          />
          Recommendations
        </Link>
      </p>
      <p className="hover:text-[#f3c677]">
        <Link
          className="flex flex-col items-center"
          to="contact"
          smooth={true}
          duration={500}
        >
          <img src={contact} width="80" height="80" alt="contact icon" />
          Contact
        </Link>
      </p>
    </div>
  );
}
