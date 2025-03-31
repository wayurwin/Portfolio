import React from "react";
import "./Projects.css"; // Import CSS for styling

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <ul>
        <li>
          <h3>Memory Matching Game</h3>
          <a 
            href="https://github.com/wayurwin/Memory-Matching-Game" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </li>
        <li>
          <h3>Clone Innomatic Research Lab</h3>
          <a 
            href="https://github.com/wayurwin/Clone_Innomatic_Reasearch_Lab" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
