import axios from "axios";
import React, { useEffect, useState } from "react";

function Products() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const baseUrl = "https://fakestoreapi.com/products?limit=20";
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(""); // resetting error before fetching
    axios({
      method: "get",
      url: baseUrl,
    })
      .then((response) => {
        setProducts(response.data);
        setError(""); // clearing any prev error
      })
      .catch((err) => {
        setError("Please check your connection and try again");
        console.log(err);
      })
      .finally(() => {
        setLoading(false); // wrapping it in a function
      });
  }, []);

  return (
    <div className="p-2">
      <div className="mt-[100px] pl-5 pr-5">
        <h1 className="font-semibold text-2xl">Products</h1>
      </div>

      <div className="main-products flex flex-wrap gap-5 p-5">
        {loading && (
          <div className="flex justify-center items-center min-h-screen w-full">
            <p className="text-center text-sm text-orange font-semibold">
              Loading...
            </p>
          </div>
        )}
        {error && (
          <div className="flex justify-center items-center min-h-screen w-full">
            <p className="text-center text-sm text-orange font-semibold">
              {error}
            </p>
          </div>
        )}
        {products.map((product) => (
          <div key={product.id}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-5 shopping-card hover:scale-[1.1] transition-all ease-in-out duration-300 cursor-pointer rounded-xl w-fit  hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
              <div className="flex justify-center items-center">
                <img
                  className="w-[80px] h-[80px] "
                  src={product.image}
                  alt=""
                />
              </div>

              <div className="mt-9 flex flex-col gap-3">
                <p className="border uppercase text-center border-lightBabu font-medium bg-lightBabu text-[12px]">
                  {product.category}
                </p>
                <p className="w-[150px] text-ellipsis overflow-hidden whitespace-nowrap">
                  {product.title}
                </p>
                {/* <p className="w-[150px]">{product.title}</p> */}
                <p className="font-bold">${product.price}</p>
                <div className="flex flex-row gap-3">
                  <button className="text-[14px] transition-all duration-300 ease-in-out hover:bg-black font-semibold text-white bg-orange border-white border-[1px] p-2 rounded-xl">
                    Add to Cart
                  </button>
                  <button className="border-orange  p-1 rounded-xl text-[14px]">
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
