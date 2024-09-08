import React from "react";
import WindowTab from "./WindowTab.tsx";

export default function WindowTemplate({ children }) {
  return (
    <div className="flex items-center justify-center">
      <div className="relative border-4 border-black max-w-5xl w-full max-h-screen rounded-lg shadow-xl shadow-gray-600 overflow-scroll bg-white">
        {/* Window Tab */}
        <div className="border-b-2 border-black flex items-center px-4 py-2 rounded-t-lg bg-white">
          <i className="pi pi-circle text-md mr-2" />
          <i className="pi pi-circle text-md mr-2" />
          <i className="pi pi-circle text-md mr-2" />

          <WindowTab text="Welcome to Portfolio" />
          {/* Experience */}
          <WindowTab text="Experiences" />
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
