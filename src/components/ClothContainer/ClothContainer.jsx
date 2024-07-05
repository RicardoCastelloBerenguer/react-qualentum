import React from "react";
import productsData from "../../../data.json";
import ClothCard from "../ClothCard/ClothCard";

import { useFilterCloth } from "../../contexts/FilterClothContext";

function ClothContainer() {
  const { filter } = useFilterCloth();
  return (
    <div
      id="card-cloth-container"
      className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 space-x-8 space-y-4 my-6"
    >
      {productsData
        .filter((product) =>
          product.title.toLowerCase().includes(filter.toLowerCase())
        )
        .map((product) => (
          <ClothCard key={product.id} clothProduct={product} />
        ))}
    </div>
  );
}

export default ClothContainer;
