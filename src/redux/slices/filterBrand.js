import { createSlice } from '@reduxjs/toolkit';
const initialState={
    brand:''
}

const filterBrand=createSlice({
    name:'filterB',
    initialState,
    reducers:{
        setBrand(state, action){
            state.brand=action.payload;
        },
    },
});

export const {setBrand}=filterBrand.actions;
export default filterBrand.reducer;