import React, { useState } from "react";
import { firebaseAuth } from "../firebase/auth";

export default function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        await firebaseAuth.signup(email, password);
        alert("Signed up successfully!");
      } else {
        await firebaseAuth.login(email, password);
        alert("Logged in successfully!");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleAuth} className="p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4">{isSignup ? "Sign Up" : "Log In"}</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 w-full p-2 border rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          {isSignup ? "Sign Up" : "Log In"}
        </button>
        <button
          type="button"
          onClick={() => setIsSignup(!isSignup)}
          className="mt-4 text-blue-500"
        >
          {isSignup ? "Already have an account? Log In" : "Don't have an account? Sign Up"}
        </button>
      </form>
    </div>
  );
}
