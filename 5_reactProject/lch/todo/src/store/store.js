import { configureStore, createSlice } from "@reduxjs/toolkit";

let hamburgerButton = createSlice({
  name: "hamburgerButton",
  initialState: true,
  reducers: {
    toggleHamburger(state) {
      return !state;
    },
  },
});

export let { toggleHamburger } = hamburgerButton.action;

export default configureStore({
  reducer: {
    hamburgerButton: hamburgerButton.reducer,
  },
});
