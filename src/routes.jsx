import App from "./App";
import ProductDetails from "./ProductDetails";
import Sidebar from "./Sidebar";

export const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "product-details",
    element: <ProductDetails />,
  },
];
