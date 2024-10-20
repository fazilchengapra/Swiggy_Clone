import React, { useEffect, useState } from "react";
import useRestaurantExplore from "../util/useRestaurantExplore";
import { useParams } from "react-router-dom";
import Card from '../components/Card'

const ExploreRestaurants = () => {
  const { id, tag } = useParams();
  const data = useRestaurantExplore(id, tag);

  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    setRestaurants(data);
  }, [data]);

  const restaurantsInfo = restaurants?.data?.cards?.filter(
    (r) =>
      r.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  );

  console.log(restaurantsInfo);
  

  return (
    <div className=" ">
      {restaurants?.data?.cards[0]?.card?.card?.title && (
        <div className="ml-52 mr-48 mt-36">
          <h1 className="text-4xl font-bold text-gray-800 tracking-wide">
            {restaurants?.data?.cards[0]?.card?.card?.title}
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            {restaurants?.data?.cards[0]?.card?.card?.description}
          </p>
        </div>
      )}
      <div className="ml-[190px] mr-20 flex mt-5 flex-wrap">
        {restaurantsInfo && restaurantsInfo.map(d => <Card data={d?.card?.card}/>)}
      </div>
    </div>
  );
};

export default ExploreRestaurants;
