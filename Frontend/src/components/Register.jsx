import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
        email,
        password,
      });
      alert("Inscription réussie");
    } catch (err) {
      alert("Erreur d’inscription");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Inscription</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">S’inscrire</button>
      <Link to="/">Retour à l’accueil</Link>
      <Link to="/connexion">Se connecter</Link>
    </form>
  );
}

export default Register;