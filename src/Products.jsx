import axios from "axios";
import React, { useEffect, useState } from "react";

function Products() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const baseUrl = "https://fakestoreapi.com/products?limit=10";

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
            <div className="border h-[400px] w-fit p-5 flex flex-col">
              <img className="w-[150px]" src={product.image} alt="" />
              <p>{product.category}</p>
              <p className="w-[150px]">{product.title}</p>
              <p>${product.price}</p>
              <div>
                <button>Add to Cart</button>
                <button>Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
