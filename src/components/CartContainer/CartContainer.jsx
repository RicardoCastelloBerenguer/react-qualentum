import React from "react";
import CartItem from "../CartItem/CartItem";
import { useCarrito } from "../../contexts/CarritoContext";
function CartContainer() {
  const { carrito } = useCarrito();
  return (
    <div className="flex flex-col items-center gap-5 justify-center">
      <span className="text-3xl font-semibold p-5">Carrito de Compras</span>
      <div className="flex flex-col gap-8">
        {carrito.map((itemCart) => (
          <CartItem key={itemCart.id} item={itemCart}></CartItem>
        ))}
      </div>
    </div>
  );
}

export default CartContainer;
