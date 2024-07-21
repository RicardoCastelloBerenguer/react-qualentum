import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../slices/productSlice.js";

const store = configureStore({
  reducer: {
    products: productReducer, // Reducers
  },
  devTools: true,
});

export default store;
