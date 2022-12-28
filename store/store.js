import { configureStore } from "@reduxjs/toolkit";
import cartItemSlice from "./cart-items";

const store = configureStore({
    reducer: {
        cartItems: cartItemSlice.reducer
    }
})

export default store;