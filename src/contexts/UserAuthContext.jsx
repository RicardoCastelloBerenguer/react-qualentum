// CarritoContext.js
import React, { useState, createContext, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const userLocalStorage = JSON.parse(localStorage.getItem("userLogged"));
    if (userLocalStorage) {
      setIsLoggedIn(true);
      setUser(userLocalStorage);
    } else console.log("No previus Data from local storage");
  }, []);

  const loginUser = (newUser) => {
    console.log("Agregando User : ");
    console.log(newUser);
    setUser(newUser);
    setIsLoggedIn(true);
    localStorage.setItem("userLogged", JSON.stringify(newUser));
    if (location.state?.from) navigate(location.state.from);
    else navigate("/");
  };

  const logoutUser = (index) => {
    setUser({});
    setIsLoggedIn(false);
    localStorage.removeItem("userLogged");
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ user, loginUser, isLoggedIn, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(UserContext);
};
