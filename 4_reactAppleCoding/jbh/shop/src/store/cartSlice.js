import { createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
    name: "cart",
    initialState: [
        { id: 0, name: "White and Black", count: 2 },
        { id: 2, name: "Grey Yordan", count: 1 },
    ],
    reducers: {
        increaseCount(state, id) {
            let findProduct = state.find(function (x) {
                return x.id == id.payload;
            });

            findProduct.count += 1;
        },
    },
});

export let { increaseCount } = cart.actions;

export default cart;
