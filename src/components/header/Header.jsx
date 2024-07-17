import { useState } from "react";
import React from "react";

function Header({ onChangeFilter }) {
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
          <ul className="flex gap-5 bg-[#333333] text-white px-3 py-4">
            <div className="flex flex-grow-0 gap-5">
              <li className="nav-element">
                <a className="font-bold" href="#">
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
          </ul>
        </nav>
      </header>
      <div className="offer flex items-center justify-center mt-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 max-w-[80%] m-auto rounded-md p-5">
        <p className="text-white font-semibold">
          ¡20% de descuento para nuevos clientes!
        </p>
      </div>
    </>
  );
}

export default Header;
