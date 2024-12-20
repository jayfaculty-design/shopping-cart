import React, { useContext, useState, useEffect } from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SideBarContext } from "./Context/SideBarContext";
import { Link } from "react-router-dom";
import { CartContext } from "./Context/CartContext";

function NavBar() {
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  const { itemAmount } = useContext(CartContext);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <div
      className={`${
        isActive ? "bg-babu" : "bg-white"
      } z-[100] transition-all fixed top-0 left-0 w-[100%] flex justify-between pl-5 pr-5 pb-5 pt-5 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]`}
    >
      <Link to="/">
        <h1 className="font-semibold text-lg text-orange">
          shop
          <span className={`${isActive ? "text-white" : "text-babu"}`}>
            Rite
          </span>
        </h1>
      </Link>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-center items-center gap-1 bg-orange p-1 rounded-lg cursor-pointer"
      >
        <FontAwesomeIcon color="white" icon={faCartShopping} />
        <span
          className={`${
            isActive ? "bg-white text-orange" : "border-none text-white"
          } text-[12px]  flex items-center justify-center absolute z-[102] h-[20px] w-[20px] top-[12px] right-[10px] p-1 rounded-[50%] bg-babu`}
        >
          {itemAmount}
        </span>
      </div>
    </div>
  );
}

export default NavBar;
