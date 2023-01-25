import { createSlice, configureStore } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: true,
  reducers: {
    sidebarAction(state, action) {
      //console.log(action.payload);
      console.log(state);
      return action.payload;
    },
  },
});

export const { sidebarAction } = sidebarSlice.actions;

export default configureStore({
  reducer: { sidebar: sidebarSlice.reducer },
});
