
"use client";

import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:8080/api/auth/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Identifiants incorrects");
        return;
      }

      console.log("Réponse Django :", data);

      setSuccess("Connexion réussie !");
      console.log("Utilisateur connecté :", data.user);

    } catch (error) {
      console.error("Erreur :", error);
      setError("Impossible de contacter le backend Django.");
    } finally {
      setLoading(false);
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
          <label className="block mb-2">Username :</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2">Password :</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
            required
          />
        </div>

        {error && (
          <p className="text-red-600 mb-4">{error}</p>
        )}

        {success && (
          <p className="text-green-600 mb-4">{success}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Connexion..." : "Se connecter"}
        </button>

      </form>
    </div>
  );
}
