import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Chip } from "primereact/chip";
import { Button } from "primereact/button";
import ProjectModal from "./ProjectModal.tsx";
import actionscomponent from "../assets/images/solstice-platform/actions-component.jpg";
import bulkqc1 from "../assets/images/solstice-platform/bulk-qc-modal-1.jpg";
import bulkqc2 from "../assets/images/solstice-platform/bulk-qc-modal-2.jpg";
import sp4 from "../assets/images/solstice-platform/sp4.png";
import sp5 from "../assets/images/solstice-platform/sp5.png";
import sp6 from "../assets/images/solstice-platform/sp6.png";
import sp7 from "../assets/images/solstice-platform/sp7.png";
import sp8 from "../assets/images/solstice-platform/sp8.png";
import es1 from "../assets/images/energyscore/es1.png";
import es2 from "../assets/images/energyscore/es2.png";
import es3 from "../assets/images/energyscore/es3.png";
import es4 from "../assets/images/energyscore/es4.png";
import es5 from "../assets/images/energyscore/es5.png";
import es6 from "../assets/images/energyscore/es6.png";
import es7 from "../assets/images/energyscore/es7.png";

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
          <Chip className="bg-blue-100 m-1" label="JavaScript" />
          <Chip className="bg-blue-100 m-1" label="TypeScript" />
          <Chip className="bg-blue-100 m-1" label="React" />
          <Chip className="bg-blue-100 m-1" label="Express.js" />
          <Chip className="bg-blue-100 m-1" label="Next.js" />
          <Chip className="bg-blue-100 m-1" label="CSS/SCSS" />
          <Chip className="bg-blue-100 m-1" label="Tailwind CSS" />
          <Chip className="bg-blue-100 m-1" label="Cypress" />
          <Chip className="bg-blue-100 m-1" label="Jest" />
          <Chip className="bg-blue-100 m-1" label="Docker" />
          <Chip className="bg-blue-100 m-1" label="PostgreSQL" />
          <Chip className="bg-blue-100 m-1" label="SQL" />
        </>
      ),
      link: (
        <div className="hover:text-[#f3c677]">
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
          <Chip className="bg-blue-100 m-1" label="JavaScript" />
          <Chip className="bg-blue-100 m-1" label="TypeScript" />
          <Chip className="bg-blue-100 m-1" label="React" />
          <Chip className="bg-blue-100 m-1" label="Express.js" />
          <Chip className="bg-blue-100 m-1" label="Next.js" />
          <Chip className="bg-blue-100 m-1" label="CSS/SCSS" />
          <Chip className="bg-blue-100 m-1" label="Tailwind CSS" />
          <Chip className="bg-blue-100 m-1" label="Cypress" />
          <Chip className="bg-blue-100 m-1" label="Jest" />
          <Chip className="bg-blue-100 m-1" label="Storybook" />
          <Chip className="bg-blue-100 m-1" label="TSOA" />
          <Chip className="bg-blue-100 m-1" label="Docker" />
          <Chip className="bg-blue-100 m-1" label="TypeORM" />
          <Chip className="bg-blue-100 m-1" label="PostgreSQL" />
          <Chip className="bg-blue-100 m-1" label="SQL" />
        </>
      ),
      link: (
        <div className="hover:text-[#f3c677]">
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
        <div className="grid gap-4">
          <img
            src={actionscomponent}
            width="400"
            height="300"
            alt="actions component"
          />

          <img src={bulkqc1} width="400" height="300" alt="bulk qc modal 1" />

          <img src={bulkqc2} width="400" height="300" alt="bulk qc modal 2" />

          <img src={sp4} width="400" height="300" alt="solstice work" />

          <img src={sp5} width="400" height="300" alt="solstice work" />

          <img src={sp6} width="400" height="300" alt="solstice work" />

          <img src={sp7} width="400" height="300" alt="solstice work" />

          <img src={sp8} width="400" height="300" alt="solstice work" />

          <p>More Coming Soon!</p>
        </div>
      </ProjectModal>
      <ProjectModal
        header="Example of Works Done on EnergyScore"
        visible={openESProjectModal}
        onHide={() => setOpenESProjectModal(false)}
      >
        <div className="grid gap-4">
          <img src={es1} width="400" height="300" alt="energyscore work" />
          <img src={es2} width="400" height="300" alt="energyscore work" />
          <img src={es3} width="400" height="300" alt="energyscore work" />
          <img src={es4} width="400" height="300" alt="energyscore work" />
          <img src={es5} width="400" height="300" alt="energyscore work" />
          <img src={es6} width="400" height="300" alt="energyscore work" />
          <img src={es7} width="400" height="300" alt="energyscore work" />
        </div>
      </ProjectModal>
    </>
  );
}
