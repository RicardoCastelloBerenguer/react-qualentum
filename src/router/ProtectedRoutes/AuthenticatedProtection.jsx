import React, { useEffect } from "react";
import { useUserAuth } from "../../contexts/UserAuthContext";
import { Navigate, useLocation } from "react-router-dom";

const AuthenticatedProtection = ({ children }) => {
  const location = useLocation();

  const { isLoggedIn, setIsLoggedIn } = useUserAuth();

  // useEffect(() => {
  //   const userLocalStorage = JSON.parse(localStorage.getItem("userLogged"));
  //   if (userLocalStorage) {
  //     setIsLoggedIn(true);
  //   } else console.log("No previus Data from local storage");
  // }, []);

  console.log(isLoggedIn);

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to={"/login"} state={{ from: location }} />
  );
};

export default AuthenticatedProtection;
