import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "park", age: 20 },
  reducers: {
    changeName(state) {
      //여기 state 기존 state park임 //1
      // return {name:'kim', age:25}
      state.name = "kim";
    },
    changeAge(state, action) {
      state.age += action.payload;
    },
  },
});

export let { changeName, changeAge } = user.actions; //변경 함수 남음

export default user;
