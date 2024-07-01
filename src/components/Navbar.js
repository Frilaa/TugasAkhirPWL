import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Jangan lupa buat styling terpisah atau gunakan styled-components
import logo from '../assets/img/Logo.png';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/masuk');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Beranda</Link>
        </li>
        <li className={location.pathname === '/data-ruangan' ? 'active' : ''}>
          <Link to="/data-ruangan">Data Ruangan</Link>
        </li>
        <li className={location.pathname === '/data-peminjaman' ? 'active' : ''}>
          <Link to="/data-peminjaman">Data Peminjaman</Link>
        </li>
        <li className={location.pathname === '/riwayat-transaksi' ? 'active' : ''}>
          <Link to="/riwayat-transaksi">Riwayat Transaksi</Link>
        </li>
      </ul>
      <button className="logout-button" onClick={handleLogout}>
        Keluar
      </button>
    </nav>
  );
};

export default Navbar;
