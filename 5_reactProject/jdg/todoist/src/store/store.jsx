import { configureStore, createSlice } from "@reduxjs/toolkit";

const modalData = createSlice({
  name: "modalData",
  initialState: [{ name: "jdg", color: "#FF0000", show: "list" }],
  reducers: {
    addData(state, action) {
      const name = action.payload.name;

      if (state.some((x) => x.name != name)) {
        state.push(action.payload);
      }
    },
    findData(state, action) {
      const name = action.payload;
    },
  },
});

export const { addData, findData } = modalData.actions;

export default configureStore({
  reducer: {
    modalData: modalData.reducer,
  },
});
