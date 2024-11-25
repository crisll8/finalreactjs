import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList';
import remeraImg from '../assets/remera.jpg';
import pantalonImg from '../assets/pantalon.jpg';
import camperaImg from '../assets/campera.jpg';
import zapatillasImg from '../assets/zapatillas.jpg';

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const allProducts = [
      { id: 1, name: 'Remera', description: 'Remera de algodón', price: 25, image: remeraImg },
      { id: 2, name: 'Pantalón', description: 'Pantalón de jean', price: 40, image: pantalonImg },
      { id: 3, name: 'Campera', description: 'Campera impermeable', price: 80, image: camperaImg },
      { id: 4, name: 'Zapatillas', description: 'Zapatillas deportivas', price: 60, image: zapatillasImg },
    ];
    setProducts(allProducts);
  }, []);

  return (
    <section>
      <h2>{greeting}</h2>
      <ItemList products={products} />
    </section>
  );
}

export default ItemListContainer;
