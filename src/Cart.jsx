import { faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Context/CartContext";

function Cart({ item }) {
  const { PopFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  return (
    <>
      <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray200 w-full">
        <div className="w-full min-h-[150px] flex items-center gap-x-4">
          <Link to={`/product-details/${item.id}`}>
            <img className="max-w-[80px]" src={item.image} alt="" />
          </Link>
          <div className="flex flex-col w-full">
            <div className="flex justify-between mb-2">
              <Link
                to={`/product-details/${item.id}`}
                className="max-w-[240px] text-sm font-medium capitalize hover:underline"
              >
                {item.title}
              </Link>
              <Link>
                <h1
                  onClick={() => PopFromCart(item.id)}
                  className="text-lightBlack underline text-sm"
                >
                  Remove
                </h1>
              </Link>
            </div>
            <div className="flex gap-5 justify-between text-sm">
              <div className="flex gap-7">
                <div className="flex gap-4">
                  <button
                    onClick={() => decreaseAmount(item.id)}
                    className="flex items-center justify-center bg-orange p-1 w-[20px] h-[20px] text-white rounded-[50%]"
                  >
                    -
                  </button>
                  <h1>{item.amount}</h1>
                  <button
                    onClick={() => increaseAmount(item.id)}
                    className="flex items-center justify-center bg-orange p-1 w-[20px] h-[20px] text-white rounded-[50%]"
                  >
                    +
                  </button>
                </div>

                <div>
                  <h1 className="text-lightBlack">$ {item.price}</h1>
                </div>
              </div>
              <div className="font-medium">{`$${parseFloat(
                item.price * item.amount
              ).toFixed(2)}`}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
