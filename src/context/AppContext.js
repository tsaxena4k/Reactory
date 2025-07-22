import React, { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.body.classList.toggle("dark-theme", darkMode);
  }, [darkMode]);

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for using the context
export const useMyContext = () => useContext(AppContext);
