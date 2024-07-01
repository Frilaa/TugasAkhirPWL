// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Daftar from './pages/Daftar';
import Masuk from './pages/Masuk';
import Beranda from './pages/Beranda';
import Navbar from './components/Navbar'; // Import Navbar
import DataRuangan from './pages/DataRuangan';
import FormPengajuan from './pages/FormPengajuan';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route utama */}
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/masuk" element={<Masuk />} />
        <Route path="/dataRuangan" element={<DataRuangan />} />
        <Route path="/Form" element={<FormPengajuan />} />
      </Routes>
    </Router>
  );
};

const Home = () => {
  return (
    <>
      <Navbar /> {/* Navbar hanya muncul di halaman Beranda */}
      <div className="container">
        <Beranda />
      </div>
    </>
  );
};

export default App;