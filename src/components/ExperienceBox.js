import React from "react";

const ExperienceBox = ({ timeline, title, description, stack }) => {
  return (
    <div name="experience">
      <div className="flex mb-12">
        <div className="whitespace-nowrap text-[#bcb8b1] mr-4">{timeline}</div>
        <div>
          <p className="text-[#e5e5e5] text-xl">{title}</p>
          <p className="text-[#bcb8b1] text-lg">{description}</p>
          <p clasName="p-2">{stack}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceBox;
