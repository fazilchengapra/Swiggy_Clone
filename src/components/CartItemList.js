import React from "react";
import { NonVeg12, Veg12 } from "../assets/veg_noneVeg12";
import truncate from "truncate";
import { useDispatch } from "react-redux";
import { addCount, minusCount } from "../util/cartSlice";

const CartItemList = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex">
        <div className="mt-2">
          {item.isVeg === 1 ? (
            <svg aria-hidden="true" height="12" width="12">
              <Veg12 />
              <use xlinkHref="#vegVeg12"></use>
            </svg>
          ) : (
            <svg aria-hidden="true" height="12" width="12">
              <NonVeg12 />
              <use xlinkHref="#nonvegNonVeg12"></use>
            </svg>
          )}
        </div>
        <div className="flex w-full">
          <div className="pl-2 mt-1 w-6/12">
            <div className="text-sm">{truncate(item?.name, 18)}</div>
          </div>
          <div className="flex border border-gray-300 py-1 text-[#60b246] font-bold">
            <button onClick={() => dispatch(minusCount({ id: item.id }))}>
              <div className="text-sm mx-1">−</div>
            </button>
            <button>
              <div className="text-sm mx-1">{item.count}</div>
            </button>
            <button onClick={() => dispatch(addCount({ id: item.id }))}>
              <div className="text-sm mx-1">+</div>
            </button>
          </div>
          <div className="w-2/12 ml-7 text-xs mt-2 text-gray-500">
            <div>₹{item.price * item.count}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemList;
