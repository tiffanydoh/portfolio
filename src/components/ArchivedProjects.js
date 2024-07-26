import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import StackButton from "./StackButton";

const ArchivedProject = () => {
  const projects_data = [
    {
      year: 2022,
      project_name: "FruityCounter",
      built_with: (
        <>
          <StackButton text={"Redux"} />
          <StackButton text={"React"} />
          <StackButton text={"React Hooks"} />
          <StackButton text={"Tailwind"} />
        </>
      ),
      link: (
        <a
          href="https://github.com/tiffanydoh/redux-counter-app"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#f3c677]"
        >
          Github
        </a>
      ),
    },
    {
      year: 2022,
      project_name: "StarTunes",
      built_with: (
        <>
          <StackButton text={"CSS"} />
          <StackButton text={"Javascript"} />
          <StackButton text={"HTML"} />
          <StackButton text={"React"} />
          <StackButton text={"Ruby on Rails"} />
          <StackButton text={"React in Rails"} />
          <StackButton text={"Jest"} />
          <StackButton text={"RSpec"} />
        </>
      ),
      link: (
        <a
          href="https://github.com/tiffanydoh/StarTunes"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#f3c677]"
        >
          Github
        </a>
      ),
    },
    {
      year: 2022,
      project_name: "Barkbuds",
      built_with: (
        <>
          <StackButton text={"CSS"} />
          <StackButton text={"Javascript"} />
          <StackButton text={"HTML"} />
          <StackButton text={"React"} />
          <StackButton text={"Ruby on Rails"} />
          <StackButton text={"Jest"} />
          <StackButton text={"RSpec"} />
        </>
      ),
      link: (
        <div className="flex flex-col">
          <a
            href="https://github.com/tiffanydoh/cat-tinder-backend-ragdoll-dane-tiffany"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#f3c677]"
          >
            Github | backend
          </a>
          <a
            href="https://github.com/tiffanydoh/cat-tinder-frontend-ragdoll-dane-tiffany"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#f3c677]"
          >
            Github | frontend
          </a>
        </div>
      ),
    },
    {
      year: 2022,
      project_name: "Wildlife Tracker",
      built_with: (
        <>
          <StackButton text={"Ruby on Rails"} />
          <StackButton text={"Postman API"} />
        </>
      ),
      link: null,
    },
    {
      year: 2022,
      project_name: "Treasure Hunt",
      built_with: (
        <>
          <StackButton text={"CSS"} />
          <StackButton text={"Javascript"} />
          <StackButton text={"HTML"} />
        </>
      ),
      link: "Github",
    },
  ];
  return (
    <div name="archived-projects">
      <div clasName="p-8">
        <h2 className="flex justify-center font-semibold text-xl text-[#e5e5e5]">
          Projects
        </h2>
        <div className="p-8">
          <DataTable
            value={projects_data}
            className="text-[#e5e5e5] text-md"
            tableStyle={{ maxWidth: "100rem" }}
          >
            <Column
              className="text-left px-4 py-2"
              field="year"
              header="Year"
            ></Column>
            <Column
              className="text-left px-4 py-2"
              field="project_name"
              header="Project"
            ></Column>
            <Column
              className="text-left px-4 py-2"
              field="built_with"
              header="Built With"
            ></Column>
            <Column
              className="text-left px-4 py-2"
              field="link"
              header="Link"
            ></Column>
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default ArchivedProject;
