import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GalleryFilter from './components/molecules/GalleryFilter/GalleryFilter';
import GalleryPage from './components/pages/GalleryPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
}

export default App;