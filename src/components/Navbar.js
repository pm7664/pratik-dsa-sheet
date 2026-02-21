import React from "react";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <div className="navbar">
      <h1 className="logo">🚀 Pratik DSA Sheet</h1>

      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}

export default Navbar;