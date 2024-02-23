import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import GalleryFilter from "../../components/molecules/Filter/Filter.jsx";
import "./Courses.css";

function Courses() {
  const navigate = useNavigate();
  const { valoration } = useParams();
  console.log("Valor de valoration:", valoration);

  // Verificación y asignación de un valor predeterminado si es undefined
  const filterValue = valoration || "";
  
  const [filteredImages, setFilteredImages] = useState([]);
  const [containerRect, setContainerRect] = useState(null);
  const [filter, setFilter] = useState(filterValue);
  const [searchTerm, setSearchTerm] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  
  const galleryContainerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/course");
        const dataApi = response.data;

        let filteredImages;

        if (filter !== "") {
          filteredImages = dataApi.filter(image => String(image.valoration) === filter);
        } else {
          filteredImages = dataApi;
        }

        setFilteredImages(filteredImages);

        setSearchTerm("");
        setGalleryImages(dataApi);

        console.log("Número de imágenes sin filtrar:", dataApi.length);
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
  }, [filter, searchTerm]);

  const handleMouseMove = (event) => {
    if (containerRect) {
      const mouseX = event.clientX - containerRect.left - containerRect.width / 2;
      const mouseY = event.clientY - containerRect.top - containerRect.height / 4;
      const rotateX = containerRect.height !== 0 ? (mouseY / containerRect.height) * 50 : 2;
      const rotateY = containerRect.width !== 0 ? (mouseX / containerRect.width) * 50 : 0;

      const imgContainers = document.querySelectorAll(".img-container");
      imgContainers.forEach((imgContainer) => {
        imgContainer.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
      });
    }
  };

  const resetRotation = () => {
    const imgContainers = document.querySelectorAll(".img-container");
    imgContainers.forEach((imgContainer) => {
      imgContainer.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    });
  };

  const handleFilterChange = (newCategory) => {
    setFilter(newCategory);
    if (newCategory === "") {
      navigate("/course"); // navegar a la ruta predeterminada sin valoración
    } else {
      navigate(`/course/${newCategory}`);
    }
  };

  // Nueva función para manejar la redirección al hacer clic en una imagen
  const redirectToProductPage = (product) => {
    // Utiliza el objeto completo en lugar del id para la redirección
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <>
      <GalleryFilter onFilterChange={handleFilterChange} />
      <div
        className="gallery-container"
        ref={galleryContainerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetRotation}
      >
        <div className="pictures-container">
          {Array.isArray(filteredImages) &&
            filteredImages.map((image) => (
              <div className="img-container" key={image.id}>
                {/* Cambiado onClick para redirigir a la página del producto único */}
                <img
                  src={image.images}
                  alt={image.name}
                  onClick={() => redirectToProductPage(image)}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Courses;
