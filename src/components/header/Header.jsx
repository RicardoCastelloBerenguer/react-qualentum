import { useState } from "react";
import React from "react";
import { FaCartPlus, FaRegUser, FaHeart } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";

import { useCarrito } from "../../contexts/CarritoContext";
import { useAppTheme } from "../../contexts/AppThemeContext";
import { useUserAuth } from "../../contexts/UserAuthContext";

function Header({ onToggleCart, onChangeFilter }) {
  const { user } = useUserAuth();
  const { carrito } = useCarrito();
  const { theme, toggleTheme } = useAppTheme();
  const [newFilter, setNewFilter] = useState("");

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setNewFilter(value);
    onChangeFilter(value);
  };

  return (
    <>
      <header>
        <nav className="header-nav">
          <ul
            className={`flex gap-5 text-white px-3 py-4 ${
              theme === "light" ? "bg-[#333333]" : "bg-black"
            }`}
          >
            <div className="flex flex-grow-0 items-center gap-5 text-xs sm:text-sm md:text-base">
              <li className="nav-element">
                <a onClick={onToggleCart} className="font-bold" href="#">
                  MiTienda
                </a>
              </li>
              <li className="nav-element">
                <a href="#">Inicio</a>
              </li>
              <li className="nav-element">
                <a href="#">Categorías</a>
              </li>
              <li className="nav-element">
                <a href="#">Ofertas</a>
              </li>
              <li className="nav-element">
                <a href="#">Contacto</a>
              </li>
            </div>
            <div className="w-max grow">
              <li className="nav-element w-full">
                <input
                  onChange={handleFilterChange}
                  placeholder="Buscar productos"
                  value={newFilter}
                  type="text"
                  className="w-full rounded-full px-2 py-1 text-black"
                />
              </li>
            </div>
            <div
              id="icon-container"
              className="flex gap-4 items-center pr-4 [&>li]:hover:cursor-pointer bg-none [&>li]:bg-none"
            >
              <li className="transition duration-300 ease-in-out transform hover:scale-110">
                <FaRegUser style={{ color: "white" }} />
              </li>
              <li className="transition duration-300 ease-in-out transform hover:scale-110">
                <FaHeart style={{ color: "white" }} />
              </li>
              <li className="transition duration-300 ease-in-out transform hover:scale-110">
                <MdDarkMode onClick={toggleTheme} style={{ color: "white" }} />
              </li>

              <li className="realtive transition duration-300 ease-in-out transform hover:scale-110">
                <FaCartPlus onClick={onToggleCart} style={{ color: "white" }} />
                {carrito.length > 0 && (
                  <span className="absolute bottom-2 font-bold left-3 text-xs bg-blue-500 rounded-full px-1.5">
                    {carrito.reduce((total, item) => total + item.counter, 0)}
                  </span>
                )}
              </li>
            </div>
          </ul>
        </nav>
      </header>
      <div className="offer flex items-center justify-center mt-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 max-w-[80%] m-auto rounded-md p-5">
        <p className="text-white font-semibold">
          {user.name
            ? `¡${user.name} , aprovéchate de tu 20% de descuento!`
            : "¡Crea una cuenta para disfrutar de nuestros descuentos.!"}
        </p>
      </div>
    </>
  );
}

export default Header;
