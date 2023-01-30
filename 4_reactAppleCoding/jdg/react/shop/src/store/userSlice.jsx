import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    name: "kim",
    age: 20,
  },
  reducers: {
    changeName(state) {
      // return 'john' + state;
      state.name = "park";
    },
    increase(state, action) {
      state.age += action.payload;
    },
  },
});

// state 변경 함수들 남음
export const { changeName, increase } = user.actions;

export default user;
