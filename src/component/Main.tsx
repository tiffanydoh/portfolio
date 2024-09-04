import React from "react";

export default function Main({ children }) {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true, // Ensures 12-hour format with AM/PM
  });

  return (
    <>
      <div className="flex items-center justify-between border-b-2 bg-zinc-700 px-4 py-1">
        {/* Left Side */}
        <div className="flex items-center gap-3">
          <i className="pi pi-desktop text-md text-white" />
          <p className="text-white font-bold">Welcome</p>
          <p className="text-white">Contact</p>
          <p className="text-white">Help</p>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <i className="pi pi-wifi text-md text-white" />
          <i className="pi pi-search text-md text-white" />
          <p className="text-white">{currentDate}</p>
          <p className="text-white">{currentTime}</p>
        </div>
      </div>
      <div>{children}</div>
    </>
  );
}
