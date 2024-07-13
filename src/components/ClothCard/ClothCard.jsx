/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useCarrito } from "../../contexts/CarritoContext";
import { useUserAuth } from "../../contexts/UserAuthContext";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import Button from "../UI/Button/Button";
import useProducts from "../../hooks/api/products";
import AddProductModal from "../Modals/AddProductModal";

function ClothCard({ clothProduct, handleEdit }) {
  const { deleteProductById } = useProducts();
  const { isLoggedIn, user } = useUserAuth();
  const { carrito, agregarAlCarrito } = useCarrito();
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    agregarAlCarrito(clothProduct);
  };

  return (
    <>
      <div
        className="flex flex-col border rounded-lg bg-white w-full h-full items-center
      "
      >
        <CiHeart className="ml-auto mr-2 my-2" size={25} />
        <div className="w-[60%] h-[60%]">
          <Link to={`/products/${clothProduct.id}`} state={clothProduct}>
            <img
              className="rounded-lg object-contain w-full h-full transition duration-150
               hover:scale-105"
              src={clothProduct.image}
              alt="cloth image"
            />
          </Link>
        </div>

        <h3 className="text-center font-semibold py-4 mt-8">
          {clothProduct.title.length > 20
            ? clothProduct.title.slice(0, 20)
            : clothProduct.title}
          {clothProduct.title.length > 20 ? "..." : ""}
        </h3>

        <Button onClick={handleAddToCart} className={"bg-[#845df3] mb-4"}>
          Comprar
        </Button>
        {isLoggedIn && user.isAdmin && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 py-4">
            <Button
              onClick={() => setShowModal(true)}
              className={"bg-[#b053eb]"}
            >
              Editar
            </Button>
            <Button
              onClick={() => deleteProductById(clothProduct.id)}
              className={"bg-red-500"}
            >
              Eliminar
            </Button>
          </div>
        )}
      </div>
      {showModal && (
        <AddProductModal
          productToEdit={clothProduct}
          closeModal={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default ClothCard;
