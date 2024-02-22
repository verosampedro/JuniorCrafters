

import React, { useState } from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

export const SearchBar = ({ setResults }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [input, setInput] = useState("");

  const handleInputFocus = () => {
    setIsExpanded(true);
  };

  const handleInputBlur = () => {
    if (input.trim() === "") {
      // Retrasar la actualización de isExpanded para permitir que handleInputFocus se ejecute primero
      setTimeout(() => {
        setIsExpanded(false);
      }, 200); // Puedes ajustar el tiempo de espera según sea necesario
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/course");
      console.log("Response:", response);

      const data = response.data;

      const results = Array.isArray(data.data)
        ? data.data.filter((product) => {
            return (
              input &&
              product &&
              product.name &&
              product.name.toLowerCase().includes(input.toLowerCase())
            );
          })
        : [];

      if (typeof setResults === "function") {
        setResults(results);
      } else {
        console.error("setResults is not a function");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData();
  };


  return (
    <div className={`search-bar ${isExpanded ? "expanded" : ""}`}>
      {isExpanded ? (
        <input
          type="text"
          placeholder="Buscar por títulos"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          className="search-input"
        />
      ) : (
        <div className="icon-container" onClick={handleInputFocus}>
          <FaSearch className="search-icon"/>
        </div>
      )}
    </div>
  );
};
