// CarritoContext.js
import React, { useState, createContext, useContext, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userLocalStorage = JSON.parse(localStorage.getItem("userLogged"));
    if (userLocalStorage) setUser(userLocalStorage);
    else console.log("No previus Data from local storage");
  }, []);

  const loginUser = (newUser) => {
    console.log("Agregando User : ");
    console.log(newUser);
    setUser(newUser);
    localStorage.setItem("userLogged", JSON.stringify(newUser));
  };

  const logoutUser = (index) => {
    setUser({});
    localStorage.removeItem("userLogged");
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(UserContext);
};
