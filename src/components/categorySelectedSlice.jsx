import { createSlice } from "@reduxjs/toolkit";

export const categorySelectedSlice = createSlice({
  name: "categorySelected",
  initialState: {
    selectedCategory: "All Category",
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      const category = action.payload;
      state.selectedCategory = category;
    },
  },
});

export const { setSelectedCategory } = categorySelectedSlice.actions;

export default categorySelectedSlice.reducer;
