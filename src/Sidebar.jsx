import { faArrowRight, faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { SideBarContext } from "./Context/SideBarContext";
import { CartContext } from "./Context/CartContext";
import Cart from "./Cart";

function Sidebar() {
  const { isOpen, handleClose } = useContext(SideBarContext);
  const { cart, emptyCart } = useContext(CartContext);
  return (
    <>
      <div
        className={`${
          isOpen ? "right-0" : "-right-full"
        } transition-all duration-300 ease-in-out side-bar z-[999] bg-white h-[100vh] fixed md:w-[40%] w-[100%]  shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]`}
      >
        <div className="flex justify-between items-center pl-5 pr-5 pb-5 pt-5 ">
          <h1 className="font-semibold">Items(0)</h1>
          <FontAwesomeIcon
            onClick={handleClose}
            className="cursor-pointer bg-orange text-white p-1 w-[15px] h-[15px] rounded-[50%]"
            icon={faArrowRight}
          />
        </div>
        <div className="">
          {cart.map((item) => {
            return (
              <>
                <Cart item={item} key={item.id} />
              </>
            );
          })}
        </div>
        <div className="flex bg-white flex-col gap-4 p-10 fixed md:w-[40%] border-lightWhite w-[100%] right-0 bottom-0 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <h1>Estimated total</h1>
              <h1 className="text-orange font-semibold">$100</h1>
            </div>
            <p onClick={emptyCart} className="underline cursor-pointer">
              Clear total
            </p>
          </div>
          <button className="bg-orange p-2 text-white text-sm font-semibold rounded-full">
            Continue to checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
