import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cartItems'));
    if (savedCart) {
      setCartItems(savedCart);
    }
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prevItems, { ...item, quantity: item.quantity }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
