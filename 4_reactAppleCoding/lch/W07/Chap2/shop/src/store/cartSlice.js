import { createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    addCart(state, action) {
      state.push(action.payload);
    },
    increaseProduct(state, action) {
      let index = state.findIndex((element) => element.id == action.payload);
      state[index].count += 1;
    },
  },
});

export let { addCart, increaseProduct } = cart.actions;

export default cart;
