import { createSlice, configureStore } from "@reduxjs/toolkit";

const projectAddName = createSlice({
  name: "projectAddName",
  initialState: "",
  reducers: {
    inputName(state, action) {
      console.log(action.payload);
      return action.payload;
    },
  },
});

const items = createSlice({
  name: "items",
  initialState: { value: "", label: "" },
  reducers: {
    changeColor(state, action) {
      console.log(action.payload);
      return action.payload;
    },
  },
});

const checkedFlag = createSlice({
  name: "checkedFlag",
  initialState: { flag1: 1, flag2: 0 },
  reducers: {
    changeCheck(state) {
      if (state.flag1 == 0) return { flag1: 1, flag2: 0 };
      else return { flag1: 0, flag2: 1 };
    },
  },
});

export const { changeColor } = items.actions;
export const { inputName } = projectAddName.actions;
export const { changeCheck } = checkedFlag.actions;

export default configureStore({
  reducer: {
    items: items.reducer,
    projectAddName: projectAddName.reducer,
    checkedFlag: checkedFlag.reducer,
  },
});
