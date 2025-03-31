import React from "react";
import "./About.css"; // Import CSS for styling

const About = ({ resumeLink }) => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <p>
        I am a Full Stack Developer with expertise in <strong>React</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>.
      </p>
      <a href={resumeLink} download className="resume-button">
        Download Resume
      </a>
    </div>
  );
};

export default About;
