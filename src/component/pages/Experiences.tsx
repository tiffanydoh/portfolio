import React from "react";
import WindowTemplate from "../WindowTemplate.tsx";
import ExperienceBox from "../ExperienceBox.tsx";

export default function Experiences() {
  const experiences = [
    {
      position: "Software Engineer I",
      company: "Solstice Power Technologies",
      duration: "May 2024 - July 2024",
      content: (
        <div>
          - Developed and deployed new features with an ownership mindset in
          preparation for a technical lead role.
          <br />
          - Refactored code and wrote clean, maintainable code that enhanced
          performance, scalability, and readability.
          <br />
          - Engaged in ongoing learning opportunities including trainings,
          workshops, certifications, and mentorship to stay current with
          industry trends and technologies.
          <br />
          - Documented code and systems comprehensively, promoting clarity and
          knowledge sharing.
          <br />
          - Participated in design discussions and planning sessions to define
          project requirements and technical solutions.
          <br />- Created database scripts to automate data addition and
          updates, significantly enhancing data integrity and accuracy.
        </div>
      ),
    },
    {
      position: "Junior Software Engineer",
      company: "Solstice Power Technolgies",
      duration: "June 2022 - May 2024",
      content: (
        <div>
          - Built a commercial web platform around EnergyScore, a
          machine-learning algorithm to enhance clean energy product access.
          <br />
          - Enhanced the Solstice platform through full-stack feature
          implementation, bug fixes, testing, and API integrations.
          <br />
          - Collaborated in a Scrum environment with engineers, product
          managers, and other stakeholders; participated in code reviews and
          planning, leading to more efficient workflows and improved team
          alignment.
          <br />
          - Led initiative to increase software accessibility for inclusive user
          experiences.
          <br />
          - Mentored junior colleagues through pair programming, tool
          utilization, and project guide, improving team efficiency.
          <br />- Contributed to projects utilizing AWS services, proactively
          expanding cloud computing expertise.
        </div>
      ),
    },
    {
      position: "Full Stack Developer Intern",
      company: "RipeMetrics",
      duration: "May 2022 - June 2022",
      content: (
        <div>
          - Contributed to a highly collaborative startup environment. - Wrote
          well-designed, testable, and efficient code that met technical
          requirements.
          <br />
          - Assisted in troubleshooting code defects and deploying timely fixes.
          <br />- Learned new skills quickly and worked effectively in a
          fast-paced environment.
        </div>
      ),
    },
    {
      position: "Full Stack Developer/Student",
      company: "LEARN Academy",
      duration: "Feb 2022 - June 2022",
      content: (
        <div>
          - Completed 640+ hours of direct coding experience in an intensive
          development bootcamp.
          <br />
          - Gained proficiency in building full stack applications with
          Javascript, Ruby, Ruby on Rails, React.
          <br />- Utilized test-driven development alongside full stack
          applications.
          <br />- Became a mentor during Jumpstart Weekend for prospective LEARN
          students.
          <br />- Demonstrated effective communication and teamwork through
          pair/mob programming.
        </div>
      ),
    },
  ];
  return (
    <div id="experiences">
      <WindowTemplate id="experiences" tabName="Experiences">
        <div className="grid gap-4 items-center">
          {experiences.map((experience) => (
            <ExperienceBox
              position={experience.position}
              company={experience.company}
              duration={experience.duration}
              content={experience.content}
            />
          ))}
        </div>
      </WindowTemplate>
    </div>
  );
}
