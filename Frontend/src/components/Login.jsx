import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        email,
        password,
      });
      alert("Connexion réussie");
    } catch (err) {
      alert("Erreur de connexion");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Connexion</h1>
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
      <button type="submit">Se connecter</button>
      <Link to="/">Retour à l’accueil</Link>
      <Link to="/inscription">Créer un compte</Link>
    </form>
  );
}

export default Login;