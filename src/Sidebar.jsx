import { faArrowRight, faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { SideBarContext } from "./Context/SideBarContext";

function Sidebar() {
  const { isOpen, handleClose } = useContext(SideBarContext);
  return (
    <>
      <div
        className={`${
          isOpen ? "right-0" : "-right-full"
        } transition-all duration-300 ease-in-out side-bar z-[999] bg-white h-[100vh] fixed w-[50%] right-0 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]`}
      >
        <div className="flex justify-between items-center pl-5 pr-5 pb-5 pt-5 ">
          <h1 className="font-semibold">Items(0)</h1>
          <FontAwesomeIcon
            onClick={handleClose}
            className="cursor-pointer bg-orange text-white p-1 w-[15px] h-[15px] rounded-[50%]"
            icon={faArrowRight}
          />
        </div>
        <div className="flex items-center justify-center h-full">
          <h1 className="font-semibold">No items in cart</h1>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
