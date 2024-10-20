import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCount, addItem, minusCount } from "../util/cartSlice";
import useFilterRestaurant from "../util/useFilterRestaurant";
import useFilterItem from "../util/useFilterItem";

const AddBtn = ({ data, restro }) => {
  
  const dispatch = useDispatch();
  const itemCount = useSelector((store) =>
    store?.cart?.items?.data?.cartItems.find(
      (item) => item.id === data?.card?.info?.id
    )
  );
  const [count, setCount] = useState(null);

  useEffect(() => {
    setCount(itemCount?.count);
  }, [itemCount]);

  const handleAddItem = () => {
    const itemData = useFilterItem(data);
    const resInfo = useFilterRestaurant(restro?.data?.cards[2]);
    dispatch(addItem({ data: itemData, restro: resInfo }));
    //  console.log(data.card.info.id);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg  cursor-pointer">
      {count ? (
        <div className="text-green-600 font-extrabold  flex justify-betweenb text-md">
          <div className="hover:bg-gray-300 rounded-l-lg">
            <button
              className="px-4 py-[10px]"
              onClick={() => dispatch(minusCount({ id: data?.card?.info?.id }))}
            >
              −
            </button>
          </div>
          <div className=" px-4 py-[10px]">{itemCount?.count}</div>
          <div>
            <button
              className="px-4 py-[10px] hover:bg-gray-300 font-extrabold rounded-r-lg"
              onClick={() => {
                dispatch(addCount({ id: data?.card?.info?.id }));
              }}
            >
              +
            </button>
          </div>
        </div>
      ) : (
        <button
          className="text-green-600 font-extrabold hover:bg-gray-300 py-[10px] px-12 rounded-lg"
          onClick={() => {
            handleAddItem();
          }}
        >
          ADD
        </button>
      )}
    </div>
  );
};

export default AddBtn;
