import React, { useState } from "react";
import { ArtDecoLeft24, ArtDecoRight24 } from "../assets/artDeco";
import SearchDummy from "./SearchDummy";
import { NoneVegFilter, VegFilter } from "./MenuFilter";
import BestSellerBtn from "./BestSellerBtn";

const MenuHead = () => {
  const [bestSeller, setBestSeller] = useState(false)
  return (
    <div className="mt-8 w-6/12 m-auto bg-gradient-to-t border-b-2 pb-7">
      <div className="flex items-center justify-center">
        <div>
          <svg
            aria-hidden="true"
            height="24"
            width="24"
            fill="black"
            stroke="black"
          >
            <ArtDecoLeft24 />
            <use xlinkHref="#artDecoLeft24" />
          </svg>
        </div>
        <div className="mx-1 text-sm font-semibold text-gray-600 tracking-[.2rem]">
          MENU
        </div>
        <div>
          <svg
            aria-hidden="true"
            height="24"
            width="24"
            fill="black"
            stroke="black"
          >
            <ArtDecoRight24 />
            <use xlinkHref="#artDecoRight24" />
          </svg>
        </div>
      </div>
      <div className="cursor-pointer">
        <SearchDummy />
      </div>
      <div className="flex">
        <div className="mx-2 cursor-pointer">
          <VegFilter />
        </div>
        <div className="cursor-pointer">
          <NoneVegFilter className="mx-2" />
        </div>
        <div className="mx-2 cursor-pointer" onClick={() => setBestSeller(!bestSeller)}>
          <BestSellerBtn status={bestSeller}/>
        </div>
      </div>
    </div>
  );
};

export default MenuHead;
