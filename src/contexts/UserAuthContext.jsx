// CarritoContext.js
import React, { useState, createContext, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCheckedLocalStorage, setIsCheckedLocalStorage] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsCheckedLocalStorage(false);
    const userLocalStorage = JSON.parse(localStorage.getItem("userLogged"));
    if (userLocalStorage) {
      setIsLoggedIn(true);
      setUser(userLocalStorage);
    } else console.log("No previus Data from local storage");
    setIsCheckedLocalStorage(true);
  }, []);

  const loginUser = (newUser) => {
    newUser = { ...newUser, name: newUser.email.split("@")[0] };
    if (newUser.email.includes("@admin"))
      newUser = { ...newUser, isAdmin: true };
    else newUser = { ...newUser, isAdmin: false };
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
    <UserContext.Provider
      value={{ user, loginUser, isLoggedIn, logoutUser, isCheckedLocalStorage }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(UserContext);
};
