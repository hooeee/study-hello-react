import { configureStore, createSlice } from "@reduxjs/toolkit";

let stock = createSlice({
    name: "stock",
    initialState: [10, 11, 12],
});

let carts = createSlice({
    name: "cart",
    initialState: [
        { id: 0, name: "새우깡", count: 2 },
        { id: 1, name: "콜라", count: 2 },
    ],
    reducers: {
        update(state, action) {
            let idx = state.findIndex((a) => a.id == action.payload);
            state[idx].count++;
        },
        add(state, action) {
            const title = action.payload;
            const exitsIdx = state.findIndex((t) => t.name === title);
            if (exitsIdx != -1) {
                state[exitsIdx].count++;
            } else {
                let { id } = state[state.length - 1];
                const newId = id + 1;
                state.push({ id: newId, name: title, count: 0 });
            }
        },
    },
});

export const { update, add } = carts.actions;

export default configureStore({
    reducer: {
        stock: stock.reducer,
        carts: carts.reducer,
    },
});
