import React from "react";
import { useForm } from "react-hook-form";

// Componentes
import FieldInput from "./InputField/FieldInput";

// Iconos
import { CiUser } from "react-icons/ci";
import { FaUnlock } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";

// Validaciones
import { loginSchema } from "../../validations/validations";
import { useUserAuth } from "../../contexts/UserAuthContext";

const LoginForm = () => {
  const { user, isLoggedIn, loginUser, logoutUser } = useUserAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = (user) => {
    loginUser(user);
  };

  // console.log(watch("email"));

  return (
    <div className="mt-40 mb-40 bg-white px-2 py-8 flex flex-col mx-auto max-w-xs items-center gap-10 justify-center border-4 rounded-lg border-[#c83bf2] ">
      <span className="text-3xl font-bold">Login</span>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-5"
      >
        <FieldInput
          label="Email"
          name="email"
          register={register}
          errors={errors}
          type="email"
          placeholder="Escribe aquí tu email..."
          Icon={CiUser}
        />
        <FieldInput
          label="Contraseña"
          name="password"
          register={register}
          errors={errors}
          type="password"
          placeholder="Escribe aquí tu contraseña..."
          Icon={FaUnlock}
        />
        <FieldInput
          label="Repetir Contraseña"
          name="passwordConfirmation"
          register={register}
          errors={errors}
          type="password"
          placeholder="Repite aquí tu contraseña..."
          Icon={FaUnlock}
        />
        {!isLoggedIn ? (
          <button
            type="submit"
            // onClick={Object.keys(user).length === 0 ? handleLogin : handleLogout}
            className="transition duration-100 p-2 w-full font-semibold text-white 
                bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:shadow-lg hover:shadow-pink-500
                max-w-[80%] m-auto rounded-md"
          >
            {/* {Object.keys(user).length === 0 ? "LOGIN" : "LOGOUT"} */}
            LOGIN
          </button>
        ) : (
          <button
            onClick={logoutUser}
            // onClick={Object.keys(user).length === 0 ? handleLogin : handleLogout}
            className="transition duration-100 p-2 w-full font-semibold text-white 
                bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:shadow-lg hover:shadow-pink-500
                max-w-[80%] m-auto rounded-md"
          >
            {/* {Object.keys(user).length === 0 ? "LOGIN" : "LOGOUT"} */}
            LOGOUT
          </button>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
