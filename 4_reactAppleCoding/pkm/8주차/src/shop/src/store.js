import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'



let stock =createSlice({
    name: 'stock',
    initialState: [10,11,12]
})

let shoppingItems = createSlice({
    name: 'shoppingItems',
    initialState:[
        {id : 0, name : 'White and Black', count : 2}
     ],
      reducers:{
        addCount(state){
            const newState = state.shoppingItems;
            state = newState;
        }
      }
})

//2
export let {addCount} = user.actions //변경 함수 남음




export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer,
    shoppingItems: shoppingItems.reducer
  }
})