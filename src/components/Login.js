import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      navigate('/category/Inicio');
    } else {
      alert('Por favor ingresa tu nombre de usuario y contraseña');
    }
  };

  return (
    <div className="login-container">
      <h1>Bienvenido a nuestra tienda</h1>
      <p>Inicia sesión para explorar los productos</p>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-button">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;
