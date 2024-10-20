import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

const Payment = () => {
  return (
    <div>
      <div className="bg-white shadow-sm mt-7">
        <div className="p-8 text-lg text-gray-500 font-semibold mx-4">Payment</div>
      </div>
      <div className="border border-dashed border-gray-400 absolute top-0 left-[200px]"></div>
      <div className="absolute top-[27rem] left-44 border shadow-2xl bg-white">
        <div className="px-3 py-2 bg-gra">
          <FontAwesomeIcon icon={faCreditCard} size="2x" color="#374151" />
        </div>
      </div>
    </div>
  );
};

export default Payment;
