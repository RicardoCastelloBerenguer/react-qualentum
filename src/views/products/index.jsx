import React, { useState } from "react";
import ClothContainer from "../../components/ClothContainer/ClothContainer";
import Button from "../../components/UI/Button/Button";
import { IoClose } from "react-icons/io5";
import TextInput from "../../components/UI/TextInput/TextInput";
import { useUserAuth } from "../../contexts/UserAuthContext";
import AddProductModal from "../../components/Modals/AddProductModal";

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const { user } = useUserAuth();

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <header className="w-full flex items-center justify-center max-w-[30%] m-auto">
        {user.isAdmin && (
          <Button
            onClick={() => setShowModal(true)}
            className={"rounded-md w-full hover:scale-105"}
          >
            Añadir Producto
          </Button>
        )}
      </header>
      <ClothContainer></ClothContainer>;
      {showModal && <AddProductModal closeModal={() => setShowModal(false)} />}
    </>
  );
};

export default Index;
