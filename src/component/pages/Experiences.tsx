import React from "react";
import WindowTemplate from "../WindowTemplate.tsx";
import ExperienceBox from "../ExperienceBox.tsx";
import { Fieldset } from "primereact/fieldset";
import { Chip } from "primereact/chip";
import resume from "../../assets/documents/Tiffany_Do_Resume_Software_Engineer.pdf";

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
      <WindowTemplate tabName="Experiences">
        <div className="grid gap-4 items-center">
          {experiences.map((experience) => (
            <ExperienceBox
              position={experience.position}
              company={experience.company}
              duration={experience.duration}
              content={experience.content}
            />
          ))}
          <hr className="my-4 border-t-2 border-black" />

          <Fieldset legend="Languages" toggleable>
            <p className="m-0">
              <Chip className="bg-blue-100 m-1" label={"Ruby"} />
              <Chip className="bg-blue-100 m-1" label={"Javascript"} />
              <Chip className="bg-blue-100 m-1" label={"Typescript"} />
              <Chip className="bg-blue-100 m-1" label={"SQL"} />
              <Chip className="bg-blue-100 m-1" label={"CSS/SCSS"} />
              <Chip className="bg-blue-100 m-1" label={"Tailwind"} />
              <Chip className="bg-blue-100 m-1" label={"HTML"} />
            </p>
          </Fieldset>

          <Fieldset legend="Frameworks/Libraries/Other" toggleable>
            <p className="m-0">
              <Chip className="bg-blue-100 m-1" label={"React.js"} />
              <Chip className="bg-blue-100 m-1" label={"Express.js"} />
              <Chip className="bg-blue-100 m-1" label={"Next.js"} />
              <Chip className="bg-blue-100 m-1" label={"Redux"} />
              <Chip className="bg-blue-100 m-1" label={"Prime React"} />
              <Chip className="bg-blue-100 m-1" label={"Ruby on Rails"} />
              <Chip className="bg-blue-100 m-1" label={"Node.js"} />
            </p>
          </Fieldset>

          <Fieldset legend="Tools/Technologies" toggleable>
            <p className="m-0">
              <Chip className="bg-blue-100 m-1" label={"Storybook"} />
              <Chip className="bg-blue-100 m-1" label={"Docker"} />
              <Chip className="bg-blue-100 m-1" label={"TSOA"} />
              <Chip className="bg-blue-100 m-1" label={"TypeORM"} />
              <Chip
                className="bg-blue-100 m-1"
                label={"React Query/ TanStack Query"}
              />
              <Chip className="bg-blue-100 m-1" label={"Knex.js"} />
            </p>
          </Fieldset>

          <Fieldset legend="Testing" toggleable>
            <p className="m-0">
              <Chip className="bg-blue-100 m-1" label={"Jest"} />
              <Chip
                className="bg-blue-100 m-1"
                label={"React Testing Library"}
              />
              <Chip className="bg-blue-100 m-1" label={"Cypress"} />
              <Chip className="bg-blue-100 m-1" label={"RSPEC"} />
              <Chip className="bg-blue-100 m-1" label={"Enzyme"} />
            </p>
          </Fieldset>

          <Fieldset legend="Version Control" toggleable>
            <p className="m-0">
              <Chip className="bg-blue-100 m-1" label={"Git"} />
            </p>
          </Fieldset>

          <Fieldset legend="Data Analysis/Databases" toggleable>
            <p className="m-0">
              <Chip className="bg-blue-100 m-1" label={"STATA"} />
              <Chip className="bg-blue-100 m-1" label={"PostgreSQL"} />
            </p>
          </Fieldset>

          <Fieldset legend="Soft Skills" toggleable>
            <p className="m-0">
              <Chip className="bg-blue-100 m-1" label={"Problem-Solving"} />
              <Chip className="bg-blue-100 m-1" label={"Communication"} />
              <Chip className="bg-blue-100 m-1" label={"Critical Thinking"} />
              <Chip className="bg-blue-100 m-1" label={"Adaptability"} />
              <Chip className="bg-blue-100 m-1" label={"Collaboration"} />
              <Chip
                className="bg-blue-100 m-1"
                label={"Emotional Intelligence"}
              />
              <Chip className="bg-blue-100 m-1" label={"Self-Motivation"} />
            </p>
          </Fieldset>

          <div className="flex justify-center">
            <a
              href={resume}
              className="text-black bg-[#F8F6F0] hover:text-black hover:bg-sky-500 px-4 py-3 my-8 mx-auto flex items-center border-2 border-black"
            >
              Download Full Resume
            </a>
          </div>
        </div>
      </WindowTemplate>
    </div>
  );
}
