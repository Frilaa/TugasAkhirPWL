import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Beranda.css'; // Jangan lupa buat styling terpisah atau gunakan styled-components

const Beranda = () => {
  const navigate = useNavigate();

  const handleCheckAvailability = () => {
    navigate('/dataRuangan');
  };

  return (
    <div className="home-page">
      <div className="tagline-box">
        <h1>Tiba di Ruang Kita!</h1>
        <p>Tempat peminjaman ruangan yang mudah dan efisien. Temukan ruangan yang Anda butuhkan, mulai sekarang!</p>
      </div>
      <div className="check-availability-box" onClick={handleCheckAvailability}>
        <h2>Cek Ketersediaan Ruangan</h2>
      </div>
    </div>
  );
};

export default Beranda;
