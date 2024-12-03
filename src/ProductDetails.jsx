import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./Context/CartContext";
import { ProductContext } from "./Context/ProductContext";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);

  // get a product based on id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  // if no product found
  if (!product) {
    return (
      <h1 className="h-screen flex justify-center items-center">Loading...</h1>
    );
  }
  return (
    <>
      <NavBar />
      <Sidebar />
      <div className="flex flex-col justify-center items-center h-screen pt-32 pb-12 lg:py-32">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-col lg:flex-row gap-4 flex-1 justify-center items-center mb-8 lg:mb-0">
              <img
                className="max-w-[100px] lg:relative lg:left-0 lg:max-w-60"
                src={product.image}
                alt=""
              />

              <div className="flex gap-2 flex-col justify-center items-center">
                <h1 className="text-[15px] max-w-[300px] mx-auto mb-2 font-medium text-center">
                  {product.title}
                </h1>
                <p className="text-orange font-medium">$ {product.price}</p>
                <p className="max-w-[450px] text-center">
                  {product.description}
                </p>
                <button
                  onClick={() => addToCart(product, product.id)}
                  className="bg-babu p-2 transition-all duration-300 w-[100%] lg:w-fit lg:rounded-sm hover:bg-black rounded-full text-white font-semibold"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
