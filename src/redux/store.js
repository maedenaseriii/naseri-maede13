import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./feature/cart-slice";
import cart2Slice from "./feature/cart2-slice";
import uiSlice from "./feature/ui-slice";

const store = configureStore({
  reducer: { products: cartSlice,ui:uiSlice.reducer,cart:cart2Slice.reducer },
});

export default store;
