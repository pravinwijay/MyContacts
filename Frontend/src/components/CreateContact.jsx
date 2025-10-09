import axios from "axios"
import { useState } from "react"

function CreateContact() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setNumber] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/contact/`, 
                { firstName, lastName, phone}, 
                { headers: { Authorization: `Bearer ${token}` } })
            
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1 className="mb-7">Créer un nouveau <b>contact</b></h1>

                <label className="text-indigo-500">Nom : </label>
                <input type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)} /> 

                <label className="text-indigo-500">Prénom : </label>
                <input type="text" name="lastName" onChange={(e) => setLastName(e.target.value)} />

                <label className="text-indigo-500">Numéro : </label>
                <input type="text" name="phone" onChange={(e) => setNumber(e.target.value)} />

                <button className="text-green-700" type="submit"> Ajouter</button>
                <button className="text-amber-500 ml-5"><a href="/contact">Retour</a> </button>
            </form>
        </>
    )
}

export default CreateContact