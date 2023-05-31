import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";


const store = configureStore({
    reducer :{
        cart : cartReducer,
        product : productReducer
    }
})

export default store ;






// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//     name : 'cart',
//     initialState : [],
//     reducers : {
//         add(state, action){
//             state.push(action.payload);
//         },
//         remove(state, action){
//             state = state.filter((item)=> item.id !== action.payload);
//         }
//     }
// }) ;

// export const { add , remove } = cartSlice.actions;
// export default cartSlice.reducer;