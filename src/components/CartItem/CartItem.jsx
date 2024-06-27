import React from "react";

function CartItem({ item }) {
  return (
    <div className="flex flex-col items-center sm:flex-row gap-6 border-b-2 pb-2 border-black">
      <div className="w-[100px] h-[100px] overflow-hidden border-black border-2 p-1">
        <img
          className="w-full h-full object-cover"
          src={item.image}
          alt="test"
        />
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between sm:gap-8 w-full">
          <h4 className="font-semibold break-words max-w-[70%]">
            {item.title}
          </h4>
          <span className="text-gray-800 font-semibold">${item.price}</span>
        </div>
        <footer className="flex sm:flex-col justify-between p-2 sm:justify-normal">
          <p className="text-gray-500 font-semibold">
            UNIDADES :{" "}
            <span className="text-gray-800 font-bold ">
              {item.counter || "1"}
            </span>
          </p>
          <p className="text-gray-500 font-semibold">
            TOTAL :{" "}
            <span className="text-gray-800 font-bold ">
              ${item.price * item.counter}
            </span>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default CartItem;
