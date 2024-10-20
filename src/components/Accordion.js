import React, { useState } from "react";
import AccordionArrow from "../assets/accordionArrow";
import { ItemNoneVeg, ItemVeg } from "../assets/itemListNoneandVeg";
import ItemListStarIcon from "../assets/itemListStarIcon";
import AddBtn from "./AddBtn";
import { ITEM_LIST_IMG } from "../util/constant";
import ReactShowMoreText from "react-show-more-text";

const Accordion = ({ data, text, show, restro }) => {
  const [showItems, setShowItems] = useState(show);
  return (
    <div className="w-full bg-white">
      <div>
        <div
          className="flex justify-between pl-2 py-5 cursor-pointer"
          onClick={() => setShowItems(!showItems)}
        >
          <div className={`text-${text} font-bold`}>
            {data.title + ` (${data?.itemCards?.length})`}
          </div>
          <div className={`mt-2 ${showItems === true && "rotate-180"}`}>
            <svg aria-hidden="true" height="16" width="16">
              <AccordionArrow />
              <use xlinkHref="#chevronDown16"></use>
            </svg>
          </div>
        </div>
        <div className={`${showItems === false && "hidden"}`}>
          {data?.itemCards.map((e, index) => (
            <div
              key={index}
              className={`p-3 w-full flex ${
                index !== data?.itemCards?.length - 1 ? "border-b-2" : "mb-5"
              }`}
            >
              <div className="w-9/12 mr-5">
                {e?.card?.info?.isVeg === 1 ? (
                  <div>
                    <svg aria-hidden="true" height="16" width="16">
                      <ItemVeg />
                      <use xlinkHref="#vegVeg16"></use>
                    </svg>
                  </div>
                ) : (
                  <div>
                    <svg aria-hidden="true" height="16" width="16">
                      <ItemNoneVeg />
                      <use xlinkHref="#nonvegNonVeg16"></use>
                    </svg>
                  </div>
                )}

                <div className="mt-1 text-lg font-bold text-gray-700">
                  {e?.card?.info?.name}
                </div>
                <div className="font-bold">
                  ₹
                  {e?.card?.info?.price / 100 ||
                    e?.card?.info?.defaultPrice / 100}
                </div>
                {e?.card?.info?.ratings?.aggregatedRating?.rating && (
                  <div className="mt-1 flex">
                    <div className="mt-1 mr-1">
                      <ItemListStarIcon />
                    </div>
                    <div className="text-green-700 text-sm font-bold relative">
                      {e?.card?.info?.ratings?.aggregatedRating?.rating}
                    </div>
                    <div className="text-gray-600 font-semibold relative text-sm">
                      {`(${e?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})`}
                    </div>
                  </div>
                )}
                <div className="text-gray-600">
                  <ReactShowMoreText
                    lines={2}
                    more={
                      <span className="font-bold inline-block cursor-pointer">
                        more
                      </span>
                    }
                    expanded={false}
                    less={false}
                  >
                    {e?.card?.info?.description}
                  </ReactShowMoreText>
                </div>
              </div>
              <div className="w-3/12">
                <div className="relative flex justify-center items-center">
                  <div className="p-2 w-40 h-40 relative flex justify-center items-center">
                    {e?.card?.info?.imageId && (
                      <img
                        src={ITEM_LIST_IMG + e?.card?.info?.imageId}
                        alt=""
                        className="w-full h-full rounded-lg object-cover"
                      />
                    )}

                    <div
                      className="absolute flex justify-center items-center bottom-0 cursor-pointer"
                     
                    >
                      <AddBtn data={e} restro={restro}/>
                    </div>
                  </div>
                </div>
                {e?.card?.info?.addons && (
                  <div className="text-center text-sm text-gray-500">
                    Customisable
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
