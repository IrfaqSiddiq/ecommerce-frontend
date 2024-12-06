import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginForm.css';

const BASE_URL = 'http://localhost:3000';

const getTokenFromCookie = () => {
  const cookies = document.cookie.split('; ');
  const tokenCookie = cookies.find((cookie) => cookie.startsWith('token='));
  return tokenCookie ? tokenCookie.split('=')[1] : null;
};
const LoginForm = () => {
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const token = getTokenFromCookie();
    console.log('Token from cookies:', token);
    if (token) {
      navigate('/products');
    }
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [popupMessage, setPopupMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${BASE_URL}/auth/login`,
        { email, password },
        { withCredentials: true }
      );
      setMessage('Login successful');
      setPopupMessage('Login successful!');

      navigate('/products');
    } catch (err) {
      console.error('Error during login:', err);
      setMessage(err.response?.data?.message || 'Something went wrong!');
      setPopupMessage(err.response?.data?.message || 'Something went wrong!');
    }
  };

  const closePopup = () => setPopupMessage('');

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit">Login</button>
      </form>

      {message && <div className="success-message">{message}</div>}

      {popupMessage && (
        <div className="popup-overlay">
          <div className="popup">
            <p>{popupMessage}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
