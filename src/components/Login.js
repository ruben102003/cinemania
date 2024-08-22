import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!identifier || !password) {
      setError('Por favor, ingrese correo electrónico/usuario y contraseña.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => 
      (user.email === identifier || user.username === identifier) && user.password === password
    );

    if (!user) {
      const userExists = users.some(user => user.email === identifier || user.username === identifier);
      if (userExists) {
        setError('Contraseña inválida.');
      } else {
        setError('Correo o usuario inválido.');
      }
      return;
    }

    localStorage.setItem('currentUser', JSON.stringify(user));
    navigate('/');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Iniciar Sesión</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label htmlFor="identifier">Correo Electrónico o Usuario</label>
          <input
            type="text"
            id="identifier"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="login-buttons">
          <button type="submit">Iniciar Sesión</button>
          <Link to="/Register">
            <button type="button">Registrarse</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
    