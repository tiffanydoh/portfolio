import React from "react";

const StackButton = ({ text }) => {
  return (
    <button className="border-2 border-[#38a3a5] text-[#38a3a5] text-[15px] rounded-md p-1.5 mr-2 my-2 text-[#38a3a5] bg-teal-400/10">
      {text}
    </button>
  );
};

export default StackButton;
