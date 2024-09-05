import React from "react";

export default function WindowTab({ text }) {
  return (
    <div>
      <div className="flex items-center px-4 py-2 border-2 border-black p-2 rounded-full text-sm font-bold ml-2 whitespace-nowrap">
        <p>{text}</p>
        <i className="pi pi-times text-sm ml-2" />
      </div>
    </div>
  );
}
