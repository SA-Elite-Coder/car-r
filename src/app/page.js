"use client";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setError("");
    alert(`Logged in as: ${email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400">
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 p-10 rounded-2xl shadow-2xl w-full max-w-sm border-2 border-purple-300"
      >
        <h2 className="text-3xl font-extrabold mb-8 text-center text-purple-700 drop-shadow flex items-center justify-center gap-2">
          Login
        </h2>

        {error && (
          <div className="mb-4 text-red-600 text-sm text-center font-semibold">{error}</div>
        )}
        <div className="mb-6">
          <label className="block mb-2 font-semibold text-purple-700" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full border border-purple-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/80 placeholder-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-8">
          <label className="block mb-2 font-semibold text-purple-700" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full border border-purple-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/80 placeholder-gray-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            placeholder="Enter your password"
          />
        </div>
        // ...existing code...
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-bold text-lg shadow-lg hover:from-pink-500 hover:to-purple-500 transition"
        >
          Login
        </button>
        <div className="mt-6 flex flex-col items-center gap-2">
          <a href="#" className="text-sm text-pink-600 font-semibold hover:underline">
            Forgot password?
          </a>
          <span className="text-sm text-gray-700">
            Don&apos;t have an account?{" "}
            <a href="#" className="text-purple-600 font-semibold hover:underline">
              Sign up
            </a>
          </span>
        </div>
      </form>
    </div>
  );
}