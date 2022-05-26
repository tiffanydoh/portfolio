import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import linkedin from "../assets/linkedin-logo.jpg";
import github from "../assets/github-logo.jpeg";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  // HANDLECLICK THAT TOGGLES NAVBAR FROM FALSE TO TRUE
  const handleClick = () => setNav(!nav);

  return (
    <div>
      <div className="flex fixed flex-col top-[25%] left-0 bg-transparent text-white text-[27px] p-5">
        {/* <div className="fixed w-full h-12 flex justify-between items-center px-5 bg-[#A18167] text-white"> */}
        <div className="flex fixed flex-col top-[1%] left-0 bg-transparent text-white text-[27px] p-5">
          <h1 className="font-bold">Tiffany Do</h1>
        </div>
        {/* MAIN NAVBAR MENU */}
        <ul>
          <li className="hover:text-black">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="hover:text-black">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="hover:text-black">
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className="hover:text-black">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex fixed flex-col space-y-4 scale-[55%] top-[70%] left-0 bg-transparent text-white text-[27px] p-5">
        <a href="https://www.linkedin.com/in/tiffanydoh/" target="_blank">
          <img src={linkedin} alt="linkedin logo" />
        </a>
        <a href="https://github.com/tiffanydoh" target="_blank">
          <img src={github} alt="github logo" />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
