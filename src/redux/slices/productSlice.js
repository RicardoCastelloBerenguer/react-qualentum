// src/redux/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  getProducts,
  getProduct,
  addProduct,
  editProduct,
  deleteProduct,
} from "../../api/ProductsService";

// Estado inicial
const initialState = {
  product: null,
  products: [],
  loading: false,
  error: null,
};

// Thunks asíncronos

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await getProducts();
    return response;
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (productId) => {
    const response = await getProduct(productId);
    return response;
  }
);

export const addNewProduct = createAsyncThunk(
  "products/addNewProduct",
  async (product) => {
    const response = await addProduct(product);
    return response;
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (product) => {
    const response = await editProduct(product);
    return response;
  }
);

export const deleteProductById = createAsyncThunk(
  "products/deleteProductById",
  async (productId) => {
    const response = await deleteProduct(productId);
    return response;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(addNewProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        const index = state.products.findIndex(
          (product) => product.id === action.payload.id
        );
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(deleteProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.filter(
          (product) => product.id !== action.payload.id
        );
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      );
  },
});

export default productSlice.reducer;
