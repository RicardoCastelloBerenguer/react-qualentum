import React, { useRef, useState } from "react";

import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { useUserAuth } from "../../contexts/UserAuthContext";
function AuthForm() {
  const [userForm, setUserForm] = useState({});
  const { user, loginUser, logoutUser } = useUserAuth();

  const handleLogin = (event) => {
    event.preventDefault();
    try {
      console.log(Object.keys(userForm).length);
      if (
        Object.keys(userForm).length === 2 &&
        userForm.name &&
        userForm.password
      ) {
        loginUser(userForm);
        setUserForm({});
      }
    } catch (e) {
      console.error(e.message);
    }
  };
  const handleLogout = () => {
    event.preventDefault();
    logoutUser();
  };

  return (
    <div className="mt-40 mb-40 bg-white px-2 py-8 flex flex-col mx-auto max-w-xs items-center gap-10 justify-center border-4 rounded-lg border-[#c83bf2] ">
      <span className="text-3xl font-bold">Login</span>
      <form id="login-form" className="w-full flex flex-col gap-5">
        <div className="form-group flex flex-col gap-1 px-8">
          <label
            htmlFor="username"
            className="text-gray-500 font-semibold text-sm ml-1"
          >
            Usuario
          </label>
          <div className="flex items-center gap-3 border-b-2 border-gray-300 pb-1">
            <CiUser></CiUser>
            <input
              className="focus:outline-none"
              id="username"
              type="text"
              value={userForm.name ? userForm.name : ""}
              placeholder="Escribe tu usuario"
              onChange={(e) =>
                setUserForm({
                  name: e.target.value,
                  password: userForm.password,
                })
              }
            />
          </div>
        </div>
        <div className="form-group flex flex-col gap-1 px-8">
          <label
            htmlFor="password"
            className="text-gray-500 font-semibold text-sm ml-1"
          >
            Contraseña
          </label>
          <div className="flex items-center gap-3 border-b-2 border-gray-300 pb-1">
            <RiLockPasswordLine className="text-gray-500"></RiLockPasswordLine>
            <input
              className="focus:outline-none"
              id="password"
              value={userForm.password ? userForm.password : ""}
              type="password"
              placeholder="Escribe tu contraseña"
              onChange={(e) =>
                setUserForm({ name: userForm.name, password: e.target.value })
              }
            />
          </div>
        </div>
        <button
          onClick={Object.keys(user).length === 0 ? handleLogin : handleLogout}
          className="transition duration-100 p-2 w-full font-semibold text-white 
                bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:shadow-lg hover:shadow-pink-500
                max-w-[80%] m-auto rounded-md"
        >
          {Object.keys(user).length === 0 ? "LOGIN" : "LOGOUT"}
        </button>
      </form>
    </div>
  );
}

export default AuthForm;
