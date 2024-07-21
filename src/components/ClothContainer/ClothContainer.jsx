import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/slices/productSlice";
// import productsData from "../../../data/db.json";
import ClothCard from "../ClothCard/ClothCard";

// CUSTOM HOOKS
import { useFilterCloth } from "../../contexts/FilterClothContext";
import useProducts from "../../hooks/api/products";
import AddProductModal from "../Modals/AddProductModal";

import { ImSpinner2 } from "react-icons/im";

function ClothContainer() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);

  const { filter } = useFilterCloth();

  // const { products, fetchProducts, loading } = useProducts();

  useEffect(() => {
    // fetchProducts();
    dispatch(fetchProducts());
    console.log(loading);
  }, [dispatch]);

  return (
    <>
      {!loading ? (
        <div
          id="card-cloth-container"
          className="grid px-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 my-6 w-full justify-items-center gap-5"
        >
          {products
            .filter((product) =>
              product.title.toLowerCase().includes(filter.toLowerCase())
            )
            .map((product) => (
              <ClothCard key={product.id} clothProduct={product} />
            ))}
        </div>
      ) : (
        <ImSpinner2
          className="animate-spin w-full mt-20"
          size={50}
          color="#975af6"
        />
      )}
    </>
  );
}

export default ClothContainer;
