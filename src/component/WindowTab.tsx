import React from "react";

export default function WindowTab({ text }) {
  return (
    <div>
      <div
        className={`flex items-center px-4 py-2 border-2 border-black rounded-full text-sm font-bold ml-2 whitespace-nowrap bg-blue-500 hover:bg-blue-700 text-white border-black`}
      >
        <p>{text}</p>
        <i className="pi pi-times text-sm ml-2" />
      </div>
    </div>
  );
}
