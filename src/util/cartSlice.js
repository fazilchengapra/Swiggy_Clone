import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {
      data: {
        cartItems: [],
        restaurant: {},
        cartItemsCount: 0,
        totalPay: 0,
      },
    },
    cartCount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const { data, restro } = action.payload;

      state.items.data.cartItems.push(data);
      state.items.data.restaurant = restro;
      state.items.data.cartItemsCount++;
      state.items.data.totalPay += data.price;
    },
    addCount: (state, action) => {
      const { id } = action.payload;

      const existingItem = state.items.data.cartItems.find(
        (item) => item.id === id
      );
      if (existingItem) {
        existingItem.count++;
        state.items.data.cartItemsCount++;
        state.items.data.totalPay += existingItem.price;
      }
    },
    minusCount: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.data.cartItems.find(
        (item) => item.id === id
      );
      if (existingItem) {
        if (existingItem.count > 1) {
          existingItem.count--;
          state.items.data.cartItemsCount--;
          state.items.data.totalPay -= existingItem.price;
        } else {
          state.items.data.cartItemsCount--;
          state.items.data.totalPay -= existingItem.price;
          state.items.data.cartItems = state.items.data.cartItems.filter(
            (item) => item.id !== id
          );
          
        }
      }
    },
  },
});

export const { addItem, addCount, minusCount } = cartSlice.actions;
export default cartSlice.reducer;
