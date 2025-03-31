import React, { useState, useEffect } from "react";
import "./DarkModeToggle.css"; // Optional: import a CSS file for styling

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Toggle the "dark-mode" class on the body element
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="dark-mode-toggle">
      <label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <span>Dark Mode</span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
