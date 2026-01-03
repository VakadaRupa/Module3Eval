// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (loggedUser) setUser(loggedUser);
  }, []);

  const login = (email, password) => {
    let role = null;
    if (email === "admin@gmail.com" && password === "admin1234") role = "admin";
    else if (email === "customer@gmail.com" && password === "customer1234")
      role = "customer";
    else return false;

    const userData = { email, role };
    setUser(userData);
    localStorage.setItem("loggedUser", JSON.stringify(userData));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("loggedUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
