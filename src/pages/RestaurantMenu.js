import React, { useEffect, useState } from "react";
import RestaurantInformation from "../components/RestaurantInformation.js";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../util/useRestaurantInfo.js";
import MenuHead from "../components/MenuHead.js";
import TopPicks from "../components/TopPicks.js";
import Accordion from "../components/Accordion.js";
import NestedAccordion from "../components/NestedAccordion.js";

const RestaurantMenu = () => {
  const param = useParams();
  const [data, setData] = useState([]);
  const res = useRestaurantInfo(param);

  useEffect(() => {
    setData(res);
  }, [res]);

  console.log(data);

  return (
    <div>
      {data && (
        <div className="bg-white">
          {data?.data?.cards && (
            <div>
              <div>
                <RestaurantInformation data={data?.data?.cards[2]} />
              </div>
              <div>
                <MenuHead />
              </div>
              <div>
                {data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
                  ?.cards[1]?.card?.card?.title === "Top Picks" && (
                  <TopPicks
                    data={
                      data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
                        ?.cards[1]?.card?.card
                    }
                    restro={res}
                  />
                )}
              </div>
              <div className="w-6/12 m-auto mt-10">
                <div className="">
                  {data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
                    (e) => {
                      return (
                        <div>
                          {e.card?.card?.["@type"] ===
                            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" && (
                            <div className="bg-gray-200 pt-3">
                              <Accordion
                                data={e?.card?.card}
                                text={"lg"}
                                show={true}
                                restro={res}
                              />
                            </div>
                          )}
                          {e.card?.card?.["@type"] ===
                            "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" && (
                            <div className="bg-gray-200 pt-3">
                              <NestedAccordion
                                data={e.card?.card}
                                restro={res}
                              />
                            </div>
                          )}
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;
