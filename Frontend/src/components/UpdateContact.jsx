"use client"
import axios from "axios"
import { useState } from "react";
import { useLocation } from "react-router-dom";

function UpdateContact() {
    const location = useLocation();
    const { contact } = location.state;
    const [firstName, setFirstName] = useState(contact.firstName)
    const [lastName, setLastName] = useState(contact.lastName)
    const [phone, setNumber] = useState(contact.phone)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            const res = await axios.patch(
                `http://localhost:3000/api/contact/${contact._id}`,
                {
                    firstName,
                    lastName,
                    phone
                },
                { headers: { Authorization: `Bearer ${token}` } }
            );
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1 className="mb-7">Contact à <b>modifier</b></h1>

                <label className="text-indigo-500">Nom : </label>
                <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} /> 

                <label className="text-indigo-500">Prénom : </label>
                <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />

                <label className="text-indigo-500">Numéro : </label>
                <input type="text" name="phone" value={phone} onChange={(e) => setNumber(e.target.value)} />

                <button className="text-green-700" type="submit"> Update</button>
                <button className="text-amber-500 ml-5"><a href="/contact">Retour</a> </button>
            </form>
        </>
    )
}

export default UpdateContact