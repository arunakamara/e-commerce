import { createSlice } from "@reduxjs/toolkit";

export const categorySelectedSlice = createSlice({
  name: "categorySelected",
  initialState: {
    selectedCategory: "All Category",
    showCategory: false
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      const category = action.payload;
      state.selectedCategory = category;
    },
    setShowCategory: (state, action) => {
      const bool = action.payload;
      state.showCategory = bool;
    }
  },
});

export const { setSelectedCategory, setShowCategory } = categorySelectedSlice.actions;

export default categorySelectedSlice.reducer;
