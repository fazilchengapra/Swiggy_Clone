import { useEffect, useState } from "react";
import { EXPLORE_RESTAURANTS } from "./constant";

const useRestaurantExplore = (menu_category_id, tag) => {
    
  const [restaurantList, setRestaurantList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(EXPLORE_RESTAURANTS(menu_category_id, tag));
    const data = await res.json();
    
    setRestaurantList(data);
  };
  return restaurantList;
};

export default useRestaurantExplore;
