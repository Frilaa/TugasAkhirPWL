import React, { useState } from 'react';
import axios from 'axios';
import './FormPengajuan.css';

const FormPengajuan = () => {
  const [formData, setFormData] = useState({
    nama: '',
    npm: '',
    dosen: '',
    keterangan: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/peminjaman', formData);
      console.log('Data berhasil dikirim:', response.data);
      // Tambahkan logika untuk menampilkan pesan sukses atau navigasi ke halaman lain jika diperlukan
    } catch (error) {
      console.error('Error:', error);
      // Tambahkan logika untuk menampilkan pesan error jika diperlukan
    }
  };

  return (
    <div className="ajukan-peminjaman-container">
      <div className="modal">
        <div className="modal-header">
          <span>Ajukan</span>
          <button className="btn-cancel">x</button>
        </div>
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="nama"
              placeholder="Nama"
              value={formData.nama}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="npm"
              placeholder="NPM"
              value={formData.npm}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="dosen"
              placeholder="Dosen Pembimbing"
              value={formData.dosen}
              onChange={handleChange}
              required
            />
            <textarea
              name="keterangan"
              placeholder="Keterangan"
              value={formData.keterangan}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Kirim</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormPengajuan;
