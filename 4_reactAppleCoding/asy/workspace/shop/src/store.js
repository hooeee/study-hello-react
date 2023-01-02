import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice.js";

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

let cart = createSlice({
  name: "cart",
  initialState: [
    {
      id: 0,
      name: "White and Black",
      count: 2,
    },
    {
      id: 2,
      name: "Grey Yordan",
      count: 1,
    },
  ],
  reducers: {
    changeCount(state, action) {
      state.forEach((item) => {
        if (item.id === action.payload) {
          item.count += 1;
        }
      });
    },
    insertCart(state, action) {
      console.log(action.payload.id);
      let findIdx = state.findIndex((item) => {
        return item.id === action.payload.id;
      });
      console.log(findIdx);
      if (findIdx === -1) {
        state.push(action.payload);
      } else {
        state[findIdx].count += 1;
      }
    },
  },
});

export let { changeCount, insertCart } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer,
  },
});
