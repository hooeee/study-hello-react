import { configureStore, createSlice } from "@reduxjs/toolkit";

export let user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 },
  // 1. 함수 정의
  reducers: {
    changeName(state) {
      state.name = "bak";

      // inner.js가 새로운 객체를 만들어 주기 때문에 아래와 같이 쓸 필요가 없다.
      // return { name: "bak", age: 20 };
    },
    increase(state, action) {
      state.age += action.payload;
    },
  },
});

// 2. action으로 밖으로 노출
export let { changeName, increase } = user.actions;
