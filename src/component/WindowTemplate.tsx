import React from "react";
import WindowTab from "./WindowTab.tsx";

export default function WindowTemplate({ children }) {
  return (
    <div className="flex items-center justify-center bg-white p-28">
      <div className="relative border-4 border-black max-w-5xl w-full rounded-lg shadow-xl shadow-gray-600">
        {/* Window Tab */}
        <div className="border-b-2 border-black flex items-center px-4 py-2 rounded-t-lg">
          <i className="pi pi-circle text-md mr-2" />
          <i className="pi pi-circle text-md mr-2" />
          <i className="pi pi-circle text-md mr-2" />

          <WindowTab text="Welcome to Portfolio" />
          {/* Experience */}
          <WindowTab text="Experience" />
          {/* Projects */}
          <WindowTab text="Projects" />
          {/* Recommendations */}
          <WindowTab text="Recommendations" />
        </div>

        {/* Main Content */}
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}
