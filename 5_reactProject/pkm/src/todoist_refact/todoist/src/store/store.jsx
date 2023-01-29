import { configureStore, createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
  name: "todos",
  initialState: [{ id: 0, isCheck: true, title: "", content: "" }],
  reducers: {
    changeCheck() {
      return [{ id: 1, isCheck: true, title: "", content: "" }];
    },
  },
});

const modalShow = createSlice({
  name: "modalShow",
  initialState: false,
  reducers: {
    setModalShow(state) {
      return !state;
    },
  },
});

const checkClick = createSlice({
  name: "checkClick",
  initialState: true,
  reducers: {
    setCheckClick(state) {
      return !state;
    },
  },
});

const sideBarClick = createSlice({
  name: "sideBarClick",
  initialState: true,
  reducers: {
    setSideBarClick(state) {
      console.log(state);
      return !state;
    },
  },
});

export const { changeCheck } = todos.actions;
export const { setModalShow } = modalShow.actions;
export const { setCheckClick } = checkClick.actions;
export const { setSideBarClick } = sideBarClick.actions;

export default configureStore({
  reducer: {
    todos: todos.reducer,
    modalShow: modalShow.reducer,
    checkClick: checkClick.reducer,
    sideBarClick: sideBarClick.reducer,
  },
});
