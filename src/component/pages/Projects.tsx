import React from "react";
import WindowTemplate from "../WindowTemplate.tsx";
import { TabView, TabPanel } from "primereact/tabview";
import MostRecentProjects from "../MostRecentProjects.tsx";
import ArchivedProjects from "../ArchivedProjects.tsx";

export default function Recommendations() {
  return (
    <WindowTemplate>
      <div>
        <TabView>
          <TabPanel header="Most Recent">
            <p className="m-0">
              <MostRecentProjects />
            </p>
          </TabPanel>
          <TabPanel header="Archived">
            <p className="m-0">
              <ArchivedProjects />
            </p>
          </TabPanel>
        </TabView>
      </div>
    </WindowTemplate>
  );
}
