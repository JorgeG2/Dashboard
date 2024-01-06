import React from "react";
//import "./Header.css"; // Make sure to create this CSS file for styling

function Header() {
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Good Evening</h1>
      <div>
        <span className="text-lg">{currentTime}</span>
        <span className="text-sm block">{currentDate}</span>
      </div>
    </header>
  );
}

export default Header;
