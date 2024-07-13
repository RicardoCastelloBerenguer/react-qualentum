import React, { useEffect } from "react";
import { useUserAuth } from "../../contexts/UserAuthContext";
import { Navigate, useLocation } from "react-router-dom";

const AuthenticatedProtection = ({ children }) => {
  const location = useLocation();

  const { isLoggedIn, isCheckedLocalStorage } = useUserAuth();

  return isLoggedIn || !isCheckedLocalStorage ? (
    children
  ) : (
    <Navigate to={"/login"} state={{ from: location }} />
  );
};

export default AuthenticatedProtection;
