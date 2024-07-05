import React, { useState, useContext } from "react";
import { CarritoContext } from "./CarritoContext";

export const FilterClothContext = React.createContext();

export const FilterClothProvider = ({ children }) => {
  const [filter, setFilter] = useState("");

  const filterProducts = (newFilter) => {
    setFilter(newFilter);
    // console.log(newFilter);
  };

  return (
    <FilterClothContext.Provider value={{ filter, filterProducts }}>
      {children}
    </FilterClothContext.Provider>
  );
};

export const useFilterCloth = () => {
  return useContext(FilterClothContext);
};
