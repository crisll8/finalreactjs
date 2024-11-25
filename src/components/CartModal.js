import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CartModal.css'; 
import { useCart } from './CartContext';

const CartModal = ({ isOpen, setModalOpen }) => {
  const { cartItems } = useCart(); 
  const navigate = useNavigate(); 

  const handleCheckout = () => {
    setModalOpen(false); 
    navigate('/checkout'); 
  };

  if (!isOpen) return null;

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-modal">
      <div className="cart-modal-content">
        <h2>Tu carrito</h2>
        {cartItems.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <p>{item.name}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Precio: ${item.price}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="cart-total">
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>
        {cartItems.length > 0 && (
          <button className="checkout-button" onClick={handleCheckout}>
            Finalizar Compra
          </button>
        )}
        <button className="close-modal" onClick={() => setModalOpen(false)}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default CartModal;
