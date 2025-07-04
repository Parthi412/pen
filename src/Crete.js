import { createSlice } from "@reduxjs/toolkit";

const storedProduct = localStorage.getItem("cartItem")
const initialState = {
  cartItem : storedProduct ? JSON.parse(storedProduct) : []
}
const product = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const newproduct = action.payload;
      const existing = state.cartItem.find((item) => item.id === newproduct.id);
      if (existing) {
        existing.quantity += newproduct.quantity;
      } else {
        state.cartItem.push({
          id:newproduct.id,
          tittle:newproduct.tittle,
          img:newproduct.img,
          quantity:1
        })
      }
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem))
    },

    updateCart:(state, action)=>{
      const{id,quantity}=action.payload;
      const itemToup=state.cartItem.find((item)=>item.id === id);
      if(itemToup){
      itemToup.quantity = quantity;
      }
      
    }
  }
});


export default product.reducer;
export const { addCart, delToCart,updateCart} = product.actions;
