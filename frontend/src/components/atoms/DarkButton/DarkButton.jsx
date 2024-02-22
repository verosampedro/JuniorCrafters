// DarkButton.jsx
import React, { useEffect, useState } from 'react';
import './DarkButton.css';

const DarkButton = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkMode);
  }, [isDarkMode]);

  return (
    <div>
      <button className="dark-theme-toggle" onClick={toggleDarkMode}>
        {isDarkMode ? '📷 ' : '🎥'}
      </button>

      {isDarkMode && (
        <div className="video-overlay">
          <video autoPlay loop className="background-video">
            <source src="../../public/img/film.mp4" type="video/mp4" />
            Tu navegador no soporta la etiqueta de video.
          </video>
        </div>
      )}
    </div>
  );
};

export default DarkButton;
