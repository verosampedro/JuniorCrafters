import React from "react";
import { useParams, useLocation } from "react-router-dom";
import "./Product.css";

const Product = () => {
  const { productId } = useParams();
  const { state } = useLocation();

  // Utiliza el objeto del estado para obtener la información completa del producto
  const productInfo = state ? state.product : null;

  if (!productInfo) {
    // Puedes manejar la lógica si no hay información del producto
    return <p>No se encontró información del producto</p>;
  }

  return (
    <div className="product-container">
      <div className="product-img">
      <img src={productInfo.images} alt={productInfo.name}/>
      </div>
      <div className="product-title">
      <h2>{productInfo.name}</h2>
      </div>
      <div className="product-autor">
      <p>{productInfo.author}</p>
      </div>
      <div className="product-valoration">
      <p>Stars: {productInfo.valoration}</p>
      </div>
     
    </div>
  );
};

export default Product;
