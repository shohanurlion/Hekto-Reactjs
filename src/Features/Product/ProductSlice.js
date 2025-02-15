import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
  name: "products",
  initialState: {
    cartitem: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
  },
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.cartitem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (findProduct !== -1) {
        state.cartitem[findProduct].qun += 1;
      } else {
        state.cartitem.push(action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartitem));
    },
    productremove:(state, action)=>{
      state.cartitem.splice(action.payload, 1)
      localStorage.setItem("cart", JSON.stringify(state.cartitem))
    },
    productIncrement:(state, action)=>{
      state.cartitem[action.payload].qun += 1
      localStorage.setItem("cart", JSON.stringify(state.cartitem))
  },
  productdecrement:(state, action)=>{
    if(state.cartitem[action.payload].qun > 1){
      state.cartitem[action.payload].qun -= 1
      localStorage.setItem("cart", JSON.stringify(state.cartitem))
    }

  },
  clearCart: (state) => {
    state.cartitem = [];
  },
  },
});

export const { addToCart, productremove, productIncrement, productdecrement, clearCart } = ProductSlice.actions;
export default ProductSlice.reducer; // এই লাইনে export default হচ্ছে reducer
