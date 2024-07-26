import React from "react";
import Home from "./components/Home.js";
import Content from "./components/Content";

const App = () => {
  return (
    <div className="bg-[#463f3a] p-20">
      <div className="flex justify-between gap-4">
        {/* Left Content */}
        <Home />
        {/* Right Content */}
        <Content />
      </div>
    </div>
  );
};

export default App;
