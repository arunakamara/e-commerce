import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { title, image, price } = action.payload;
      const existingItem = state.items.find((item) => item.title === title);
      if (existingItem) {
        return;
      } else {
        state.items.push({ title, image, price, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const { title, price, image, quantity } = action.payload;
      state.items.pop({ title, price, image, quantity });
    },

    decreaseQuantity: (state, action) => {
      const { title } = action.payload;
      const itemToRemove = state.items.find((item) => item.title === title);
      if (itemToRemove.quantity === 1) {
        state.items = state.items.filter((item) => item.title !== title);
      }

      itemToRemove.quantity--;
    },

    increaseQuantity: (state, action) => {
      const { title } = action.payload;
      const itemToUpdate = state.items.find((item) => item.title === title);
      if (itemToUpdate) {
        itemToUpdate.quantity++;
      }
    },
  },
});

export const { addItem, removeItem, decreaseQuantity, increaseQuantity } =
  CartSlice.actions;

export default CartSlice.reducer;
