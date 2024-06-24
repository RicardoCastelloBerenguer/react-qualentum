/* eslint-disable react/prop-types */
import React from "react";

function ClothCard({ clothProduct }) {
  return (
    <>
      <div className="clothing-card inline-flex flex-col max-w-[300px] min-h-[600px] border border-[0.5px] ">
        <header className="overflow-hidden max-w[300px] max-h-[200px]">
          <img
            className="w-[300px] h-[300px] "
            src={clothProduct.image}
            alt="cloth image"
          />
        </header>
        <div className="mx-2 h-full flex flex-col">
          <h3 className="font-semibold text-lg ">{clothProduct.title}</h3>

          <div className="flex items-center h-full">
            <p className="text-[10px] flex-grow">{clothProduct.description}</p>
          </div>

          <span className="text-blue-600 font-semibold ">
            {clothProduct.price ? `$${clothProduct.price}` : ""}
          </span>
        </div>
      </div>
    </>
  );
}

export default ClothCard;
