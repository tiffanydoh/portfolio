import React from "react";

export default function WindowTemplate({ children }) {
  return (
    <div className="flex items-center justify-center bg-white p-4">
      <div className="relative border-4 border-black max-w-5xl w-full rounded-lg shadow-xl shadow-gray-600">
        {/* Window Tab */}
        <div className="border-b-2 border-black flex items-center px-4 py-2 rounded-t-lg">
          <i className="pi pi-circle text-md mr-2" />
          <i className="pi pi-circle text-md mr-2" />
          <i className="pi pi-circle text-md mr-2" />
          <div className="flex items-center px-4 py-2 border-2 border-black p-2 rounded-full text-sm font-bold ml-2">
            <p>Welcome To My Portfolio</p>
            <i className="pi pi-times text-sm ml-2" />
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}
