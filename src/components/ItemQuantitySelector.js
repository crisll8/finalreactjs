import React from 'react';
import './ItemQuantitySelector.css';

function ItemQuantitySelector({ quantity, setQuantity, stock }) {
  // Incrementa la cantidad si es menor al stock
  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="quantity-selector">
      <button
        className="quantity-button"
        onClick={handleDecrement}
        disabled={quantity <= 1} 
      >
        -
      </button>
      <span className="quantity-display">{quantity}</span>
      <button
        className="quantity-button"
        onClick={handleIncrement}
        disabled={quantity >= stock} 
      >
        +
      </button>
    </div>
  );
}

export default ItemQuantitySelector;
