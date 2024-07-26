import React from "react";
import ExperienceBox from "./ExperienceBox";
import StackButton from "./StackButton";
import { Button } from "primereact/button";

const Experience = () => {
  return (
    <div name="experience">
      <h2 className="flex justify-center font-semibold text-5xl text-[#e5e5e5]">
        Experiences
      </h2>
      <div className="p-8">
        <div>
          <ExperienceBox
            timeline={"May 2024 - July 2024"}
            title={"Software Engineer I | Solstice Power Technologies LLC"}
            description={
              "Ongoing contributions to the Solstice platform, including the development of new features, creation of comprehensive tests, and detailed documentation. Collaborated closely with engineers, product managers, and cross-functional teams to enhance and integrate features, ensuring alignment with project goals and user needs. Pursued growth towards a technical lead role, actively working on leadership skills, project management, and team coordination to prepare for advanced responsibilities."
            }
            stack={
              <>
                <StackButton text="JavaScript" />
                <StackButton text="TypeScript" />
                <StackButton text="React" />
                <StackButton text="Express.js" />
                <StackButton text="Next.js" />
                <StackButton text="CSS/SCSS" />
                <StackButton text="Tailwind CSS" />
              </>
            }
          />
          <ExperienceBox
            timeline={"June 2022 - May 2024"}
            title={"Junior Engineer | Solstice Power Technologies LLC"}
            description={
              "Made significant contributions to EnergyScore, machine-learning algorithm to enhance access to clean energy products. Actively contributed to the Solstice platform by implementing new features, performing bug fixes, writing tests, and integrating various APIs for both the frontend and backend. Collaborated closely with engineers, product managers and other departments in a Scrum environment, participating actively in code reviews and contributing to agile development processes. Directed efforts to enhance accessibility across the software, ensuring inclusive user experiences. Took a role in mentoring junior colleagues."
            }
            stack={
              <>
                <StackButton text="JavaScript" />
                <StackButton text="TypeScript" />
                <StackButton text="React" />
                <StackButton text="Express.js" />
                <StackButton text="Next.js" />
                <StackButton text="CSS/SCSS" />
                <StackButton text="Tailwind CSS" />
                <StackButton text="HTML" />
              </>
            }
          />
          <ExperienceBox
            timeline={"May 2022 - Jun 2022"}
            title={"Full Stack Intern | RipeMetrics"}
            description={
              "Took part in a highly collaborative team environment, startup environment to empower businesses to deliver personalized and effective customer experiences that drive revenue growth and build brand loyalty. Wrote well-designed, testable and efficient code that meets technical requirements. Assisted in the troubleshooting of code defects and deployment of timely fixes. Learned new skills quickly and worked effectively in a fast-paced environment."
            }
            stack={
              <>
                <StackButton text="JavaScript" />
                <StackButton text="React" />
                <StackButton text="Redux" />
                <StackButton text="Tailwind CSS" />
              </>
            }
          />
          <ExperienceBox
            timeline={"Feb 2022 - June 2022"}
            title={"Full Stack Developer | Learn Academy"}
            description={
              "Completed 640+ hours of direct coding experience in an intensive development bootcamp. Gained proficiency in building full stack applications with Javascript, Ruby, Ruby on Rails, React. Utilized test driven development alongside full stack apps. Became a mentor during Jumpstart Weekend for prospective LEARN students. Utilized effective communication and teamwork through pair/mob programming."
            }
            stack={
              <>
                <StackButton text="JavaScript" />
                <StackButton text="React" />
                <StackButton text="CSS" />
                <StackButton text="Ruby" />
                <StackButton text="Ruby on Rails" />
                <StackButton text="HTML" />
              </>
            }
          />
          <div className="flex justify-center">
            <Button
              className="border-[#463f3a] border-2 font-medium bg-[#e0afa0] rounded-full p-4 text-[#463f3a] hover:bg-[#d18a7b]"
              label="Download Full Resume"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
