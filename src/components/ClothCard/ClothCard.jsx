/* eslint-disable react/prop-types */
import React from "react";
import { useCarrito } from "../../contexts/CarritoContext";
import { useUserAuth } from "../../contexts/UserAuthContext";
import { Link } from "react-router-dom";

function ClothCard({ clothProduct }) {
  const { isLoggedIn, user } = useUserAuth();
  const { carrito, agregarAlCarrito } = useCarrito();

  const handleAddToCart = () => {
    agregarAlCarrito(clothProduct);
  };

  return (
    <>
      <div className="clothing-card flex-col max-w-[300px] border  ">
        <div className="overflow-hidden flex-grow max-w[300px] max-h-[200px]">
          <Link to={`/products/${clothProduct.id}`} state={clothProduct}>
            <img
              className="w-[300px] h-[300px] "
              src={clothProduct.image}
              alt="cloth image"
            />
          </Link>
        </div>

        <div className="flex flex-col h-auto justify-between">
          <div className="flex flex-col flex-grow">
            <h3 className="font-semibold text-lg ">{clothProduct.title}</h3>

            <span className="mx-2 text-blue-600 font-semibold ">
              {clothProduct.price ? `$${clothProduct.price}` : ""}
            </span>
          </div>

          <button
            disabled={!isLoggedIn}
            onClick={handleAddToCart}
            className={`${
              isLoggedIn ? "hover:cursor-pointer" : "hover:cursor-not-allowed"
            } mt-2 bg-blue-600 rounded-md text-gray-300 py-1 text-sm w-full hover:text-white hover:bg-blue-500`}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </>
  );
}

export default ClothCard;
