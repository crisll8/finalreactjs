import React from 'react';
import './ItemQuantitySelector.css';

function ItemQuantitySelector({ quantity, setQuantity }) {

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="quantity-selector">
      <button className="quantity-button" onClick={handleDecrement}>-</button>
      <span className="quantity-display">{quantity}</span>
      <button className="quantity-button" onClick={handleIncrement}>+</button>
    </div>
  );
}

export default ItemQuantitySelector;
