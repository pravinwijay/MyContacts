"use client"
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";


function Contact() {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:3000/api/contact/all", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setContacts(res.data);
      } catch (err) {
        console.error("Erreur lors de la récupération des contacts :", err);
        setError(err.message);
      }
    };
    fetch();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:3000/api/contact/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setContacts(contacts.filter(c => c._id !== id))
    } catch (err) {
      console.error(err);
    }
  }

 const handleEdit = async (id, newName, newLastName, newNumber) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.put(
      `http://localhost:3000/api/contact/${id}`,
      { firstName: newName, lastName: newLastName, phone: newNumber }, 
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setContacts(contacts.map(c => c._id === id ? res.data : c));
  } catch (err) {
    console.error(err);
  }
};

  return (
    <>
      {contacts.length === 0 ? (
        <h1>Vous n'avez aucun <b>contact</b></h1>
      ) : (
        
        <ul className="space-y-2 mt-7">
                <h1>Vos <b>contacts</b></h1>
          {contacts.map((contact) => (
            <li key={contact._id} className="border p-2 rounded">
              Nom : <strong>{contact.firstName}</strong> <br />
              Prénom :<strong> {contact.lastName}</strong> <br />
              Tél. : <strong>{contact.phone}</strong> <br />
              <button
                onClick={() => handleEdit(contact._id)}
                className="text-indigo-800 px-2 py-1 rounded ml-5" >
                Modifier
              </button>
              <button
                onClick={() => handleDelete(contact._id)}
                className="text-red-800 px-2 py-1 rounded ml-5" >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Contact

// if (contacts.length === 0){
//   <h1>Il n'y a rien</h1>
// } else {
//   <ul className="space-y-2">
//     {contacts.map((contact) => (
//       <li key={contact._id} className="border p-2 rounded">
//         <strong>{contact.firstName} {contact.lastName}</strong> - {contact.phone}
//       </li>
//     ))}
//   </ul>
// }
