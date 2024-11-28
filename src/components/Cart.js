import React from 'react';
import { useCart } from './CartContext';
import './Cart.css';

const Cart = ({ setModalOpen }) => {
  const { cartItems, removeFromCart, getTotal } = useCart();

  const handleClose = () => {
    setModalOpen(false); 
  };

  const handleRemove = (id) => {
    removeFromCart(id); 
  };

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: ${item.price * item.quantity}</p>
                <button onClick={() => handleRemove(item.id)} className="remove-button">Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-footer">
        <h3>Total: ${getTotal()}</h3>
        <button className="close-button" onClick={handleClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Cart;
