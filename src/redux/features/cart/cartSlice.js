import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        state.cartItems.push(action.payload);
        alert("Item added to cart");
      } else {
        alert("Item already in cart");
      }
    },
  },
});
// export the actions
export const { addtToCart } = cartSlice.actions;
export default cartSlice.reducer;
