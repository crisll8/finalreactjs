import React from 'react';
import Item from './Item';

function ItemList({ products }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ItemList;
