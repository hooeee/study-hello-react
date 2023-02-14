import { configureStore, createSlice } from "@reduxjs/toolkit";

const modalData = createSlice({
  name: "data1",
  initialState: { name: "jdg", color: "#36454f", show: "list" },
});

export default configureStore({
  reducer: {
    modalData: modalData.reducer,
  },
});
