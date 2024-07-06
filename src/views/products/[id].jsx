import React, { useEffect, useRef } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const ProductId = () => {
  const { id } = useParams();
  const location = useLocation();
  const maxRating = useRef(5);
  const product = location.state || { product: null };

  if (!product) {
    console.log(location);
    return (
      <>
        <div>Loading</div>
      </>
    );
  } else console.log(location);

  return (
    <>
      <div className="m-5 my-10 ">
        <header>
          <nav>
            <ul className="flex gap-2 text-gray-400 text-sm">
              <li className="hover:underline">
                <Link to={"/"} state={product}>
                  Products
                </Link>
              </li>
              <span>/</span>
              <li className="hover:underline">
                <span className="hover:cursor-pointer">
                  {product.title.slice(0, 20)}...
                </span>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex gap-6 mt-5">
          <div className="grid grid-cols-2 gap-5 w-[60%] bg-white border-2 px-4">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div className="flex flex-col gap-8">
            <header className="flex flex-col gap-2">
              <span>Unlimited Drop</span>
              <h3 className="font-semibold">{product.title}</h3>
              <div className="flex gap-0.5">
                {Array.from({ length: product.rating.rate }, (_, index) => (
                  <FaStar size={10} key={index} />
                ))}
              </div>
              <span className="font-semibold">${product.price}</span>
            </header>
            <div className="flex flex-col gap-4">
              <span className="text-sm text-gray-500">
                Color : <span className="font-semibold text-black">Black</span>
              </span>
              <div className="flex gap-2">
                <div className="bg-blue-400 rounded-full border border-black p-2 min-w-[20px] min-h-[20px]"></div>
                <div className="bg-black rounded-full border border-black p-2 min-w-[20px] min-h-[20px]"></div>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-3">
              <p className="text-sm text-gray-500">
                Size : <span className="font-semibold text-black">Medium</span>
              </p>
              <div className="flex gap-2 flex-wrap">
                <button className="w-20 px-6 py-1.5 bg-black text-white text-sm border border-transparent hover:border-black hover:bg-transparent hover:text-black transition duration-200">
                  XS
                </button>
                <button className="w-20 px-6 py-1.5 bg-black text-white text-sm border border-transparent hover:border-black hover:bg-transparent hover:text-black transition duration-200">
                  S
                </button>
                <button className="w-20 px-6 py-1.5 bg-transparent text-black text-sm border border-black hover:border-transparent hover:bg-black hover:text-white transition duration-200">
                  M
                </button>
                <button className="w-20 px-6 py-1.5 bg-black text-white text-sm border border-transparent hover:border-black hover:bg-transparent hover:text-black transition duration-200">
                  L
                </button>
                <button className="w-20 px-6 py-1.5 bg-black text-white text-sm border border-transparent hover:border-black hover:bg-transparent hover:text-black transition duration-200">
                  XL
                </button>
              </div>
            </div>
            <button className="w-full rounded-md bg-black text-white font-semibold text-sm p-3 mt-5 transition-all duration-200 hover:scale-105">
              Añadir Al Carrito
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default ProductId;
