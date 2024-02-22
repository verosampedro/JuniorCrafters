// CartDisplay.jsx
import React from "react";
import { useCart } from "../../CartContext";
import { useNavigate } from "react-router-dom";
import "./CartDisplay.css";

const CartDisplay = () => {
  const { cartItems, clearCart } = useCart();

  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    return `${total}€`;
  };

  const navigate = useNavigate();

  const redirectToPayment = () => {
    navigate("/payment");
  };

  return (
    <div className="cart-display">
      {cartItems.length > 0 ? (
        <>
          <ol>
            {cartItems.map((item, index) => (
              <li key={index}>
                "{item.title}" ({item.price}€)
              </li>
            ))}
          </ol>
          <p className="price-total">Total: {calculateTotal()}</p>
          <div className="buttons-cartdisplay">
            <button className="button-cart" onClick={clearCart}>
              Vacíar carrito
            </button>
            <button
              className="button-cart"
              type="submit"
              onClick={redirectToPayment}
            >
              Comprar
            </button>
          </div>
        </>
      ) : (
        <p>Tu carrito está vacío</p>
      )}
    </div>
  );
};

export default CartDisplay;
