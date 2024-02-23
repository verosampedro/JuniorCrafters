import './Filter.css';

const Filter = ({ currentCategory, onFilterChange }) => {
  const categories = ["", "5", "4", "3", "2", "1"];

  const handleCategoryClick = (selectedValoration) => {
    onFilterChange(selectedValoration);
  };

  return (
    <div className="gallery-filter">
      <div className="filter-btn-container">
        {categories.map((category) => (
          <button
            key={category}
            className={`gallery-button ${currentCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category === "" ? "All" : `${category} stars`}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
