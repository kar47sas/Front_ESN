"use client";

import { useState } from "react";

export default function Login() {
  const [nom, setNom] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log("Nom :", nom);
    console.log("Password :", password);

    alert("Formulaire envoyé !");
  }

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom :</label>
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </div>

        <div>
          <label>Password :</label>
          <input
            type="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}