import React from "react";
import "./Contact.css"; // Import CSS for styling

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>Email: <a href="mailto:your.email@example.com">wayurwin@gmail.com</a></p>
      <p>
        GitHub: 
        <a href="https://github.com/wayurwin" target="_blank" rel="noopener noreferrer">
          GitHub Profile
        </a>
      </p>
    </div>
  );
};

export default Contact;
