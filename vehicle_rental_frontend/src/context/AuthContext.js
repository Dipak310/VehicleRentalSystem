// context/AuthContext.js

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Perform authentication with the backend and set the user data
    setUser(userData);
  };

  const logout = () => {
    // Clear user data and token
    setUser(null);
    localStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
