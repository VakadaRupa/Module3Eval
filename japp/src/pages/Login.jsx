// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (!success) return alert("Invalid credentials");

    if (email === "admin@gmail.com") navigate("/admin/dashboard");
    else navigate("/customers/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <br />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
