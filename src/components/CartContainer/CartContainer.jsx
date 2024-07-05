import React from "react";
import CartItem from "../CartItem/CartItem";
import { useCarrito } from "../../contexts/CarritoContext";
function CartContainer() {
  const { carrito, resetCarrito } = useCarrito();
  return (
    <div className="flex flex-col items-center gap-5 justify-center">
      <span className="text-3xl font-semibold p-5">Carrito de Compras</span>
      <div className="flex flex-col gap-8">
        {carrito.map((itemCart) => (
          <CartItem key={itemCart.id} item={itemCart}></CartItem>
        ))}
      </div>
      <div className="flex justify-between gap-10 sm:w-[586px]">
        <button
          disabled={carrito.length > 0 ? false : true}
          onClick={() => {
            alert("Redirigiendo a compra de artículos");
            resetCarrito();
          }}
          className={`${
            carrito.length > 0
              ? "hover:cursor-pointer"
              : "hover:cursor-not-allowed"
          } bg-gradient-to-r md:min-w-[155px] from-indigo-500 via-purple-500 to-pink-500 font-semibold text-lg text-white py-2.5 px-10 rounded-lg transition-all duration-200 hover:scale-105`}
        >
          Comprar
        </button>
        <button
          onClick={resetCarrito}
          className={` ${
            carrito.length > 0
              ? "hover:cursor-pointer"
              : "hover:cursor-not-allowed"
          } bg-red-400 md:min-w-[155px] font-semibold text-lg text-white py-2.5 px-10 rounded-lg transition-all duration-200 hover:scale-105`}
        >
          Borrar
        </button>
      </div>
    </div>
  );
}

export default CartContainer;
