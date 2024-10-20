import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";


const DeliveryAddress = () => {
  return (
    <div className=" bg-white shadow-sm pb-16">
      <div className="mx-8">
        <div className="pt-8 text-[#282c3f] text-lg font-semibold">
          Add a delivery address
        </div>
        <div className="text-gray-500 font-normal">
          You seem to be in the new location
        </div>
        <div className="absolute top-6 left-44 border shadow-2xl bg-white">
          <div className="px-3 py-2">
            <FontAwesomeIcon icon={faLocationDot} size="2x" color="#282c3f" />
          </div>
        </div>
        <div className="h-[73%] border border-dashed border-gray-400 absolute top-[77px] left-[200px]"></div>
        <div className="mt-10 w-6/12 border hover:shadow-lg cursor-pointer">
          <div className="py-5 px-16 pb-10">
            <div className="font-semibold text-[#282c3f]">Add new Address</div>
            <div className="text-xs mt-1 text-gray-400">
              W7J8+FWV, Valummel, Kochi, Kerala 682005, India
            </div>
            <div className="">
              <button className="mt-10 border border-[#60b246] py-2 px-8">
                <div className="text-[13px] font-bold text-[#60b246]">
                  ADD NEW
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddress;
