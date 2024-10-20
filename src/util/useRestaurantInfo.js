import React, { useEffect, useState } from "react";
import constant from "./constant";

const useRestaurantInfo = ({ id }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    const res =await fetch(constant.RESTAURANT_INFO+id)
    const json =await res.json()
    setData(json)
  }

  return data;

};

export default useRestaurantInfo;
