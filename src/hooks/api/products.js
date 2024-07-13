import React, { useEffect, useState } from "react";
import {
  getProducts,
  getProduct,
  addProduct,
  editProduct,
  deleteProduct,
} from "../../api/ProductsService";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  };

  const fetchProductById = async (id) => {
    setLoading(true); // Indicamos que estamos cargando los datos

    try {
      const data = await getProduct(id);
      setProduct(data); // Actualizamos el estado con el producto obtenido
      setLoading(false); // Finalizamos la carga
    } catch (err) {
      setError(err.message); // Manejamos el error en caso de falla
      setLoading(false); // Finalizamos la carga
    }
  };

  const postProduct = async (newProduct) => {
    setLoading(true);
    try {
      const data = await addProduct(newProduct);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const editProductById = async (productEdited) => {
    setLoading(true);
    try {
      const data = await editProduct(productEdited);
      fetchProducts();
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const deleteProductById = async (id) => {
    setLoading(true);
    try {
      const data = await deleteProduct(id);
      fetchProducts();
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return {
    fetchProducts,
    fetchProductById,
    postProduct,
    editProductById,
    deleteProductById,
    products,
    product,
    loading,
    error,
  };
};

export default useProducts;
