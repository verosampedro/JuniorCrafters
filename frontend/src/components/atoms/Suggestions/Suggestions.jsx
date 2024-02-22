import React, { useEffect, useRef, useState } from "react";
import "./Suggestions.css";

export const Suggestions = ({ results, onClickOutside }) => {
  const suggestionsRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log("Click outside detected");
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        console.log("Closing suggestions");
        setIsOpen(false);
        if (typeof onClickOutside === 'function') {
          onClickOutside();
        }
      }
    };

    console.log("Adding click event listener");
    document.addEventListener("click", handleClickOutside);

    return () => {
      console.log("Removing click event listener");
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClickOutside]);

  useEffect(() => {
    // Abre las sugerencias cuando los resultados están disponibles
    if (results && results.length > 0) {
      setIsOpen(true);
    }
  }, [results]);

  if (!results || !Array.isArray(results) || !isOpen) {
    return null;
  }

  return (
    <div className="suggestions" ref={suggestionsRef}>
      {results && results.length > 0 ? (
        results.map((result) => (
          <div
            key={result.id}
            className="suggestion"
            onClick={() => alert(`You selected ${result.title}!`)}
          >
            {result.title}
          </div>
        ))
      ) : (
        <div>No hay sugerencias disponibles</div>
      )}
    </div>
  );
};