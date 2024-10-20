import React from "react";

const useFilterRestaurant = (RestaurantData) => {
  const { name, id, cloudinaryImageId, areaName } =
    RestaurantData?.card?.card?.info;

  const filterdata = {
    name: name,
    id: id,
    imageId: cloudinaryImageId,
    areaName: areaName,
  };

  return filterdata;
};

export default useFilterRestaurant;
