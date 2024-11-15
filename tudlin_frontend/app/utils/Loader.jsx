// src/components/Loader.js
import React from "react";
import "../Styles.css"; // Import CSS for loader styles

const Loader = ({ isLoading, text }) => {
  if (!isLoading) return null; // Don't render the loader if it's not loading

  return (
    <div className="loader-overlay">
      <div className="loader-container">
        <div className="loader-icon"></div>
        <div className="loader-text">{text}</div>
      </div>
    </div>
  );
};

export default Loader;
