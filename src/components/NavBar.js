import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';  

function NavBar() {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'active' : ''}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/category/remera" 
            className={({ isActive }) => isActive ? 'active' : ''}>
            Remeras
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/category/pantalon" 
            className={({ isActive }) => isActive ? 'active' : ''}>
            Pantalones
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/category/campera" 
            className={({ isActive }) => isActive ? 'active' : ''}>
            Camperas
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/category/zapatillas" 
            className={({ isActive }) => isActive ? 'active' : ''}>
            Zapatillas
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
