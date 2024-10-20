import React from "react";
import RateStar from "../assets/RateStar";

const RestaurantInformation = ({ data }) => {
  console.log(data);

  return (
    <div>
      {data?.card?.card?.info && (
        <div className="mt-32 w-6/12 m-auto bg-gradient-to-t from-gray-200 pb-5 p-2 rounded-3xl">
          <div className="">
            <h4 className="text-2xl text-gray-800 font-bold">
              {data?.card?.card?.info?.name}
            </h4>
          </div>
          <div className="w-[95%]  m-auto mt-8 border-[1.5px] shadow-sm rounded-3xl bg-white">
            <div>
              <div className="p-4">
                <div className="flex text-gray-900">
                  <span className="inline-block pt-[2px]">
                    <RateStar />
                  </span>
                  <span className="inline-block mx-2 font-bold">
                    {data?.card?.card?.info?.avgRating} ({data?.card?.card?.info?.totalRatingsString})
                  </span>
                  <span className=" text-gray-500">•</span>
                  <span className="ml-2 font-bold">{data?.card?.card?.info?.costForTwoMessage}</span>
                </div>
                <div className="mt-1 underline text-orange-500 text-sm font-bold cursor-pointer">
                  {data?.card?.card?.info?.cuisines?.join(", ")}
                </div>
                <div className="flex mt-1">
                  <div className="mt-2">
                    <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
                    <div className="h-6 w-[1.5px] ml-[0.2rem] bg-gray-300"></div>
                    <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
                  </div>
                  <div>
                    <div className="mx-3">
                      <div className="inline-block text-sm font-bold">
                        Outlet
                      </div>
                      <div className="inline-block mx-2 text-gray-600">
                        {data?.card?.card?.info?.areaName}
                      </div>
                    </div>
                    <div className="mt-2 mx-3 text-sm font-bold lowercase">
                      {data?.card?.card?.info?.sla?.slaString}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantInformation;
