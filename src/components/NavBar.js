import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  // HANDLECLICK THAT TOGGLES NAVBAR FROM FALSE TO TRUE
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-12 flex justify-between items-center px-5 bg-[#A18167] text-white">
      <div>
        <h1 className="font-bold">Tiffany Do</h1>
      </div>
      {/* MAIN NAVBAR MENU */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
