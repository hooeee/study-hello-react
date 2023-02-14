import { configureStore, createSlice } from "@reduxjs/toolkit";

const modalData = createSlice({
  name: "jdg",
  color: "#36454f",
  show: "list",
});

export default configureStore({
  reducer: {
    // modalData: modalData.reducer,
  },
});
