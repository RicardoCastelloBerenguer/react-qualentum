import React from "react";
import CartContainer from "../../components/CartContainer/CartContainer";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <>
      <div className="flex flex-col bg-gray-50 items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
        <p className="text-gray-600">
          Sorry, the page you're looking for doesn't exist.
        </p>

        <div className="mt-4 text-center flex flex-col gap-5">
          <p className="text-gray-600 mb-3">You might want go back to:</p>
          <Link
            to="/"
            className="text-black-500 font-bold text-lg hover:underline border-2 rounded-lg border-black px-3 py-2 hover:bg-blue-500 hover:text-white hover:border-transparent transition-all duration-150"
          >
            Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default index;
