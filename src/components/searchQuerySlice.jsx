import { createSlice } from "@reduxjs/toolkit";

export const searchQuerySlice = createSlice({
  name: "searchedQuery",
  initialState: {
    queries: ""
  },
  reducers: {
    setSearchQuery: (state, action) => {
        const query = action.payload;
        state.queries = query;
        console.log(query)
    }
  },
});

export const { setSearchQuery } = searchQuerySlice.actions;
export default searchQuerySlice.reducer;