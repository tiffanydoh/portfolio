import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Chip } from "primereact/chip";

export default function ArchivedProjects() {
  const archived_projects = [
    {
      year: 2022,
      project_name: "StarTunes",
      description:
        "Is shuffling through the same 10 songs starting to become a buzzkill? With StarTunes, you can discover new music by shuffling through our random song generator to spice up your life. Create new songs, update/delete songs, and sign in/sign up/sign out.",
      built_with: (
        <>
          <Chip className="bg-blue-100 m-1" label={"CSS"} />
          <Chip className="bg-blue-100 m-1" label={"Javascript"} />
          <Chip className="bg-blue-100 m-1" label={"HTML"} />
          <Chip className="bg-blue-100 m-1" label={"React"} />
          <Chip className="bg-blue-100 m-1" label={"Ruby on Rails"} />
          <Chip className="bg-blue-100 m-1" label={"React in Rails"} />
          <Chip className="bg-blue-100 m-1" label={"Jest"} />
          <Chip className="bg-blue-100 m-1" label={"RSpec"} />
        </>
      ),
      link: (
        <a
          href="https://github.com/tiffanydoh/StarTunes"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#f3c677]"
        >
          <i className="pi pi-github" />
        </a>
      ),
    },
    {
      year: 2022,
      project_name: "Barkbuds",
      description:
        "barkbuds is your friendly neighborhood app where your dog can meet another dog. The perfect website for you to find your dog a buddy. Use the swipe features to swipe right on your favorite dogs, swipe left on other dogs. Use the comment section to leave your thoughts.",
      built_with: (
        <>
          <Chip className="bg-blue-100 m-1" label={"CSS"} />
          <Chip className="bg-blue-100 m-1" label={"Javascript"} />
          <Chip className="bg-blue-100 m-1" label={"HTML"} />
          <Chip className="bg-blue-100 m-1" label={"React"} />
          <Chip className="bg-blue-100 m-1" label={"Ruby on Rails"} />
          <Chip className="bg-blue-100 m-1" label={"Jest"} />
          <Chip className="bg-blue-100 m-1" label={"RSpec"} />
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
            <i className="pi pi-github" /> | backend
          </a>
          <a
            href="https://github.com/tiffanydoh/cat-tinder-frontend-ragdoll-dane-tiffany"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#f3c677]"
          >
            <i className="pi pi-github" /> | frontend
          </a>
        </div>
      ),
    },
    {
      year: 2022,
      project_name: "Wildlife Tracker",
      description:
        "The Forest Service is considering a proposal to place in conservancy a forest of virgin Douglas fir just outside of Portland, Oregon. Before they give the go-ahead, they need to do an environmental impact study. I've built an API the rangers can use to report wildlife sightings.",
      built_with: (
        <>
          <Chip className="bg-blue-100 m-1" label={"Ruby"} />
          <Chip className="bg-blue-100 m-1"  label={"Ruby on Rails"} />
        </>
      ),
      link: (
        <a
          href="https://github.com/tiffanydoh/wildlife-tracker"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#f3c677]"
        >
          <i className="pi pi-github" />
        </a>
      ),
    },
  ];

  return (
    <DataTable
      value={archived_projects}
      className="text-[#e5e5e5] text-md"
      tableStyle={{ maxWidth: "100rem" }}
    >
      <Column className="text-left px-4 py-2" field="year" header="Year" />
      <Column
        className="text-left px-4 py-2"
        field="project_name"
        header="Project"
      />
      <Column
        className="text-left px-4 py-2"
        field="description"
        header="Description"
      />
      <Column
        className="text-left px-4 py-2"
        field="built_with"
        header="Built With"
      />
      <Column className="text-left px-4 py-2" field="link" header="Link" />
    </DataTable>
  );
}
