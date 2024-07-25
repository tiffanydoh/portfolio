import React from "react";

const ProjectLayout = ({ text, string, stack, img }) => {
  return (
    <div>
      <div>
        <div className="text-[#F8F6F0] text-[25px] font-bold">{text}</div>
        <p className="text-[#F8F6F0] text-lg">{string}</p>
        <div className="text-[#F8F6F0] text-lg">{stack}</div>
        <div className="w-[50%]">
          <img src={img} alt="project website" />
        </div>
      </div>
    </div>
  );
};

export default ProjectLayout;
