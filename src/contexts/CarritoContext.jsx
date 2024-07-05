// CarritoContext.js
import React, { useState, createContext, useContext, useEffect } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const carritoStorage = JSON.parse(localStorage.getItem("cart"));

    if (carritoStorage) setCarrito(carritoStorage);
  }, []);

  const saveToLocalStorage = (carrito) => {
    localStorage.setItem("cart", JSON.stringify(carrito));
  };

  const agregarAlCarrito = (producto) => {
    let updatedCarrito = {};
    const productInCart = carrito.find((item) => item.id === producto.id);

    if (productInCart) {
      // Si el producto ya existe, incrementa su contador
      updatedCarrito = carrito.map((item) =>
        item.id === producto.id ? { ...item, counter: item.counter + 1 } : item
      );
      setCarrito(updatedCarrito);
    } else {
      producto = { ...producto, counter: 1 };
      updatedCarrito = [...carrito, producto];
      setCarrito(updatedCarrito);
    }

    saveToLocalStorage(updatedCarrito);

    console.log(carrito);
  };

  const quitarDelCarrito = (index) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
  };

  const resetCarrito = () => {
    setCarrito([]);
    saveToLocalStorage([]);
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarAlCarrito, quitarDelCarrito, resetCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  return useContext(CarritoContext);
};
