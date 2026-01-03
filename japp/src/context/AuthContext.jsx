import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const storedUser = localStorage.getItem("user");
  const [user, setUser] = useState(
    storedUser ? JSON.parse(storedUser) : null
  );

  const login = (email, password) => {
    if (email === "admin@gmail.com" && password === "admin1234") {
      const u = { role: "admin" };
      localStorage.setItem("user", JSON.stringify(u));
      setUser(u);
      return "admin";
    }

    if (email === "customer@gmail.com" && password === "customer1234") {
      const u = { role: "customer" };
      localStorage.setItem("user", JSON.stringify(u));
      setUser(u);
      return "customer";
    }

    return null;
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};
