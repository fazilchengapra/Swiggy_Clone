import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import TopRestaurant from "../components/TopRestaurant";
import useApiCall from "../util/useApiCall";
import { Link } from "react-router-dom";
import Restaurant from "../components/Restaurants";

const Home = () => {
  const ApiData = useApiCall();

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(ApiData);
  }, [ApiData]);

  const heroData =
    data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;
  const topRestaurantData =
    data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  const Restaurants = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants

  return (
    <div className="bg-white">
      {/* <NavBar /> */}
      <Hero data={heroData} />
      <TopRestaurant data={topRestaurantData} />
      <Restaurant data={Restaurants}/>
    </div>
  );
};

export default Home;
