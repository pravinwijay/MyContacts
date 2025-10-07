import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Register from './components/Register';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connexion" element={<Login/>} />
        <Route path="/inscription" element={<Register/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App