import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [], totalQuantity: 0, totalAmount: 0 };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      const existing = state.items.find(i => i.id === payload.id);
      if (!existing) {
        state.items.push({ ...payload, quantity: 1 });
        state.totalQuantity += 1;
        state.totalAmount += payload.price;
      }
    },
    incrementQuantity(state, { payload: id }) {
      const item = state.items.find(i => i.id === id);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalAmount += item.price;
      }
    },
    decrementQuantity(state, { payload: id }) {
      const item = state.items.find(i => i.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalAmount -= item.price;
      }
    },
    removeFromCart(state, { payload: id }) {
      const item = state.items.find(i => i.id === id);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalAmount -= item.price * item.quantity;
        state.items = state.items.filter(i => i.id !== id);
      }
    }
  }
});

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
