import { createSlice } from '@reduxjs/toolkit';



const initialState={
    search:''
}

const filterSearch=createSlice({
    name:'filterS',
    initialState,
    reducers:{
        setSearch(state, action){
            state.search=action.payload;
        },
    },
});

export const {setSearch}=filterSearch.actions;
export default filterSearch.reducer;