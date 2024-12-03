import App from "./App";
import ProductDetails from "./ProductDetails";
import Products from "./Products";
import Sidebar from "./Sidebar";

export const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "product-details/:id",
    element: <ProductDetails />,
  },
];
