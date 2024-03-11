import { createSlice } from '@reduxjs/toolkit';



const initialState={
    inputSearch: ''
}

const forInputSearch=createSlice({
    name:'ForInputS',
    initialState,
    reducers:{
        setInputSearch(state, action){
            state.inputSearch=action.payload;
        },
    },
});

export const {setInputSearch}=forInputSearch.actions;
export default forInputSearch.reducer;