// CarritoContext.js
import React, { useState, createContext, useContext } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    const productInCart = carrito.find((item) => item.id === producto.id);

    if (productInCart) {
      // Si el producto ya existe, incrementa su contador
      const updatedCarrito = carrito.map((item) =>
        item.id === producto.id ? { ...item, counter: item.counter + 1 } : item
      );
      setCarrito(updatedCarrito);
    } else {
      producto = { ...producto, counter: 1 };
      const newCarrito = [...carrito, producto];
      setCarrito(newCarrito);
    }

    console.log(carrito);
  };

  const quitarDelCarrito = (index) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarAlCarrito, quitarDelCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  return useContext(CarritoContext);
};
