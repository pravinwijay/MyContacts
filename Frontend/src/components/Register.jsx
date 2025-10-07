"use client"
import axios from "axios";
import { useState } from "react";

function Register() {
    const [email, setEmail] = useState();
    const[password, setPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/api/auth/register", {
            email,
            password
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }
    
    return (
        <>
            <h1>PAGE REGISTER</h1>
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
                        placeholder="email@email.com" 
                        onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                    <input 
                        type="password" 
                        id="password" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                    Submit
                </button>
            </form>
        </>
    );
}

export default Register