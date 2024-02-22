import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import React from 'react';
import './Categories.css';

const Categories = () => {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/course");
        console.log("Respuesta del servidor:", response.data);
        const dataApi = response.data;
        const filteredImages = dataApi.data.filter((image) => {
          const hasCategory = !filter || image.keyword.includes(filter);
          const matchesSearch =
            !searchTerm ||
            image.title.toLowerCase().includes(searchTerm.toLowerCase());
          return hasCategory && matchesSearch;
        });

        setSearchTerm(searchTerm);
        setGalleryImages(filteredImages);
        console.log("Número de imágenes después del filtrado:", filteredImages.length);
        setImages(filteredImages);
      } catch (error) {
        console.error("Error al obtener los datos de la API:", error);
      }
    };

    fetchData();
    const galleryContainer = galleryContainerRef.current;

    const updateContainerRect = () => {
      if (galleryContainer) {
        setContainerRect(galleryContainer.getBoundingClientRect());
      }
    };

    updateContainerRect();

    const handleResize = () => {
      updateContainerRect();
    };

    galleryContainer.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      galleryContainer.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [category, filter, searchTerm]);

  return (
    <div className='containerCategories'>
            <div className="category1"></div>
            <div className="category2"></div>
            <div className="category3"></div>
            <div className="category4"></div>
    </div>
  )
}

export default Categories