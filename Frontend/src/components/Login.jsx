"use client"
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const API_URL = process.env.REACT_APP_API_URL;


function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  // `${API_URL}/api/contact/`
  // http://localhost:3000/api/auth/login

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${API_URL}/api/auth/login`, {
      email,
      password
    }).then((res) => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      navigate("/contact");
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <>
      <h1 className="mb-4 -4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">SE CONNECTER</h1>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">Votre adresse mail</label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="email@email.com"
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">Votre mot de passe</label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mr-5">
          <a href="/home">Retour à l'accueil</a>
        </button>
        <button type="submit" className="text-white bg-violet-600 hover:bg-violet-800 focus:ring-4 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
          Connexion
        </button>
      </form>
    </>
  );
}

export default Login

// https://www.youtube.com/watch?v=ZVyIIyZJutM
// https://www.youtube.com/watch?v=XOnmDZ9LNDM&t=265s