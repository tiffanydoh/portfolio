import React from "react";
import PageNav from "./PageNav.tsx";
import SideNav from "./SideNavBar.js";

const Home = () => {
  return (
    <div
      name="home"
      className="flex flex-col text-white w-1/2 max-h-screen justify-center items-center sticky top-0"
    >
      <h1 className="font-bold text-7xl text-[#e5e5e5]">Tiffany Do</h1>
      <h2 className="text-4xl text-[#e5e5e5]">Full Stack Engineer</h2>
      <PageNav />
      <SideNav />
    </div>
  );
};

export default Home;
