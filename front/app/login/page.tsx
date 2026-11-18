"use client";

import { useState } from "react";

export default function Login() {
  const [nom, setNom] = useState("");
  const [password, setPassword] = useState("");

  /* function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log("Nom :", nom);
    console.log("Password :", password);

    alert("Formulaire envoyé !");
  }
  */ 

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  try {
    const response = await fetch(
      "http://127.0.0.1:8080/api/auth/login/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: nom,
          password: password,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error("Erreur lors de l'envoi");
    }

    console.log("Réponse Django :", data);
    alert("Données envoyées avec succès !");

  } catch (error) {
    console.error("Erreur :", error);
    alert("Impossible de contacter le backend Django");
  }
  }

  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-center mb-6">
          Connexion
        </h1>

        <div className="mb-4">
          <label className="block mb-2">Nom :</label>
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2">Password :</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
        >
          Envoyer
        </button>
      </form>

    </div>
  );
}
