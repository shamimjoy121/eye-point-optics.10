"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "eyepointoptics11@gmail.com" && password === "eyepointoptics11.2220") {
      localStorage.setItem("isAdmin", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8">
        <h1 className="text-3xl font-black text-white text-center">
          Admin Login
        </h1>

        <p className="text-slate-400 text-center mt-2">
          Eye Point Optics Dashboard
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white focus:outline-none focus:border-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white focus:outline-none focus:border-blue-500"
          />

          {error && (
            <p className="text-red-400 text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 font-bold text-white hover:bg-blue-500 transition"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}