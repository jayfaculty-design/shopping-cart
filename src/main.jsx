import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import SidebarProvider from "./Context/SideBarContext";
import CartContextProvider from "./Context/CartContext";
import ProductProvider from "./Context/ProductContext";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductProvider>
      <SidebarProvider>
        <CartContextProvider>
          <RouterProvider router={router} />
        </CartContextProvider>
      </SidebarProvider>
    </ProductProvider>
  </StrictMode>
);
