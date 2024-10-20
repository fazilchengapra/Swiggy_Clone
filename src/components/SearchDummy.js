import React from "react";
import SearchIcon from "../assets/searchIcon";

const SearchDummy = () => {
  return (
    <div className="mt-3 w-full h-12 bg-[#f2f2f3] rounded-xl relative cursor-pointer">
      <SearchIcon />
      <svg
        aria-hidden="true"
        height="20"
        width="20"
        style={{ position: "absolute", right: "28px", marginTop: "12px" }}
      >
        <use xlinkHref="#search20" />
      </svg>
      <div className="flex leading-10 justify-center items-center text-gray-600 font-semibold">
        Search for dishes
      </div>
    </div>
  );
};

export default SearchDummy;
