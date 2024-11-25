import React from 'react';
import './ItemDetailContainer.css';
import ItemDetail from './ItemDetail';

function ItemDetailContainer({ product }) {
  return (
    <section className="item-detail-container">
      <h2>Detalles del Producto</h2>
      <ItemDetail product={product} />
    </section>
  );
}

export default ItemDetailContainer;
