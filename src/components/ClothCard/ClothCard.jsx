/* eslint-disable react/prop-types */
import React from "react";
import { useCarrito } from "../../contexts/CarritoContext";

function ClothCard({ clothProduct }) {
  const { carrito, agregarAlCarrito } = useCarrito();

  const handleAddToCart = () => {
    agregarAlCarrito(clothProduct);
  };

  return (
    <>
      <div className="clothing-card inline-flex flex-col max-w-[300px] min-h-[600px] border border-[0.5px] ">
        <header className="overflow-hidden max-w[300px] max-h-[200px]">
          <img
            className="w-[300px] h-[300px] "
            src={clothProduct.image}
            alt="cloth image"
          />
        </header>
        <div className=" h-full flex flex-col">
          <h3 className="font-semibold text-lg ">{clothProduct.title}</h3>

          <div className="mx-2 flex items-center h-full">
            <p className="text-[10px] flex-grow">{clothProduct.description}</p>
          </div>

          <span className="mx-2 text-blue-600 font-semibold ">
            {clothProduct.price ? `$${clothProduct.price}` : ""}
          </span>

          <button
            onClick={handleAddToCart}
            className="mt-2 bg-blue-600 rounded-md text-gray-300 py-1 text-sm w-full hover:text-white hover:bg-blue-500"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </>
  );
}

export default ClothCard;
