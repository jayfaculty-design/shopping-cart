import React from "react";
import { Link } from "react-router-dom";

function Top() {
  return (
    <div className="md:items-center lg:items-center mt-[70px] gap-1 pl-5 pr-5 bg-lightBabu w-full flex flex-col justify-center h-[300px] max-h-[400px]">
      <h1 className="b-friday font-bold">Black Friday Sales</h1>

      <p className="b-friday border border-orange bg-orange text-white w-fit p-2 rounded-full">
        Up to 40% OFF
      </p>

      <Link className="bg-black w-fit p-2 relative mt-3 text-white" to="/">
        Check Out
      </Link>
    </div>
  );
}

export default Top;
