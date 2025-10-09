import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Contact from './pages/Contact';
import UpdateContact from './components/UpdateContact';
import CreateContact from './components/CreateContact';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<Register />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/updateContact" element={<UpdateContact />} />
        <Route path='/createContact' element={<CreateContact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App