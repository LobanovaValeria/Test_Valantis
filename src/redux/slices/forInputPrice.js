import { createSlice } from '@reduxjs/toolkit';



const initialState={
    inputPrice: ''
}

const forInputPrice=createSlice({
    name:'ForInputP',
    initialState,
    reducers:{
        setInputPrice(state, action){
            state.inputPrice=action.payload;
        },
    },
});

export const {setInputPrice}=forInputPrice.actions;
export default forInputPrice.reducer;