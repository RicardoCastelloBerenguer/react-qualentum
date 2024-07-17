import React, { useState } from "react";
import TextInput from "../UI/TextInput/TextInput";
import { IoClose } from "react-icons/io5";
import Button from "../UI/Button/Button";
import useProducts from "../../hooks/api/products";

const AddProductModal = ({ closeModal, productToEdit }) => {
  const { postProduct, editProductById, loading, error } = useProducts();

  const [title, setTitle] = useState(productToEdit?.title || "");
  const [description, setDescription] = useState(
    productToEdit?.description || ""
  );
  const [price, setPrice] = useState(productToEdit?.price || 0);
  const [image, setImage] = useState(productToEdit?.image || "");

  const handleForm = async () => {
    let newProduct = {};
    if (productToEdit) {
      newProduct = {
        ...productToEdit,
        id: productToEdit.id,
        title: title,
        description: description,
        price: price,
        image: image,
      };
    } else {
      newProduct = {
        title: title,
        description: description,
        price: price,
        image: image,
      };
      console.log(newProduct);
    }

    try {
      if (productToEdit) {
        console.log("test");
        await editProductById(newProduct);
      } else await postProduct(newProduct);
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="fixed flex items-center justify-center z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50">
      <div className="relative bg-white w-full max-w-[470px] h-[70%] p-4 rounded-lg flex flex-col">
        <header className="w-full flex justify-between mb-5">
          <span className="text-center font-bold text-xl">
            {productToEdit ? "EDITAR PRODUCTO : " : "NUEVO PRODUCTO"}
          </span>
          <button
            onClick={closeModal}
            className="p-1.5 rounded-full bg-gray-100"
          >
            <IoClose />
          </button>
        </header>
        <section className="flex flex-col gap-1">
          <header className="w-full flex items-center justify-center"></header>
          <TextInput
            placeholder="Título del producto..."
            labelText="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextInput
            placeholder="Descripción del producto..."
            labelText="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextInput
            placeholder="Precio del producto..."
            labelText="Precio"
            type={"number"}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextInput
            placeholder="Url de la imagen del producto..."
            labelText="Imagen"
            type={"url"}
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </section>
        <footer className="flex w-full justify-center mt-auto h-full items-center">
          {!loading ? (
            <Button onClick={handleForm} className={"px-5 py-3 rounded-md"}>
              {productToEdit ? "EDITAR PRODUCTO" : "AÑADIR PRODUCTO"}
            </Button>
          ) : (
            <div onClick={() => console.log(loading)}>Loading</div>
          )}
        </footer>
      </div>
    </section>
  );
};

export default AddProductModal;
