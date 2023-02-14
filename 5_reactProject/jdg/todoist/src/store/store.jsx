import { configureStore, createSlice } from "@reduxjs/toolkit";

const modalData = createSlice({
  name: "data1",
  initialState: { name: "jdg", color: "#FF0000", show: "list" },
});

export default configureStore({
  reducer: {
    modalData: modalData.reducer,
  },
});
