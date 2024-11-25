import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';
import CartWidget from './components/CartWidget';
import CartModal from './components/CartModal';
import Login from './components/Login';
import Checkout from './components/Checkout';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false); 

  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          {/* Rutas principales */}
          <Route path="/" element={<Login />} />
          <Route
            path="/category/:category"
            element={<ItemListContainer greeting="Descubre nuestra colección" />}
          />
          <Route path="/product/:id" element={<ItemDetail />} />
          <Route path="/checkout" element={<Checkout />} /> {/* Ruta para Checkout */}
        </Routes>
        <CartWidget setModalOpen={setIsModalOpen} />
        <CartModal isOpen={isModalOpen} setModalOpen={setIsModalOpen} />

        {/* Título agregado */}
        <div className="welcome-banner">
          <h1>¡Bienvenido a mi aplicación de e-commerce!</h1>
          <p>Contamos con la mejor calidad y precios del mercado.</p>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
