import React, { useState } from 'react';
import './Checkout.css'; 

function Checkout() {
  const [userData, setUserData] = useState({ name: '', email: '' });
  const [purchaseCode, setPurchaseCode] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = `COMPRA-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    setPurchaseCode(code);
    setIsSubmitted(true);
  };

  return (
    <div className="checkout-container">
      {!isSubmitted ? (
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Finalizar Compra</h2>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Generar Código de Compra</button>
        </form>
      ) : (
        <div className="checkout-success">
          <h2>¡Gracias por tu compra, {userData.name}!</h2>
          <p>Tu código de compra es:</p>
          <strong>{purchaseCode}</strong>
          <p>Revisa tu correo ({userData.email}) para más detalles.</p>
        </div>
      )}
    </div>
  );
}

export default Checkout;
