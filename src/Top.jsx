import React from "react";
import { Link } from "react-router-dom";

function Top() {
  return (
    <div className="bg-lightBabu   py-4 h-[800px]">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col gap-2">
            <div>
              <div className="b-friday flex items-center gap-1 justify-center font-bold text-[24px]">
                <div className="h-[1px] w-7 bg-orange"></div>
                <h1 className="lg:text-[30px]">Black Friday Sales</h1>
              </div>
            </div>

            <p className="b-friday border border-orange bg-orange text-white w-fit p-2 rounded-full">
              Up to 40% OFF
            </p>

            <Link
              className=" w-fit p-2 relative mt-3 text-black underline"
              to="/"
            >
              Check Out
            </Link>
          </div>
        </div>
        <div className="hidden md:flex relative left-28 top-[76px] max-w-[70%]">
          <img src="/images/img.png" className="overflow-hidden" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Top;
