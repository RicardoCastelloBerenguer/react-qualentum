import React, { useState, useContext } from "react";
import { CarritoContext } from "./CarritoContext";

export const AppThemeContext = React.createContext();

export const AppThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("light");
  };

  return (
    <AppThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppThemeContext.Provider>
  );
};

export const useAppTheme = () => {
  return useContext(AppThemeContext);
};
