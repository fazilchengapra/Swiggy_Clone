import React, { useEffect, useState } from "react";
import DeliveryAddress from "../components/DeliveryAddress";
import Payment from "../components/Payment";

import CartItemList from "../components/CartItemList";
import { useSelector } from "react-redux";
import constant from "../util/constant";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartData = useSelector((store) => store.cart.items.data);
  const [cartItem, setCartItem] = useState(cartData);

  useEffect(() => {
    setCartItem(cartData);
  }, [cartData]);

  return (
    <div className=" bg-gray-200 h-dvh">
      <div className="pt-32">
        <div className=" pl-52 pr-48 relative flex">
          <div className="w-8/12">
            <div>
              <DeliveryAddress />
            </div>
            <div>
              <Payment />
            </div>
          </div>
          <div className="w-4/12 h-auto ml-5 bg-white">
            <div>
              <button>
                <Link to={"/resto/" + cartData.restaurant.id}>
                  <div className="flex pl-8 py-6">
                    <div className="h-[52px] w-[52px]">
                      <img
                        src={
                          constant.CART_RESTAURANT_IMG +
                          cartData.restaurant.imageId
                        }
                        alt=""
                      />
                    </div>
                    <div className="pl-1">
                      <div className="ml-2 font-semibold text-start">
                        {cartData.restaurant.name}
                      </div>
                      <div className="text-[12px] m-auto text-start pl-3 text-gray-500">
                        {cartData.restaurant.areaName}
                      </div>
                      <div className="ml-3 mt-1 h-[3px] w-10 bg-black"></div>
                    </div>
                  </div>
                </Link>
              </button>
            </div>
            <div className="overflow-y-scroll overflow-x-hidden h-96">
              <div className="pl-8">
                {cartData.cartItems.map((e) => (
                  <div className="pb-2">
                    <CartItemList item={e} />
                  </div>
                ))}
              </div>
            </div>
            <div className="border">
              <div className="flex justify-between p-5 font-semibold">
              <div>TO PAY</div>
              <div>{'₹'+cartItem.totalPay}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
