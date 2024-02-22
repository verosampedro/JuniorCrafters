import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import axios from "axios";
import Navbar from "../../molecules/NavBar/Navbar.jsx";
import { SearchBar } from "../../molecules/SearchBar/SearchBar.jsx";
import { Suggestions } from "../../atoms/Suggestions/Suggestions.jsx";
import { useCart } from "../../../CartContext.jsx"; // Importa useCart
import CartDisplay from "../../CartDisplay/CartDisplay.jsx"; // Importa CartDisplay
// import DarkButton from "../../atoms/DarkButton/DarkButton.jsx";
// import VoiceControl from './DarkButton/VoiceControl.jsx';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const { cartItems } = useCart();

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await axios.get(
          `/api/suggestions?searchTerm=${searchTerm}`
        );
        setSuggestions(response.data);
      } catch (error) {
        console.error("Error al obtener sugerencias:", error);
      }
    };

    fetchSuggestions();
  }, [searchTerm]);

  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  const handleSuggestionClick = (selectedSuggestion) => {
    setSearchTerm(selectedSuggestion.title);
  };

  const handleSearchClickOutside = () => {
    // Lógica para cerrar las sugerencias
    // No se utiliza setResults([]); ya que no hay un estado results en este componente
  };

  const showCart = () => {
    setCartVisible(true);
  };

  const hideCart = () => {
    setCartVisible(false);
  };

  const closeCart = () => {
    setCartVisible(false);
  };

  return (
    <div className="main-header">
      <Link to="/" className="logo-container">
        <img className="logo-header" src="/thumbnail.png" />
      </Link>
      <header className="header-test">
        <Link to="/" className="name-container">
          <img className="name-header" src="./public/nameLogo.png" alt="name" />
        </Link>
        {/* <DarkButton /> */}
        <div className="search-container">
          <SearchBar
            setResults={setSuggestions} // Asegúrate de que estás pasando setResults correctamente
            onChange={handleSearchChange}
            onClickOutside={handleSearchClickOutside}
          />
          <Suggestions
            results={suggestions} // Utiliza results en lugar de suggestions
            onClick={handleSuggestionClick}
          />
        </div>
        <Navbar />
        <button className="cart-header" onClick={showCart}>
          🛒 {cartItems.length > 0 && `(${cartItems.length})`}
        </button>
        {cartVisible && <CartDisplay hideCart={hideCart} />}{" "}
        {/*Renderiza CartDisplay solo cuando cartVisible es true */}
        <button
          onClick={closeCart}
          className={`close-cart-btn ${cartVisible ? "visible" : "hidden"}`}
        >
          X
        </button>
      </header>
    </div>
  );
};

export default Header;
