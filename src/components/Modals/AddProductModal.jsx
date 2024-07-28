import React, { useState } from "react";
import TextInput from "../UI/TextInput/TextInput";
import { IoClose } from "react-icons/io5";
import Button from "../UI/Button/Button";
import useProducts from "../../hooks/api/products";

import { useSelector, useDispatch } from "react-redux";
import { addNewProduct, updateProduct } from "../../redux/slices/productSlice";
import ProductForm from "../Forms/ProductForm";

const AddProductModal = ({ closeModal, productToEdit }) => {
  // const { postProduct, editProductById, loading, error } = useProducts();

  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  const handleForm = async (product) => {
    console.log(product);
    let newProduct = {};
    if (productToEdit) {
      newProduct = {
        ...productToEdit,
        id: productToEdit.id,
        title: product.title,
        description: product.description,
        price: product.price,
        image: product.image,
      };
    } else {
      newProduct = {
        title: product.title,
        description: product.description,
        price: product.price,
        image: product.image,
      };
      console.log(newProduct);
    }

    try {
      if (productToEdit) {
        // console.log("test");
        await dispatch(updateProduct(newProduct));
      } else await dispatch(addNewProduct(newProduct));
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="fixed flex items-center justify-center z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50">
      <ProductForm
        productToEdit={productToEdit}
        dispatchHandleForm={handleForm}
        closeModal={closeModal}
      />
    </section>
  );
};

export default AddProductModal;
