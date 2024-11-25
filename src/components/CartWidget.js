import React from 'react';
import { useCart } from './CartContext';
import './CartWidget.css';
import cartIcon from '../assets/cart-icon.png';

function CartWidget({ setModalOpen }) {
  const { cartItems } = useCart(); 

  
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  
  const handleCartClick = () => {
    setModalOpen(true);
  };

  return (
    <div className="cart-widget" onClick={handleCartClick}>
      <img src={cartIcon} alt="Cart" className="cart-icon" />
      {totalQuantity > 0 && <span className="cart-quantity">{totalQuantity}</span>}
    </div>
  );
}

export default CartWidget;
