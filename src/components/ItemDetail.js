import React, { useState } from 'react';
import './ItemDetail.css';
import ItemQuantitySelector from './ItemQuantitySelector';
import { useCart } from './CartContext';
import remeraImg from '../assets/remera.jpg';
import pantalonImg from '../assets/pantalon.jpg';
import camperaImg from '../assets/campera.jpg';
import zapatillasImg from '../assets/zapatillas.jpg';
import PropTypes from 'prop-types';

// Mapeo de imágenes de productos
const productImages = {
  Remera: remeraImg,
  Pantalón: pantalonImg,
  Campera: camperaImg,
  Zapatillas: zapatillasImg,
};

function ItemDetail({ product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [feedback, setFeedback] = useState("");

  const handleAddToCart = () => {
    if (quantity <= product.stock) {
      addToCart({ ...product, quantity });
      setFeedback(`Se agregó ${quantity} unidad(es) de ${product.name} al carrito.`);
      setTimeout(() => setFeedback(""), 3000); 
    } else {
      alert("No hay suficiente stock disponible.");
    }
  };

 
  const getProductImage = (name) => productImages[name] || null;

  return (
    <div className="item-detail">
      <img
        src={getProductImage(product.name)}
        alt={product.name}
        className="item-detail-image"
      />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <p>Stock disponible: {product.stock}</p> {/* Muestra el stock disponible */}

      <ItemQuantitySelector quantity={quantity} setQuantity={setQuantity} stock={product.stock} />

      <button
        className="add-to-cart-button"
        onClick={handleAddToCart}
        disabled={product.stock === 0}
      >
        {product.stock === 0 ? "Sin stock" : "Agregar al carrito"}
      </button>

      {feedback && <p className="feedback-message">{feedback}</p>}
    </div>
  );
}

ItemDetail.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
};

export default ItemDetail;
