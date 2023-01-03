import { createSlice } from "@reduxjs/toolkit";

export let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 1, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    increaseQuantity(state, action) {
      let cart = state.find((c) => c.id === action.payload);
      cart.count += 1;
    },
    addCart(state, action) {
      return (state = [...state, action.payload]);
    },
  },
});

// 2. action으로 밖으로 노출
export let { increaseQuantity, addCart } = cart.actions;
