// src/pages/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './Masuk.css';
import loginImage from '../assets/img/Room.jpg';  // Impor gambar

function Masuk() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    navigate('/dashboard'); // Ganti dengan path yang sesuai setelah login berhasil
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Masuk</h2>
          <div className="form-group">
            <label htmlFor="email">Nama Pengguna</label>
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
          <button type="submit" className="login-button">Masuk</button>
          <p className="register-prompt">
            Belum punya akun? <Link to="/daftar" className="register-link">Daftar</Link>
          </p>
        </form>
        <img src={loginImage} alt="Login" className="login-image" /> {/* Gambar dipindahkan ke kanan */}
      </div>
    </div>
  );
}

export default Masuk;
