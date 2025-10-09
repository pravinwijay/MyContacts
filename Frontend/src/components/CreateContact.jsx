import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function CreateContact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/contacts`, {
        firstName,
        lastName,
        phone,
      });
      alert("Contact créé avec succès");
    } catch (err) {
      alert("Erreur lors de la création du contact");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Créer un contact</h1>
      <input
        type="text"
        placeholder="Prénom"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nom"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Téléphone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit">Créer</button>
      <Link to="/contacts">Retour</Link>
    </form>
  );
}

export default CreateContact;