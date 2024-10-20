import React from "react";
import CloseIcon from "../assets/closeIcon";

const BestSellerBtn = ({ status }) => {
  console.log(status);

  return (
    <div
      className={`mt-5 py-[5px] px-3 border transition-all duration-500 ease-in-out transform  ${
        status ? "border-gray-800" : "border-gray-300"
      } rounded-3xl`}
    >
      <div className="flex">
        <div className="text-sm font-semibold text-gray-800">Bestseller</div>
        {status && (
          <div className="mx-2 py-1">
            <svg aria-hidden="true" height="13" width="13">
              <CloseIcon />
              <use xlinkHref="#close12"></use>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default BestSellerBtn;
