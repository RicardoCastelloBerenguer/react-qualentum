import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ProductsView from "../views/products/index.jsx";
import AuthView from "../views/auth/index.jsx";
import CartView from "../views/cart/index.jsx";
import ErrorView from "../views/error/index.jsx";
import AuthenticatedProtection from "./ProtectedRoutes/AuthenticatedProtection.jsx";
import ProductDetails from "../views/products/[id]";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorView />,
    children: [
      {
        path: "/",
        element: <ProductsView />,
      },
      {
        path: "/cart",
        element: (
          <AuthenticatedProtection>
            <CartView />
          </AuthenticatedProtection>
        ),
      },
      {
        path: "/products/:id",
        element: (
          <AuthenticatedProtection>
            <ProductDetails />
          </AuthenticatedProtection>
        ),
      },
      {
        path: "/login",
        element: <AuthView />,
      },
    ],
  },
]);

export default router;
