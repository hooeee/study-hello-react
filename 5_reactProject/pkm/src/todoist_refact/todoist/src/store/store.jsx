import { configureStore, createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
  name: "todos",
  initialState: [{ id: 0, isCheck: true, title: "", content: "" }],
  reducers: {
    changeCheck(state) {
      return [{ id: 0, isCheck: true, title: "", content: "" }];
    },
  },
});

export const { changeCheck } = todos.actions;

export default configureStore({
  reducer: {
    toods: todos.reducer,
  },
});
