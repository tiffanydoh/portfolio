import React from "react";
import WindowTab from "./WindowTab.tsx";

export default function WindowTemplate({ id, tabName, children }) {
  return (
    <div className="flex items-center justify-center pb-4">
      <div className="relative border-4 border-black max-w-5xl w-full max-h-screen rounded-lg shadow-xl shadow-gray-600 overflow-scroll bg-[#faedcd]">
        {/* Window Tab */}
        <div className="border-b-2 border-black flex items-center px-4 py-2 rounded-t-lg bg-[#2b2b2b] sticky top-0">
          <i className="pi pi-circle text-md mr-2 text-red-400 bg-red-400 rounded-full" />
          <i className="pi pi-circle text-md mr-2 text-yellow-400 bg-yellow-400 rounded-full" />
          <i className="pi pi-circle text-md mr-2 text-green-400 bg-green-400 rounded-full" />

          <WindowTab text={tabName} />
        </div>

        {/* Main Content */}
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}
