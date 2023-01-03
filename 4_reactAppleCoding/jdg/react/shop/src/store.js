import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'

const cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      const index = state.findIndex((a) => {
        return a.id === action.payload
      });
      state[index].count++;
    },
    addItem(state, action) {
      const id = action.payload.id;

      if (state.some(x => x.id === id)) {
        const index = state.findIndex(a => a.id === action.payload.id);
        state[index].count++;
      }
      else {
        state.push(action.payload);
      }
    }
  }
})

export const { addCount, addItem } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer
  }
}) 