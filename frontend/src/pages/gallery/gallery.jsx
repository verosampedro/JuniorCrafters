import React from 'react'
import Presentation from '../../components/molecules/GalleryFilter'
// import GalleryItem from '../molecules/GalleryItem/GalleryItem'; // Asumiendo que tienes un componente GalleryItem
import './gallery.css';

const gallery = () => {
  const [filterCategory, setFilterCategory] = useState("");

  const handleFilterChange = (category) => {
    setFilterCategory(category);
  };

  // Array de ejemplo, debes reemplazarlo con tu lógica y datos reales
  const galleryItems = [
    { id: 1, category: "Python", imageUrl: "url1.jpg" },
    { id: 2, category: "SQL", imageUrl: "url2.jpg" },
    { id: 3, category: "Web Development", imageUrl: "url3.jpg" },
    // Agrega más elementos según sea necesario
  ];

  const filteredItems = filterCategory
    ? galleryItems.filter((item) => item.category === filterCategory)
    : galleryItems;

  return (
    <div>
      <GalleryFilter onFilterChange={handleFilterChange} />
      <div className="gallery-container">
        {filteredItems.map((item) => (
          <GalleryItem key={item.id} imageUrl={item.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default gallery;