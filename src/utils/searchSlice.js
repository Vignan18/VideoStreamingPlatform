import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchCache:{},
    searchQry:""
  },
  reducers: {
    cacheResults: (state, action) => {
      state.searchCache = Object.assign(state.searchCache,action.payload)
    },
    searchQueryfn:(state,action)=>{
      state.searchQry = action.payload;
    }
  },
});

export const { cacheResults,searchQueryfn } = searchSlice.actions;

export default searchSlice.reducer;
