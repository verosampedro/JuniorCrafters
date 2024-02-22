import React, { useState } from "react";
import "./GalleryFilter.css";

const GalleryFilter = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryClick = (category) => {
    onFilterChange(category);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="gallery-filter">
      <div className="filter-btn-container">
        <div className="dropdown">
          <button className="gallery-button" onClick={toggleDropdown}>
            Select Category
          </button>
          {isOpen && (
            <div className="dropdown-content">
              <button onClick={() => handleCategoryClick("")}>All courses</button>
              <button onClick={() => handleCategoryClick("Python")}>Python</button>
              <button onClick={() => handleCategoryClick("SQL")}>SQL</button>
              <button onClick={() => handleCategoryClick("Web Development")}>Web Development</button>
              <button onClick={() => handleCategoryClick("Other courses")}>Other courses</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryFilter;