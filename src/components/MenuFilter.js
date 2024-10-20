import React from "react";
import { Veg, NoneVeg } from "../assets/vegAndNone";

export const VegFilter = () => {
  return (
    <div className="border border-gray-300 mt-5 w-fit py-1 px-4 rounded-3xl">
      <div class="relative inline-block">
        <input
          id="veg"
          type="checkbox"
          class="peer appearance-none w-10 h-3 bg-gray-300 border border-gray-300 rounded-full checked:bg-green-600 checked:border-green-600 cursor-pointer transition-colors duration-300"
        />
        <label
          for="veg"
          class="mt-[2px] absolute top-0 left-0 w-5 h-5 rounded-full border border-slate-300 shadow transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-green-600 cursor-pointer"
        >
          <svg aria-hidden="true" height="20" width="20">
            <Veg />
            <use xlinkHref="#vegVeg20"></use>
          </svg>
        </label>
      </div>
    </div>
  );
};

export const NoneVegFilter = () => {
  return (
    <div className="border border-gray-300 mt-5 w-fit py-1 px-4 rounded-3xl">
      <div class="relative inline-block">
        <input
          id="nonVeg"
          type="checkbox"
          class="peer appearance-none w-10 h-3 bg-gray-300 border border-gray-300 rounded-full checked:bg-red-600 checked:border-red-600 cursor-pointer transition-colors duration-300"
        />
        <label
          for="nonVeg"
          class="mt-[2px] absolute top-0 left-0 w-5 h-5 rounded-full border border-slate-300 shadow transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-red-600 cursor-pointer"
        >
          <svg
            aria-hidden="true"
            height="20"
            width="20"
          >
            <NoneVeg />
            <use xlinkHref="#nonvegNonVeg20"></use>
          </svg>
        </label>
      </div>
    </div>
  );
};
