import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem, CartState } from "../../../types";

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      if (!existingItem) {
        state.cartItems.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id,
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
