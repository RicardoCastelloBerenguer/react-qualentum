import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ProductsView from "../views/products/index.jsx";
import AuthView from "../views/auth/index.jsx";
import CartView from "../views/cart/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <ProductsView />,
      },
      {
        path: "/cart",
        element: <CartView />,
      },
      {
        path: "/login",
        element: <AuthView />,
      },
    ],
  },
]);

export default router;
