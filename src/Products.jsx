import axios from "axios";
import React, { useEffect, useState } from "react";

function Products() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const baseUrl = "https://fakestoreapi.com/products?limit=20";

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
            <div className="shopping-card rounded-xl w-fit p-5 flex flex-col">
              <div>
                <img
                  className="w-[100px] h-[100px] "
                  src={product.image}
                  alt=""
                />
              </div>

              <div className="mt-9 flex flex-col gap-3">
                <p className="border uppercase text-center border-lightBabu font-medium bg-lightBabu text-[12px]">
                  {product.category}
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
