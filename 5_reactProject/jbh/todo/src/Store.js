import { configureStore, createSlice } from "@reduxjs/toolkit";
import project from "../src/store/modalSlice.js";

export default configureStore({
    reducer: {
        project: project.reducer,
    },
});
