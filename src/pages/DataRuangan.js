// src/pages/DataRuangan.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/img/ibik.jpg'; // Import background image
import './DataRuangan.css'; // Import CSS

const DataRuangan = () => {
  const navigate = useNavigate();
  const [tanggalMulai, setTanggalMulai] = useState('');
  const [tanggalSelesai, setTanggalSelesai] = useState('');
  const [waktuMulai, setWaktuMulai] = useState('07.30'); // Default waktu mulai
  const [waktuSelesai, setWaktuSelesai] = useState('10.00'); // Default waktu selesai
  const [lantai, setLantai] = useState('');
  const [hasilPencarian, setHasilPencarian] = useState([]);

  const handleCari = async () => {
    try {
      // Lakukan pengecekan validasi input disini jika diperlukan

      // Contoh penggunaan Axios untuk melakukan pencarian data
      const response = await axios.get(`URL_API/data-ruangan`, {
        params: {
          tanggalMulai: tanggalMulai + ' ' + waktuMulai,
          tanggalSelesai: tanggalSelesai + ' ' + waktuSelesai,
          lantai,
        },
      });
      
      // Simpan hasil pencarian ke state
      setHasilPencarian(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error state
    }
  };

  const handleAjukanPeminjaman = (ruanganId) => {
    navigate(`/ajukan-peminjaman/${ruanganId}`);
  };

  return (
    <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container">
        <div className="search-container">
          <h2>Form Pencarian Ruangan</h2>
          <div className="search-form">
            <div className="form-item">
              <label htmlFor="tanggalMulai">Tanggal & Waktu Mulai</label>
              <div className="datetime-input">
                <input
                  id="tanggalMulai"
                  type="date"
                  value={tanggalMulai}
                  onChange={(e) => setTanggalMulai(e.target.value)}
                />
                <select value={waktuMulai} onChange={(e) => setWaktuMulai(e.target.value)}>
                  <option value="07.30">07.30</option>
                  <option value="10.15">10.15</option>
                  <option value="13.00">13.00</option>
                  <option value="15.45">15.45</option>
                  <option value="18.30">18.30</option>
                  <option value="20.30">20.30</option>
                </select>
              </div>
            </div>
            
            <div className="form-item">
              <label htmlFor="tanggalSelesai">Tanggal & Waktu Selesai</label>
              <div className="datetime-input">
                <input
                  id="tanggalSelesai"
                  type="date"
                  value={tanggalSelesai}
                  onChange={(e) => setTanggalSelesai(e.target.value)}
                />
                <select value={waktuSelesai} onChange={(e) => setWaktuSelesai(e.target.value)}>
                  <option value="10.00">10.00</option>
                  <option value="12.45">12.45</option>
                  <option value="15.30">15.30</option>
                  <option value="18.30">18.30</option>
                  <option value="20.30">20.30</option>
                  <option value="22.00">22.00</option>
                </select>
              </div>
            </div>
            
            <div className="form-item">
              <label htmlFor="lantai">Lantai</label>
              <input
                id="lantai"
                type="text"
                placeholder="Lantai"
                value={lantai}
                onChange={(e) => setLantai(e.target.value)}
              />
            </div>
            
            <button className="cari-button" onClick={handleCari}>Cari</button>
          </div>
        </div>

        {/* Tampilan hasil pencarian ruangan */}
        <div className="ruangan-list">
          {hasilPencarian.map((ruangan) => (
            <div key={ruangan.id} className={`ruangan-item ${ruangan.available ? 'available' : 'not-available'}`}>
              <p>{ruangan.nama}</p>
              {/* Tambahkan logika untuk menampilkan status ketersediaan */}
              <p>Status: {ruangan.available ? 'Tersedia' : 'Tidak Tersedia'}</p>
              <button onClick={() => handleAjukanPeminjaman(ruangan.id)}>Ajukan</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataRuangan;
