import React from "react";

const Home = () => {
  const titles = ["full stack developer", "illustrator", "introvert", "!robot"];

  return (
    <div name="home" className="w-full h-screen bg-[#E9D3C0]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="font-bold text-[#F8F6F0] text-8xl">Tiffany Do</h1>
      </div>
    </div>
  );
};

export default Home;
