import { createSlice } from '@reduxjs/toolkit';



const initialState={
    price: 0
}

const filterPrice=createSlice({
    name:'filterP',
    initialState,
    reducers:{
        setPrice(state, action){
            state.price=action.payload;
        },
    },
});

export const {setPrice}=filterPrice.actions;
export default filterPrice.reducer;