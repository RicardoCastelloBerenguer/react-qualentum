import React from "react";

import { useForm } from "react-hook-form";

// Componentes
import FieldInput from "./InputField/FieldInput";

// import TextInput from "../UI/TextInput/TextInput";
import Button from "../UI/Button/Button";

// Icono
import { IoClose } from "react-icons/io5";

// Validaciones
import { yupResolver } from "@hookform/resolvers/yup";

// Hook User
import { useUserAuth } from "../../contexts/UserAuthContext";
import { productSchema } from "../../validations/validations";

const ProductForm = ({
  productToEdit,
  closeModal,
  loading,
  dispatchHandleForm,
}) => {
  const defaultValues = {
    title: productToEdit?.title ? productToEdit.title : "",
    description: productToEdit?.description ? productToEdit.title : "",
    price: productToEdit?.price ? productToEdit.price : null,
    image: productToEdit?.image ? productToEdit.image : "",
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
    mode: "onChange",
    defaultValues,
  });

  const onSubmit = (product) => {
    console.log("first");
    dispatchHandleForm(product);
  };

  return (
    <div className="relative bg-white w-full max-w-[470px] h-[70%] p-4 rounded-lg flex flex-col">
      <header className="w-full flex justify-between mb-5">
        <span className="text-center font-bold text-xl">
          {productToEdit ? "EDITAR PRODUCTO : " : "NUEVO PRODUCTO"}
        </span>
        <button onClick={closeModal} className="p-1.5 rounded-full bg-gray-100">
          <IoClose />
        </button>
      </header>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
        <header className="w-full flex items-center justify-center"></header>
        <FieldInput
          label="Título Producto"
          name="title"
          register={register}
          errors={errors}
          type="text"
          placeholder="Título Producto ..."
        />
        <FieldInput
          label="Precio Producto"
          name="price"
          register={register}
          errors={errors}
          type="number"
          placeholder="0"
        />
        <FieldInput
          label="Descripción Producto"
          name="description"
          register={register}
          errors={errors}
          type="text"
          placeholder="Descripción Producto ..."
        />
        <FieldInput
          label="Imagen Producto"
          name="image"
          register={register}
          errors={errors}
          type="url"
          placeholder="Imagen Producto ..."
        />
        {/* <TextInput
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
        /> */}
        {!loading ? (
          <Button type="submit" className={"px-5 py-3 rounded-md"}>
            {productToEdit ? "EDITAR PRODUCTO" : "AÑADIR PRODUCTO"}
          </Button>
        ) : (
          <div onClick={() => console.log(loading)}>Loading</div>
        )}
      </form>
    </div>
  );
};

export default ProductForm;
