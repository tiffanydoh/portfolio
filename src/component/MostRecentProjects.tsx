import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Chip } from "primereact/chip";
import { Button } from "primereact/button";
import ProjectModal from "./ProjectModal.tsx";
import actionscomponent from "../images/solstice-platform/actions-component.jpg";
import bulkqc1 from "../images/solstice-platform/bulk-qc-modal-1.jpg";
import bulkqc2 from "../images/solstice-platform/bulk-qc-modal-2.jpg";

export default function MostRecentProjects() {
  const [openSolsticeProjectModal, setOpenSolsticeProjectModal] =
    useState(false);
  const [openESProjectModal, setOpenESProjectModal] = useState(false);

  const most_recent_projects = [
    {
      year: "2022 - 2024",
      project_name: "Solstice Platform",
      description: (
        <div>
          I have contributed to a wide range of impactful projects
          <br />- Versium API
          <br />- Churn Management
          <br />- Payment Plans
          <br />- Enrollment Enhancements
          <br />- Developer Portal/ Reporting Tools
          <br />- Billing and Invoicing Improvements
          <br />- Platform Acessibility
          <br />- Refactoring code
          <br />- New Market Entries
          <br />- Anchor Handling
          <br />- Multiproperty
          <br />- And More!
        </div>
      ),
      built_with: (
        <>
          <Chip label="JavaScript" />
          <Chip label="TypeScript" />
          <Chip label="React" />
          <Chip label="Express.js" />
          <Chip label="Next.js" />
          <Chip label="CSS/SCSS" />
          <Chip label="Tailwind CSS" />
          <Chip label="Cypress" />
          <Chip label="Jest" />
          <Chip label="Docker" />
          <Chip label="PostgreSQL" />
          <Chip label="SQL" />
        </>
      ),
      link: (
        <div>
          <Button onClick={() => setOpenSolsticeProjectModal(true)}>
            <i className="pi pi-images" />
          </Button>
        </div>
      ),
    },
    {
      year: "2022 - 2024",
      project_name: "EnergyScore",
      description: (
        <div>
          Built a commercial web platform around EnergyScore, a machine-learning
          algorithm to enhance clean energy product access.
        </div>
      ),
      built_with: (
        <>
          <Chip label="JavaScript" />
          <Chip label="TypeScript" />
          <Chip label="React" />
          <Chip label="Express.js" />
          <Chip label="Next.js" />
          <Chip label="CSS/SCSS" />
          <Chip label="Tailwind CSS" />
          <Chip label="Cypress" />
          <Chip label="Jest" />
          <Chip label="Storybook" />
          <Chip label="TSOA" />
          <Chip label="Docker" />
          <Chip label="TypeORM" />
          <Chip label="PostgreSQL" />
          <Chip label="SQL" />
        </>
      ),
      link: (
        <div>
          <Button onClick={() => setOpenESProjectModal(true)}>
            <i className="pi pi-images" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <>
      <DataTable
        value={most_recent_projects}
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
      <ProjectModal
        header="Example of Works Done on Solstice Platform"
        visible={openSolsticeProjectModal}
        onHide={() => setOpenSolsticeProjectModal(false)}
      >
        <div>
          <p>Action Component/Example of Bulk Action</p>
          <img
            src={actionscomponent}
            width="400"
            height="300"
            alt="actions component"
          />

          <img src={bulkqc1} width="400" height="300" alt="bulk qc modal 1" />

          <img src={bulkqc2} width="400" height="300" alt="bulk qc modal 2" />

          <p>More Coming Soon!</p>
        </div>
      </ProjectModal>
      <ProjectModal
        header="Example of Works Done on EnergyScore"
        visible={openESProjectModal}
        onHide={() => setOpenESProjectModal(false)}
      >
        <div>Pictures Coming Soon!</div>
      </ProjectModal>
    </>
  );
}
