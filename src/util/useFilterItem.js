import React from "react";

const useFilterItem = ({ card }) => {

  const { name, isVeg, price, id, defaultPrice } = card?.info
  filterItem = {
    name: name,
    isVeg: isVeg,
    count: 1,
    price: price / 100 || defaultPrice / 100,
    id: id,
  };

  return filterItem;
};

export default useFilterItem;
