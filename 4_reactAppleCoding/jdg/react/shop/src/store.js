import { configureStore, createSlice } from '@reduxjs/toolkit'

const user = createSlice({
  name: 'user',
  initialState: 'kim',
  reducers: {
    changeName(state) {
      return 'john' + state;
    }
  }
})

// state 변경 함수들 남음
export const { changeName } = user.actions

const cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ]
})



export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer
  }
}) 