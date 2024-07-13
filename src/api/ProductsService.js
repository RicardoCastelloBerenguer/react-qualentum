import axiosInstance from "../axios/axiosInstance";

export const getProduct = async (id) => {
  try {
    const response = await axiosInstance.get(`/products/${id}`);
    // console.log(response.data);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const getProducts = async () => {
  try {
    const response = await axiosInstance.get("/products");
    // console.log(response.data);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const addProduct = async (newProduct) => {
  try {
    const response = await axiosInstance.post("/products", newProduct);
    // console.log(response.data);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const editProduct = async (updatedProduct) => {
  try {
    const response = await axiosInstance.put(
      `/products/${updatedProduct.id}`,
      updatedProduct
    );
    // console.log(response.data);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await axiosInstance.delete(`/products/${id}`);
    // console.log(response.data);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
