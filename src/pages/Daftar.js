// src/pages/Register.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './Daftar.css';
import registerImage from '../assets/img/Room.jpg';  // Impor gambar

function Daftar() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    navigate('/login');
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <img src={registerImage} alt="Register" className="register-image" />  {/* Gunakan gambar */}
        <form onSubmit={handleSubmit} className="register-form">
          <h2>Registrasi</h2>
          <div className="form-group">
            <label htmlFor="name">Nama</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Kata Sandi</label>
            <div className="password-wrapper">
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                name="password"
                required
              />
              <FontAwesomeIcon
                icon={passwordVisible ? faEyeSlash : faEye}
                onClick={togglePasswordVisibility}
                className="password-icon"
              />
            </div>
          </div>
          <button type="submit" className="register-button">Daftar</button>
          <p className="login-prompt">
            Sudah punya akun? <Link to="/masuk" className="login-link">Masuk</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Daftar;
