// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (loggedUser) setUser(loggedUser);
  }, []);

  const login = (email, password) => {
    const credentials = [
      { role: "admin", email: "admin@gmail.com", password: "admin1234" },
      { role: "customer", email: "customer@gmail.com", password: "customer1234" },
    ];

    const found = credentials.find(
      (c) => c.email === email && c.password === password
    );

    if (!found) {
      alert("Invalid email or password");
      return false;
    }

    setUser(found);
    localStorage.setItem("loggedUser", JSON.stringify(found));

    if (found.role === "admin") navigate("/admin/dashboard");
    else navigate("/customers/dashboard");

    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("loggedUser");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
