import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./module/userSlice.js";

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

let shoppingItems = createSlice({
  name: "shoppingItems",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      console.log(state);
      state.map(function (obj, i) {
        console.log(action.payload.id);
        if (obj.id === action.payload.id) {
          obj.count += 1;
        }
      });
    },
    minusCount(state, action) {
      const findDataIndex = state.findIndex((a) => {
        return a.id == action.payload.id;
      });
      state[findDataIndex].count--;
      if (state[findDataIndex].count === 0) {
        state.splice(findDataIndex, 1);
      }
    },
    addItem(state, action) {
      const findDataIndex = state.findIndex((a) => {
        return a.id == action.payload.id;
      });
      if (findDataIndex == -1) {
        const item = new Object();
        item.id = action.payload.id;
        item.name = action.payload.title;
        item.count = 1;
        state.push(item);
        return state;
      } else {
        state[findDataIndex].count++;
      }
    },
  },
});
//2
export let { addCount, minusCount, addItem } = shoppingItems.actions; //변경 함수 남음

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    shoppingItems: shoppingItems.reducer,
  },
});
