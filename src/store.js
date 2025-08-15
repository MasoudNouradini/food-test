import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import userReducer from "./features/user/userSlice";
import searchReducer from "./features/search/headerInputSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    search: searchReducer
  }
});
export default store;
