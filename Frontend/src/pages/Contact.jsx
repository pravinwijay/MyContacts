import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Contact() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/contacts`);
      setContacts(res.data);
    };
    fetchContacts();
  }, []);

  return (
    <div>
      <h1>Mes Contacts</h1>
      <ul>
        {contacts.map((c) => (
          <li key={c._id}>{c.firstName} {c.lastName} - {c.phone}</li>
        ))}
      </ul>
      <Link to="/create">Créer un contact</Link>
      <Link to="/">Retour</Link>
    </div>
  );
}

export default Contact;